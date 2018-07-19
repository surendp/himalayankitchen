package com.fullstackdevelopment.springbootstarter.reservation;

import javax.mail.MessagingException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MakeReservation{	
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/api/makereservation/", method = RequestMethod.POST)
	public String makeReservation(@RequestBody String message) {
		
		// assigning sender and receiver email addresses
		String from = "ravintola.himalayankitchen@gmail.com";
		String to  = "surendra.pandey2@metropolia.fi";
		boolean messageSent = false;
		
		if(!message.isEmpty()) {
			ReservationThroughEmail makeReservation = new ReservationThroughEmail(message, to, from);
			try {
				messageSent = makeReservation.sendMail();
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println((messageSent) ?  "Message Successfully sent!!" : "Message Sending failed!!");
		return (messageSent) ?  "Message Successfully sent!!" : "Message Sending failed!!";
	}
}