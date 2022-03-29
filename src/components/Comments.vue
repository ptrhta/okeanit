<script setup lang="ts">
import { useCommentsStore } from "../stores/comments";
</script>

<template>
  <v-list-header>Comments</v-list-header>
  <v-list three-line>
    <template v-for="comment in comments" :key="comment.id">
      <v-list-item>
        <v-list-item-content>
          <p class="text--primary mb-2">
            <v-icon small color="teal darken-2" class="mr-2"> mdi-email </v-icon
            >{{ comment.email }}
          </p>
          <v-list-item-title class="mb-2">{{ comment.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ comment.body }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </template>
  </v-list>
</template>

<script lang="ts">
import { mapState, mapActions } from "pinia";

export default {
  props: {
    postId: Number,
  },

  computed: {
    ...mapState(useCommentsStore, { comments: "results" }),
  },

  methods: {
    ...mapActions(useCommentsStore, ["fetchNewComments"]),
  },

  watch: {
    postId: {
      handler: function () {
        this.fetchNewComments(this.postId || null);
      },
      immediate: true,
    },
  },
};
</script>