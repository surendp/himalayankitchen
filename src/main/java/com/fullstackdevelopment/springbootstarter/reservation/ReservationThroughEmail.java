package com.fullstackdevelopment.springbootstarter.reservation;

import java.net.Authenticator;
import java.net.ConnectException;
import java.net.PasswordAuthentication;
import java.util.Properties;

import javax.mail.AuthenticationFailedException;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.NoSuchProviderException;
import javax.mail.SendFailedException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class ReservationThroughEmail {
	
	private String message;
	private String to;
	private String from;
	private boolean reservationMade;
	
	private Session session;
	private InternetAddress[] address;
	
	public ReservationThroughEmail(String message, String to, String from) {
		this.message 	= message;
		this.to			= to;
		this.from 		= from;
		this.reservationMade = false;
	}
	
	public boolean sendMail() throws MessagingException {		
		MimeMessage message = this.makeEmailReady();
		
		// send message
		try {
			Transport transport = this.session.getTransport("smtp");
			transport.connect("smtp.gmail.com", this.from, "fill password");
			transport.sendMessage(message, this.address);
			transport.close();
			this.reservationMade = true;
		} catch (SendFailedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Send failed exception!!");
		}catch (AuthenticationFailedException e) {
			System.out.println("authentication failed exception!!");
		}
		return this.reservationMade;
	}
	
	private MimeMessage makeEmailReady(){
		
		Properties props = System.getProperties();
		
		props.setProperty("mail.smtp.host", "smtp.gmail.com");
		props.setProperty("mail.smtp.port", "587");
		props.setProperty("mail.smtp.auth", "true");
		props.setProperty("mail.smtp.starttls.enable", "true");
		props.setProperty("mail.smtp.starttls.required", "true");

		java.security.Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());
		
		this.session = Session.getDefaultInstance(props);
		
		this.session.setDebug(false);
		
		MimeMessage message;
		
		try {
			message = this.createMessage(session);
		}catch(Exception e) {
			message = null;
			e.printStackTrace();
		}
		
		return message;
	}
	
	private MimeMessage createMessage(Session session) throws Exception {
		
		// create mime message instance
		MimeMessage msg = new MimeMessage(session);
		
		// set from method accept Internet address object
		msg.setFrom(new InternetAddress(this.from));
		
		this.address = new InternetAddress[1];
		this.address[0] = new InternetAddress(this.to);
		
		msg.addRecipient(Message.RecipientType.TO, address[0]);
		
		msg.setSubject("Make a reservation!!");
		
		msg.setText(this.message);
		
		return msg;		
	}
}
