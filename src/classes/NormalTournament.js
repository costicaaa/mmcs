import Game from "./Game";

var collect = require('collect.js');
export default class NormalTournament {

    games = [];
    gameNumber = 1;
    biggestNumberOfWins = 0;

    winnerTeamNumber;
    winnerTeam;

    constructor(teams) {
        this.teams = JSON.parse(JSON.stringify(teams));
    }

    simulate() {
        let teams = JSON.parse(JSON.stringify(this.teams));
        this.findOtherTeamsToPlayAgainst(teams);
    }

    findOtherTeamsToPlayAgainst(teams) {
        // console.log('teams', teams);

        for (let team of teams)
        {
            let opposingTeams = teams.filter(item => item.number > team.number);
            for (let opposingTeam of opposingTeams)
            {
                this.games.push(new Game(team, opposingTeam, this.gameNumber++));
                this.games.push(new Game(team, opposingTeam, this.gameNumber++));
                this.games.push(new Game(team, opposingTeam, this.gameNumber++));
            }
        }

        let teamsWins = this.getEachTeamNumberOfWins();
        // console.log('teamsWins', teamsWins);
        let maxNumberOfWins = this.getBiggestNumberOfWins(teamsWins);
        // console.log('maxNumberOfWins', maxNumberOfWins);
        let winningTeams = this.getTeamsWithBiggestNumberOfWins(teamsWins, maxNumberOfWins);

        if(winningTeams.length > 1)
        {
            this.findOtherTeamsToPlayAgainst(winningTeams);
        }
        else
        {
            console.log('winner of tournament = ' + winningTeams[0].number + " games = " + this.games.length);
        }

    }

    getEachTeamNumberOfWins(){
        let objj = {};
        for(let team of this.teams){
            let gamesWon = this.games.filter(item => item.winnerNumber === team.number);
            objj[team.number] = gamesWon.length;
        }
        return objj;
    }

    getBiggestNumberOfWins(teamsWins){
        // { teamNumber : numberOfWins }
        let numbersOfWins = Object.values(teamsWins);

        return this.arrayMax(numbersOfWins);
    }

    getTeamsWithBiggestNumberOfWins(teamsWins, maxNWins){
        let winningTeams = [];
        for(let teamNumber of Object.keys(teamsWins)){
            if(teamsWins[teamNumber] === maxNWins)
            {
                winningTeams.push(this.teams.find(item => item.number === parseInt(teamNumber)));
            }
        }
        return winningTeams;
    }



     arrayMax(arr) {
        return arr.reduce(function (p, v) {
            return ( p > v ? p : v );
        });
    }



}
