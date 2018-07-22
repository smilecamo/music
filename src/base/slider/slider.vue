<template>
  <div class="slider">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) of recommends" :key='index.id'>
        <!-- <a :href="item.linkUrl"> -->
          <img :src="item.picUrl" alt="">
        <!-- </a> -->
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Slider',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      recommends: [],
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true
      }
    }
  },
  created () {
    this._getimg()
  },
  methods: {
    _getimg () {
      this.axios.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1531811134627')
        .then((response) => {
          this.recommends = response.data.data.slider
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import 'swiper/dist/css/swiper.css';
.slider >>> .swiper-pagination-bullet-active
  background #fff
.slider >>> .swiper-pagination-bullet
  width 6px
  height 6px
.slider
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  background: #eee;
  img
    width 100%
</style>
