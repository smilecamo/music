<template>
  <div class="singer">
    <scroll :data='singer' class="singer-scroll">
      <div class="singer-content">
        <div class="singer-ul" v-for="item of singer" :key='item.id'>
          <div @click='handleClick(item)' class="singer-li">
            <img v-lazy="item.picUrl" alt="">
            <p>
              <span class="singer-name">{{item.name}}</span>
              <span class="singer-score">热度:{{item.score}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="loading-center" v-show='!singer.length'>
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
import { mapMutations } from 'vuex'
export default {
  components: {
    Scroll,
    Loading
  },
  data() {
    return {
      singer: []
    }
  },
  mounted () {
    this._getSinger()
  },
  methods: {
    _getSinger() {
      this.axios('/api/toplist/artist')
        .then((res) => {
          if (res.data.code === 200) {
            this.singer = res.data.list.artists
          }
        })
    },
    handleClick(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.singer
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .singer-scroll
    overflow hidden
    height 100%
    .singer-ul
      display flex
      flex-direction: column
      justify-content center
      margin 0 20px
      .singer-li
        display flex
        align-items center
        margin 15px 0
        img
          width 60px
          height 60px
          border-radius 5px
        p
          flex 1
          display flex
          flex-direction: column
          justify-content space-between
          padding-left 30px
          span
            padding 5px 0
          .singer-name
            color $color-text
          .singer-score
            color $color-text-ll
      .loading-center
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)
</style>
