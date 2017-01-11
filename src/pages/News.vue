<template>
  <div id="news">
    <page-menu></page-menu>

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <ul class="content">
      <li class="news-item" v-for="item in news">
        <router-link :to="'/news/' + $route.params.type + '/' + item.id">
          <span>{{ item.title }}</span>
          <span>{{ item.date }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import PageMenu from '../components/PageMenu.vue'

  export default {
    components: {
      PageMenu
    },
    data () {
      return {
        loading: false,
        post: null,
        error: null
      }
    },
    computed: {
      news() {
        return this.$store.state.lists[this.$route.params.type];
      },
      totalPage() {
        return this.$store.state.totalPage;
      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        // this.error = this.post = null
        // this.loading = true

        // replace getPost with your data fetching util / API wrapper
        // getPost(this.$route.params.id, (err, post) => {
        //   this.loading = false
        //   if (err) {
        //     this.error = err.toString()
        //   } else {
        //     this.post = post
        //   }
        // })
        
        this.$store.dispatch('fetchListData', {
          type: this.$route.params.type
        });
      }
    }
  }
</script>

<style>
  #news {
    margin: 1rem 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .content {
    margin: 4rem 1rem;
  }

  .news-item {
    list-style: none;
    background-color: #fff;
    padding: 1rem 1rem;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    /*position: relative;*/
    /*line-height: 20px;*/
  }
</style>