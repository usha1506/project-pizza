// Start here
// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`)
// Step 2 - Food choice
// Your code goes here
let userInput = null
let foodType = ["Pizza", "Pasta", "Salad"]
let subType = [["Margherita", 5],["Pepperoni",10] ,["Veggie",8], ["Spaghetti",8], ["Penne",3],["Alfredo",4],["Caesar",3], ["Greek",9], ["Garden",4]]
let foodInput = 0
let foodSelected = " "
let subTypeInput=0
let subTypeSelected=" "
let ageInput=0
let size=" "
let rate=0
let nprice=0
let orderConfirmation=0

userInput = prompt("please enter your name:")

alert(`Nice to meet you ${userInput}!`)

foodInput=parseInt(prompt(`Select your food type: 1.${foodType[0]}, 2.${foodType[1]}, 3.${foodType[2]}`))
switch(foodInput)
{
  case foodInput=1:
   // alert(`You have selected ${foodType[0]}`);
    foodSelected=foodType[0];
    break;
  case foodInput=2:
   // alert(`You have selected ${foodType[1]}`);
    foodSelected=foodType[1]
    break;
  case foodInput=3:
   // alert(`You have selected ${foodType[2]}`);
    foodSelected=foodType[2]
    break;
  default:
    alert(`Not entered available values`);
}

// Step 3 - Subtype choice
// Your code goes here
//alert (`Select What type of ${foodSelected}`)
if (foodInput === 1)
    {
    subTypetoDisplay = 0
    }
    else if(foodInput === 2)
    {
    subTypetoDisplay = 3
    }
    else {
    subTypetoDisplay = 6
    }
    
subTypeInput = prompt(`Select ${foodSelected} types 1. ${subType[subTypetoDisplay][0]}, 2. ${subType[subTypetoDisplay+1][0]}, 3. ${subType[subTypetoDisplay+2][0]}`)
subTypeSelected = parseInt(subTypetoDisplay) + parseInt(subTypeInput) -1
//alert (`You have Selected ${foodSelected} type ${subType[subTypeSelected][0]}`)

// Step 4 - Age
// Your code goes here

ageInput=prompt('Enter your age')
if (ageInput<18) 
{
size="Child"
rate=1
}
else
size="Adult"
rate = 2
//alert(`${size}`)

 
// Step 5 - Order confirmation
// Your code goes here
nprice = rate * subType[subTypeSelected][1]
orderConfirmation=prompt (`You have selected ${size}-${foodSelected}-${subType[subTypeSelected][0]} and price is ${nprice}. Could you confirm the order 1-Yes, 2-No?`)

if (orderConfirmation=1)
    alert (`Your order has been successfully placed`)
else
    alert ('Your order is cancelled, please start again')