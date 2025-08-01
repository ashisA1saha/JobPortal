package com.example.jobportal.service;

import com.example.jobportal.model.Job;
import com.example.jobportal.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    public Job addJob(Job job) {
        return jobRepository.save(job);
    }
    
    public Job updateJob(Long id, Job updatedJob) {
        return jobRepository.findById(id)
            .map(existingJob -> {
                existingJob.setTitle(updatedJob.getTitle());
                existingJob.setCompany(updatedJob.getCompany());
                existingJob.setLocation(updatedJob.getLocation());
                existingJob.setDescription(updatedJob.getDescription());
                existingJob.setDescription(updatedJob.getType());
                return jobRepository.save(existingJob);
            })
            .orElseThrow(() -> new IllegalArgumentException("Job ID does not exist."));
    }

    public void deleteJob(Long id) {
        if (!jobRepository.existsById(id)) {
            throw new IllegalArgumentException("Job ID does not exist.");
        }
        jobRepository.deleteById(id);
    }
}
