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

// loop through enemyNames and run fight function with current enemy
for (var i = 0; i < enemyNames.length; i++) {
    var currentEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(currentEnemyName);
}