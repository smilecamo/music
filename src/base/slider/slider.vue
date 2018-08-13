<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { addClass } from 'common/js/dom'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      dots: []
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      dafault: 4000
    }
  },
  mounted() {
    setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()
    }, 20)
  },
  methods: {
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      // 获取当前宽度
      let sliderWidth = this.$refs.slider.clientWidth
      console.log(`sliderwidth ${sliderWidth}`)
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        // 给子元素加类名
        addClass(child, 'slider-item')
        // 设置单个子元素宽度
        child.style.width = sliderWidth + 'px'
        // 轮播框大小
        width += sliderWidth
      }
      // 如果开启滚动,两边需要各克隆一个图片大小
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        loop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      })
    },
    _initDots() {

    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.slider
  min-height 1px
  .slider-group
    position relative
    overflow hidden
    white-space nowrap
    .slider-item
      float left
      box-sizing border-box
      overflow hidden
      text-align center
      a
        display block
        width 100%
        overflow hidden
        text-decoration none
        img
          display block
          width 100%
</style>
