import { createApp } from "vue";

import App from "./App.vue";
import PersonContact from "./components/PersonContact.vue";

const app = createApp(App);

app.component("person-contact", PersonContact);

app.mount("#app");
