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
  methods: {
    playerAttack(playerMinDamage, playerMaxDamage) {
      const playerDamage = getRandomValue(playerMinDamage, playerMaxDamage);
      this.monsterHealth = takeDamage(this.monsterHealth, playerDamage);
    },
    monsterAttack() {
      const monsterDamage = getRandomValue(7, 15);
      this.playerHealth = takeDamage(this.playerHealth, monsterDamage);
    },
    attack() {
      this.currentRound++;
      this.playerAttack(5, 10);
      this.monsterAttack();
    },
    specialAttack() {
      this.currentRound++;
      this.playerAttack(10, 20);
      this.monsterAttack();
    },
    healPlayer() {
      this.currentRound++;
      const value = getRandomValue(8, 20);
      this.playerHealth = takeHeal(this.playerHealth, value);
      this.monsterAttack();
    },
  },
});

app.mount("#game");
