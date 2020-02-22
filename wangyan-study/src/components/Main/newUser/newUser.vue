<template>
    <div class="newUser">
        <div class="userTitle">
            <span>新人专属礼</span>
        </div>
        <div class="newUserContent">
            <ul class="ContentList">
                <li class="Contentitem1"></li>
                <li class="Contentitem2"></li>
                <li class="Contentitem2"></li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		name: "newUser",
		props: {
			NewUserItem: {
				required: true,
				type: Object
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/style">
    .newUser
        width 100%
        height 558px
        .userTitle
            width 100%
            height 90px
            background aqua
            text-align center
            line-height 90px
            position relative
            &:before
                content:''
                display inline-block
                width 30px
                height 2px
                background black
                position absolute
                top  45px
            span
                font-size 30px
                font-family PingFangSC-Regular
                margin  0px 30px 0px 60px
            &:after
                content:''
                display inline-block
                width 30px
                height 2px
                background black
                position absolute
                top  45px
        .newUserContent
            width 100%
            height 438px
            .ContentList
                width 100%
                height 438px
                .Contentitem1
                    width 343px
                    height 434px
                    background yellow
                    float left
                    margin-left 30px
                .Contentitem2
                    width 343px
                    height 215px
                    background seagreen
                    float left
</style>