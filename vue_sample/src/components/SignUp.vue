<template>
  <div class="jumbotron">
    <div class="container">
        <h2>ユーザー仮登録f</h2>
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
              <div class="col-sm-4 alert-info text-muted d-flex align-items-center">
                <label class="control-label">確認用パスワード</label>
              </div>
              <div class="col-sm-8">
                <input type="password" class="form-control" v-model="confirmPassword" placeholder="Enter password">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-3 offset-sm-4">
                <a class="btn btn-primary text-white" @click="testMethod" tabindex="">仮登録</a>
                <a class="btn btn-primary text-white" @click="returnMethod" tabindex="">戻る</a>
                <button class="btn btn-primary" @click="testMethod" tabindex="">仮登録</button>
                <button class="btn btn-primary" @click="returnMethod" tabindex="">戻る</button>
              </div>
              <!-- <div class="col-sm-3">
                <router-link to="/" class="btn btn-primary">戻る</router-link>
              </div> -->
            </div>
        </form>
    </div>
    <p v-if="errors.length">
      <ul>
        <li v-for="(error, index) in errors" :key='index' class="text-danger">{{ error }}</li>
      </ul>
    </p>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data () {
    return {
      mail: '',
      password: '',
      confirmPassword: '',
      pin: '',
      tempRegistReslut: {},
      errors: []
    }
  },
  methods: {
    testMethod () {
      let payload = {mail: this.mail, password: this.password, confirmPassword: this.confirmPassword}
      axios.post('/signup/temp-regist', payload)
        .then(response => {
          console.log('this:')
          console.log(this)
          console.log('response.data.pin')
          console.log(response.data.pin)
          console.log('response.data:')
          console.log(response.data)
          this.tempRegistReslut = response.data
          console.log(this.tempRegistReslut)
          if (this.tempRegistReslut.errors.length > 0) {
            this.errors = this.tempRegistReslut.errors
            // this.$router.push({
            //   name: 'SignUp',
            //   params: {
            //     mail: this.tempRegistReslut.mail,
            //     password: this.tempRegistReslut.password,
            //     confirmPassword: this.confirmPassword,
            //     errors: this.errors
            //   }
            // })
            return
          }
          this.$router.push({
            name: 'SignUpSendPin',
            params: {
              mail: this.tempRegistReslut.mail,
              password: this.tempRegistReslut.password,
              pin: this.tempRegistReslut.pin
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    returnMethod () {
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }
}
</script>

<style scoped>

</style>
