<template>
  <div id="login">
    <div class="row">
      <label>用户名</label>
      <input @focus="refresh('username')" type="text" v-model="username" />
    </div>
    <div class="row">
      <label>密码</label>
      <input @focus="refresh('password')" type="password" v-model="password" />
    </div>
    <div class="row">
      <button @click="login">登录</button>
    </div>
    <div class="row" v-if="fail">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        fail: false,
        error: ''
      }
    },
    methods: {
      login: function() {
        if (this.username === '' || this.password === '') {
          this.error = '请填完所有信息';
        } else {
          this.username === 'cocoder' && this.password === 'cocoder' ? this.$store.commit('login') : this.error = '用户名或密码有误';
        }

        if (this.error !== '') {
          this.fail = true;
        } else {
          this.$router.push('/news/doc');
        }
      },
      refresh: function(type) {
        this.error = '';
        this.fail = false;
        type === 'username' ? this.username = '' : this.password = '';
      }
    }
  }
</script>

<style>
  #login {
    margin-top: 2rem;
  }

  .row {
    margin: 1rem auto;
  }

  .row label,
  .row input {
    display: inline-block;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
    font-family: inherit;
    text-align: left;
  }

  .row label {
    width: 6rem;
  }

  .row input {
    width: 12rem;
    border-radius: .2rem;
    z-index: 998;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }

  .row button {
    display: block;
    margin: 0 auto;
    background-color: #03a9f4;
    padding: .5rem 1.5rem;
    border: none;
    color: #fff;
    font-family: inherit;
    font-size: 1rem;
    border-radius: .3rem;
    cursor: pointer;

    z-index: 998;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
  }
</style>