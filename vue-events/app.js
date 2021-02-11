const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      userName: "",
      confirmedName: "",
    };
  },
  computed: {
    amount() {
      return parseInt(this.stringAmount);
    },
  },
  methods: {
    changeName(event) {
      this.userName = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.userName;
    },
    resetName() {
      this.userName = "";
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    submitForm() {
      alert("Submitted");
    },
  },
});

app.mount("#events");
