<template>
  <!-- <div class="news-list-nav">
    <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">&lt; prev</router-link>
    <a v-else class="disabled">&lt; prev</a>
    <span>{{ page }}/{{ maxPage }}</span>
    <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more &gt;</router-link>
    <a v-else class="disabled">more &gt;</a>
  </div> -->

  <div class="news-list-nav">
    <a v-if="page > 1" @click="prev">&lt; prev</a>
    <a v-else class="disabled">&lt; prev</a>
    <span>{{ page }}/{{ maxPage }}</span>
    <a v-if="hasMore" @click="next">more &gt;</a>
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
        return this.$store.state.pageNo;
      },
      maxPage() {
        return this.$store.state.totalPage;
      },
      hasMore () {
        return this.page < this.maxPage
      }
    },
    methods: {
      prev: function() {
        this.$store.commit('decrement');
        this.$store.dispatch('fetchListData', {
          type: this.$route.params.type
        });
      },
      next: function() {
        this.$store.commit('increment');
        this.$store.dispatch('fetchListData', {
          type: this.$route.params.type
        });
      }
    }
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