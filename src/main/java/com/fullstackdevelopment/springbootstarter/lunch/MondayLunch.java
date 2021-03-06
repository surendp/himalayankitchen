package com.fullstackdevelopment.springbootstarter.lunch;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackdevelopment.springbootstarter.Model.Dish;
import com.fullstackdevelopment.springbootstarter.database.GetFoodList;

@RestController
public class MondayLunch implements WeekdayLunch{

	@Override
	@CrossOrigin(origins = "*")
	@RequestMapping("/api/lunch/monday")
	public List<Dish> getLunchList() {
		// TODO Auto-generated method stub
		return GetFoodList.getFoodList("./textfiles/lunch/MondayLunch.txt");
	}


}
