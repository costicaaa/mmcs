<template>
    <div class="container">
        <div class="well well-lg">
            <form id="inputField" role="form">

                <input type="text" name="field00" size="3">
                <input type="text" name="field00" size="3" value="Team 1">
                <input type="text" name="field00" size="3" value="Team 2">
                <input type="text" name="field00" size="3" value="Team 3">
                <input type="text" name="field00" size="3" value="Team 4">

                <br>
                <input type="text" name="field00" size="3" value="Team 1">
                <input type="text" name="field01" size="3" readonly value="-">
                <input type="text" name="field01" size="3" v-model="t1.at2" @change="iChanged(1, 2)">
                <input type="text" name="field01" size="3" v-model="t1.at3" @change="iChanged(1, 3)">
                <input type="text" name="field01" size="3" v-model="t1.at4" @change="iChanged(1, 4)">

                <br>
                <input type="text" name="field10" size="3" value="Team 2">
                <input type="text" name="field10" size="3" readonly v-model="t2.at1">
                <input type="text" name="field01" size="3" readonly value="-">
                <input type="text" name="field12" size="3" v-model="t2.at3" @change="iChanged(2, 3)">
                <input type="text" name="field12" size="3" v-model="t2.at4" @change="iChanged(2, 4)">

                <br>
                <input type="text" name="field10" size="3" value="Team 3">
                <input type="text" name="field20" size="3" readonly v-model="t3.at1">
                <input type="text" name="field21" size="3" readonly v-model="t3.at2">
                <input type="text" name="field01" size="3" readonly value="-">
                <input type="text" name="field12" size="3" v-model="t3.at4" @change="iChanged(3, 4)">


                <br>
                <input type="text" name="field10" size="3" value="Team 4">
                <input type="text" name="field20" size="3" readonly v-model="t4.at1">
                <input type="text" name="field21" size="3" readonly v-model="t4.at2">
                <input type="text" name="field22" size="3" readonly v-model="t4.at3">
                <input type="text" name="field01" size="3" readonly value="-">
                <br>

                <br>
                <br>
                <br>
                <br>
                <button type="button" @click="calculateNormal()" class="btn btn-info">calculate</button>
            </form>

        </div>

    </div>
</template>

<script>
    import Team from '../classes/Team'
    import NormalTournament from "../classes/NormalTournament";
    export default {
        name: 'HelloWorld',
        data() {
            return {
                    numberOfTeams: 4,
                    teams: [],
                    mostLikelyToWinTeam : null,
                    normalTournamentNumber: 1,
                    normalTournamentResults: [],

                // probability to lose -> t1 has x % probability to lose against at2...16
                    t1: {
                        at2: 0.6,
                        at3: 0.7,
                        at4: 0.65,
                    },
                    t2: {
                        at1: '',
                        at3: 0.2,
                        at4: 0.7,
                    },
                    t3: {
                        at1: '',
                        at2: '',
                        at4: 0.73,
                    },
                    t4: {
                        at1: '',
                        at2: '',
                        at3: '',
                    }

            }
        },
        methods: {
            iChanged(teamNumber, againstTeamNumber){
                let newVal = 1 - this['t' + teamNumber]['at' + againstTeamNumber];
                if(newVal < 0.01 || newVal > 0.99)
                {
                    this.$set(this['t' + againstTeamNumber], 'at' + teamNumber, 0.5);
                    this.$set(this['t' + teamNumber], 'at' + againstTeamNumber, 0.5);
                    alert("value must be between 0.01 and 0.99");
                }
                else
                {
                    this.$set(this['t' + againstTeamNumber], 'at' + teamNumber, newVal.toFixed(2));
                }
            },
            generateLowerMatrixInfo(){
                for(let i = 1; i <= this.numberOfTeams; i ++){
                    for(let j = i + 1; j <= this.numberOfTeams; j++){
                        this.iChanged(i, j);
                    }
                }
            },
            generateTeams(){
                for(let i = 1; i <= this.numberOfTeams; i ++){
                    let team = new Team(i, this['t' + i]);
                    this.teams.push(team);
                }
            },

            calculateMostProbableToWinTeam(){
                let winProbability = Number.MIN_SAFE_INTEGER;
                for(let team of this.teams){
                    if(team.totalWinningChance() > winProbability){
                        this.mostLikelyToWinTeam = team;
                        winProbability = team.totalWinningChance();
                    }
                }
            },

            simulateNormalTournament(){ // each team plays each other 3 times
                let normalTournament = new NormalTournament(JSON.parse(JSON.stringify(this.teams)), this.normalTournamentNumber++);
                let details = normalTournament.simulate();
                // this.normalTournamentResults.push(details);
                console.log(details);

            },

            calculateNormal(){
                // this.calculateMostProbableToWinTeam();

                for(let i = 1; i <= 1000; i++){
                    this.simulateNormalTournament();
                }
            }
        },

        mounted(){
            this.generateLowerMatrixInfo();
            this.generateTeams();

        },


    }
</script>














<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    input {
        text-align: center;
    }

    input:read-only {
        background: #c6c6b1;
    }
</style>
