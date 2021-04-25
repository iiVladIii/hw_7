import axios from 'axios'

const state = {
  posts: [],
  post: null,
  Id: 0,
  date: 0,
  body: '',
  title: '',
  author: '',
  id: 0
}
const getters = {}
const mutations = {
  SET_POSTS (state, payload) {
    state.posts = payload
  },
  SET_POST (state, payload) {
    state.post = payload
  },
  editData (state, id) {
    this.state.id = id
  },
  editBody (state, body) {
    this.state.body = body
  },
  editTitle (state, title) {
    this.state.title = title
  },
  editDate (state, date) {
    this.state.date = date
  },
  authorNewPost (state, author) {
    this.state.author = author
    axios
      .post('http://localhost:3000/posts/', {
        id: '',
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        date: this.state.date
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  editAuthor (state, author) {
    this.state.author = author
    axios
      .put(`http://localhost:3000/posts/${this.state.id}`, {
        id: this.state.id,
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        date: this.state.date
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  deletePost () {
    axios
      .delete(`http://localhost:3000/posts/${this.state.id}`, {
        id: this.state.id,
        body: this.state.body,
        title: this.state.title,
        author: this.state.author,
        date: this.state.date
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    alert('Пост Удалён')
  }
}
const actions = {
  loadPosts ({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('http://localhost:3000/posts')
        .then(response => {
          commit('SET_POSTS', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  loadPost ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/posts/${id}`)
        .then(response => {
          commit('SET_POST', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
