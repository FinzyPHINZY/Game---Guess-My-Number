# Guess the Number

The Number Guessing Game is an interactive web application built using JavaScript, Tailwind CSS, and HTML. This game is designed to engage users by challenging them to guess a randomly generated number between 1 and 20. Through extensive DOM manipulation, it provides an enjoyable and intuitive gaming experience.

The game is primarily built using JavaScript to handle the game logic, generate random numbers, collect user input, and update the DOM in response to user actions. Tailwind CSS is used to style the user interface, making it visually engaging and responsive. HTML is employed to structure the web page and render the game elements.

This project is a great example of a simple but engaging web-based game that utilizes the power of JavaScript and interactive web design to entertain and challenge users. It demonstrates the use of core web technologies and showcases the potential of DOM manipulation for creating dynamic and immersive web applications.

**Link to project:** https://finzyphinzy.github.io/Game---Guess-My-Number/

## How It's Made:

**Tech used:** HTML, Tailwind CSS, JavaScript.

**Game Mechanics**:

1. **Random Number Generation**: On every page load, the game uses JavaScript to generate a random number within the range of 1 to 20. This number serves as the target for the player to guess.

2. **User Input**: The user is presented with an input area, typically a textarea, where they can enter their guess for the random number. The user's input is collected through JavaScript.

3. **Feedback Mechanism**:

   - If the user's guess is incorrect, the initial text displayed on the screen, which reads "Guess the number," changes to "Wrong number." This visual feedback indicates that the guess was incorrect.
   - Additionally, the user's score is reduced by 1 for each incorrect guess, which is prominently displayed on the screen.

4. **Correct Guess**:

   - When the user's guess matches the randomly generated number, the game provides feedback by changing the displayed text from "Guess the number" to "Correct number." This gives the player immediate and positive feedback.
   - The high score is updated with the player's current score, reflecting their accomplishment.

5. **High Scores**: The game maintains a record of high scores, ensuring that players can track their achievements and aim to beat their previous records.

**Key Features**:

- **Dynamic User Interface**: The game's interface is built with HTML and styled with Tailwind CSS, providing an appealing and responsive design that adapts to various screen sizes.

- **Interactive DOM Manipulation**: JavaScript is used to manipulate the Document Object Model (DOM) to update the displayed text, score, and high score in real-time, creating an immersive and interactive gaming experience.

- **Randomization**: The core gameplay relies on the random generation of numbers, which adds an element of unpredictability and challenge to the game.

- **Score Tracking**: The game keeps track of the player's score, promoting competition and encouraging players to improve their performance.

## Optimizations

_(optional)_

You don't have to include this section but interviewers _love_ that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those _whoa this is awesome_ or _wow I actually did it!_ moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel
