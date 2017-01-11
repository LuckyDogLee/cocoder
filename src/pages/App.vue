<template>
  <div id="app">
    <header>
      <h1>Cocoder</h1>
      <nav v-if="!this.$store.state.hasLogin">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
      </nav>
      <nav v-if="this.$store.state.hasLogin">
        <router-link to="/add" id="addIcon">+</router-link>
        <a @click="logout">登出</a>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <nav id="nav">
        <router-link to="/news/doc">文档</router-link>
        <router-link to="/news/blog">博客</router-link>
        <router-link to="/news/book">书籍</router-link>
        <router-link to="/news/video">视频</router-link>
        <router-link to="/news/project">项目</router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios';

  let cnode = {
    content: 'loading'
  };

  export default {
    data: function() {
      return {
        cnode: cnode
      }
    },
    methods: {
      logout: function() {
        this.$store.commit('logout');
        this.$router.push('/news/doc');
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    background-color: #f2f3f5;
    font-family: "Microsoft YaHei", sans-serif;
  }

  h1 {
    text-align: center;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
  }

  a:hover {
    font-weight: bolder;
  }

  #app header,
  #app main,
  #app footer {
    position: absolute;
    left: 0;
    right: 0;
  }

  #app header {
    top: 0;
    padding: .75rem 2rem;
    background-color: #03a9f4;
    color: #fff;
    vertical-align: middle;
    z-index: 998;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }

  #app header nav {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  #app main {
    margin-top: 1rem;
    top: 3.5rem;
    bottom: 3rem;
    overflow: auto;
    text-align: center;
  }

  #app footer {
    bottom: 0;
    padding: .75rem 0;
    background-color: #fff;
    z-index: 9999;
    border: 1px solid #bdbdbd;
    /*box-shadow: 0 1px 2px rgba(0,0,0,.1);*/
  }

  #app header h1 {
    height: 2rem;
    line-height: 2rem;
    font-size: 2rem;
  }

  #app footer nav {
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
    display: -webkit-flex; /* Safari */
    display: flex;
  }

  #app footer nav a {
    display: inline-block;
    max-width: 20%;
    color: grey;
    text-align: center;
    flex-grow: 1;
  }

  a.router-link-active {
    font-weight: bolder;
  }

  #app footer nav a.router-link-active {
    color: #03a9f4;
    font-weight: bolder;
  }

  #addIcon {
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
    padding-right: 1rem;
  }
</style>