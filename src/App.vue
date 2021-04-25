<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.next_previous_button{
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #5eb6ec;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #c9c9c9;
}
.next_previous_button:hover {background-color: #42daff
}
.next_previous_button:active {
  background-color: #60c7f5;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.button_edit {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #5eb6ec;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #c9c9c9;
}
.button_edit:hover {background-color: #42daff
}
.button_edit:active {
  background-color: #60c7f5;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.button_delete {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #5eb6ec;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #c9c9c9;
}
.button_delete:hover {background-color: #ff4242
}
.button_delete:active {
  background-color: #ff4242;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.button_access {
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #5eb6ec;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #c9c9c9;
}
.button_access:hover {background-color: #42ffa7
}
.button_access:active {
  background-color: #42ffa7;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.create__post {
  width: 800px;
  height: 215px;
  border: black solid 2px;
  border-radius: 80px;
  font-size: 25px;
  text-align: center;
  margin-left: 450px;
  .button_access {
    display: inline-block;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #fab300;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #c9c9c9;
  }
  .button_access:hover {background-color: #42ffa7
  }
  .button_access:active {
    background-color: #42ffa7;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
}
.comments {
  font-size: 25px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  .create__comment{
    border: black solid 2px;
    border-radius: 40px;
    margin-left: 400px;
    font-size: 20px;
    background-color: #FE9798;
    width: 350px;
    height: 200px;
  }
  .comments__div{
    border: black solid 2px;
    border-radius: 40px;
    margin-left: 400px;
    font-size: 20px;
    background-color: #FE9798;
    width: 350px;
    height: 150px;
  }
  margin-top: 80px;
  .comments__div{
    color: black;
  }
}
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#container {
  background: #37a7ff;
  margin: auto auto;
  text-align: center;
  width: 1420px;
  height: 800px;
}

#header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #8ae6ee;
  width: 100%;
  height: 55px;
}

#content {
  .about__post{
    font-size: 20px;
    border: black solid 2px;
    margin-top: 50px;
    border-radius: 40px;
    font-size: 25px;
    text-align: left;
  }
  .edit_post{
    height: 200px;
    width: 500px;
    border: black solid 2px;
    margin-left: 315px;
    margin-top: 15px;
    border-radius: 40px;
    background-color: #FE9798;
  }
  .post{
    border: black solid 2px;
    margin-top: 15px;
    border-radius: 40px;
    cursor: pointer;
  }
  p {
    margin-left: 80px;
  }
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #7448ff;
  float: right;
  width: 80%;
  height: 650px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #00BFFF;

    &.router-link-exact-active {
      color: #ffffff;
      text-decoration: underline;
    }
  }
}

#clear {
  clear: both;
}

#footer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #0088ff;
  width: 100%;
  height: 40px;
}

#navigation {
  background: #FE9798;
  width: 100%;
  height: 25px;
}

#sidebar {
  .button__sidebar {
    outline: none;
    background: transparent;
    border: none !important;
    font-size: 20px;
    color: #00BFFF;
  }
  .button__sidebar:hover{
    color: white;
  }
  background: #4043e0;
  float: left;
  width: 20%;
  height: 300px;
  .sidebar__text {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 20px;
    color: white;
    a {
      text-decoration: none;
      font-weight: bold;
      color: #00BFFF;

      &.router-link-exact-active {
        color: #ffffff;
        text-decoration: underline;
      }
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
