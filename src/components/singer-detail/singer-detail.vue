<template>
  <transition name="slide">
  <music-list
  :title='title'
  :songs='songs'
  :bg-image='bgImage'
  ></music-list>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import MusicList from 'components/music-list/music-list'
export default {
  data() {
    return {
      bgImage: '',
      songs: [],
      title: ''
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  mounted () {
    this.axios.get('/api/artists', {params: { id: this.singer.id }})
      .then((res) => {
        this.bgImage = res.data.artist.picUrl
        this.title = res.data.artist.name
        this.songs = res.data.hotSongs
        console.log(this.bgImage)
        console.log(this.songs)
        console.log(this.title)
      })
    console.log(this.singer.id)
  },
  components: {
    Scroll,
    Loading,
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
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
