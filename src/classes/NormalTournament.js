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

        this.calculateBiggestNumberOfWins();
        let teams = this.findTeamsWithTheHighestNumberOfWins();
        if (teams.length !== 1) {
            console.log(this.games);
            this.playGames(teams);
            // console.log('more than 1 winner', teams);
            // console.log(this.games);
        } else {
            // console.log('fininshed');
        }

        // while (1) {
        //
        // }
        this.calculateWinner();
        // console.log('Normal tournament simulation', this);
        // console.log(this.games);
        // console.log(this.winnerTeamNumber, this.winnerTeam);
    }

    playGames(teamsToPlayEachOther) {
        let alreadyPlayed = {};
        for (let team of teamsToPlayEachOther) {
            let otherTeams = teamsToPlayEachOther.filter(item => item.number !== team.number);
            console.log(team,otherTeams);
            for(let oposingTeam of otherTeams){
                if(alreadyPlayed[team.number] === oposingTeam.number || alreadyPlayed[oposingTeam.number] === team.number){
                    continue;
                }
                alreadyPlayed[team.number] = oposingTeam.number;
                alreadyPlayed[oposingTeam.number] = team.number;
                for (let j = 1; j <= 3; j++) {
                    let game = new Game(team, oposingTeam, this.gameNumber++);
                    this.games.push(game);
                }
            }
        }
        console.log(alreadyPlayed);
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
        // console.log('teamsByWinning',teamsByWinning);

        for (let teamNumber in teamsByWinning) {
            if (teamsByWinning[teamNumber].count() === this.biggestNumberOfWins) {
                winningTeams.push(teamsByWinning[teamNumber].first().winner);
            }
        }

        return winningTeams;
    }

    calculateWinner(){
        this.calculateBiggestNumberOfWins();
        let team = this.findTeamsWithTheHighestNumberOfWins()[0];
        this.winnerTeam = team;
        this.winnerTeamNumber = team.number;
    }
}
