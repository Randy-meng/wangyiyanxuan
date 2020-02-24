<template>
<div id="valueGuide">
    <div class="valueTop">
        <div class="titleAdvertising">
            <img src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75" alt="">
        </div>
        <div class="valuerow">
            <i class="valuerowleft iconfont icon-fangzi" @click="goMain"></i>
            <span>值得买</span>
            <div class="valuerowRight">
                <i class="sousuo iconfont icon-sousuo"></i>
                <i class="iconfont icon-che"></i>
            </div>
        </div>
    </div>
    <div class="valuecontainer">
        <div class="valueTitle">
            <img src="" alt="">
            <span>严选好物 用心生活</span>
        </div>
        <div class="valueslideshow">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">slider1</div>
                    <div class="swiper-slide">slider2</div>
                    <div class="swiper-slide">slider3</div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-water-fall">
        <waterfall :col='col' :width="width" :gutterWidth="gutterWidth"  :data="topics"  @loadmore="loadmore"  @scroll="scroll"  :isTransition="true">
            <template>
                <div class="cell-item" v-for="(item,index) in topics" :key="index">
                    <img v-if="item.picUrl" :lazy-src="item.picUrl" alt="加载错误" :src="item.picUrl"  class="itemImg"/>
                    <div class="line1" >
                        {{item.title}}
                    </div>
                    <div class="line2">
                        <div class="userInfo">
                            <img :src="item.avatar" alt="" class="avt">
                            <div class="name">{{item.nickname}}</div>
                        </div>
                        <div class="see">
                            <img class="seeImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABjBJREFUaAXtmHtMl2UUx7lfBIkIM2MZxR9urBVb6fSPIq25YKvRjWUti7SxalGNCAaM++XH2GzRP2GXVeZqlesPNzFLKqNVumbWX9UonChliU5B7tDn/PaeHw/vBX6iW2t7n+1wznPO99ye93mf9/kREeEPfwX8FfBXwF8BfwX8FfjvViDyUqauq6tLJV5KXFxc8vj4eHJ0dHSyxI+MjByKiooaQjfE9Cy4M6K/FOOiGmhra1s6Ojq6YWZmJo9i7oJfG05RNHQU3F6LumnobDh+bphFNdDc3LxiYmLiJQIWU3SiW+BwdTQzCnY71EYjJ8L1U9wFNdDa2nr52NhYPc5PUniCBlFOMeeQD0Mnob+hfyAZ6dAy6EooB98U+JyB7xiKN9l+NZWVlafmGOeZhN1AQ0PDuunp6Q9IvtKMR+Ij0EdQN/ZDrOKkabfL2GPQ3QJtgB4kXo6JIU4/803geky9lxxWA/X19aUkCkCSPDhIdAChlUSylxc98N+IcwWx12sQYk9BVbW1tW2q8+ILNkCCSoI3awACn4a2EPwT1dl5S0vLMt4RKSzTsvXFxsbuY2vItnId5LkHw1vkukIBnFx15KnXuRuftwFW/lm2RYc6UnhPTEzMw9XV1cdUZ3KKuIp5AHqUQqJMG77TzHdAFeD+NG0qNzU1ZUxOTu7EN1d1+JWC36ZzO/dswNrzPVoIgbpwLiDYuD2IzMHfRLN7wF/tZlcdcU6wsvk1NTVHVGfyzs7O2IGBgV3EuVv00jj428F/beJUdm2AIuWE+ZEgqwRIEHHeiF6OPMfgWF3OlvkBfIYa8TmI/J01X4ttjWE7zpa6uaqq6i/VmbyjoyN+cHCwC5/1oidWL+xG8p83cSKHXkqbocQofpBts4lt41q8+FF8ixZPsjPQVvbuLjMm2/F+MG9AqYLFR96rrSZG5ZKSkjEW5REwP4FNh7KI+Tz2FsUon7NPRUmXontGAfAyij9uzOeI8m1AsdlQFtuLF5ulKzZwj1m+hmpW5OkMMCud1UQ8TSOOeh0KHFYCDJ71dH2U+btGEIfIh+0O8MEnCf4wC/ChA2QpxCYYmYqP+HphRZ+dnb0T/B8ig88IBAJzvkGid2tAvpY6PiXpvB8mEpj3H9n3C40Qxubr8CssLJxCuU8NbKnlKit3a0COOx2xKnhxVmbGsEUbspcYwth8vfDmXcuxmI4GeGFl7+m4V26cOnHj+ogt21o3jE0Xwth8bTA+KIHAZSgL1MAxbdYWVDsakBeWwD+LlRVKHRkZKdcAbhzMfvDBbwPyDZw2RW440YlNMCKLj/iK7DW4qsstIHjxAy/vl+O26mhAggFuN4JWyEfNmM8RCSp3+ddVScJXKXSLzpWLTmw6h2+3fA3VrEjOW5m9qBpbTaqOcP2QkSiShJ/Bg6cEzsfwuI2EfSFPQ0CfxvQQ+OtVjc8vyPrCrsG2yrD9jrwav0HVmbyxsTFramrqAD7Brzqx9oLNMzEqez0BeTEfx/G0AAl0DewLgjiOMbFbheSB75W5DCkYkjuRkFm8YPIsnyDW/IM+k+K78dHiT/HVfsLEmLJrAwIgUD/sPooKfr4JmMn8e/Ryy3QM9L/Gx8evBv8KNGIHiE5sghGs3S5z9Pmwg+QKLhT4YeYF1kdNII7huoVMFEHvZL6boHI/kvdDns62tLS0Kvnki84+2tvbk4aHh3PRZ1q2vqSkpK/KysqkIMcgh8RuhZ4jT7AmaZh5PrYv4Z5jwQbEkxcqlyPsfYKv0EgkGIBeTkhIeK28vPyc6i+EU1wKMZ4i7gtQ6COFrp8b6EPcQL9ZKF5YDUgQ+ZHCv0XeJpE85tAgmbwnH0Of83t2/0K/Zyk6HR+5fsiTfQCeGgqGgG03cYoWiqM+YTcgDiST06kIsRr5Og2inOSyveT0GYBOQvoLTH/QyxOUl9uRF99eqJFL3ztgwh6OQOF4sopyedsMyYcmKxwfLwxF/4ZNrsnvEddxVfDyU/2iGlBn4STNoYg8GpGttQ4ebdrtMlgp8ltoD/u8y+uXmd3Pa37RDZiBrZ+DSxMTE5dwBUnm/F4idm6R59ENcRAMc3oNFRcXT5h+vuyvgL8C/gr4K+CvgL8C/9cV+BeaUqY+NIqmQgAAAABJRU5ErkJggg==" alt="">
                            <div class="seeText">{{item.readCount}}</div>
                        </div>
                    </div>
                </div>
                <!--<div class="cell-item" v-for="(item,index) in topicstwo" :key="index+'1'">-->
                    <!--<img :src="item.picUrl" alt="加载错误" class="itemImg"/>-->
                    <!--<div class="line1" >-->
                        <!--{{item.title}}-->
                    <!--</div>-->
                    <!--<div class="line2">-->
                        <!--<div class="userInfo">-->
                            <!--<img :src="item.avatar" alt="" class="avt">-->
                            <!--<div class="name">{{item.nickname}}</div>-->
                        <!--</div>-->
                        <!--<div class="see">-->
                            <!--<img class="seeImg" src="data:image/png;base64,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" alt="">-->
                            <!--<div class="seeText">{{item.readCount}}</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            </template>
        </waterfall>

    </div>
</div>
</template>

<script type="text/javascript">
	import Vue from  'vue'
	import {mapState} from  'vuex'
    import Swiper from 'swiper'
	import 'swiper/css/swiper.min.css'
    export default {
		data(){
			return{
				goodsList:[],
				newArray:[],
				width:170,
				gutterWidth:10,
				topics:[],
				col:2,
                index:0,
				isTransition:true
			}
		},
		methods:{
		goMain(){
			this.$router.replace('/main ')
		},
			scroll(scrollData){
				// console.log(scrollData)
			},
			loadmore(index){
			console.log(index)
                if (index<10) {
					this.topics = this.topics.concat(this.database.result[index].topics)
                    // console.log(this.topics)
				}else{
                	console.log('没有数据了')
                }

			}
       },
		mounted() {
			new Swiper('.swiper-container', {
				autoplay: true,
				loop: true,
				clickable: true,
				pagination: {
					el: '.swiper-pagination',
				},
			});
            this.$store.dispatch('getAddWatrtfall')
            console.log(this.shuju);
			this.$store.dispatch('getAddLanjiazai')





			var _this = this;
			window.addEventListener('scroll', function(){
				var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
				var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
				var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
				// console.log(scr,clientHeight,scrHeight);
				if(scr + clientHeight + 10 >= scrHeight){
					// if(_this.isMoreLoad){ //this.isMoreLoad控制滚动是否加载更多
					//     _this.definePageNum = _this.definePageNum + 1; // 加载更多是definePageNum+1

					// }else{
					//     return;
					// }
                    let index = _this.index++

					_this.loadmore(index);
				}
			});


		},
		computed:{
			// itemWidth(){
			// 	return (138*0.5*(document.documentElement.clientWidth/375)) // #rem布局 计算宽度
			// },
			...mapState({
				shuju : state => state.waterFall
			}),
			...mapState({
				database : state => state.getlanjiazai
			}),

		},
        watch:{
			shuju(newShuju){
				this.topics = newShuju[0].topics

			}
        }
	}

</script>

<style lang="stylus" rel="stylesheet/style">
  #valueGuide
     background #eee
    .valueTop
        width 100%
        height 192px
        .titleAdvertising
            width 100%
            height 104px
            img
                width 100%
        .valuerow
            width 710px
            height 88px
            margin 0 20px
            display flex
            justify-content space-between
            text-align center
            i
                font-size 50px
                height 88px
                line-height 88px
            span
                width 200px
                height 70px
                line-height 70px
                display inline-block
                margin-top 10px
                font-size 36px
                margin-left 80px
            .valuerowRight
                height 88px
                line-height 88px
                .sousuo
                    margin-right 30px
    .valuecontainer
        width 100%
        height 685px
        position relative
        .valueTitle
            width 100%
            height 526px
            position absolute
            background: #000

        .valueslideshow
            height 540px
            width 100%
            background red
            position absolute
            top 140px
            .swiper-container
                z-index 2
                width 710px
                height 540px
                background #fff
                border-radius 20px
                margin 0 auto
                .swiper-wrapper
                    width 100%
                    height 540px
                    .swiper-slide
                        width 100%
                        height 540px
    .container-water-fall
        width 750px
        height 100%
        background red
        padding: 30px 20px 0
        box-sizing border-box
        background-color blue
        .cell-item
            /*width 345px*/
            /*height 394px*/
            background-color #e3e
            border-radius 16px
            margin-bottom 20px
            overflow hidden

            .itemImg
                width 345px
            .line1
                width 343px
                box-sizing border-box
                padding 18px 16px 0
                font-size 28px
                line-height 40px
                color #333
            .line2
                width 343px
                height 89px
                box-sizing border-box
                padding 17px 16px 12px
                display flex
                justify-content space-between
                .userInfo
                      // width 104px
                      height 48px
                      display flex
                      .avt
                          width 48px
                          height 48px
                          border 1px solid #d9d9d9
                          border-radius 24px
                      .name
                          // width 48px
                          height 48px
                          color #7f7f7f
                          font-size 24px
                          line-height 48px
                          margin-left 8px
                  .see
                      // width 100px
                      height 48px
                      display flex
                      .seeImg
                          width 32px
                          height 32px
                      .seeText
                          height 32px
                          line-height 32px
                          font-size 24px
                          color #7f7f7f


</style>