package com.fullstackdevelopment.springbootstarter.database;

import java.util.ArrayList;

import com.fullstackdevelopment.springbootstarter.Model.Dish;

public class CreateDish {
	
	private Dish dish;
	private ArrayList<String> content;
	
	public CreateDish(ArrayList<String> content) {
		this.content = content;
		this.dish = null;
	}
	
	public Dish getDish() {
		
		this.createDish();
		return this.dish;
		
	}
	
	private void createDish() {
		this.dish = new Dish(this.content.get(0),
							this.content.get(1),
							this.content.get(2),
							this.content.get(3),
							this.content.get(4)
							);
	}
}
