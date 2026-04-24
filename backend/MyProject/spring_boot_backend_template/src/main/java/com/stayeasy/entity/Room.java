package com.stayeasy.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Room")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Room {
			@Id
			@GeneratedValue(strategy=GenerationType.IDENTITY)
			private Long room_id;
			private String roomnumber;
			
			 @ManyToOne(fetch = FetchType.LAZY, optional = false)
			    @JoinColumn(name = "hostel_id", nullable = false)
			    private Hostel hostel;
			 
			 private int sharing;
		
			 @Column(name="Price",nullable=false)
			 private double price;
			
			 @Column(name="Available",nullable=false,columnDefinition = "TINYINT(1)")
			 private boolean available;
		
			 @ManyToMany
			 @JoinTable(
			    name = "room_users",
			    joinColumns = @JoinColumn(name = "room_id"),
			    inverseJoinColumns = @JoinColumn(name = "user_id")
			 )
			 private List<User> user;

			public Long getRoom_id() {
				return room_id;
			}

			public void setRoom_id(Long room_id) {
				this.room_id = room_id;
			}

			public String getRoomnumber() {
				return roomnumber;
			}

			public void setRoomnumber(String roomnumber) {
				this.roomnumber = roomnumber;
			}

			public Hostel getHostel() {
				return hostel;
			}

			public void setHostel(Hostel hostel) {
				this.hostel = hostel;
			}

			public int getSharing() {
				return sharing;
			}

			public void setSharing(int sharing) {
				this.sharing = sharing;
			}

			public double getPrice() {
				return price;
			}

			public void setPrice(double price) {
				this.price = price;
			}

			public boolean isAvailable() {
				return available;
			}

			public void setAvailable(boolean available) {
				this.available = available;
			}

			public List<User> getUser() {
				return user;
			}

			public void setUser(List<User> user) {
				this.user = user;
			}
			 
			 
		


}
