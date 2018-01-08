package com.fullstackdevelopment.springbootstarter.database;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.fullstackdevelopment.springbootstarter.Model.Dish;

public class GetContentFromFile {
	
	private Scanner reader;
	private List<Dish> list;
	
	public GetContentFromFile(Scanner reader) {
		this.reader = reader;
		this.list = new ArrayList<Dish>();
	}
	
	private void getContent() {
		
		ArrayList<String> content = new ArrayList<String>();
		String text;
		
		CreateDish createDish;
		
		while(reader.hasNextLine()) {
			text = reader.nextLine();
			
			if(text.equals("*")) {
				createDish = new CreateDish(content);
				list.add(createDish.getDish());
				content.clear();
			}
			else if(text.equals("#")) {
				
			}
			else {
				content.add(text);
			}
		}
	}
	
	public List<Dish> getFoodList(){
		this.getContent();
		return this.list;
	}
}
