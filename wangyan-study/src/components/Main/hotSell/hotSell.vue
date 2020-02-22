<template>
    <div class="hotSell">
        <div class="hotSellTitle">
            <span>类目热销榜</span>
        </div>
        <div class="hotSellCenter">
            <div class="hotSellCenterTop">
                <ul class="Toplist">
                    <li>
                     <img :src="HotSellItem.categoryHotSellModule.categoryList[0].picUrl" alt="">
                    </li>
                    <li>
                        <img :src="HotSellItem.categoryHotSellModule.categoryList[1].picUrl" alt="">
                    </li>
                </ul>
                </div>
                <div class="hotSellCenterbottom">
                    <ul class="bottomList">
                        <li class="bottomItem" v-for="(item,index) in newHotSell" :key="index">
                            <span>{{item.categoryName}}</span>
                            <img :src="item.picUrl" alt="">
                        </li>
                    </ul>
                </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "hotSell",
		props: {
			HotSellItem: {
				required: true,
				type: Object
			}
		},
		computed:{
			newHotSell(){
				//使用loader 深拷贝
				let arr = JSON.parse(JSON.stringify(this.HotSellItem.categoryHotSellModule.categoryList))
				//执行两次删除2个元素
				arr.shift()
				arr.shift()
				return arr
			},
        }
	}
</script>

<style lang="stylus" rel="stylesheet/style">
    .hotSell
        width 100%
        height 710px
        .hotSellTitle
            width 100%
            height 100px
            span
                height 100px
                line-height 100px
                margin-left 30px
                display inline-block
                font-family  PingFangSC-Regular
                font-size 30px
        .hotSellCenter
            width 100%
            height 610px
            .hotSellCenterTop
                width 710px
                height 186px
                .Toplist
                    width 710px
                    height 186px
                    margin 0 0 8px 20px
                    display flex
                    flex-wrap  wrap
                    justify-content  space-between
                    li
                       width 351px
                       height 186px
                       background #F9F3E4
                       img
                           width 351px
                           height 186px

            .hotSellCenterbottom
                .bottomList
                    width 710px
                    height 410px
                    margin 0 0 8px 20px
                    display flex
                    flex-wrap  wrap
                    justify-content  space-between
                    .bottomItem
                        width 165px
                        height 180px
                        margin-top 10px
                        background #F5F5F5
                        text-align center
                        span
                            color #333
                            text-align center
                            display block
                            margin-top 10px
                        img
                            width 120px
                            height 120px



</style>