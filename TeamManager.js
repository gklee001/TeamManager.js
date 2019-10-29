const inquirer = require('inquirer');

//constructor function for player
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        //increase  offense if it is equal to 0
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.log(this.name + "'s offense has gone up!\n------------------")
        }
        else {
            this.defense++;
            console.log(this.name + "'s defense has gone up!\n------------------")

        }
    }
    this.badGame = function () {
        //decrese offense if it is equal to 0
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "'s offense has gone down!\n------------------")
        }
        else {
            this.defense--;
            console.log(this.name + "'s defense has gone up!\n------------------")
        }
    }



    this.printStats = function () {
        console.log(
            "Player Name: " + this.name +
            "\nPosition: " + this.position + "\nOffense: " + this.offense + "\nDefense: " + this.defense
        )
    }
}

//create a program which allows the user to create 3 unique players; 2 starters and a sub

var starters = [];
var subs = [];
var team = [];

let createPlayers = function () {
    if (starters.length + subs.length < 5) {
        console.log("/------------new player-----------------")
    }
    else {
        inquirer.prompt([
            {
                name: "name",
                message: "Player name: "
            },
            {
                name: "postion",
                message: "Position of the player: "
            },
            {
                name: "offense",
                message: "What is their current offense points: ",
                validate: function (value) {
                    if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) >= 10) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "defense",
                message: "what is their current defense points: ",
                validate: function (value) {
                    if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function (answers) {
            var player = new Player(answers.name, answers.position, parseINt(answers.offense), parseInt(answers.defense));
            if (starters.length < 3) {
                starters.push(player);
                team.push(player);
                console.log(player.name + "added to the starters")
            }
            else {
                subs.push(player);
                team.push(player);
                console.log(player.name + "added to the subs");
            }
            createPlayers();
        });
    }
        else {
    for (var i = 0; i < team.length; i++) {
        team[i].printStats();
    }
}
};
createPlayers();






let random1 = Math.floor(Math.random() * 21;
let random2 = Math.floor(Math.random() * 21;
let playGame = function () {
    for (var i = 0; i <= 5; i++) {
        //create the recursion
        if (random1 <)
    }