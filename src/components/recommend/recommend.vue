<template>
  <div class="recommend wrapper" ref='wrapper'>
    <div class="recommend-content">
      <slider></slider>
      <song-sheet></song-sheet>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Slider from 'base/slider/slider.vue'
import SongSheet from 'components/recommend/SongSheet'
export default {
  name: 'Recommend',
  data () {
    return {
      recommends: []
    }
  },
  components: {
    Slider,
    SongSheet
  },
  created () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    overflow:hidden
</style>