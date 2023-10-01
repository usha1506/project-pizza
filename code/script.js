// Start here
// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)
// Step 2 - Food choice
// Your code goes here
let userInput = prompt("please enter your name:");
let foodType=0;
let pastaType=0
let saladType=0
let pizzaType=0
let pizzaTypeSelected=" "
let pastaTypeSelected=" "
let saladTypeSelected=" "
let Size = " "
let foodSelected=" "

alert(`Nice to meet you ${userInput}!`)

foodType = parseInt(prompt("Select which food is required: 1 -Pizza, 2 -Pasta,3 -Salad"));
//alert(`You have selected${PizzaType}!`)
switch(foodType)
{
  case foodType=1:
    alert(`You have selected Pizza`);
    foodSelected="Pizza"
    break;
  case foodType=2:
    alert(`You have selected Pasta`);
    foodSelected="Pasta"
    break;
  case foodType=3:
    alert(`You have selected Salad`);
    foodSelected="Salad"
    break;
  default:
    alert(`Not entered available values`);
}

// Step 3 - Subtype choice
// Your code goes here
alert (`Select your food type`)

if (foodType===1)
{
  pizzaType=parseInt(prompt("Choose a pizza subtype and enter the number: 1-Margherita, 2- Pepperoni, or 3-Veggie"))
  switch(pizzaType)
  {
    case pizzaType=1:
      alert (`You have selected Margherita`)
      pizzaTypeSelected="Margherita"
      break;
    case pizzaType=2:
      alert (`You have selected Pepperoni`)
      pizzaTypeSelected="Pepperoni"
      break;
    case pizzaType=3:
      alert (`You have selected Veggie`)
      pizzaTypeSelected="Veggie"
      break;
    default:
      alert(`Wrong Selection`);
  }
}
else if (foodType===2) 
{
  pastaType = parseInt(prompt("Choose a pasta subtype: 1.Spaghetti, 2.Penne, or 3.Alfredo"))
  switch(pastaType)
  {
    case pastaType=1:
      alert (`You have selected Spaghetti`)
      pastaTypeSelected="Spaghetti"
      break;
    case pastaType = 2:
      alert(`You have selected Penne`)
      pastaTypeSelected="Penne"
      break;
    case pastaType = 3:
      alert(`You have selected Alfredo`)
      pastaTypeSelected="Alfredo"
      break;
  }
}
else 
{
  saladType = parseInt(prompt("Choose a salad subtype: 1. Caesar, 2. Greek, or 3. Garden"))
  switch(saladType)
  {
    case saladType=1:
      alert (`You have selected Caesar`)
      saladTypeSelected="Caesar"
      break;
    case saladType=2:
      alert (`You have selected Greek`)
      saladTypeSelected="Greek"
      break;
    case saladType=3:
      alert(`You have selected Garden`)
      saladTypeSelected="Garden"
      break;
  }
}


// Step 4 - Age
// Your code goes here

let age = parseInt (prompt("Is the food for a child or an adult ? Type your age"));
  if (age<=18)
  {
    Size = "Child"
    alert(`You are a child`)
  }
  else
  {
    Size = "Adult"
    alert (`You are an adult`)
  }


// Step 5 - Order confirmation
// Your code goes here


alert (`One ${Size} sized ${foodSelected} - ${pizzaTypeSelected} ${pastaTypeSelected} ${saladTypeSelected} will be prepared for you. That will be 20 dollars. Are you want to order this`)

let confirmation=parseInt(prompt("Enter 1-Yes 2-No"))

if (confirmation===1)
{
  alert (`Thank you, your order has been placed`)
}
else
{
  alert (`Your order is not placed`)
}
