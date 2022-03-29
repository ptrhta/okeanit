import { defineStore } from 'pinia'

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    newUsers: [],
    fetching: false
  }),
  getters: {
    results: state => state.newUsers,
    isFetching: state => state.fetching
  },
  actions: {
    async fetchNewUsers () {
      this.fetching = true
      const response = await fetch('https://jsonplaceholder.typicode.com/users/')
      try {
        const result = await response.json()
        this.newUsers = result
      } catch (err) {
        this.newUsers = []
        console.error('Error loading new Users:', err)
        return err
      }

      this.fetching = false
    }
  }
})
