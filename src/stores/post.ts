import { defineStore } from 'pinia'

const defaultPost = {
    userId: '',
    id: '',
    title: '',
    body: ''
}

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    post: defaultPost,
    fetching: false
  }),
  getters: {
    results: state => state.post,
    isFetching: state => state.fetching
  },
  actions: {
    async fetchNewPost (postId: string | null) {
      this.fetching = true
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      try {
        const result = await response.json()
        this.post = result
      } catch (err) {
        this.post = defaultPost
        console.error('Error loading new post:', err)
        return err
      }

      this.fetching = false
    }
  }
})
