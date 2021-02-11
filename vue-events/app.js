const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      userName: "",
      confirmedName: "",
    };
  },
  computed: {
    fullName() {
      if (this.userName === "") {
        return "";
      }
      return this.userName + " " + "Venencia";
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
