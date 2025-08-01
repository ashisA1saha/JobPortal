package com.example.jobportal.model;

import jakarta.persistence.*;

@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String resume;
    private String coverLetter;

    private Long jobId; // Referencing the applied job

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getResume() { return resume; }
    public void setResume(String resume) { this.resume = resume; }

    public String getCoverLetter() { return coverLetter; }
    public void setCoverLetter(String coverLetter) { this.coverLetter = coverLetter; }

    public Long getJobId() { return jobId; }
    public void setJobId(Long jobId) { this.jobId = jobId; }
    
	public Application(Long id, String name, String email, String resume, String coverLetter, Long jobId) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.resume = resume;
		this.coverLetter = coverLetter;
		this.jobId = jobId;
	}
	public Application() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Application [id=" + id + ", name=" + name + ", email=" + email + ", resume=" + resume + ", coverLetter="
				+ coverLetter + ", jobId=" + jobId + "]";
	}
    
    
}
