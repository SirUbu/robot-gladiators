// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// get player robot name set player stats
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 12;
var playerScore = 10;

// set enemy robot names and stats
var enemyNames = ["Roborto", "Amy-Android", "Robo-Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;

// fight function
var fight = function(enemyName) {
    // repeat and execute while enemy-robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        // ask if player wants to fight or skip
        var promptFight = prompt("Would you like to FIGHT or SKIP this battle? \nEnter 'FIGHT' to fight. \nEnter 'SKIP' to skip.");
        
        // if skip, cost player and end round
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = confirm("You will be penalized for skipping. \nAre you sure you want to skip?");

            // if yes leave fight
            if (confirmSkip) {
                alert(`This is embarrassing... ${playerName} has decided to skip this fight.`)

                // reduce player score for skipping
                playerScore = playerScore - 2;
                break;
            }
        }

        // subtract the value of `playerAttack` from the value of `enemyHealth` and update `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // log a resulting message to the console that it worked
        console.log(`${playerName} attacked ${enemyName} and dealt ${playerAttack} damage. ${enemyName} now has ${enemyHealth} health remaining.`);

        // check enemy's health
        if (enemyHealth <= 0) {
            alert(`${enemyName} had been defeated!`);
            break;
        } else {
            alert(`${enemyName} still has ${enemyHealth} health left.`)
        }

        // subtract the value of `enemyAttack` from the value of `playerHealth` and update `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;

        // log a resulting message to the console that it worked
        console.log(`${enemyName} attacked ${playerName} and dealt ${enemyAttack} damage. ${playerName} now has ${playerHealth} health remaining.`);

        // check player's health
        if (playerHealth <= 0) {
            alert(`${playerName} had been defeated!`);
            break;
        } else {
            alert(`${playerName} still has ${playerHealth} health left.`)
        }
    }
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 12;
    playerScore = 10;

    // loop through enemyNames and run fight function with current enemy
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // alert player to round 
            alert(`Welcome to Robot Gladiators! \nRound ${(i + 1)}`);
        
            // pick new enemy based on index of enemyNames
            var currentEnemyName = enemyNames[i];

            //reset enemyHealth
            enemyHealth = 50;

            //user debugger to pause script if needed
            // debugger;

            // pass currentEnemyName value into fight function
            fight(currentEnemyName);
        } else {
            alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // run endGame function
    endGame();
};

// function to end the game
var endGame = function() {
    // if player is still alive, player wins
    if (playerHealth > 0) {
        alert(`Great job, you've survived the game! You have a score of ${playerScore}.`);
    } else {
        alert(`You've lost your robot in battle.`)
    }

    // ask player if they'd like to play again
    var playAgainConfirm = confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart game
        startGame();
    } else {
        alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}

startGame();