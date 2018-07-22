<template>
  <div class="recommend">
    <div class="recommend-content">
      <slider></slider>
    </div>
    <song-sheet></song-sheet>
  </div>
</template>

<script type="text/ecmascript-6">
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
</style>