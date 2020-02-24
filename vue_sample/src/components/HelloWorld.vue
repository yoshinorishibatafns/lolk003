<template>
  <div class="container">
    <h1>{{ msg }}{{ userName }}</h1>
    <div class="btn-toolbar">
      <div class="btn-group">
      <KbnButton
        :class=this.classes
        :disabled=false
        @click="goToSignUp"
      >
        新規登録
      </KbnButton>
      <KbnButton
        :class=this.classes
        :disabled=false
        @click="goToLogin"
      >
        ログイン
      </KbnButton>
      <KbnButton
        :class=this.classes
        :disabled=false
        @click="goToPage2"
      >
        Page2
      </KbnButton>
      </div>
    </div>
    <router-link to="/SignUp">新規登録</router-link>
    <router-link to="/Page2">Page2</router-link>
    <router-link to="/LoginView">ログイン</router-link>
  </div>
</template>

<script>
import KbnButton from './atoms/KbnButton'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'ようこそ',
      userNmae: '',
      classes: 'btn btn-primary text-white'
    }
  },
  components: {
    KbnButton
  },
  methods: {
    goToSignUp () {
      this.$router.push({
        name: 'SignUp'
      })
    },
    goToLogin () {
      this.$router.push({
        name: 'LoginView'
      })
    },
    goToPage2 () {
      this.$router.push({
        name: 'Page2'
      })
    }
  },
  created: function () {
    let userName = localStorage.getItem('token')
    // todo: 逆
    if (!userName) userName = 'ゲストさん'
    this.userName = userName
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
