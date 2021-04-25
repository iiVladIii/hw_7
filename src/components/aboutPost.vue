<template>
  <div id="container" style="height: 1200px;">
    <div id="header">
      <h2>Information about post</h2>
    </div>
    <div id="sidebar">
      <div class="sidebar__text">
        <router-link to="/">Menu</router-link> <br>
        <button class="button__sidebar" @click="createWindow = !createWindow">Create</button>
      </div>
    </div>
    <div v-if="createWindow">
      <div class="create__post">
        Title: <input v-model="title"/><br>
        Author: <input v-model="author"/><br>
        Text: <textarea v-model="text" style="height: 50px; width: 300px"/><br>
        Date: <input type="date" v-model="date"/><br>
        <button class="button_access" @click="createWindow = !createWindow, editBody(text),editDate(date),editTitle(title), authorNewPost(author)">Confirm</button>
      </div>
    </div>
      <div id="content" style="height: 1000px" v-if="post">
        <div class="about__post" style="margin-top: 100px">
          <p>
          Title: {{ post.title }}<br>
        Author: {{ post.author }} <br>
        Text: {{ post.body }}<br>
        Date: {{ post.date }}<br>
        id: {{ post.id }}
          </p>
        </div>
        <div class="edit_post" v-if="edit">
        Title: <input v-model="post.title"/><br>
        Author: <input v-model="post.author"/><br>
        Text: <textarea v-model="post.body" style="height: 50px; width: 300px"/><br>
        Date: <input type="date" v-model="post.date"/><br>
        <button class="button_access" @click="edit= !edit, editData(post.id), editBody(post.body), editTitle(post.title), editDate(post.date), editAuthor(post.author)">Access</button><br><br>
        </div>
        <button class="button_edit" @click="edit= !edit">Edit</button> <button class="button_delete" @click="editData(post.id), deletePost()">Delete</button>
        <div class="comments">
          <h3>Comments</h3>
          <div class="comments__div" v-for="comment in comments" :key="comment.id" @click="loadComment(comment.id)"><br>
            {{ comment.author }}: {{ comment.body }} <br> {{comment.date}}<br>
            <button class="button_edit" @click="editComment = !editComment, loadComment(comment.id)">edit</button>
            <button class="button_delete" @click="deleteComment(comment.id)">delete</button>
          </div>
          <div v-if="editComment" class="comments__div">
            <div>
            Author: <input v-model="comment.author"/><br>
            Text: <input v-model="comment.body"/><br>
            Date: <input type="date" v-model="comment.date"/><br>
              <button class="button_access" @click="editComment = !editComment, editData1(comment.id), editBody1(comment.body), editDate1(comment.date), editAuthorForComments(comment.author)">confirm</button>
            </div>
          </div><br>
          <button class="button_access" @click="createComment = !createComment">Create new comment</button><br><br>
          <div class="create__comment" v-if="createComment"><br>
            Author: <input v-model="author"/><br>
            Text: <input v-model="body"/><br>
            Date: <input type="date" v-model="date"/><br><br>
            <button class="button_access" @click="createComment = !createComment, editBody1(body), editDate1(date), authorNewComment(author)">Confirm</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'aboutPost',
  data () {
    return {
      createComment: false,
      editComment: false,
      createWindow: false,
      date: '',
      text: '',
      author: '',
      title: '',
      edit: false,
      body: ''
    }
  },
  computed: {
    ...mapState({
      post: state => state.posts.post,
      comments: state => state.comments.comments,
      comment: state => state.comments.comment
    })
  },
  methods: {
    ...mapMutations({
      editBody: 'posts/editBody',
      editAuthor: 'posts/editAuthor',
      editTitle: 'posts/editTitle',
      editData: 'posts/editData',
      editDate: 'posts/editDate',
      editData1: 'posts/editData',
      editBody1: 'posts/editBody',
      editTitle1: 'posts/editTitle',
      editDate1: 'posts/editDate',
      editAuthor1: 'posts/editAuthor',
      deletePost: 'posts/deletePost',
      authorNewPost: 'posts/authorNewPost',
      takePostId: 'comments/takePostId',
      editAuthorForComments: 'comments/editAuthorforComments',
      authorNewComment: 'comments/authorNewComment',
      deleteComment: 'comments/deleteComment'
    }),
    ...mapActions({
      loadComments: 'comments/loadComments',
      loadComment: 'comments/loadComment'
    })
  },
  mounted () {
    this.loadComments()
  }
}
</script>

<style scoped>

</style>
