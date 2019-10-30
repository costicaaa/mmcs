let numberOfTeams = 4;

export default class Team {
    number;
    losingChance = {};
    winningChance = {};
    name;

    constructor(teamNumber, losingChances){
        this.number = teamNumber;
        this.name = 'Team ' + this.number;

        for(let i = 1; i <= numberOfTeams; i++){
            if(i === this.number){
                continue;
            }
            this.losingChance[i] = losingChances['at' + i];
            this.winningChance[i] = parseFloat((1 - losingChances['at' + i]).toFixed(2));
        }
    }

    totalWinningChance() {
        return parseFloat((Object.values(this.winningChance).reduce((x1, x2) => x1 + x2)).toFixed(2));
    }

    
}
