<template>
 <div id="ClassifyGuide">
     <div class="ClassifyContent">
         <div class="ContentTop">
             <div class="titleAdvertising">
                 <img src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75" alt="">
             </div>
             <div class="search">
                 <i class="iconfont icon-sousu"></i>
                 <span>搜索商品,共22001款好物</span>
             </div>
         </div>
         <div class="ContentCentre" v-if="getcateNavDatas.categoryL1List">
             <div class="ContentCentreLeft">
                 <ul class="CentreLeftItem">
                     <li class="CentreLeftList"
                         v-for="(zoneNames,index) in getcateNavDatas.categoryL1List" :key="index"
                         @click="listId(index)" :class="{active:indexid === index }">{{zoneNames.name}}</li>
                 </ul>
             </div>
             <div class="ContentCentreRight">
                 <img src="https://yanxuan.nosdn.127.net/37d7317bfb19641d744c6a45fb5d350a.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
                 <div class="hd" >秋冬好物</div>
                 <ul class="CentreRightItem">
                     <li class="CentreRightList" v-for="(items,index) in list" :key="index">
                         <img :src="items.wapBannerUrl" alt="">
                         <span>{{items.name}}</span>
                     </li>
                 </ul>
             </div>

         </div>
         <div class="ContentBottom">
         </div>
     </div>
 </div>
</template>

<script type="text/javascript">
    import BScroll from 'better-scroll'
	import {mapState} from  'vuex'
	// import ContentCentreRight from "../../components/ContentCentreRight/ContentCentreRight"
    export default {
		components: {
		},
        data(){
			return{
				indexid : 0,
                list: ''

            }
        },
		mounted(){
			this.$store.dispatch('getAddcateNavDatas'),
			this.$store.dispatch('getcateLists')

			new BScroll('.ContentCentreLeft',{
				scrollY : true,

            })
        },
		methods:{
            listId(index){
				this.indexid = index

            }

		},

		computed:{
			...mapState({
				getcateNavDatas : state => state.getcateNavDatas

            }),
			...mapState({
				getcateLists : state => state.getcateLists

			})
        },
        watch:{
			indexid(newindex){
			this.list  =  this.getcateLists[newindex].categoryList || this.getcateLists[newindex].subCateList
			}
        }

	}

</script>

<style lang="stylus" rel="stylesheet/style">
    #ClassifyGuide
      width 100%
      height 100%
      .ClassifyContent
          width 100%
          height 100%
          .ContentTop
              width 100%
              height 192px
              .titleAdvertising
                  width 100%
                  height 104px
                  img
                     width 100%


              .search
                 width 690px
                 height 56px
                 font-family  PingFangSC-Light,helvetica,'Heiti SC'
                 background #ededed
                 border-radius 8px
                 text-align center
                 margin  0 30px
                 i
                   width 28px
                   height 28px
                   line-height 28px
                   font-size 40px
                   margin-right 8px
                 span
                    color #666
                    font-size 30px
                    height 56px
                    line-height 56px
          .ContentCentre
             width 100%
             height 100%
             display flex
             .ContentCentreLeft
                 width 162px
                 border 1px solid #d9d9d9
                 height calc(100vh-192px)
                 overflow hidden
                 /*position absolute*/
                 /*bottom 0*/
                 /*top 192px*/
                 .CentreLeftItem
                      width 100%
                      height 100%
                      text-align center
                      font-size 30px
                      color #333
                      padding 40px 0
                      .CentreLeftList
                          width 100%
                          height 50px
                          line-height 50px
                          margin-top 40px
                          &:nth-child(1)
                             margin-top 0
                      &.active
                          font-size  40px
                          color  #ab2b2b
                          line-height  50px
                          text-overflow  ellipsis
                          white-space  nowrap
                          overflow hidden
                          border-left 4px solid #ab2b2b

             .ContentCentreRight
                width 528px
                height 993px
                border-top  1px solid #666
                margin 30px 30px 21px 30px
                img
                    width 100%
                    height 192px
                .hd
                    padding-bottom 20px
                    margin-top 40px
                    text-align left
                    font-weight bold
                    color #333
                    border-bottom  1px solid #d9d9d9
                    font-size 30px
                .CentreRightItem
                    width 100%
                    .CentreRightList
                        width 144px
                        height 216px
                        float left
                        margin-right 30px
                        text-align center
                        img
                            width 144px
                            height 144px








</style>