// get player robot name set player robot stats
var playerName = prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 12;

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
};

fight();