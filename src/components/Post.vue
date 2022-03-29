<script setup lang="ts">
import User from "@/components/User.vue";
import Comments from "@/components/Comments.vue";
import { usePostStore } from "../stores/post";
</script>

<template>
  <div v-if="post.id">
    <User :userId="post.userId" />
    <v-card :loading="fetching" :key="post.id" outlined tile class="mb-8">
      <v-card-text>
        <p class="text-h4 text--primary">
          {{ post.title }}
        </p>
        <p class="text--primary">
          {{ post.body }}
        </p>
      </v-card-text>
    </v-card>
    <Comments :postId="post.id" />
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(usePostStore, { post: "results", fetching: "isFetching" }),
  },

  methods: {
    ...mapActions(usePostStore, ["fetchNewPost"]),
  },

  created() {
    const postId = this.$route.params.id ? this.$route.params.id + "" : null;
    this.fetchNewPost(postId);
  },
};
</script>