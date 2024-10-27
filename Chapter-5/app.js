// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
let num1 = 5;
let num2 = 10; 
let sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);



// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// let num3 = 10;
// let num4 = 2;
// let sub = num3 - num4;
// let mul = num3 * num4;
// let div = num3 / num4;
// let mod = num3 % num4;
// document.write("Number 3: " + num3 + "<br>");
// document.write("Number 4: " + num4 + "<br>");
// document.write("Subtraction: " + sub + "<br>");
// document.write("Multiplication: " + mul + "<br>");
// document.write("Division: " + div + "<br>");
// document.write("Modulus: " + mod + "<br>");




// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// // a: Declare a variable
// let myVariable;

// // b: Show value after declaration
// document.write("Value after variable declaration is: " + myVariable + "<br>");

// // c: Initialize the variable with some number
// myVariable = 5;

// // d: Show initial value
// document.write("Initial value: " + myVariable + "<br>");

// // e: Increment the variable
// myVariable++;

// // f: Show value after increment
// document.write("Value after increment is: " + myVariable + "<br>");

// // g: Add 7 to the variable
// myVariable += 7;

// // h: Show value after addition
// document.write("Value after addition is: " + myVariable + "<br>");

// // i: Decrement the variable
// myVariable--;

// // j: Show value after decrement
// document.write("Value after decrement is: " + myVariable + "<br>");

// // k: Calculate the remainder after dividing by 3
// let remainder = myVariable % 3;

// // l: Show the remainder
// document.write("The remainder is: " + remainder + "<br>");




// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// var ticketprice = 600;
// var numberoftickets = 5;
// var totalcost = ticketprice * numberoftickets;
// console.log("cost ot buying " + numberoftickets + "tickets:" + totalcost + "PKR");
// document.write("Total cost to buy 5 tickets to a movie is 3000PKR");



// 5. Write a script to display multiplication table of any number in your browser. 
// var number = prompt("Enter the number:");
// var table = "";
// for (var i = 1; i <= 10; i++) {
//     var product = number * i;
//     table += "<br>" + number + " x " + i + " = " + product;
// }
// document.write(table);





// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(`${celsius}°C is ${fahrenheit}°F`);
// var fahrenheit2 = 77;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.write(`<br> ${fahrenheit2}°F is ${celsius2}°C `);




// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// let item1Price = 650;
// let item2Price = 100;
// let item1Quantity = 3;
// let item2Quantity = 7;
// let shippingCharges = 100;
// let totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
// document.write("<h1>Shopping Cart Receipt</h1>");
// document.write("<p>Price of item 1: " + item1Price + "</p>");
// document.write("<p>Ordered quantity of item 1: " + item1Quantity + "</p>");
// document.write("<p>Price of item 2: " + item2Price + "</p>");
// document.write("<p>Ordered quantity of item 2: " + item2Quantity + "</p>");
// document.write("<p>Shipping charges: " + shippingCharges + "</p>");
// document.write("<p>Total cost of your order is: " + totalCost + "</p>" );





// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// let totalMarks = 500;
// let marksObtained = 375;
// let percentage = (marksObtained / totalMarks) * 100;
// document.write("<h1>Marks Percentage Calculator</h1>");
// document.write("<p>Total marks: " + totalMarks + "</p>");
// document.write("<p>Marks obtained: " + marksObtained + "</p>");
// document.write("<br>");
// document.write("<h3>Your percentage is: " + percentage + "%</h3>");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in
//  a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// let usd = 10;
// let sar = 25;

// let pkr = (usd * 104.80 ) + (sar*28);
// document.write("<h1>Currency in Pkr<h1/>");
// document.write("<p>Total amount in USdollar:" + usd +"<p/>");
// document.write("<p>Total amount in Saudi Riyal:" + sar +"<p/>");
// document.write("<br>");
// document.write("<h3>Total amount in PakistaniRupes:" + pkr + "PKR</h3>" );


// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2 Perform all calculations in a single expression

// let number = 10; 
// let result = ((number + 5) * 10) / 2; 
// document.write("<p>initial number:" + number + "<p/>");
// document.write("The result is: " + result);





// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

// let currentYear = 2024; 
// let birthYear = 2005; 
// let age1 = currentYear - birthYear;
// let age2 = age1 - 1;
// document.write("<h1>Age Calculator</h1>");
// document.write("<p>the birth year is " + birthYear + " and the current year is " + currentYear + ":</p>");
// document.write("<p>Their age is either " + age1 + " or " + age2 + ".</p>");



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// let radius = 20; 
// const pi = 3.142; 
// let circumference = 2 * pi * radius;

// document.write("<h1>The Geometrizer </h1>")
// document.write("The radius is " + radius);
// document.write("<br> The circumference is " + circumference + "<br>");
// let area = pi * radius * radius;
// document.write("The area is " + area);



// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// let favoriteSnack = "chocolate cake";
// let currentAge = 19;
// let maximumAge = 30;
// let estimatedAmountPerDay = 3;

// let yearRemaining = maximumAge - currentAge;
// let daysremaining = yearRemaining * 365;
// let totalAmountNeed = daysremaining * estimatedAmountPerDay;

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("<p> Favorite snack :" + favoriteSnack + "</p>");
// document.write("<p> Current age :" + currentAge + "</p>");
// document.write("<p> estimated maximum:" + maximumAge  + "</p>");
// document.write("<p> Amount of snack per day:" + estimatedAmountPerDay +"</p>");
// document.write("<p>You will need   " + totalAmountNeed +"   "+favoriteSnack + "   to last you until the ripe old age of  " + maximumAge + "</p>");





//END














