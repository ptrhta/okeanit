<script setup lang="ts">
import { usePostsStore } from "../stores/posts";
</script>

<template>
  <v-card :loading="fetching" v-for="post in newPosts" :key="post.id" outlined tile class="mb-4">
    <v-card-text>
      <p class="text-h4 text--primary">
        {{ post.title }}
      </p>
      <p class="text--primary">
        {{ post.body }}
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn link color="deep-purple accent-4" :to="'/posts/' + post.id">
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(usePostsStore, { newPosts: "results", fetching: "isFetching" }),
  },

  methods: {
    ...mapActions(usePostsStore, ["fetchNewPosts"]),
  },

  watch: {
    $route(to, from) {
      if (to !== from) {
        const userId = this.$route.params.id
          ? this.$route.params.id + ""
          : null;
        this.fetchNewPosts(userId);
      }
    },
  },

  created() {
    const userId = this.$route.params.id ? this.$route.params.id + "" : null;
    this.fetchNewPosts(userId);
  },
};
</script>