<template>
  <div id="news">
    <page-menu></page-menu>

    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <ul v-if="post" class="content">
      <li class="news-item">
        <span>{{ post.title }}</span>
        <span>{{ post.body }}</span>
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
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
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
        
        this.post = {
          title: this.$route.params.type + ' title',
          body: this.$route.params.type + ' content'
        }
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