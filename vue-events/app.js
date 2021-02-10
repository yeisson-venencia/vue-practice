const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: "",
      confirmedName: "",
      stringAmount: 1,
    };
  },
  computed: {
    amount() {
      return parseInt(this.stringAmount);
    },
  },
  methods: {
    confirmName() {
      this.confirmedName = this.userName;
    },
    add() {
      this.counter += this.amount;
    },
    reduce() {
      this.counter -= this.amount;
    },
    submitForm() {
      alert("Submitted");
    },
    changeName(event, lastName) {
      this.userName = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
