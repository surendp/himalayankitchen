package com.fullstackdevelopment.springbootstarter.database;

import java.io.File;
import java.util.Scanner;

//This class opens the given file name 
public class OpenFile {
	
	private String fileName;
	private Scanner reader;
	
	public OpenFile(String filename) {
		this.fileName = filename;
		this.reader = null;
	}
	
	// Create the file handler
	private void openFile() throws Exception{
		if(!this.fileName.isEmpty() || this.fileName != null) {
			reader = new Scanner(new File(this.fileName));
		}
	}
	
	// return the file handler
	public Scanner getFileScanner(){
		// open file
		
		try {
			this.openFile();
		}
		catch(Exception e) {
			System.out.print(e.getMessage());
			return null;
		}
		
		
		return this.reader;
	}
	
}
