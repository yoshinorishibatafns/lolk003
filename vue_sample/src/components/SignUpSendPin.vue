<template>
  <div class="jumbotron">

    <div class="container">
        <h2>{{mail}}宛に送信したPINを入力してください</h2>
        <form class="form-horizontal">
            <div class="form-group row">
              <div class="col-sm-4 alert-info text-muted d-flex align-items-center">
                <label class="control-label">PIN</label>
              </div>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="pin" placeholder="Enter pin">
              </div>
            </div>
            <div class="form-group">
                <a class="btn btn-primary" @click="testMethod" tabindex="">送信</a>
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
  name: 'SignUpSendPin',
  data () {
    return {
      mail: this.$route.params.mail,
      password: this.$route.params.password,
      pin: this.$route.params.pin,
      errors: []
    }
  },
  methods: {
    testMethod () {
      let payload = {mail: this.mail, password: this.password, pin: this.pin}
      console.log('payloadaaaaaaa:' + payload)
      axios.post('/signup/send-pin', payload)
        .then(response => {
          if (response.data.errors.length > 0) {
            this.errors = response.data.errors
            console.log('validation error')
            return
          }
          if (!response.data.sendPinResult) {
            this.errors = ['PINが異なります。']
            console.log('!response.data.sendPinResult')
            return
          }
          this.$router.push({
            name: 'SignUpSendComplete'
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
