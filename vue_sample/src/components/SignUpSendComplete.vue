<template>
  <div class="jumbotron">

    <div class="container">
      <h1>SingUp完了</h1>
        <form class="form-horizontal">
          <div class="form-group">
              <a href="#" class="btn btn-primary" @click="testMethod" tabindex="">Login</a>
          </div>
        </form>
        </div>
  </div>
</template>

<script>

export default {
  name: 'SignUpSendComplete',
  data () {
    return {
    }
  },
  methods: {
    testMethod () {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style scoped>

</style>
