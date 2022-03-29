<script setup lang="ts">
import { useUsersStore } from "../stores/Users";
</script>

<template>
  <v-list>
    <v-row class="btns" justify="space-between">
      <v-list-subheader>Users</v-list-subheader>
      <v-btn link :to="'/'"> All posts </v-btn>
    </v-row>
    <v-list-item
      v-for="(user, i) in newUsers"
      :key="i"
      :value="user.name"
      active-color="primary"
      outlined
      link
      :to="'/users/' + user.id"
    >
      <v-list-item-avatar start class="mr-4">
        <v-avatar color="primary" size="38">
          <span class="white--text text-h5">{{ user.name[0] }}</span>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-title v-text="user.name"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.btns {
  margin: 8px;
}
</style>

<script lang="ts">
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(useUsersStore, { newUsers: "results" }),
  },

  methods: {
    ...mapActions(useUsersStore, ["fetchNewUsers"]),
  },

  created() {
    this.fetchNewUsers();
  },
};
</script>