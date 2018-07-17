package com.fullstackdevelopment.springbootstarter.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserInterface {

	@RequestMapping("/")
	public String homePage() {
		System.out.println("called!!");
		return "index";
	}

	@RequestMapping("/lunch")
	public String lunchPage() {
		System.out.println("called!!");
		return "index";
	}

	@RequestMapping("/menu")
	public String menuPage() {
		System.out.println("called!!");
		return "index";
	}

	@RequestMapping("/reservation")
	public String reservationPage() {
		System.out.println("called!!");
		return "index";
	}
}
