package com.fullstackdevelopment.springbootstarter.database;

//import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.fullstackdevelopment.springbootstarter.Model.Dish;

public class GetFoodList {
	
	private static List<Dish> foodList;

	public static List<Dish> getFoodList(String fileName){
		Scanner reader = (new OpenFile(fileName)).getFileScanner();
		
		if(reader != null) {
			GetContentFromFile getContentFromFile = new GetContentFromFile(reader);
			foodList = getContentFromFile.getFoodList();
		}
		
		reader.close();
		
		return foodList;
	}
}
