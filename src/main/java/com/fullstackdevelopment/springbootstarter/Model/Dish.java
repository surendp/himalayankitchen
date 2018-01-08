package com.fullstackdevelopment.springbootstarter.Model;


public class Dish {	

	private String name;
	private String price;
	private String catagory;
	private String description;
	
	public Dish() {
		
	}
	
	public Dish(String name, String price, String catagory, String description) {
		super();
		this.name = name;
		this.price = price;
		this.catagory = catagory;
		this.description = description;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getCatagory() {
		return catagory;
	}

	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	public String toString() {
		return name + " \n" + price + " \n" + catagory + "\n" + description;
	}
}
