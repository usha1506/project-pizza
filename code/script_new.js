// Start here
// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)
// Step 2 - Food choice
// Your code goes here
let userInput = null
let foodType = ["Pizza", "Pasta", "Salad"]
let foodInput = 0
let foodSelected = " "
userInput = prompt("please enter your name:")

alert(`Nice to meet you ${userInput}!`)
foodInput=parseInt(prompt(`Select your food type: 1.${foodType[0]}, 2.${foodType[1]}, 3.${foodType[2]}`))
switch(foodInput)
{
  case foodInput=1:
    alert(`You have selected ${foodType[0]}`);
    foodSelected=foodType[0];
    break;
  case foodInput=2:
    alert(`You have selected ${foodType[1]}`);
    foodSelected=foodType[1]
    break;
  case foodInput=3:
    alert(`You have selected ${foodType[2]}`);
    foodSelected=foodType[2]
    break;
  default:
    alert(`Not entered available values`);
}
alert(`You have selected ${foodSelected}`)

// Step 3 - Subtype choice
// Your code goes here


// Step 4 - Age
// Your code goes here



// Step 5 - Order confirmation
// Your code goes here