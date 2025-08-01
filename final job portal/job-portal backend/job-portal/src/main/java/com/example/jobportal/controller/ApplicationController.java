package com.example.jobportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.jobportal.model.Application;
import com.example.jobportal.service.ApplicationService;

import java.util.List;

@RestController
@RequestMapping("/application")
@CrossOrigin(origins = "*")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/apply")
    public Application apply(@RequestBody Application application) {
        return applicationService.apply(application);
    }

    @GetMapping("/all")
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        applicationService.deleteApplication(id);
    }
}
