package com.fullstackdevelopment.springbootstarter.alakartMenu;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackdevelopment.springbootstarter.Model.Dish;
import com.fullstackdevelopment.springbootstarter.database.GetFoodList;

@RestController
public class Drink implements Menu{

	@Override
	@RequestMapping("/api/alakartmenu/drinks")
	@CrossOrigin(origins="*")
	public List<Dish> getDishList() {
		// TODO Auto-generated method stub
		return GetFoodList.getFoodList("./textfiles/alakartmenu/Drink.txt");
	}

}
