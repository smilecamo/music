<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" class="swiper-container">
      <swiper-slide class="swiper-item" v-for="item of imgList" :key="item.picUrl">
        <a :href="item.url">
          <img :src="item.picUrl" class="swiper-img">
        </a>
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

require('swiper/dist/css/swiper.css');

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        autoplay: 3000,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'fade',
        loop: true,
      },
      imgList: [],
    };
  },
  created() {
    this.img();
    // custom console
    window.console.log(this.imgList);
  },
  methods: {
    img() {
      this.$axios({
        method: 'post',
        url: 'http://localhost:3000/banner',
      })
        .then((res) => {
          this.imgList = res.data.banners;
          window.console.log(res.data.banners);
        });
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>

<style lang="stylus" scoped>
.swiper-container{
  position: relative
  width: 100%
  height: 50%
  transform-origin top
  .swiper-item{
    width 100%
    height 100%
    .swiper-img{
      width 100%
      height 100%
  }
  }
}
</style>
