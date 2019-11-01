import Game from "./Game";

var collect = require('collect.js');
export default class NormalTournament {

    games = [];
    gameNumber = 1;
    biggestNumberOfWins = 0;

    winnerTeamNumber;
    winnerTeam;

    constructor(teams) {
        this.teams = teams;
    }

    simulate() {
        this.playGames(this.teams);
        while (1) {
            this.calculateBiggestNumberOfWins();
            let teams = this.findTeamsWithTheHighestNumberOfWins();
            if (teams.length !== 1) {
                this.playGames(teams)
            } else {
                break;
            }
        }
        this.calculateWinner();
        console.log(this);
        console.log(this.games);
        console.log(this.winnerTeamNumber, this.winnerTeam);
    }

    playGames(teamsToPlayEachOther) {
        for (let team of teamsToPlayEachOther) {
            for (let i = team.number + 1; i <= teamsToPlayEachOther.length; i++) {
                let oposingTeam = teamsToPlayEachOther.find(team => team.number === i);
                for (let j = 0; j <= 2; j++) {

                    let game = new Game(team, oposingTeam, this.gameNumber++);
                    this.games.push(game);
                }
            }
        }
    }

    getTeamsGroupedByWinner() {
        let gamesC = collect(this.games);
        let groupByWinner = gamesC.groupBy('winnerNumber');
        let uncollected = groupByWinner.all();
        return uncollected;
    }

    calculateBiggestNumberOfWins() {
        let teamsByWinning = this.getTeamsGroupedByWinner();

        for (let winGroup of Object.values(teamsByWinning)) {
            if (winGroup.count() > this.biggestNumberOfWins) {
                this.biggestNumberOfWins = winGroup.count();
            }
        }
        return this.biggestNumberOfWins;
    }

    findTeamsWithTheHighestNumberOfWins() {
        let winningTeams = [];
        let teamsByWinning = this.getTeamsGroupedByWinner();

        for (let teamNumber in teamsByWinning) {
            if (teamsByWinning[teamNumber].count() === this.biggestNumberOfWins) {
                winningTeams.push(teamsByWinning[teamNumber].first());
            }
        }

        return winningTeams;
    }

    calculateWinner(){
        this.calculateBiggestNumberOfWins();
        let team = this.findTeamsWithTheHighestNumberOfWins()[0].winner;
        this.winnerTeam = team;
        this.winnerTeamNumber = team.number;
    }
}
