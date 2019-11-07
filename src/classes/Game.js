export default class Game {
    t1;
    t2;
    numberInTournament;
    constructor(Team1, Team2, numberInTournament){
       this.t1 = Team1;
       this.t2 = Team2;

       this.numberInTournament = numberInTournament;

       this.simulate();
    }

    simulate(){
        let winner;
        let loser;
        if(Math.random() < this.getChanceBetweenTwoTeams()){
            winner = this.t1;
            loser = this.t2;
        }
        else
        {
            winner = this.t2;
            loser = this.t1;
        }
        this.winner = winner;
        this.winnerNumber = winner.number,

            this.loser = loser;
        this.loserNumber = loser.number,
        this.details = {
            'text': this.t1.name + ' win change against ' + this.t2.name + ' = ' + this.getChanceBetweenTwoTeams() + ' winner = ' + winner.name,
            't1' : this.t1,
            't2' : this.t2
        };
    }

    getChanceBetweenTwoTeams(){
        // console.log('t1', this.t1, 't2', this.t2);
        return this.t1.winningChance[this.t2.number];
    }

}
