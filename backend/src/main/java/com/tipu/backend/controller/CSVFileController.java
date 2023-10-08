package com.tipu.backend.controller;


import com.tipu.backend.service.CSVFileService;
import com.tipu.backend.utility.CSVHelper;
import org.apache.commons.csv.CSVFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin("http://localhost:8080")
@Controller
public class CSVFileController {

    @Autowired
    CSVFileService csvFileService;

    @PostMapping("/CSVupload")
    public String uploadCSV(@RequestParam MultipartFile multipartFile){
        String message = "";
        if(CSVHelper.hasCSVFormat(multipartFile)){
            try {
                csvFileService.save(multipartFile);
                message = "Uploaded the file successfully: " + multipartFile.getOriginalFilename();

            }
            catch (Exception e) {
                e.printStackTrace();
            }
        }
        return message;
    }

}
