<template>
  <section>
    <header><h1>My friends</h1></header>
    <add-person @add-person="addPerson"></add-person>
    <ul>
      <person-contact
        v-for="person in persons"
        :key="person.id"
        :id="person.id"
        :name="person.fullname"
        :email="person.email"
        :phone="person.phone"
        :is-favorite="person.isFavorite"
        @change-favorite-status="changeFavoriteStatus"
      ></person-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentId: 3,
      persons: [
        {
          id: 1,
          fullname: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: 2,
          fullname: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    changeFavoriteStatus(personID) {
      const person = this.persons.find((friend) => friend.id === personID);
      person.isFavorite = !person.isFavorite;
    },
    addPerson(name, phone, email) {
      const newPerson = {
        id: this.currentId,
        fullname: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.currentId++;
      this.persons.unshift(newPerson);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
.add-person {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
