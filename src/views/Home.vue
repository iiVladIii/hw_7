<template>
  <div id="container">
    <div id="header">
      <h2>Страница с постами</h2>
    </div>
    <div id="sidebar">
      <div class="sidebar__text">
        <router-link to="/">Menu</router-link> <br>
       <button class="button__sidebar" @click="createWindow()"><router-link to="/post/about">Добавить свой пост</router-link></button>
      </div>
    </div>
    <div id="content">
      <router-link to="/post/about"><div class="post" v-for="post in paginatedData" :key="post.id" @click="loadPost(post.id), takePostId(post.id)">
        <h4>{{ post.title }}</h4>
        <p>{{ post.author }}: {{ post.body }}</p>
      </div></router-link>
    </div>
    <div id="clear">
      <div style="margin-left: 20%">
        <br>
      <button class="next_previous_button" @click="prevPage">
        Previous
      </button>
      <button class="next_previous_button" @click="nextPage">
        Next
      </button>
      </div>
    </div>
    <div id="footer">
      <h2><a href="http://instagram.com/i_vladi_i">Instagram Creator Page</a></h2>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      pageNumber: 0
    }
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    ...mapState({
      post: state => state.posts.post,
      posts: state => state.posts.posts
    }),
    pageCount () { // Добавил
      const l = this.posts.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.posts.slice(start, end)
    }
  },
  methods: {
    nextPage () { // добавил
      this.pageNumber++
    },
    prevPage () {
      this.pageNumber--
    }, // пагинация
    ...mapActions({
      loadPosts: 'posts/loadPosts',
      loadPost: 'posts/loadPost'
    }),
    ...mapMutations({
      takePostId: 'comments/takePostId'
    })
  },
  mounted () {
    this.loadPosts()
  }
}
</script>
