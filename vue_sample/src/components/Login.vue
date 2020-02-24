<template>
  <div class="jumbotron">

    <div class="container">
        <h2>ログイン</h2>
        <form class="form-horizontal">
            <div class="form-group row">
              <div class="col-sm-4 alert-info text-muted d-flex align-items-center">
                <label class="control-label">メールアドレス</label>
              </div>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="mail" placeholder="Enter email">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-4 alert-info text-muted d-flex align-items-center">
                <label class="control-label">パスワード</label>
              </div>
              <div class="col-sm-8">
                <input type="password" class="form-control" v-model="password" placeholder="Enter password">
              </div>
            </div>
            <div class="form-group row">
                <a href="#" class="btn btn-primary" @click="testMethod" tabindex="">Login</a>
            </div>
        </form>
        </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      mail: '',
      password: ''
    }
  },
  methods: {
    testMethod () {
      this.$router.push({
        name: 'Page2'
      })
    }
  }
}
</script>

<style scoped>

</style>
