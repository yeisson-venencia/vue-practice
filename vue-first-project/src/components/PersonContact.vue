<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>
    <button @click="changeFavoriteStatus">Favorite</button>
    <ul v-show="showDetails">
      <li><strong>Phone: </strong> {{ phone }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  /* props: ["name", "email", "phone", "isFavorite"], */
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      validator() {
        return true;
      },
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    changeFavoriteStatus() {
      this.$emit("change-favorite-status", this.id);
    },
  },
};
</script>
