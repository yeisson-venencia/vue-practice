<template>
  <li>
    <h2>{{ person.fullname }}</h2>
    <button @click="toggleDetails">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>
    <ul v-show="showDetails">
      <li><strong>Phone: </strong> {{ person.phone }}</li>
      <li><strong>Email:</strong> {{ person.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
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
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>
