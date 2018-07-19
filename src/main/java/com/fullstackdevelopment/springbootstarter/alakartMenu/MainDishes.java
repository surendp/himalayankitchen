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
	
	@RequestMapping("/api/alakartmenu/vegetariandishes")
	public List<Dish> getVegetarianFoodList(){
		return GetFoodList.getFoodList("./textfiles/alakartmenu/VegetarianMenu.txt");		
	}
	
	@RequestMapping("/api/alakartmenu/chickendishes")
	public List<Dish> getChickenFoodList(){
		return GetFoodList.getFoodList("./textfiles/alakartmenu/ChickenMenu.txt");		
	}
	
	@RequestMapping("/api/alakartmenu/lambdishes")
	public List<Dish> getLambFoodList(){
		return GetFoodList.getFoodList("./textfiles/alakartmenu/LambMenu.txt");		
	}
	
	@RequestMapping("/api/alakartmenu/seadishes")
	public List<Dish> getSeaFoodList(){
		return GetFoodList.getFoodList("./textfiles/alakartmenu/SeaMenu.txt");		
	}
	
	@RequestMapping("/api/alakartmenu/duckdishes")
	public List<Dish> getDuckFoodList(){
		return GetFoodList.getFoodList("./textfiles/alakartmenu/DuckMenu.txt");		
	}
	
	@RequestMapping("/api/alakartmenu/tandooridishes")
	public List<Dish> getTandooriFoodList(){
		return GetFoodList.getFoodList("./textfiles/alakartmenu/TandooriMenu.txt");		
	}
	
	@RequestMapping("/api/alakartmenu/thalidishes")
	public List<Dish> getThaliFoodList(){
		return GetFoodList.getFoodList("./textfiles/alakartmenu/ThaliMenu.txt");		
	}
	
	
	
}
