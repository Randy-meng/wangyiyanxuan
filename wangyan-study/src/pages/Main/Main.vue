<template>
 <div id="mainGuide">
     <div class="hander">
              <div class="daohanglan">
                  <a href="##" class="logo"><img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"></a>
                  <div class="sousuo">
                   <i class="iconfont icon-sousu"></i>
                   <span>搜索商品,共20420款好物</span>
                  </div>
                  <div class="denglu">登录</div>
              </div>
              <div class="wrapper">
                  <ul class="content">
                      <li v-for="(item ,index) in Item.kingKongModule.kingKongList" :key="index">{{item.text}}</li>

                  </ul>

              </div>
              <div class="toggleWrap">
                  <div class="linear">

                  </div>
                  <div class="toggle">
                      <div class="icon">

                      </div>
                  </div>
              </div>
          </div>
     <!--轮播图-->
    <SlideShow/>
     <!--索引服务-->
     <IndexService  :Item="Item"/>
     <!--分类列表-->
     <ListVies :ItemList="Item" />
     <!--图片广告-->
     <Advertising :ItemAdvertising="Item" />
     <!--新人专属-->
     <NewUser :NewUserItem="Item"/>
     <!--热销榜-->
     <HotSell :HotSellItem="Item"/>
     <!--限时购-->
     <Limited />

     <!--新品首发-->
     <newStarter />

     <!--商品补充-->
     <ShopingGuide />

     <!--底部-->
     <MainGuideFooter />

 </div>
</template>

<script type="text/javascript">
	import {mapState} from  'vuex'
    import SlideShow from '../../components/Main/slideshow/slideshow'
	import HotSell from "../../components/Main/hotSell/hotSell";
	import NewStarter from "../../components/Main/newStarter/newStarter";
	import ShopingGuide from "../../components/Main/ShopingGuide/ShopingGuide";
	import MainGuideFooter from "../../components/Main/mainGuideFooter/mainGuideFooter";
	import ListVies from "../../components/Main/ListVies/ListVies";
	import Advertising from "../../components/Main/Advertising/Advertising";
	import NewUser from "../../components/Main/newUser/newUser";
	import Limited from "../../components/Main/LIMITED/LIMITED";

	import IndexService from "../../components/Main/indexService/indexService";
    export default {
    	data(){
    		return{

            }
        },


    	components:{
			IndexService,
			NewUser,
			Advertising,
			ListVies,
			MainGuideFooter,
			ShopingGuide,
			NewStarter,
			HotSell,
			SlideShow,
			Limited
        },
		mounted(){
			this.$store.dispatch('getAddindex')
		},
		computed:{
			...mapState({
				Item : state => state.index
			}),

		},

    }


</script>


<style lang="stylus" rel="stylesheet/style">
    #mainGuide
      width 100%
      height 100%
      .hander
         .daohanglan
            height 70px
            display flex
            margin  16px 20px 0px 20px
            .logo
               width 138px
               height 40px
               line-height 80px
               img
                 width 138px
                 height 40px
            .sousuo
               width 442px
               height 56px
               background #DEDEDE
               border-radius 8px
               margin 0 20px
               .iconfont
                  width 28px
                  height 56px
                  font-size 40px
                  margin 0 2px 0 40px

               span
                  width 317px
                  height 56px
                  color #666
                  font-size 30px
            .denglu
               width 74px
               height 40px
               border-radius 8px
               text-align center
               color #DD1A21
               border 1px solid #DD1A21
               line-height 40px
               margin-top 6px
         .wrapper
           width 100%
           height 60px
           display flex
           overflow hidden
           .content
              display flex
              flex-wrap nowrap
              white-space nowrap
              height 60px
              li
                height 60px
                line-height 60px
                padding 0 12px
                color #333
                font-size 32px
                margin  0 16px
                position relative
                &:after
                  content ''
                  display block
                  width 100%
                  height 2px
                  position absolute
                  left 0
                  bottom 0
                  background #dd1a21
                  color #dd1a21
                &:nth-child(1)
                  margin-left 50px

</style>