<template>
  <transition name="slide">
    <div class="song-detail">
      <scroll class="song-scroll">
          <ul>
            <div class="song-img">
              <img :src="song" alt="">
            </div>
            <li class="song-detail">
              <div v-for="item of songs" :key='item.id'>
                <img width="60" height="60" v-lazy="item.al.picUrl" alt="">
                <span>{{item.name}}</span>
              </div>
            </li>
          </ul>
      </scroll>
      <div class="loading-center" v-show='!songs.length'>
        <loading></loading>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
export default {
  data() {
    return {
      song: '',
      songs: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    this.axios.get('/api/artists', {params: { id: this.singer.id }})
      .then((res) => {
        this.song = res.data.artist.picUrl
        this.songs = res.data.hotSongs
        console.log(this.song)
        console.log(this.songs)
      })
    console.log(this.singer.id)
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.song-detail
  position fixed
  z-index 100
  top 0
  left 0
  right 0
  bottom 0
  height 100%
  overflow hidden
  background $color-background
  .song-scroll
    height 100%
    .song
      width 100%
      height 100%
      ul
        height 100%
        .song-img
          width 100%
          height 25%
          img
            width 100%
            height 100%
        .song-detail
          margin-top 300px
          height 100%
          display flex
          flex-direction: column
          img
          span
            flex 1
  .loading-center
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
.slide-enter-active,.slide-leave-active
  transition all 0.3s
.slide-enter,.slide-leave-to
  transform translate3d(100%,0,0)
</style>
