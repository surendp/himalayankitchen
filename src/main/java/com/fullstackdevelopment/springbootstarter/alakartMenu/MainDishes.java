package com.fullstackdevelopment.springbootstarter.alakartMenu;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackdevelopment.springbootstarter.Model.Dish;
import com.fullstackdevelopment.springbootstarter.database.GetFoodList;

@RestController
@CrossOrigin(origins="*")
public class MainDishes {
	
	@RequestMapping("/alakartMenu/vegetarian")
	public List<Dish> getVegetarianFoodList(){
		return GetFoodList.getFoodList("textFiles/alakartMenu/VegetarianMenu.txt");		
	}
	
	@RequestMapping("/alakartMenu/chicken")
	public List<Dish> getChickenFoodList(){
		return GetFoodList.getFoodList("textFiles/alakartMenu/ChickenMenu.txt");		
	}
	
	@RequestMapping("/alakartMenu/lamb")
	public List<Dish> getLambFoodList(){
		return GetFoodList.getFoodList("textFiles/alakartMenu/LambMenu.txt");		
	}
	
	@RequestMapping("/alakartMenu/sea")
	public List<Dish> getSeaFoodList(){
		return GetFoodList.getFoodList("textFiles/alakartMenu/SeaMenu.txt");		
	}
	
	@RequestMapping("/alakartMenu/duck")
	public List<Dish> getDuckFoodList(){
		return GetFoodList.getFoodList("textFiles/alakartMenu/DuckMenu.txt");		
	}
	
	@RequestMapping("/alakartMenu/tandoori")
	public List<Dish> getTandooriFoodList(){
		return GetFoodList.getFoodList("textFiles/alakartMenu/TandooriMenu.txt");		
	}
	
	@RequestMapping("/alakartMenu/thali")
	public List<Dish> getThaliFoodList(){
		return GetFoodList.getFoodList("textFiles/alakartMenu/ThaliMenu.txt");		
	}
	
	
	
}
