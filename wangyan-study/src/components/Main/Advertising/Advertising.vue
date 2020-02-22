<template>
    <div class="Advertising">
        <div class="advertising1">
            <img  :src="ItemAdvertising.bigPromotionModule.floorList[0].cells[0].picUrl" alt="">
        </div>
        <div class="advertising2">
            <img  :src="ItemAdvertising.bigPromotionModule.floorList[1].cells[0].picUrl" alt="">
        </div>
        <div class="advertising3">
            <ul class="advertisingList">
                <li class="advertisingItem">
                    <img  :src="ItemAdvertising.bigPromotionModule.floorList[2].cells[0].picUrl" alt="">
                </li>
                <li class="advertisingItem">
                    <img  :src="ItemAdvertising.bigPromotionModule.floorList[3].cells[0].picUrl" alt="">
                </li>
                <li class="advertisingItem">
                    <img  :src="ItemAdvertising.bigPromotionModule.floorList[2].cells[0].picUrl" alt="">
                </li>
                <li class="advertisingItem">
                    <img  :src="ItemAdvertising.bigPromotionModule.floorList[3].cells[0].picUrl" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		props:{
			ItemAdvertising: {
				required: true,
				type: Object
			}
    },
		name: "Advertising"
	}
</script>

<style lang="stylus" rel="stylesheet/style">
    .Advertising
        width 100%
        height 828px
        background salmon
        .advertising1
            width 100%
            height 240px
            img
              width 100%
              height  240px
        .advertising2
            width 100%
            height 160px
            text-align center
            background #1674e3
            img
               width 710px

        .advertising3
            width 100%
            height 428px
            background #1674e3
            .advertisingList
              width 710px
              height 186px
              margin 0 0 8px 20px
              display flex
              flex-wrap  wrap
              justify-content  space-between
              .advertisingItem
                 width 351px
                 height 186px
                 margin-top 10px
                 img
                    width 351px
                    height 186px


</style>