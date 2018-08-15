<template>
  <scroll class="recommend">
    <div>
      <div v-if="list.length" class="slider-wrapper">
        <slider1></slider1>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul class="list-item">
          <li v-for='item of discList' :key='item.id'>
            <img class="icon" width="60" height="60" v-lazy='item.coverImgUrl' alt='item.coverImgId_str'>
            <div class="text">
              <h2 class="name">{{item.name}}</h2>
              <p class="desc">{{item.copywriter}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading-center" v-show='!discList.length'>
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
// import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Slider1 from 'base/slider/slider1'
import Loading from 'base/loading/loading'
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
    Slider1,
    Scroll,
    Loading
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
    .recommend-list
      h1
        width 100%
        height 44px
        line-height 44px
        text-align center
        font-size: $font-size-large
        color: $color-theme
      .list-item
        li
          display flex
          box-sizing border-box
          align-items center
          padding 0 20px 20px 20px
          .icon
            padding 0 15px 0 0
          .text
            display flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
    .loading-center
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
</style>
