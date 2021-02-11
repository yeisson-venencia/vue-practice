const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      showTask: true,
    };
  },
  computed: {
    buttonCaption() {
      if (this.showTask) {
        return "Hide list";
      }
      return "Show list";
    },
  },
  methods: {
    addTask() {
      if (this.enteredTask) {
        this.tasks.push(this.enteredTask);
      }
    },
    switchListVisibility() {
      this.showTask = !this.showTask;
    },
  },
});

app.mount("#assignment");
