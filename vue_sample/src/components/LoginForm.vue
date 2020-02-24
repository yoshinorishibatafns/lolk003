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
                <input type="text" class="form-control" v-model="mail" placeholder="Enter email" @focus="resetError">
                <ul class="validation-errors">
                  <li v-if="!validation.email.format">メールアドレスの形式が不正です。</li>
                  <li v-if="!validation.email.required">メールアドレスが入力されていません。</li>
                </ul>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-4 alert-info text-muted d-flex align-items-center">
                <label class="control-label">パスワード</label>
              </div>
              <div class="col-sm-8">
                <input type="password" class="form-control" v-model="password" placeholder="Enter password" @focus="resetError">
                <ul class="validation-errors">
                  <li v-if="!validation.password.required">パスワードが入力されていません。</li>
                </ul>
              </div>
            </div>
            <div class="form-group row">
              <KbnButton
                :class=this.classes
                :disabled="disableLoginAction"
                @click="handleClick"
            >
              ログイン
            </KbnButton>
            </div>
            <KbnSpinner v-if="progress">
              ログイン中...
            </KbnSpinner>
            <p
              v-if="error"
              class="login-error"
            >
              {{ error }}
            </p>
        </form>
        </div>
  </div>
</template>

<script>
import KbnButton from './atoms/KbnButton'
import KbnSpinner from './atoms/KbnSpinner'

// メールアドレスのフォーマットをチェックする正規表現
const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const required = val => !!val.trim()

export default {
  name: 'LoginForm',
  data () {
    return {
      mail: '',
      password: '',
      progress: false,
      error: '',
      classes: 'btn btn-primary text-white'
    }
  },
  components: {
    KbnButton,
    KbnSpinner
  },
  props: {
    onlogin: {
      type: Function,
      required: true
    }
  },
  computed: {
    validation () { // mailとpasswordのバリデーション
      return {
        email: {
          required: required(this.mail),
          format: REGEX_EMAIL.test(this.mail)
        },
        password: {
          required: required(this.password)
        }
      }
    },

    valid () {
      const validation = this.validation // 先に定義したvalidationを用いて可否を返す
      const fields = Object.keys(validation)
      let valid = true
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i]
        valid = Object.keys(validation[field])
          .every(key => validation[field][key])
        if (!valid) { break }
      }
      return valid
    },

    disableLoginAction () { // validを使ってログイン処理の可否、progressは後述
      return !this.valid || this.progress
    }
  },
  methods: {
    resetError () {
      this.error = ''
    },
    handleClick (ev) {
      if (this.disableLoginAction) { return } // 不備があればログイン処理が実行されないようガード

      this.progress = true // ログイン処理実行中をあらわす
      this.error = ''

      this.$nextTick(() => {
        this.onlogin({ mail: this.mail, password: this.password })
          .catch(err => {
            this.error = err.message
          })
          .then(() => {
            this.progress = false
          })
      })
    },
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
