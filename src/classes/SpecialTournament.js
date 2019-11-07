import Game from "./Game";

var collect = require('collect.js');
export default class SpecialTournament {

    games = [];
    gameNumber = 1;
    details;

    number;

    constructor(teams, number) {
        this.number = number;
        this.teams = {};
        for (let team of teams)
        {
            this.teams[team.number] = team;
        }
    }

    simulate() {
        let winner;
        let winnerNumber;
        let gA = new Game(this.teams[1], this.teams[2], 'gA');

        let gB = new Game(this.teams[3], this.teams[4], 'gB');

        let gC = new Game(this.teams[5], this.teams[6], 'gC');
        let gD = new Game(this.teams[7], this.teams[8], 'gD');

        let gE = new Game(gC.winner, gA.loser, 'gE');
        let gF = new Game(gD.winner, gB.loser, 'gF');

        let gG = new Game(gE.winner, gF.winner, 'gG');
        let gH = new Game(gA.winner, gB.winner, 'gH');


        let gI1 = new Game(gG.winner, gH.winner, 'gG');
        let gI2 = new Game(gG.winner, gH.winner, 'gG');

        let gI3;
        if (gI1.winnerNumber !== gI2.winnerNumber)
        {
             gI3 = new Game(gG.winner, gH.winner, 'gG');
        }


        let games = {
            gA: {
                winner: gA.winner,
                winnerNumber: gA.winnerNumber,
            },
            gB: {
                winner: gB.winner,
                winnerNumber: gB.winnerNumber,
            },
            gC: {
                winner: gC.winner,
                winnerNumber: gC.winnerNumber,
            },
            gD: {
                winner: gD.winner,
                winnerNumber: gD.winnerNumber,
            },
            gE: {
                winner: gE.winner,
                winnerNumber: gE.winnerNumber,
            },
            gF: {
                winner: gF.winner,
                winnerNumber: gF.winnerNumber,
            },
            gG: {
                winner: gG.winner,
                winnerNumber: gG.winnerNumber,
            },
            gH: {
                winner: gH.winner,
                winnerNumber: gH.winnerNumber,
            },
            gI1: {
                winner: gI1.winner,
                winnerNumber: gI1.winnerNumber,
            },
            gI2: {
                winner: gI2.winner,
                winnerNumber: gI2.winnerNumber,
            },
        };

        if (gI1.winnerNumber === gI2.winnerNumber)
        {
            winner = gI1.winner;
            winnerNumber = gI1.winnerNumber;
            games['gI3'] = {
                winnerNumber: gI1.winnerNumber,
                winner: gI1.winner,
                notPlayed: true
            };
        }
        else
        {
            winner = gI3.winner;
            winnerNumber = gI3.winnerNumber;
            games['gI3'] = {
                winner: gI3.winner,
                winnerNumber: gI3.winnerNumber,
                notPlayed: true
            };
        }

        this.details = {
            games: games,
            winner: winner,
            winTeamNumber: winnerNumber,
        };
        return this.details;

    }


    bo3(g1, g2, g3) {
        if (g1.winnerNumber === g2.winnerNumber)
        {
            return g1.winnerNumber;
        }

        if (g1.winnerNumber === g3.winnerNumber)
        {
            return g1.winnerNumber;
        }

        if (g2.winnerNumber === g3.winnerNumber)
        {
            return g2.winnerNumber;
        }

        return 'impossible';
    }


    arrayMax(arr) {
        return arr.reduce(function (p, v) {
            return (p > v ? p : v);
        });
    }


}
