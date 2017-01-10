<template>
  <div class="news-list-nav">
    <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">&lt; prev</router-link>
    <a v-else class="disabled">&lt; prev</a>
    <span>{{ page }}/{{ maxPage }}</span>
    <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
    <a v-else class="disabled">more &gt;</a>
  </div>
</template>

<script>
  export default {
    computed: {
      type () {
        return this.$route.params.type;
      },
      page () {
        // return Number(this.$store.state.route.params.page) || 1
        return 1;
      },
      maxPage () {
        // const { itemsPerPage, lists } = this.$store.state
        // return Math.ceil(lists[this.type].length / itemsPerPage)
        return 6;
      },
      hasMore () {
        return this.page < this.maxPage
      }
    },
  }
</script>

<style>
  .news-list-nav {
    padding: 1rem 2rem;
    position: fixed;
    top: 3.5rem;
    left: 0;
    right: 0;
    z-index: 998;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    background-color: #fff;
    border-radius: 2px;
  }
</style>