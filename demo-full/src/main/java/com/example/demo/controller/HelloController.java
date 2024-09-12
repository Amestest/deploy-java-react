package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	@GetMapping("/api/hello")
	public String isayHello() {
		return "안녕하세요. 스프링부트입니다.";
	}
}