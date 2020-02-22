<template>
    <div id="slideshow">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in Item.focusList" :key="index"><img :src="item.picUrl" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>

    import {mapState} from  'vuex'
	import Swiper from 'swiper'
	import BScroll from '@better-scroll/core'
	import 'swiper/css/swiper.min.css'
	export default {
		name: "slideshow",
		data() {
			return {}
		},

		async mounted() {
			new BScroll('#mainGuide .hander .wrapper', {
				scrollX: true,
				probeType: 3
			});


		},
        computed:{
			...mapState({
				Item :  state => state.index
            })
        },
		watch:{
			Item(){
				this.$nextTick(()=>{
					new Swiper('.swiper-container', {
						autoplay: true,
						loop: true,
						clickable: true,
						pagination: {
							el: '.swiper-pagination',
						},
					});
				})
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/style">
   #slideshow
      .swiper-container
         width 100%
         height 370px
         .swiper-wrapper
            width 100%
            height 370px
            .swiper-slide
                width 100%
                height 370px
                img
                  display inline-block
                  width 100%
                  height 370px
         .swiper-container
             --swiper-theme-color: #ff6600;
             --swiper-pagination-color: #00ff33;/* 两种都可以 */

</style>