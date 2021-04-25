import axios from 'axios'

const state = {
  comments: [],
  comment: null,
  post: null,
  postid: 0
}
const getters = {}
const mutations = {
  takePostId (state, i) {
    this.state.postid = i
    console.log(this.state.postid)
  },
  SET_COMMENTS (state, payload) {
    state.comments = payload
  },
  SET_COMMENT (state, payload) {
    state.comment = payload
  },
  editData1 (state, id) {
    this.state.id = id
    this.state.lalalala = id
    console.log(this.state.id)
    console.log(this.state.lalalala)
  },
  editBody1 (state, body) {
    this.state.body = body
  },
  editTitle1 (state, title) {
    this.state.title = title
  },
  editDate1 (state, date) {
    this.state.date = date
  },
  editAuthorforComments (state, author) {
    this.state.author = author
    axios
      .put(`http://localhost:3000/comments${this.state.postid}/${this.state.id}`, {
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
  authorNewComment (state, author) {
    this.state.author = author
    axios
      .post(`http://localhost:3000/comments${this.state.postid}`, {
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
  deleteComment (state, i) {
    console.log(i)
    console.log(this.state.postid)
    axios
      .delete(`http://localhost:3000/comments${this.state.postid}/${i}`, {
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
  loadComments ({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/comments${this.state.postid}`)
        .then(response => {
          commit('SET_COMMENTS', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  loadComment ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/comments${this.state.postid}/${id}`)
        .then(response => {
          commit('SET_COMMENT', response.data)
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
