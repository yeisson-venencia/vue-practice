import { createApp } from "vue";

import App from "./App.vue";
import PersonContact from "./components/PersonContact.vue";
import AddPerson from "./components/AddPerson.vue";

const app = createApp(App);

app.component("person-contact", PersonContact);
app.component("add-person", AddPerson);

app.mount("#app");
