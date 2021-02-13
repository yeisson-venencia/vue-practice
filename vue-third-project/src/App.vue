<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["another"] }}</p>
      </template>
    </course-goals>
    <br />
    <active-goals></active-goals>
    <manage-goals></manage-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import BadgeList from "./components/BadgeList";
import UserInfo from "./components/UserInfo";
import CourseGoals from "./components/CourseGoals";
import ManageGoals from "./components/ManageGoals";
import ActiveGoals from "./components/ActiveGoals";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
