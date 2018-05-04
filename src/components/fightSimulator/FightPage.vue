<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h2>Player</h2>
        <div class="bar">
          <div :style="{width: playerHealth + '%'}" class="healthBar">
            {{ playerHealth }}
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Monster</h2>
        <div class="bar">
          <div :style="{width: monsterHealth + '%'}" class="healthBar">
            {{monsterHealth}}
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="row text-center">
      <div v-if="!gameStarted">
        <input @click="startGame()" type="button" class="btn-primary button" value="Start Fight?">
      </div>
      <div v-else>
        <input @click="punch" type="button" class="btn-primary button" value="Punch">
        <input @click="kick" type="button" class="btn-success button" value="Kick">
        <input @click="heal" type="button" class="btn button" value="Eat">
        <input @click="endGame" type="button" class="btn-danger button" value="Surrender">

      </div>
    </div>
    <div class="row">
      <ul class="list-group">
        <li class=" list-group-item" v-for="turn in turnLog"
            :class="{playerHighlight : turn.isPlayer, monsterHighlight : !turn.isPlayer}">
          {{turn.text}}
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data:function(){ {
      return {playerHealth: 100,
        monsterHealth: 100,
        gameStarted: false,
        turnLog: []}
    }},
    methods:{
      startGame: function () {
        this.gameStarted = !this.gameStarted;
      },
      endGame: function () {
        this.gameStarted = false;
        this.resetGame();
      },
      punch: function () {
        var monDmg = this.getRandomNumber();
        var plyDmg = this.getRandomNumber();

        this.monsterHealth -= plyDmg;
        this.turnLog.unshift({isPlayer:true, text:"Player Delt: " + plyDmg + " damage!"});
        this.playerHealth -= monDmg;
        this.turnLog.unshift( { isPlayer:false, text:"Monster Delt: " + monDmg + " damage!"});


      },
      kick: function () {
        var monDmg = this.getRandomNumber();
        var plyDmg = Math.floor((Math.random() * 15) + 1);

        this.monsterHealth -= plyDmg;
        this.turnLog.unshift({isPlayer:true, text:"Player Delt: " + plyDmg + " damage!"});
        this.playerHealth -= monDmg;
        this.turnLog.unshift( { isPlayer:false, text:"Monster Delt: " + monDmg + " damage!"});
      },
      heal: function () {

        if(this.playerHealth < 100) {
          var monDmg = this.getRandomNumber();

          this.playerHealth += 10;
          this.turnLog.unshift({isPlayer:true, text:"Player Healed for: 10 Health"});
          this.playerHealth -= monDmg;
          this.turnLog.unshift( { isPlayer:false, text:"Monster Delt: " + monDmg + " damage!"});

          if(this.playerHealth > 100)
          {
            var temp = this.playerHealth - 100;
            this.playerHealth -= temp;
          }

        }
        else{
          alert("Too full to eat");
        }
      },
      resetGame: function () {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.turnLog = [];
      },
      getRandomNumber : function () {
        return Math.floor((Math.random() * 10) + 1);
      }
    },
    watch:{
      monsterHealth: function (value) {

        if(this.monsterHealth <= 0){
          alert("Winner!");
          this.resetGame();
        }
      },
      playerHealth: function (value) {

        if(this.playerHealth <= 0){
          alert("You Dead!");
          this.resetGame();
        }
      }
    }
  }
</script>

<style scoped>
  .bar {
    background-color: ghostwhite;
    width: 80%;
    height: 80px;
    margin: 10px auto;
  }
  .healthBar{
    background-color: #5cb85c;
    width: 80%;
    height: 80px;
    transition: width 1s;
  }
  .button {
    width:220px;
    height: 100px;
    font-size: 22px;
  }
  .playerHighlight{
    background: #5bc0de;
  }
  .monsterHighlight {
    background-color: lightcoral;
  }
</style>
