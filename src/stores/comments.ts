import { defineStore } from 'pinia'

const defaultComments = [{
    postId: '',
    id: '',
    name: "",
    email: "",
    body: ""
  }]

export const useCommentsStore = defineStore({
  id: 'comments',
  state: () => ({
    comments: defaultComments,
    fetching: false
  }),
  getters: {
    results: state => state.comments,
    isFetching: state => state.fetching
  },
  actions: {
    async fetchNewComments (postId:number | null) {
      this.fetching = true
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      )
      try {
        const result = await response.json()
        this.comments = result
      } catch (err) {
        this.comments = defaultComments
        console.error('Error loading new User:', err)
        return err
      }

      this.fetching = false
    }
  }
})
