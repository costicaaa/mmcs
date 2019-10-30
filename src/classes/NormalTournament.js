import Game from "./Game";
var collect = require('collect.js');
export default class NormalTournament {

    games = [];
    gameNumber = 1;
    constructor(teams){
        this.teams = teams;
    }

    simulate(){
        this.playGames();
        this.getBiggestNumberOfWins();
    }

    playGames(){
        for(let team of this.teams){
            for(let i = team.number + 1; i <= this.teams.length; i++ ){
                let oposingTeam = this.teams.find(team => team.number === i);
                for(let j = 0; j <= 2; j++)
                {
                    let game = new Game(team, oposingTeam, this.gameNumber++);
                    this.games.push(game);
                }
            }
        }
    }

    getBiggestNumberOfWins(){
        let gamesC = collect(this.games);
        let groupByWinner = gamesC.groupBy('winnerNumber');
        // for(let collectionOfWonGamesByTeam of groupByWinner){
        //     console.log(collectionOfWonGamesByTeam);
        // }
        console.log(groupByWinner);
    }
}
