<template>
    <div id="footerContain">
            <div :class="{active: $route.path === '/main'}" class="guidItem" @click="goPath('/main')">
                <i class="iconfont icon-shouye"></i>
                <span>首页</span>
            </div>
            <div :class="{active: $route.path === '/classify'}" class="guidItem" @click="goPath('/classify')">
                <i class="iconfont icon-fenlei"></i>
                <span>分类</span>
            </div>
            <div :class="{active: $route.path === '/buy'}" class="guidItem" @click="goPath('/buy')">
                <i class="iconfont icon-goumai1"></i>
                <span >值得买</span>
            </div>
            <div :class="{active: $route.path === '/cart'}" class="guidItem" @click="goPath('/cart')">
                <i class="iconfont icon-ziyuan"></i>
                <span>购物车</span>
            </div>
            <div :class="{active: $route.path === '/personal'}"  class="guidItem" @click="goPath('/personal')">
                <i class="iconfont icon-geren"></i>
                <span>个人</span>
            </div>



    </div>
</template>

<script>
    export default {
        methods:{
			goPath(path){
				path !== this.$route.path && this.$router.push(path)

            }
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #footerContain
      display flex
      position fixed
      left 0
      bottom 0
      width 100%
      background  #fff
      .guidItem
         width 25%
         height 98px
         text-align center
         line-height 50px
         display flex
         flex-direction column
         &.active
           color #DD1A21
         span
            font-size 28px
         .iconfont
            font-size 40px
</style>