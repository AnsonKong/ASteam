<template>
  <div v-scroll="handleScroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      triggerY: -1,
      triggered: false
    }
  },
  mounted () {
    this.triggerY = this.$el.getBoundingClientRect().top
    this.testTrigger()
  },
  props: ['triggerCallback'],
  methods: {
    handleScroll (evt, el) {
      if (this.triggered) return true
      return this.testTrigger()
    },
    testTrigger () {
      let reach = window.scrollY + window.innerHeight >= this.triggerY
      if (reach) {
        this.triggerCallback()
        this.triggered = true
      }
      return reach
    }
  }
}
</script>
