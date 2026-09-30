package info5153.case_study.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import info5153.case_study.server.vendor.Vendor;
import info5153.case_study.server.vendor.VendorRepository;


@CrossOrigin 
@RestController 
public class VendorController {

    @Autowired 
    private VendorRepository vendorRepository;

    @GetMapping("/api/vendors")
    public ResponseEntity<Iterable<Vendor>> findAll() {
        Iterable<Vendor> vendors = vendorRepository.findAll();
        return new ResponseEntity<Iterable<Vendor>>(vendors, HttpStatus.OK);
    }
}
