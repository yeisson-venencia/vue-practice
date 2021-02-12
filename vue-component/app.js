const app = Vue.createApp({
  data() {
    return {
      persons: [
        {
          id: 1,
          fullname: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: 2,
          fullname: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("person-contact", {
  template: `
    <li>
        <h2>{{person.fullname}}</h2>
        <button @click="changeVisibility()">
        {{ showDetails ? 'Hide' : 'Show'}} Details
        </button>
        <ul v-show="showDetails">
        <li><strong>Phone:</strong> {{ person.phone }}</li>
        <li><strong>Email:</strong> {{ person.email }}</li>
        </ul>
    </li>
  `,
  data() {
    return {
      showDetails: false,
      person: {
        id: 1,
        fullname: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    changeVisibility() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount("#app");
