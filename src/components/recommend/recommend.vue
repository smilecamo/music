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
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li v-for='item of discList' :key='item.id'>
          <img width="60" height="60" :src='item.coverImgUrl' alt='item.coverImgId_str'>
          <div class="text">
            <h2 class="name">{{item.name}}</h2>
            <p class="desc">{{item.copywriter}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
export default {
  data() {
    return {
      list: [],
      discList: []
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
    },
    getMusic() {
      this.axios.get('/api//top/playlist/highquality?limit=30')
        .then(res => {
          if (res.status === 200) {
            this.discList = res.data.playlists
            console.log(res.data.playlists)
          }
        })
    }
  },
  created() {
    this.get()
    this.getMusic()
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
