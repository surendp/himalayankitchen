package com.fullstackdevelopment.springbootstarter.Model;


public class Dish{	

	private String name;
	private String price;
	private String catagory;
	private String finnishDescription;
	private String englishDescription;
	
	public Dish() {
		
	}
	
	public Dish(String name, String price, String catagory, String finnishDescription, String englishDescription) {
		super();
		this.name = name;
		this.price = price;
		this.catagory = catagory;
		this.finnishDescription = finnishDescription;
		this.englishDescription = englishDescription;
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

	public String getFinnishDescription() {
		return this.finnishDescription;
	}

	public void setEnglishDescription(String englishDescription) {
		this.englishDescription = englishDescription;
	}
	

	public String getEnglishDescription() {
		return this.englishDescription;
	}

	public void setFinnishDescription(String finnishDescription) {
		this.finnishDescription = finnishDescription;
	}

	
	public String toString() {
		return name + " \n" + price + " \n" + catagory + "\n" + this.englishDescription;
	}
}
