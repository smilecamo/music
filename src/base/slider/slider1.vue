<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <swiper-slide v-if="list.length" v-for="item in list" :key="item.url">
        <img :src="item.picUrl" alt="">
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      list: [],
      notNextTick: true,
      swiperOption: {
        // 播放时间
        autoplay: 3000,
        speed: 1000,
        // 循环播放
        loop: true,
        // 轮播方向
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        // 点击小圆点
        paginationClickable: true,
        // 鼠标可以拖动图片
        mousewheelControl: true,
        // 图片懒加载
        lazyLoading: true
      }
    }
  },
  mounted() {
    this._get()
  },
  // created() {
  //   this._getWidth()
  // },
  methods: {
    _get() {
      this.axios.get('/api/banner').then(res => {
        if (res.status === 200) {
          this.list = res.data.banners
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.slider-wrapper
  .swiper-container
    .swiper-wrapper
      .swiper-slide
        img
          width 100%
          height 46%
</style>
