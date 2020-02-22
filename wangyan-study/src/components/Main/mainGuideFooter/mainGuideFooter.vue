<template>
    <div class="mainGuideFooter">
        <div class="FooterCenter">
            <div class="download">
                <a href="##" class="goApp">下载APP</a>
                <a href="##" class="PC">电脑版</a>

            </div>
            <p>
                <span>网易公司版权所有 © 1997-</span>
                <span>2020</span>
            </p>
            <p>
                <span>食品经营许可证：JY13301080111719</span>
            </p>
        </div>
    </div>
</template>

<script>
	export default {
		name: "mainGuideFooter"
	}
</script>

<style lang="stylus" rel="stylesheet/style">
    .mainGuideFooter
        width 100%
        height 320px
        border-top 1px solid #fff
        background #414141

        .FooterCenter
            width 100%
            height 224px
            text-align center
            margin-top 54px
            .download
                width 100%
                height 62px
                margin-bottom  30px
                .goApp
                    width 170px
                    height 60px
                    border 1px solid #999
                    line-height 60px
                    font-size 26px
                    color #fff
                    display inline-block
                    border-radius 4px
                    background-color  transparent
                    margin-right 50px
                .PC
                    width 170px
                    height 60px
                    border 1px solid #999
                    line-height 60px
                    font-size 26px
                    color #fff
                    border-radius 4px
                    display inline-block
                    background-color  transparent


            p
                color #999

</style>