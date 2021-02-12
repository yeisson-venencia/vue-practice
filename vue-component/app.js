const app = Vue.createApp({
  data() {
    return {
      persons: [
        {
          id: 1,
          fullname: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          show: true,
        },
        {
          id: 2,
          fullname: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          show: true,
        },
      ],
    };
  },
  methods: {
    changeVisibility(person) {
      person.show = !person.show;
    },
  },
});

app.mount("#app");
