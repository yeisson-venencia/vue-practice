const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number > 37) {
        return "Too much!";
      } else {
        return 37;
      }
    },
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
