package com.example.jobportal.controller;

import com.example.jobportal.model.Job;
import com.example.jobportal.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job")
@CrossOrigin(origins = "*") // allow frontend access
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping(value = "/getAll")
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @PostMapping(value = "/create")
    public Job createJob(@RequestBody Job job) {
        return jobService.addJob(job);
    }
    
    @PutMapping(value = "/update/{id}")
    public Job updateJob(@PathVariable Long id, @RequestBody Job job) {
        return jobService.updateJob(id, job);
    }

    
    @DeleteMapping("/delete/{id}")
    public void deleteJob(@PathVariable Long id) {
        jobService.deleteJob(id);
    }
}
