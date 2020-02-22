<template>
    <div id="ListVies">
        <ul class="classlist">
            <li v-for="(Lists,index) in ItemList.kingKongModule.kingKongList" :key="index">
                    <img :src="Lists.picUrl" alt="">
                    <span>{{Lists.text}}</span>

            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "ListVies",
		props: {
			ItemList: {
				required: true,
				type: Object
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/style">
    #ListVies
        height 360px
        width 100%
        .classlist
            height 400px
            width 100%
            li
                float left
                width 20%
                height 180px
                text-align center
                img
                   width 110px
                   height 110px
                   margin-bottom 20px
                   margin-top 10px
                span
                   display block
                   color #333




</style>
