package com.example.jobportal.model;

import jakarta.persistence.*;

@Entity
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String company;
    private String location;
    private String description;
    private String type;
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Job(Long id, String title, String company, String location, String description, String type) {
		super();
		this.id = id;
		this.title = title;
		this.company = company;
		this.location = location;
		this.description = description;
		this.type = type;
	}
	public Job() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Job [id=" + id + ", title=" + title + ", company=" + company + ", location=" + location
				+ ", description=" + description + ", type=" + type + "]";
	}
	

    
}
