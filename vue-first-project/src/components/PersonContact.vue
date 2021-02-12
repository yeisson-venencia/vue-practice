<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>
    <ul v-show="showDetails">
      <li><strong>Phone: </strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "email", "phone"],
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>
