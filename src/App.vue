<script setup lang="ts">
import Users from "@/components/Users.vue";
</script>


<template>
  <v-app>
    <v-navigation-drawer>
      <Users />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
