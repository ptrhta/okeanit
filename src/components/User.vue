<script setup lang="ts">
import { useUserStore } from "../stores/user";
</script>

<template>
  <v-card :key="user.id" outlined tile class="mb-4">
    <v-card-text>
      <p class="text-h5 text--primary mb-2">
        {{ user.name }}
      </p>
      <p class="text--primary mb-2">
        @{{ user.username }}, {{ user.company.name }}
      </p>
      <p class="text--primary mb-2">
        <v-icon large color="teal darken-2" class="mr-2"> mdi-email </v-icon
        ><a :href="'mailto:' + user.email">{{ user.email }}</a>
      </p>
      <p class="text--primary mb-2">
        <v-icon large color="teal darken-2" class="mr-2"> mdi-phone </v-icon
        ><a :href="'tel:' + user.phone">{{ user.phone }}</a>
      </p>
      <p class="text--primary mb-2">
        <v-icon large color="teal darken-2" class="mr-2"> mdi-domain </v-icon
        ><a :href="user.website">{{ user.website }}</a>
      </p>
      <p class="text--primary mb-2">
        <v-icon large color="teal darken-2" class="mr-2"> mdi-map </v-icon
        >{{ user.address.city }}, {{ user.address.street }},
        {{ user.address.suite }}, {{ user.address.zipcode }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { mapState, mapActions } from "pinia";

export default {
  props: {
    userId: Number,
  },

  computed: {
    ...mapState(useUserStore, { user: "results" }),
  },

  methods: {
    ...mapActions(useUserStore, ["fetchNewUser"]),
  },

  watch: {
    userId: {
      handler: function () {
        this.fetchNewUser(this.userId || null);
      },
      immediate: true,
    },
  },
};
</script>