import { defineStore } from 'pinia'

const defaultUser = {
  id: '',
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: ''
    }
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: ''
  }
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: defaultUser,
    fetching: false
  }),
  getters: {
    results: state => state.user,
    isFetching: state => state.fetching
  },
  actions: {
    async fetchNewUser (userId:number | null) {
      this.fetching = true
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      )
      try {
        const result = await response.json()
        this.user = result
      } catch (err) {
        this.user = defaultUser
        console.error('Error loading new User:', err)
        return err
      }

      this.fetching = false
    }
  }
})
