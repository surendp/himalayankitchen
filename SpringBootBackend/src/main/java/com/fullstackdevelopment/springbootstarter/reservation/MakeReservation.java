package com.fullstackdevelopment.springbootstarter.reservation;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/makeReservation/")
public class MakeReservation{	

	@CrossOrigin(origins = "*")
	@RequestMapping(method = RequestMethod.POST)
	public String makeReservation(@RequestBody String message) {
		System.out.println(message);	
		return "Done!!";
	}
}