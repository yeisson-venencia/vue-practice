const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: "",
      stringAmount: 1,
    };
  },
  computed: {
    amount() {
      return parseInt(this.stringAmount);
    },
  },
  methods: {
    add() {
      this.counter += this.amount;
    },
    reduce() {
      this.counter -= this.amount;
    },
    changeAmount(event) {},
    changeName(event) {
      this.userName = event.target.value;
    },
  },
});

app.mount("#events");
