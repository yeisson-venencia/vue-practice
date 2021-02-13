<template>
  <div class="add-person">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="tel" v-model="phone" />
    </div>
    <div>
      <label for="">E-mail</label>
      <input type="email" v-model="email" />
    </div>
    <button @click="addPerson">Add Person</button>
  </div>
</template>

<script>
export default {
  emits: ["add-person"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addPerson() {
      if (this.validatePerson()) {
        this.$emit("add-person", this.name, this.phone, this.email);
        this.clearPanel();
      } else {
        alert("Missing data to add person");
      }
    },
    validatePerson() {
      if (this.name && this.phone && this.email) {
        return true;
      }
      return false;
    },
    clearPanel() {
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>
