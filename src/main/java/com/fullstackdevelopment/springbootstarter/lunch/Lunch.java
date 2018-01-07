package com.fullstackdevelopment.springbootstarter.lunch;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * This class that returns the list of lunch items 
 * */

@RestController
public class Lunch {
	
	@RequestMapping("/lunch")
	public String getLunchMenu() {
		return "This is the lunch menu for all the week days.";
	}
	
	@RequestMapping("/lunch/monday")
	public String getLunchMenuForMonday() {
		return "This is the lunch menu for Monday";
	}
	
	
	@RequestMapping("/lunch/tuesday")
	public String getLunchMenuForTuesday() {
		return "This is the lunch menu for Tuesday";
	}
	
	@RequestMapping("/lunch/wednesday")
	public String getLunchMenuForWednesday() {
		return "This is the lunch menu for Wednesday";
	}
	
	@RequestMapping("/lunch/thrusday")
	public String getLunchMenuForThrusday() {
		return "This is the lunch menu for Thrusday :)";
	}
	
	@RequestMapping("/lunch/friday")
	public String getLunchMenuForFriday() {
		return "This is the lunch menu for Friday :)";
	}
}
