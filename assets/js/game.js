// get player robot name set player robot stats
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 12;
var playerScore = 10;

console.log(`Player - Name: ${playerName}, Health: ${playerHealth}, Attack: ${playerAttack}`);

// set enemy robot name and stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 10;

console.log(`Enemy - Name: ${enemyName}, Health: ${enemyHealth}, Attack: ${enemyAttack}`);

// fight function
var fight = function() {
    // alert the round is starting
    alert("Welcome to Robot Gladiators!");

    // ask if player wants to fight or skip
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? \nEnter 'FIGHT' to fight. \nEnter 'SKIP' to skip.");

    console.log(promptFight);

    // if fight, run round
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // alert fight start
        alert("I like your fighting style!")

        // subtract the value of `playerAttack` from the value of `enemyHealth` and update `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // log a resulting message to the console that it worked
        console.log(`${playerName} attacked ${enemyName} and dealt ${playerAttack} damage. ${enemyName} now has ${enemyHealth} health remaining.`);

        // check enemy's health
        if (enemyHealth <= 0) {
            alert(`${enemyName} had been defeated!`);
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
        } else {
            alert(`${playerName} still has ${playerHealth} health left.`)
        }
    
    } 
    // else if skip, cost player and end round
    else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = confirm("You will be penalized for skipping. \nAre you sure you want to skip?");

        // if yes leave fight
        if (confirmSkip) {
            alert(`This is embarrassing... ${playerName} has decided to skip this fight.`)

            playerScore = playerScore - 2;
        }
        // if no, ask question again
        else {
            fight();
        }
        
    
    } 
    // incorrect input, restart
    else {
        alert("You need to choose a valid option. Try again!")

        fight();
    }
};

fight();