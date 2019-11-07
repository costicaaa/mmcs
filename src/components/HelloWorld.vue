<template>
    <div class="container">
        <div class="well well-lg">
            <form id="inputField" role="form">

                <input type="text"  size="4">
                <input type="text"  size="4" value="Team 1">
                <input type="text"  size="4" value="Team 2">
                <input type="text"  size="4" value="Team 3">
                <input type="text"  size="4" value="Team 4">
                <input type="text"  size="4" value="Team 5">
                <input type="text"  size="4" value="Team 6">
                <input type="text"  size="4" value="Team 7">
                <input type="text"  size="4" value="Team 8">

                <br>
                <input type="text" size="4" value="Team 1">
                <input type="text" size="4" readonly value="-">
                <input type="text" size="4" v-model="t1.at2" @change="iChanged(1, 2)">
                <input type="text" size="4" v-model="t1.at3" @change="iChanged(1, 3)">
                <input type="text" size="4" v-model="t1.at4" @change="iChanged(1, 4)">
                <input type="text" size="4" v-model="t1.at5" @change="iChanged(1, 5)">
                <input type="text" size="4" v-model="t1.at6" @change="iChanged(1, 6)">
                <input type="text" size="4" v-model="t1.at7" @change="iChanged(1, 7)">
                <input type="text" size="4" v-model="t1.at8" @change="iChanged(1, 8)">

                <br>
                <input type="text"  size="4" value="Team 2">
                <input type="text"  size="4" v-model="t2.at1" @change="iChanged(2, 1)">
                <input type="text"  size="4" readonly value="-">
                <input type="text"  size="4" v-model="t2.at3" @change="iChanged(2, 3)">
                <input type="text"  size="4" v-model="t2.at4" @change="iChanged(2, 4)">
                <input type="text"  size="4" v-model="t2.at5" @change="iChanged(2, 5)">
                <input type="text"  size="4" v-model="t2.at6" @change="iChanged(2, 6)">
                <input type="text"  size="4" v-model="t2.at7" @change="iChanged(2, 7)">
                <input type="text"  size="4" v-model="t2.at8" @change="iChanged(2, 8)">


                <br>
                <input type="text"  size="4" value="Team 3">
                <input type="text"  size="4" v-model="t3.at1" @change="iChanged(3, 1)">
                <input type="text"  size="4" v-model="t3.at2" @change="iChanged(3, 2)">
                <input type="text"  size="4" readonly value="-">
                <input type="text"  size="4" v-model="t3.at4" @change="iChanged(3, 4)">
                <input type="text"  size="4" v-model="t3.at5" @change="iChanged(3, 5)">
                <input type="text"  size="4" v-model="t3.at6" @change="iChanged(3, 6)">
                <input type="text"  size="4" v-model="t3.at7" @change="iChanged(3, 7)">
                <input type="text"  size="4" v-model="t3.at8" @change="iChanged(3, 8)">



                <br>
                <input type="text"  size="4" value="Team 4">
                <input type="text"  size="4" v-model="t4.at1" @change="iChanged(4, 1)">
                <input type="text"  size="4" v-model="t4.at2" @change="iChanged(4, 2)">
                <input type="text"  size="4" v-model="t4.at3" @change="iChanged(4, 3)">
                <input type="text"  size="4" readonly value="-">
                <input type="text"  size="4" v-model="t4.at5" @change="iChanged(4, 5)">
                <input type="text"  size="4" v-model="t4.at6" @change="iChanged(4, 6)">
                <input type="text"  size="4" v-model="t4.at7" @change="iChanged(4, 7)">
                <input type="text"  size="4" v-model="t4.at8" @change="iChanged(4, 8)">

                <br>
                <input type="text"  size="4" value="Team 5">
                <input type="text"  size="4" v-model="t5.at1" @change="iChanged(5, 1)">
                <input type="text"  size="4" v-model="t5.at2" @change="iChanged(5, 2)">
                <input type="text"  size="4" v-model="t5.at3" @change="iChanged(5, 3)">
                <input type="text"  size="4" v-model="t5.at4" @change="iChanged(5, 4)">
                <input type="text"  size="4" readonly value="-">
                <input type="text"  size="4" v-model="t5.at6" @change="iChanged(5, 6)">
                <input type="text"  size="4" v-model="t5.at7" @change="iChanged(5, 7)">
                <input type="text"  size="4" v-model="t5.at8" @change="iChanged(5, 8)">

                <br>
                <input type="text"  size="4" value="Team 6">
                <input type="text"  size="4" v-model="t6.at1" @change="iChanged(6, 1)">
                <input type="text"  size="4" v-model="t6.at2" @change="iChanged(6, 2)">
                <input type="text"  size="4" v-model="t6.at3" @change="iChanged(6, 3)">
                <input type="text"  size="4" v-model="t6.at4" @change="iChanged(6, 4)">
                <input type="text"  size="4" v-model="t6.at5" @change="iChanged(6, 5)">
                <input type="text"  size="4" readonly value="-">
                <input type="text"  size="4" v-model="t6.at7" @change="iChanged(6, 7)">
                <input type="text"  size="4" v-model="t6.at8" @change="iChanged(6, 8)">

                <br>
                <input type="text"  size="4" value="Team 7">
                <input type="text"  size="4" v-model="t7.at1" @change="iChanged(7, 1)">
                <input type="text"  size="4" v-model="t7.at2" @change="iChanged(7, 2)">
                <input type="text"  size="4" v-model="t7.at3" @change="iChanged(7, 3)">
                <input type="text"  size="4" v-model="t7.at4" @change="iChanged(7, 4)">
                <input type="text"  size="4" v-model="t7.at5" @change="iChanged(7, 5)">
                <input type="text"  size="4" v-model="t7.at6" @change="iChanged(7, 6)">
                <input type="text"  size="4" readonly value="-">
                <input type="text"  size="4" v-model="t7.at8" @change="iChanged(7, 8)">

                <br>
                <input type="text"  size="4" value="Team 8">
                <input type="text"  size="4" v-model="t8.at1" @change="iChanged(8, 1)">
                <input type="text"  size="4" v-model="t8.at2" @change="iChanged(8, 2)">
                <input type="text"  size="4" v-model="t8.at3" @change="iChanged(8, 3)">
                <input type="text"  size="4" v-model="t8.at4" @change="iChanged(8, 4)">
                <input type="text"  size="4" v-model="t8.at5" @change="iChanged(8, 5)">
                <input type="text"  size="4" v-model="t8.at6" @change="iChanged(8, 6)">
                <input type="text"  size="4" v-model="t8.at8" @change="iChanged(8, 8)">
                <input type="text"  size="4" readonly value="-">

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
                    numberOfTeams: 8,
                    teams: [],
                    mostLikelyToWinTeam : null,
                    normalTournamentNumber: 1,
                    normalTournamentResults: [],

                // probability to lose -> t1 has x % probability to lose against at2...16
                    t1: {
                        at2: 0.60,
                        at3: 0.70,
                        at4: 0.65,
                        at5: 0.65,
                        at6: 0.65,
                        at7: 0.65,
                        at8: 0.65,

                    },
                    t2: {
                        at1: '',
                        at3: 0.7,
                        at4: 0.65,
                        at5: 0.65,
                        at6: 0.65,
                        at7: 0.65,
                        at8: 0.65,

                    },

                    t3: {
                        at1: '',
                        at2: '',
                        at4: 0.65,
                        at5: 0.65,
                        at6: 0.65,
                        at7: 0.65,
                        at8: 0.65,

                    },

                    t4: {
                        at1: '',
                        at2: '',
                        at3: '',
                        at5: 0.65,
                        at6: 0.65,
                        at7: 0.65,
                        at8: 0.65,

                    },
                    t5: {
                        at1: '',
                        at2: '',
                        at3: '',
                        at4: '',
                        at6: 0.65,
                        at7: 0.65,
                        at8: 0.65,

                    },

                    t6: {
                        at1: '',
                        at2: '',
                        at3: '',
                        at4: '',
                        at5: '',
                        at7: 0.65,
                        at8: 0.65,
                    },
t7: {
                        at1: '',
                        at2: '',
                        at3: '',
                        at4: '',
                        at5: '',
                        at6: '',
                        at8: 0.65,
                    },

                t8: {
                        at1: '',
                        at2: '',
                        at3: '',
                        at4: '',
                        at5: '',
                        at6: '',
                        at8: '',
                    },



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
