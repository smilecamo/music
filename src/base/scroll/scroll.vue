<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
  },
  mounted() {
    setTimeout(() => {

    },20)
  },
  methods: {
    _initScroll() {
      // 如果没有传值,就不执行
      if (!this.$refs.wrapper) {
        return 
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType
      })

    }
  }
}
</script>

