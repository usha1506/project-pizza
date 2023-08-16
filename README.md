# Project Name

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

## Navigating this repository

In this project, we're all about mastering vital yet basic JavaScript concepts like variables, conditionals, and native methods. The fun part? We've ditched web page fuss, giving you a pure coding playground.

Why? So you can nail the basics without distractions. Dive into JavaScript logic and amp up your variable game (they're like data containers!) and unleash conditionals for smart choices. You'll even groove with native methods for slick operations.

Bottom line: we're crafting a solid learning experience. Focus on JavaScript's core and skip the DOM maze. With this groundwork, you'll strut into tougher coding quests like a JavaScript champ. 🚀🌟

### code/index.html

To simplify the execution of this project, we've set up a basic webpage structure here. It's designed for our "JavaScript Pizzeria". The elements within the `<body>` tag are key components:

1. An `<h1>` tag featuring the text "Javascript Pizzeria": This prominent heading serves as the title of our webpage, indicating its association with our JavaScript-centered pizzeria project.

2. A `<p>` tag displaying the text "Logic is executed automatically": Within this paragraph element, a succinct explanation is given. It informs us that the series of instructions, or logic, will be carried out automatically during the webpage's loading.

3. A `<script>` tag with a `src` attribute linked to "script.js": This is where the real action unfolds. The `<script>` tag's purpose is to incorporate external JavaScript code. By utilizing the `src` attribute, we specify that the JavaScript instructions are stored within a file named "script.js".

In this manner, our project's foundation is established, setting the stage for the JavaScript magic that is about to unfold!

### code/script.js

In order to simplify the execution of this project, we have provided you with an example that shows the structure of this file. In this initial step of our learning journey with JavaScript, we're exploring the alert() method. This method is like a pop-up message box that appears on your screen. Imagine you've entered a virtual pizza place called the "JavaScript Pizzeria." The code you see is like a script that tells the computer to show you a message in that pop-up box.

The message itself is written between the parentheses of the alert() method. It's enclosed in backticks (`) which allow us to include multiple lines of text and even special placeholders like ${} to insert dynamic content.

The message itself says, "Welcome to our JavaScript Pizzeria. This little program will run without needing to mess around with fancy website parts or special functions. It's all about helping you learn. Ready to begin? Click 'OK' to start."

So, when you run this code;

```js
alert(
  `Welcome to our Javascript Pizzeria. 
This little program will be executed without the neccesity of using DOM Elements or functions in order to enhance your knowledge, Readt to Start? - Click 'OK' to begin.`
);
```

A pop-up will appear on your screen with this message, inviting you to start your journey in a fun and interactive way. This is just the beginning of using JavaScript to make things happen on a webpage!

## Iterations

### Iteration 1 - Food Choice

In this iteration, you'll find a pre-written code snippet that generates a welcoming message and introduction for the user. This is done to give you a hint about how this section can be implemented.

After that, the program will utilize a technique known as the prompt() method. This technique allows the program to display a small dialog box requesting your name. As a useful tip, you can store the input obtained from the prompt() method in a variable. This variable acts as a container to hold data, and it will enable your program to recall and utilize your name at a later point.

### Iteration 2 - Food Choice

The goal of this iteration is to allow the user to select the type of food they want to order. If you checck the provided working example, you can see that our Javascript Pizzera offers:

- Pizza
- Pasta
- Salad

The program should use the prompt() method to present the user with a menu of options (Pizza, Pasta, Salad) and prompt them to enter a number corresponding to their choice. Based on the user's input, the program should determine the chosen food type (Pizza, Pasta, Salad) and display a message using the alert() method to confirm the user's selection.

### Iteration 3 - Subtype Choice

For this iteration, the focus is on enabling the user to choose a subtype of the selected food type. Depending on the previously chosen food type (Pizza, Pasta, Salad), the program should present the user with subtype options specific to that food type. The prompt() method should be used to get the user's input. The program should then determine the chosen subtype and provide feedback using the alert() method to confirm the selection.

### Iteration 4 - Age and Order Confirmation

In this iteration, the program should prompt the user to specify if the food is intended for a child or an adult. The prompt() method should be used to present the options and get the user's input. Based on the user's choice, an appropriate order message should be constructed. The program should use the alert() method to display the order message and the associated cost. The user's confirmation should be obtained using the prompt() method.

### Iteration 5 - Conclusion

The final iteration involves confirming the user's order based on their previous choices. The program should evaluate the user's confirmation choice using an if...else statement and take appropriate action. If the user confirms, a thank you message should be displayed using the alert() method, indicating that their meal will be prepared. If the user declines, a polite farewell message should be displayed using the alert() method, encouraging them to return for future orders.

## Stretch Goals

So you’ve completed all the iterations above? Great job! Make sure you've committed and pushed a version of your project before starting on the stretch goals. Remember that the stretch goals are optional.

As a challenge to enhance your coding skills, consider refactoring the entire code by replacing the existing if, else-if, and else conditionals with a more streamlined and organized approach using JavaScript's switch case structure. By doing so, you'll improve code readability and maintainability, making it easier to manage various scenarios and outcomes in a more structured manner.

### How to Approach the Stretch Goal:

- Review the Existing Code: Take a thorough look at your current code to understand the logic, conditions, and branches that determine the flow of the program based on user choices.

- Identify Cases: Identify the different cases or options that lead to different actions or outcomes in the program. Each case should correspond to a specific choice the user makes.

- Implement the switch Statement: Replace the existing if, else-if, and else statements with a switch statement. The switch statement allows you to evaluate a single expression against multiple possible case values.

- Define Cases: For each case value, define the corresponding code block that should be executed when that case is matched.

- Handle Default Case: Include a default case to handle situations where none of the defined cases match the expression. This serves as a catch-all to manage unexpected inputs.

- Test and Validate: Thoroughly test your refactored code with various inputs to ensure that it behaves as expected and produces the correct outputs.

Refactoring the code using a switch case approach not only showcases your coding versatility but also contributes to writing cleaner and more efficient code. It's a valuable skill that can lead to more readable and maintainable programs in the long run.
