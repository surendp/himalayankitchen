package com.fullstackdevelopment.springbootstarter.database;

//import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.fullstackdevelopment.springbootstarter.Model.Dish;

public class GetFoodList {
	
	private String fileName;
	private List<Dish> foodList;

	
	public GetFoodList(String fileName) {
		this.fileName = fileName;
		this.foodList = null;
	}
	
	
	public List<Dish> getFoodList() throws Exception{
		Scanner reader = (new OpenFile(this.fileName)).getFileScanner();
		
		if(reader != null) {
			GetContentFromFile getContentFromFile = new GetContentFromFile(reader);
			this.foodList = getContentFromFile.getFoodList();
		}
		
		return this.foodList;
	}
}
