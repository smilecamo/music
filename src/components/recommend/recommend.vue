<template>
  <div class="recommend">
    <div v-if="list.length" class="slider-wrapper">
      <slider>
        <div v-for="item of list" :key="item.url">
          <a>
            <img :src="item.picUrl" alt="banner">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    get() {
      this.axios.get('/api/banner')
        .then(res => {
          if (res.status === 200) {
            this.list = res.data.banners
          }
        })
    }
  },
  created() {
    this.get()
  },
  components: {
    Slider
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
</style>
