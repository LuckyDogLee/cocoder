<template>
  <div id="register">
    <div class="row">
      <label>用户名</label>
      <input type="text" v-model="username" @focus="refresh('username')" />
    </div>
    <div class="row">
      <label>密码 </label>
      <input type="password" v-model="password0" @focus="refresh('password0')" />
    </div>
    <div class="row">
      <label>确认密码 </label>
      <input type="password" v-model="password1" @focus="refresh('password1')" />
    </div>
    <div class="row">
      <button @click="register">注册</button>
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
        username: '',
        password0: '',
        password1: '',
        fail: false,
        error: '',
        error0: '请填完所有信息',
        error1: '您前后输入的密码不一致',
      }
    },
    methods: {
      register: function() {
        if (this.username === '' || this.password0 === '' || this.password1 === '') {
          this.error = this.error0;
        } else if(this.password0 !== this.password1) {
          this.error = this.error1;
        }

        if (this.error === '') {
          this.$store.commit('login');
          this.$router.push('/news/doc');
        } else {
          this.fail = true;
        }
      },
      refresh: function(type) {
        this.error = '';
        this.fail = false;
        if (type === 'username') {
          this.username = '';
        } else if (type === 'password0') {
          this.password0 = '';
        } else {
          this.password1 = '';
        }
      }
    }
  }
</script>

<style>
  #register {
    margin-top: 2rem;
  }
</style>