<template>
  <div>
    <div
      :class="classes"
      :role="roles"
    >
      <span :class="spanClasses">
        Loading..
      </span>
    </div>
    <label class="control-label">
      <slot>{{ text }}</slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'KbnSpinner',
  props: {
    classes: {
      type: String,
      default: 'spinner-border text-secondary'
    },
    roles: {
      type: String,
      default: 'status'
    },
    spanClasses: {
      type: String,
      default: 'sr-only'
    }
  },
  data () {
    return {
      text: 'Loding...'
    }
  }
}
</script>

<style scoped>
</style>
