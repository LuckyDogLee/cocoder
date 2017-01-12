<template>
  <div id="add">
    <div class="row">
      <label>标题</label>
      <input type="text" v-model="title" @focus="refresh('title')" />
    </div>
    <div class="row">
      <label>类型</label>
      <select v-model="selected">
        <option>文档</option>
        <option>博客</option>
        <option>书籍</option>
        <option>视频</option>
        <option>项目</option>
      </select>
    </div>
    <div class="row">
      <label>内容</label>
      <textarea type="text" v-model="content" @focus="refresh('content')" ></textarea>
    </div>
    <div class="row">
      <button @click="add">添加</button>
    </div>
    <div class="row" v-if="fail">
      <p class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        content: '',
        fail: false,
        selected: '文档',
        error: '',
        error0: '请填完所有信息',
      }
    },
    beforeCreate() {
      if (!this.$store.state.hasLogin) {
        this.$router.push('/login');
      }
    },
    computed: {
      type() {
        switch(this.selected) {
          case '文档':
            return 'doc';
          case '博客':
            return 'blog';
          case '书籍':
            return 'book';
          case '视频':
            return 'video';
          case '项目':
            return 'project';
        }
      }
    },
    methods: {
      add: function() {
        if (this.title === '' || this.content === '') {
          this.error = this.error0;
        }

        if (this.error === '') {
          this.$store.commit('add', {
            title: this.title,
            type: this.type,
            content: this.content
          });
          this.$router.push('/news/' + this.type);
        } else {
          this.fail = true;
        }
      },
      refresh: function(type) {
        this.error = '';
        this.fail = false;
        if (type === 'title') {
          this.title = '';
        } else if (type === 'content') {
          this.content = '';
        }
      }
    }
  }
</script>

<style>
  #add {
    margin-top: 2rem;
  }

  .row select,
  .row textarea {
    width: 12rem;
    border-radius: .2rem;
    z-index: 998;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);

    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    /*font-size: 1.5rem;*/
    font-family: inherit;
    text-align: left;
  }

  .row textarea {
    height: 4.5rem;
  }
  
  .row label {
    vertical-align: top;
  }

  #add .row label {
    width: 4.5rem;
  }
</style>