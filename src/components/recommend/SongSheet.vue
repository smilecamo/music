<template>
  <div class='sheet'>
    <scroll class="wrapper" :data='list'>
      <div>
        <h2>全部歌单</h2>
          <ul>
            <li class="item" v-for="(item, index) of list" :key='index'>
              <div class='sheet-div-img'>
                <img :src="item.list_pic_small" alt="" class='sheet-img'>
              </div>
              <div class="text">
                <h3>类别:&emsp;{{item.tag}}</h3>
                <p>创建者:&emsp;{{item.username}}</p>
                <p v-html="item.title"></p>
              </div>
            </li>
          </ul>
      </div>
      </scroll>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll.vue'
export default {
  name: 'SongSheet',
  data () {
    return {
      list: []
    }
  },
  components: {
    Scroll
  },
  created () {
    this._getlist()
  },
  methods: {
    _getlist () {
      this.axios.get('/api/from=webapp_music&format=json&param=X39HXJCvsowGHm8xqEYBUL3NsW89lc18oeuVHzLV/8EpDZ3mHmJZAm0UfTbnplHWx6lEWRgH0gRT4AQ8kn9C7uPniR2trAi/GxksGWvJBms=&timestamp=1532258819&sign=57fa9d5eac8d834a52d6e053a4c3b997&method=baidu.ting.ugcdiy.getChanneldiy')
        .then((response) => {
          console.log(response.data)
          this.list = response.data.diyInfo
        })
    }
  }

}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.sheet
  width 95%
  padding 5px 15px
  h2
    line-height 30px
    font-size $font-size-large
    text-align center
    color $color-text
  li
    width 100%
    display flex
    align-items: center
    padding-bottom 10px
  .sheet-div-img
    width 25%
    overflow hidden
    height 0
    padding-bottom 25%
    img
      width 100%
  .text
    display: flex
    flex-direction: column
    justify-content: center
    flex: 1
    line-height: 20px
    overflow: hidden
    padding 3px 20px
    h3
      font-size $color-text-ll
      padding-bottom 14px
    p
      font-size $font-size-medium
      color $color-text-l
</style>
