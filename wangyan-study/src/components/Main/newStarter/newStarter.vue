<template>
    <div class="newStarter">
        <div class="newStarterTitle">
            <span>限时购</span>
            <div class="newStarterMore">
                <a href="##">更多 ></a>
            </div>
        </div>
        <div class="newStarterCenter"></div>
    </div>
</template>

<script>
	export default {
		name: "newStarter"
	}
</script>

<style lang="stylus" rel="stylesheet/style">
    .newStarter
        width 100%
        height 700px
        .newStarterTitle
            width 100%
            height 100px
            background  darkcyan
            span
                height 100px
                line-height 100px
                margin-left 30px
                display inline-block
                font-family  PingFangSC-Regular
                font-size 30px
            .newStarterMore
                float right
                margin-right 30px
                height 100px
                line-height 100px
                font-family  PingFangSC-Regular
                font-size 30px
                color #333
        .newStarterCenter
            width 100%
            height 793px
            background  darkkhaki
</style>