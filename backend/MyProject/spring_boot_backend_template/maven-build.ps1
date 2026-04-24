$ErrorActionPreference = "Stop"

# Set Maven Home to avoid path issues with spaces
$MAVEN_VERSION = "3.9.9"
$MAVEN_HOME = "$env:USERPROFILE\.m2\wrapper\dists\apache-maven-$MAVEN_VERSION"

# Check if Maven is already downloaded
$mavenDirs = Get-ChildItem -Path "$env:USERPROFILE\.m2\wrapper\dists" -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -like "apache-maven-$MAVEN_VERSION*" }

if ($mavenDirs) {
    # Find the actual Maven installation
    $mavenBin = Get-ChildItem -Path $mavenDirs[0].FullName -Recurse -Filter "mvn.cmd" -ErrorAction SilentlyContinue | Select-Object -First 1
    
    if ($mavenBin) {
        Write-Host "Found Maven at: $($mavenBin.DirectoryName)" -ForegroundColor Green
        $env:MAVEN_HOME = $mavenBin.DirectoryName -replace '\\bin$',''
        $env:PATH = "$($mavenBin.DirectoryName);$env:PATH"
        
        # Run Maven command
        $command = $args -join " "
        Write-Host "Running: mvn $command" -ForegroundColor Cyan
        & "$($mavenBin.FullName)" $args
        exit $LASTEXITCODE
    }
}

# If Maven not found, download it
Write-Host "Maven not found. Downloading Maven $MAVEN_VERSION..." -ForegroundColor Yellow

$downloadUrl = "https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/$MAVEN_VERSION/apache-maven-$MAVEN_VERSION-bin.zip"
$tempDir = New-TemporaryFile | ForEach-Object { Remove-Item $_; New-Item -ItemType Directory -Path "$_.dir" }
$zipFile = Join-Path $tempDir "maven.zip"

try {
    # Download Maven
    Write-Host "Downloading from: $downloadUrl" -ForegroundColor Cyan
    $webClient = New-Object System.Net.WebClient
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    $webClient.DownloadFile($downloadUrl, $zipFile)
    
    # Extract Maven
    Write-Host "Extracting Maven..." -ForegroundColor Cyan
    $extractDir = Join-Path $tempDir "extracted"
    Expand-Archive -Path $zipFile -DestinationPath $extractDir
    
    # Create wrapper dists directory
    $distsDir = "$env:USERPROFILE\.m2\wrapper\dists"
    New-Item -ItemType Directory -Path $distsDir -Force | Out-Null
    
    # Generate hash for directory name
    $hash = [System.Security.Cryptography.MD5]::Create().ComputeHash([byte[]][char[]]$downloadUrl)
    $hashString = ($hash | ForEach-Object { $_.ToString("x2") }) -join ''
    
    # Move Maven to final location
    $finalDir = Join-Path $distsDir "apache-maven-$MAVEN_VERSION\$hashString"
    New-Item -ItemType Directory -Path (Split-Path $finalDir) -Force | Out-Null
    Move-Item -Path (Join-Path $extractDir "apache-maven-$MAVEN_VERSION") -Destination $finalDir -Force
    
    Write-Host "Maven installed successfully at: $finalDir" -ForegroundColor Green
    
    # Set environment and run command
    $env:MAVEN_HOME = $finalDir
    $env:PATH = "$finalDir\bin;$env:PATH"
    
    $command = $args -join " "
    Write-Host "Running: mvn $command" -ForegroundColor Cyan
    & "$finalDir\bin\mvn.cmd" $args
    exit $LASTEXITCODE
}
finally {
    # Cleanup
    if (Test-Path $tempDir) {
        Remove-Item $tempDir -Recurse -Force -ErrorAction SilentlyContinue
    }
}
