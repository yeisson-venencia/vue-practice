function getRandomValue(min, max) {
  return min + Math.round((max - min) * Math.random());
}

function takeDamage(currentHealth, damage) {
  const newHealth = currentHealth - damage;
  if (newHealth < 0) {
    return 0;
  }
  return newHealth;
}

function takeHeal(currentHealth, heal) {
  const newHealth = currentHealth + heal;
  if (newHealth > 100) {
    return 100;
  }
  return newHealth;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      gameOver: false,
      endMessage: null,
      log: [],
    };
  },
  computed: {
    monsterBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerBar() {
      return { width: this.playerHealth + "%" };
    },
    specialAttackActive() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value === 0) {
        this.gameOver = true;
        if (this.monsterHealth === 0) {
          // draw
          this.endMessage = "It's a draw";
        } else {
          // lose
          this.endMessage = "You lost :(";
        }
      }
    },
    monsterHealth(value) {
      if (value === 0) {
        this.gameOver = true;
        if (this.playerHealth === 0) {
          // draw
          this.endMessage = "It's a draw";
        } else {
          // win
          this.endMessage = "You are the WINNER!!";
        }
      }
    },
  },
  methods: {
    playerAttack(playerMinDamage, playerMaxDamage, attackType) {
      const playerDamage = getRandomValue(playerMinDamage, playerMaxDamage);
      this.monsterHealth = takeDamage(this.monsterHealth, playerDamage);
      this.addLogMessage("Player", attackType, playerDamage);
    },
    monsterAttack() {
      const monsterDamage = getRandomValue(7, 15);
      this.playerHealth = takeDamage(this.playerHealth, monsterDamage);
      this.addLogMessage("Monster", "Attack", monsterDamage);
    },
    attack() {
      this.currentRound++;
      this.playerAttack(5, 10, "attack");
      this.monsterAttack();
    },
    specialAttack() {
      this.currentRound++;
      this.playerAttack(10, 20, "special-attack");
      this.monsterAttack();
    },
    healPlayer() {
      this.currentRound++;
      const value = getRandomValue(8, 20);
      this.playerHealth = takeHeal(this.playerHealth, value);
      this.addLogMessage("Player", "heal", value);
      this.monsterAttack();
    },
    startNewGame() {
      this.currentRound = 0;
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.gameOver = false;
      this.log = [];
    },
    surrender() {
      this.playerHealth = 0;
    },
    addLogMessage(who, what, value) {
      this.log.unshift({
        who: who,
        what: what,
        value: value,
      });
    },
  },
});

app.mount("#game");
