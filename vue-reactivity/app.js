const app = Vue.createApp({
  data() {
    return {
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
    console.log("this.message :>> ", this.message);
  },
  created() {
    console.log("created()");
    console.log("this.message :>> ", this.message);
  },
  beforeMount() {
    console.log("beforeMount()");
    console.log("this.message :>> ", this.message);
  },
  mounted() {
    console.log("mounted()");
    console.log("this.message :>> ", this.message);
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
    console.log("this.message :>> ", this.message);
    console.dir(
      "this.$refs.paraText.textContent :>> ",
      this.$refs.paraText.textContent
    );
  },
  updated() {
    console.log("updated()");
    console.log("this.message :>> ", this.message);
    console.dir(
      "this.$refs.paraText.textContent :>> ",
      this.$refs.paraText.textContent
    );
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
  <p>{{favoriteMeal}}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted");
  },
});

app2.mount("#app2");

setTimeout(() => {
  app2.unmount();
}, 3000);
