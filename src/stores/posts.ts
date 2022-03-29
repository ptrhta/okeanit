import { defineStore } from 'pinia'

export const usePostsStore = defineStore({
  id: 'posts',
  state: () => ({
    newPosts: [],
    fetching: false
  }),
  getters: {
    results: state => state.newPosts,
    isFetching: state => state.fetching
  },
  actions: {
    async fetchNewPosts (userId: string | null) {
      this.fetching = true
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts${userId ? '?userId=' + userId : ''}`)
      try {
        const result = await response.json()
        this.newPosts = result
      } catch (err) {
        this.newPosts = []
        console.error('Error loading new posts:', err)
        return err
      }

      this.fetching = false
    }
  }
})
