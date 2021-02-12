function calculateDamage(min, max) {
  return min + Math.round((max - min) * Math.random());
}

function takeDamage(currentHealth, damage) {
  const newHealth = currentHealth - damage;
  if (newHealth < 0) {
    return 0;
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
    baseAttack(playerMinDamage, playerMaxDamage) {
      this.currentRound++;

      const playerDamage = calculateDamage(playerMinDamage, playerMaxDamage);
      const monsterDamage = calculateDamage(7, 15);

      this.monsterHealth = takeDamage(this.monsterHealth, playerDamage);

      this.playerHealth = takeDamage(this.playerHealth, monsterDamage);
    },
    attack() {
      this.baseAttack(5, 10);
    },
    specialAttack() {
      this.baseAttack(10, 20);
    },
  },
});

app.mount("#game");
