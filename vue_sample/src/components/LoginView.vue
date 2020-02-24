<template>
  <div class="login-view">
    <KbnLoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import KbnLoginForm from './LoginForm'

export default {
  name: 'LoginView',

  components: {
    KbnLoginForm
  },

  methods: {
    handleLogin (authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/page2' })
        })
        .catch(err => this.throwReject(err))
    },
    throwReject (err) { return Promise.reject(err) }
  }
}
</script>

<style scoped>

</style>
