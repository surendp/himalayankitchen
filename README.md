# himalayankitchen

This is a website project for a restaurant named Himalayan Kitchen which is in Turku, Finland.

## How to start the application

Step 1 -> git clone http://secret-castle-23220.herokuapp.com/

Step 2 -> mvn spring-boot:run

## Website link
http://secret-castle-23220.herokuapp.com/ 

NOTE: (The server serving the application is heroku free server. It takes 20 to 30 seconds to load the first request.)

## Requirements
- Display the lunch and Ala kart menu list
- Functionality to make reservation through email
- Display information about the restaurant.

## Tools and Technologies

- React, Spring Boot
- JavaScript, Java
- Webpack, Babel, maven, npm

## Achievements

## Work Flow

As a whole, the project is a maven project and it uses the concept of Restful webservices to develop the backend. Lunch and Ala kart menu lists are delivered through the Rest APIs created by using Spring-Boot.

Also, reservation form data is delivered to an API which further sends the message to restaurant email using Java.

The User Interface of the website is managed/developed using React.js.

#### Display the lunch and Ala kart menu list

This functionality is implemented in the following way:
- Create Rest API using Spring-Boot.
- Fetch and deliver content from txt files using Java through APIs.

- Make AJAX request to the APIs.
- Render the Content to DOM using React.

#### Functionality to make reservation through email

#### Display information about the restaurant
