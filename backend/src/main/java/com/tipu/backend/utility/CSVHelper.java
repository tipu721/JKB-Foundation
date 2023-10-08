package com.tipu.backend.utility;
import com.tipu.backend.model.Employee;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.web.multipart.MultipartFile;


public class CSVHelper {

    public static String TYPE = "text/csv";
    static String[] HEADERs = {};
    public static boolean hasCSVFormat(MultipartFile multipartFile){
        return TYPE.equals(multipartFile.getContentType())
                || multipartFile.getContentType().equals("application/vnd.ms-excel");
    }

    public static List<Employee>csvToEmployees(InputStream inputStream) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));
        CSVParser csvParser = new CSVParser(bufferedReader,
                CSVFormat.DEFAULT.withFirstRecordAsHeader()
                        .withIgnoreHeaderCase().withTrim());

        List<Employee>employeeList = new ArrayList<>();
        Iterable<CSVRecord>csvRecords = csvParser.getRecords();
        for(CSVRecord csvRecord : csvRecords){
            Employee employee = new Employee();
            employee.setFirstName(csvRecord.get("First_Name"));
            employee.setLastName(csvRecord.get("Last_Name"));
            employee.setEmail(csvRecord.get("Email"));
            employeeList.add(employee);
        }

        return employeeList;


    }


}
