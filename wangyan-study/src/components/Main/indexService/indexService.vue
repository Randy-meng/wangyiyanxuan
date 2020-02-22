<template>
    <div class="indexService">
        <ul class="advertising">
            <li class="item" v-for="(descs,index) in Item.policyDescList" :key="index">
                <a href="##">
                    <img :src="descs.icon" alt="">
                    <span>{{descs.desc}}</span>
                </a>
            </li>
            <!--<li class="item">-->
                <!--<a href="##">-->
                    <!--<i class="iconfont icon-dunpai"></i>-->
                    <!--<span>三十天无忧退货</span>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li class="item">-->
                <!--<a href="##">-->
                    <!--<i class="iconfont icon-qiandai"></i>-->
                    <!--<span>48小时快速退货</span>-->
                <!--</a>-->
            <!--</li>-->
        </ul>
    </div>
</template>

<script>
	export default {
		props:{
           Item:{
			   required:true,
			   type:Object
           }

        }
		,
		name: "indexService",

	}
</script>

<style lang="stylus" rel="stylesheet/style">
    .indexService
        height 62px
        width 750px
        .advertising
            width 86%
            height 62px
            padding 0 50px
            display flex
            justify-content space-between
            .item
                height 62px
                line-height 62px
                img
                    height 32px
                    width 32px
                    line-height 32px
                    margin-right 10px
                    vertical-align middle
                    display inline-block
                span
                    font-size 24px
                    height 62px
                    line-height 62px
                    color #333
                    vertical-align middle

</style>