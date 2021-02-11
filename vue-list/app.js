const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal) {
        this.goals.push(this.enteredGoal);
      }
    },
  },
});

app.mount("#user-goals");
