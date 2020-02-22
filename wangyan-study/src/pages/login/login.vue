<template>
    <div id="personalGuide" >
        <div class="personalContent">
            <div class="personalTop">
                <div class="titleAdvertising">
                    <img src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75" alt="">
                </div>
                <div class="personalrow">
                    <i class="personalrowleft iconfont icon-fangzi"></i>
                    <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
                    <div class="personalrowRight">
                        <i class="sousuo iconfont icon-sousuo"></i>
                        <i class="iconfont icon-che"></i>
                    </div>
                </div>
            </div>
            <div class="personalContainer">
                <div class="ContainerRegister">
                    <div class="imgContainer">
                        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
                    </div>
                    <div class="Register">
                        <div class="RegisterPhone">
                            <i class="iconfont icon-shouji"></i>
                            <span>手机号登录</span>
                        </div>
                        <div class="RegisterEmail">
                            <i class="iconfont icon-xinfeng"></i>
                            <span>邮箱账号登录</span>
                        </div>
                    </div>

                </div>
                <div class="ThirdPartyLogin">
                    <div class="ThirdLift">
                        <i class="item iconfont icon-icon4"></i>
                        <span>微信</span>
                    </div>
                    <div class="ThirdCenter">
                        <i class="item iconfont icon-qq"></i>
                        <span>QQ</span>
                    </div>
                    <div class="ThirdRight">
                        <i class="item iconfont icon-weibo"></i>
                        <span>微博</span>
                    </div>
                </div>
            </div>

            <!-- 手机号 -->
            <div class="phone1">
                <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
                <form action="">
                    <div class="container1">
                        <input class="in1" type="text" placeholder="请输入手机号" name="phone" maxlength="11">
                        <input class="in2" type="text" placeholder="请输入验证码" name="username" maxlength="8">
                        <mt-button class="btn1">获取验证码</mt-button>
                        <mt-button class="btn2">登录</mt-button>
                        <mt-button class="btn3">其他方式登录 > </mt-button>
                    </div>
                </form>
            </div>

            <!-- 邮箱 -->
            <div class="mail1">
                <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
               <form action="">
                   <div class="container2">
                       <input class="in3" type="text" placeholder="邮箱账号" name="phone" maxlength="11">
                       <input class="in4" type="text" placeholder="密码" name="username" maxlength="8">
                       <mt-button class="btn4">忘记密码</mt-button>
                       <mt-button class="btn5">登录</mt-button>
                       <mt-button class="btn6">其他方式登录 > </mt-button>
                   </div>
               </form>
            </div>
        </div>

    </div>
</template>

<script>
	export default {
		name: "login",
        data(){
			return {
				isShow :false
            }
        }
	}
</script>

<style lang="stylus" rel="stylesheet/style">
    #personalGuide
        width 100%
        height 100%
        .personalContent
            width 100%
            height 100%
            .personalTop
                width 100%
                height 192px
                .titleAdvertising
                    width 100%
                    height 104px
                    img
                        width 100%
                .personalrow
                    width 710px
                    height 88px
                    margin 0 20px
                    display flex
                    justify-content space-between
                    i
                       font-size 50px
                       height 88px
                       line-height 88px
                    img
                        width 200px
                        height 70px
                        line-height 70px
                        display inline-block
                        margin-top 10px
                    .personalrowRight
                        height 88px
                        line-height 88px
                        .sousuo
                           margin-right 30px
            .personalContainer
                width 100%
                height 1144px
                background #F2F5F4
                .ContainerRegister
                   width 100%
                   height 702px
                   margin-bottom 204px
                   .imgContainer
                       width 100%
                       height 482px
                       text-align center
                       line-height 480px
                       img
                           width 268px
                           height 90px
                   .Register
                       width 670px
                       height 220px
                       margin 0 40px
                       .RegisterPhone
                            margin 0 auto
                            display block
                            width 670px
                            height 94px
                            line-height 94px
                            background-color rgb(221, 26, 33)
                            margin-bottom 30px
                            color white
                            text-align center
                            font-size 30px
                       .RegisterEmail
                            margin 0 auto
                            display block
                            width 670px
                            height 94px
                            line-height 94px
                            border 1px solid #ff0000
                            color red
                            text-align center
                            font-size 30px



                .ThirdPartyLogin
                   width 100%
                   height 40px
                   text-align center
                   .ThirdLift
                      width 170px
                      height 40px
                      display inline-block
                      .item
                         font-size 40px
                         margin-right 8px
                         color #7F7F7F
                      span
                         height 40px
                         line-height 40px
                         color #7F7F7F
                         font-size 30px
                   .ThirdCenter
                      width 170px
                      height 40px
                      display inline-block
                      .item
                          font-size 40px
                          margin-right 8px
                          color #7F7F7F
                      span
                           height 40px
                           line-height 40px
                           color #7F7F7F
                           font-size 30px
                   .ThirdRight
                      width 170px
                      height 80px
                      display inline-block
                      .item
                         font-size 40px
                         margin-right 8px
                         color #7F7F7F
                      span
                         height 40px
                         line-height 40px
                         color #7F7F7F
                         font-size 30px
           
            .mail1
                width 750px
                height 750px
                margin-top 60px
                text-align center
                img
                    width 268px
                    height 90px
                    margin-bottom 90px
                    .container2
                        width 670px
                        height 516px
                        position relative
                        margin 0 auto
                        .in3
                            font-size 30px
                            width 100%
                            height 90px
                            outline none
                            border-bottom 1px solid #eee
                        .in4
                            font-size 30px
                            width 100%
                            height 90px
                            outline none
                            margin-top 50px
                            border-bottom 1px solid #eee
                        .btn4
                            width 164px
                            height 52px
                            border 2px solid #999
                            position absolute
                            right 10px
                            top 260px
                        .btn5
                            width 100%
                            height 91px
                            margin-top 110px
                            background-color rgb(221, 26, 33)
                            color #ffffff
                            font-size 30px
                        .btn6
                            width 100%
                            height 91px
                            margin-top 90px
                            color black
                            font-size 30px

</style>


















</style>