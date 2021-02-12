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
      monsterMinAttack: 7,
      monsterMaxAttack: 15,
      playerHealth: 100,
      playerMinAttack: 3,
      playerMaxAttack: 10,
    };
  },
  computed: {
    monsterBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerBar() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attack() {
      const playerDamage = calculateDamage(
        this.playerMinAttack,
        this.playerMaxAttack
      );
      const monsterDamage = calculateDamage(
        this.monsterMinAttack,
        this.monsterMaxAttack
      );

      this.monsterHealth = takeDamage(this.monsterHealth, playerDamage);

      this.playerHealth = takeDamage(this.playerHealth, monsterDamage);
    },
  },
});

app.mount("#game");
