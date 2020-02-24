<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'KbnButton',
  props: {
    classes: {
      type: String,
      default: 'btn btn-primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      text: 'BUTTON'
    }
  },
  methods: {
    // `click`イベントを発行
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style scoped>
</style>
