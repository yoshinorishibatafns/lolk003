<template>
  <div class="page2">
      <h1>{{ msg }}</h1>
      <h1>{{ childMsg }}</h1>
      <p>hello page2</p>
    <button class="btn btn-default">default</button>
    <button class="btn btn-primary">primary</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-danger">danger</button>
    <div>
      <a class="btn btn-light" @click="modal=true" tabindex="">open</a>
    </div>
    <my-modal v-if="modal" @close="modal=false" @ok="childMsgMethod" :message="parentMsg"/>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>

import MyModal from './modal/Modal.vue'

export default {
  name: 'Page2',
  components: {
    MyModal
  },
  data () {
    return {
      msg: 'Welcome to Page2',
      modal: false,
      parentMsg: 'Hello Child!',
      childMsg: '',
      mail: this.$route.params.mail,
      password: this.$route.params.password,
      pin: this.$route.params.pin
    }
  },
  methods: {
    childMsgMethod (str) {
      this.modal = false
      this.childMsg = str
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
