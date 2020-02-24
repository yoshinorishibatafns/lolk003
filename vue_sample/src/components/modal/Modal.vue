<template>
  <div>
    <!-- <div @click.self="$emit('close')" class="modal show" tabindex="-1"> -->
    <div class="modal show" tabindex="-1">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Modal Title
            </h5>
            <a v-if="xButtun" @click="$emit('close')" class="close">
              <span aria-hidden="true">&times;</span>
            </a>
          </div>
          <div class="modal-body">
            ダイアログやでaa
            <p>{{ message }}</p>
          </div>
          <input type="text" class="form-control" v-model="inputValue">
          <div class="modal-footer">
            <a @click="$emit('ok', inputValue)" class="btn btn-primary" tabindex="">Ok</a>
            <a @click="$emit('close')" class="btn btn-secondary" tabindex="">Close</a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" />
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  props: ['message'],
  data () {
    return {
      xButtun: false,
      inputValue: ''
    }
  }
}
</script>

<style scoped>
  .modal{
    display: block;
  }
</style>
