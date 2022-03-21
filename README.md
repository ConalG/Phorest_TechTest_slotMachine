# Phorest TechTest SlotMachine 
Graduate Programme Technical Challenge for Phorest<br>

Live site: https://conalg.github.io/Phorest_TechTest_slotMachine/<br>

By Conal Glynnmartin

## ToDo
### Problem:
<br>
We are going to create a virtual fruit machine. To make things easier instead of symbols we
are going to use colours: black, white, green, yellow.
Each time a player plays our fruit machine we display four 'slots' each with a
randomly selected colour in each slot.
If the colours in each slot are the same then the player wins the jackpot which is all
of the money that is currently in the machine.
Implement a basic machine, along with the concept of a player who has a fixed amount
of money to play the machine.
<br>

### Solution:

You can choose between two options to complete this challenge
1. In a Javascript framework of your preference or Vanilla Javascript, implement a web
client that:

* Displays the four slots
* Allows the user to play the game
* Alerts the user if they won or lost.
* Increases/Decreases money in the machine

2. ~Implement the game API in any backend framework(Java, Ruby etc.) of your
preference which:~

* ~Can be called to play the game~
* ~Returns the 4 slot colours~
* ~Returns a win or lose status.~
* ~Increases/Decreases the money in the machine~

Success Criteria:
- Clean code
- Documentation
- Automated tests
- The path to your solution, please share with us your solution on Github with the
history of your steps.
## About Project

I have chosen to complete solution 1 of this technical challenge. The user starts the game with 100 credits. 
Each spin costs 10 credits, these get added to the jackpot before each spin has started. After the spin has complete
the result of the game is displayed on the display screen above the slots. The user has the ability display their current
credits and current jackpot at any time with the labelled buttons. If the jackpot is won, it gets automatically added to the
user’s credits. Once the user has run out of credits, they will be unable to play and a no credit warning will be displayed.
The user can at any time add 100 credits to the machine if they wish to do so. Once finished playing the user can pay-out
all their credits from the machine.

### Built With

* HTML
* CSS
* Javacript
* Cypress

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation
- node v16.13.0
- npm v16.13.0
**Cypress**
*  To initialize new or existing npm package 
```bash
npm init
```
* To install cypress:
```bash
npm install cypress --save-dev
```
To open cypress window use:
```bash
npx cypress open 
```

* Run via:
playGame.test.js

## Roadmap

- [x] Display slots for the user
- [x] Allow the user to play the game
- [x] Alert User to result of the game
- [x] Allow user to increase and decrease credits in machince
- [x] Add Jackpot to machince
- [x] Add Jackpot to balance after the user has won
- [x] Test machince

<p align="right">(<a href="#top">back to top</a>)</p>

## Testing

<p align="right">(<a href="#top">back to top</a>)</p>