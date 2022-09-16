# Punk API

## Website Description

The site showcases brewdogs range of beers and non-alcoholic drinks.
Each drink has a card with a small amount of information on the main page and a more detailed individual page when you select more information.

## Features

Users can search by name and filter results by alcohol level, acidity and beers brewed before 2010.
Each beer has a specfic page holding more information.

## Build

The site is built in React with 5 containers rendered within the App.
The API call is a the top level so that data can be passed down to numerous containers. 
The App is also responsible for the functions that receive the filters and serch terms from the navbar and in turn pass these down to the card list so the results can be filtered.
The card list renders the results from the API, mapping over the array and producing a card for each result.
Routing allows the user to access a specific page for each beer. Using query params and the id of each item of the array a page is generated that recieves the information of the beer with a matching ID.
The beer info page then renders information about the selected beer.

## Design

The site is created for a mobile first and then alters as the screen size gets bigger.
I've used media queries to alter the layout at a number of break points.
On screen over 560px a showcase image is displayed with the nav bar fixed in position at the top of the page. On smaller screens the nav bar isn't fixed and the image doesn't display.
I've used a clean style with a shades of grey, white and black and box shadow used to highlight certain elements.