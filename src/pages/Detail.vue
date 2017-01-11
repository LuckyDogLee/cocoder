<template>
  <div id="detail">
    <h1>{{ title }}</h1>
    <span>{{ date }}</span>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      title() {
        return this.$store.state.activeNews.title;
      },
      date() {
        return this.$store.state.activeNews.date;
      },
      content() {
        return this.$store.state.activeNews.content;
      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.$store.dispatch('fetchActiveNews', {
        type: this.$route.params.type,
        id: this.$route.params.id
      });
    }
  }
</script>

<style>
</style>