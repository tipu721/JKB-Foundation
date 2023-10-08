package com.tipu.backend.controller;

import com.tipu.backend.dao.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.lang.reflect.Array;
import java.util.Arrays;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FileController {



    @PostMapping("/upload")
    String uploadFile(@RequestParam MultipartFile file){


       // int a = 10/0;
        String filePath = System.getProperty("user.dir") + "/Uploads" + File.separator + file.getOriginalFilename();
        String fileUploadStatus;

        try{
            FileOutputStream fout = new FileOutputStream(filePath);
            fout.write(file.getBytes());
            fileUploadStatus = "Successfully Uploaded";
        }
        catch (Exception e){
            e.printStackTrace();
            fileUploadStatus = "Erro in Uploading file: "+ e;
        }
        return fileUploadStatus;
    }
    @GetMapping("/getFiles")
    String[] getFiles(){
        String folderPath = System.getProperty("user.dir") + "/Uploads";
        File directory = new File(folderPath);

        String[] filenames = directory.list();
        return  filenames;
    }

    @GetMapping("/download/{fileName}")
    ResponseEntity downloadFile(@PathVariable String fileName) throws FileNotFoundException {

        String fileUploadPath = System.getProperty("user.dir") + "/Uploads";
        String[] fileNames = this.getFiles();
        boolean exist = Arrays.asList(fileNames).contains(fileName);
        if(!exist){
            return new ResponseEntity("File Not Found", HttpStatus.NOT_FOUND);
        }
        String filePath = fileUploadPath+File.separator+fileName;
        File file = new File(filePath);

        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        HttpHeaders headers = new HttpHeaders();

        String contentType = "application/octet-stream";
        String headerValue = "attachment; fileName=\"" + resource.getFilename() + "\"";

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, headerValue)
                .body(resource);



    }


}
