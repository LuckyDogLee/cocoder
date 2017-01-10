<template>
  <div id="app">
    <h1>Hello Cocoder!</h1>
    <button @click="load">Load</button>
    <span>{{ cnode.ask }}</span>
  </div>
</template>

<script>
  import axios from 'axios';

  let cnode = {
    ask: 'loading'
  };

  export default {
    data: function() {
      return {
        cnode: cnode
      }
    },
    methods: {
      load: function() {
        axios.get('/api/v1/topics?page=168&limit=40&tab=ask')
          .then(function (response) {
             console.log(response);
             cnode.ask = response;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
</style>