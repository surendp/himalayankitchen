package com.fullstackdevelopment.springbootstarter.lunch;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackdevelopment.springbootstarter.Model.Dish;
import com.fullstackdevelopment.springbootstarter.database.GetFoodList;

/**
 * This class that returns the list of lunch items 
 * */

@RestController
public class Lunch {
	
	@RequestMapping("/lunch")
	public List<Dish> getLunchMenu() throws Exception{
		GetFoodList list = new GetFoodList("textfiles/lunch.txt");
		return list.getFoodList();
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
