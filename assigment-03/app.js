const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
