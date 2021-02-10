const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    showAlert() {
      alert("Showing my alert!!!");
    },
  },
});

app.mount("#assignment");
