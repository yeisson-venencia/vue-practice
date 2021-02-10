const app = Vue.createApp({
  data() {
    return {
      firstInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Showing my alert!!!");
    },
    manageFirstInput(event) {
      this.firstInput = event.target.value;
    },
  },
});

app.mount("#assignment");
