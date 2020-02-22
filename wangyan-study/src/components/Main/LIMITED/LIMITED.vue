<template>
    <div class="LIMITED">
        <div class="hotSellTitle">
            <span class="timeShoping">限时购</span>
            <span class="hours">00</span>
            <span class="colon">:</span>
            <span class="mins">00</span>
            <span class="colon">:</span>
            <span class="secs">00</span>
            <div class="LIMITEDMore">
                <a href="##">更多 ></a>
            </div>
        </div>
        <div class="hotSellCenter"></div>
    </div>
</template>

<script>
	export default {
		name: "LIMITED"
	}
</script>

<style lang="stylus" rel="stylesheet/style">
    .LIMITED
        width 100%
        height 700px
        .hotSellTitle
            width 100%
            height 100px
            background  darkcyan
            .timeShoping
                height 100px
                line-height 100px
                margin-left 30px
                display inline-block
                font-family  PingFangSC-Regular
                font-size 30px
            .hours
                height 36px
                width 36px
                display inline-block
                font-size 24px
                line-height 36px
                text-align center
                background-color #333
                border-radius  10px
                color  #fff
                margin 0 10px
            .colon
                font-size 30px
            .mins
                height 36px
                width 36px
                display inline-block
                font-size 24px
                line-height 36px
                text-align center
                background-color #333
                border-radius  10px
                color  #fff
                margin 0 10px
            .secs
                height 36px
                width 36px
                display inline-block
                font-size 24px
                line-height 36px
                text-align center
                background-color #333
                border-radius  10px
                color  #fff
                margin 0 10px
            .LIMITEDMore
                float right
                margin-right 30px
                height 100px
                line-height 100px
                font-family  PingFangSC-Regular
                font-size 30px
                color #333
        .hotSellCenter
            width 100%
            height 600px
            background  darkkhaki
</style>