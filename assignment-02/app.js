const app = Vue.createApp({
  data() {
    return {
      firstInput: "",
      secondInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Showing my alert!!!");
    },
    manageFirstInput(event) {
      this.firstInput = event.target.value;
    },
    showSecondInput(event) {
      this.secondInput = event.target.value;
    },
  },
});

app.mount("#assignment");
