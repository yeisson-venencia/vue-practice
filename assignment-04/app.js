const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      showElement: true,
    };
  },
  computed: {
    paraStyle() {
      return { visible: this.showElement, hidden: !this.showElement };
    },
  },
  methods: {
    changeVisibility() {
      this.showElement = !this.showElement;
    },
  },
});

app.mount("#assignment");
