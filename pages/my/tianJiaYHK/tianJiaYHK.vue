<template>
	<view>
		<block v-if="setUp==1">
			<view class="yinh-cont">
				<view class="yinh-tips flex-cent">
					请绑定持卡人本人的银行
				</view>
			  <view class="form-bo">
			  	<view class="form-bo-item flex-cent">
			  		<view class="">姓名</view>
			      <view class="form-bo-name">{{infoData.real_name}}</view>
			  	</view>
			    <view class="form-bo-item flex-cent">
			    	<view class="">银行卡号</view>
						<input type="text" @input="bankNumInput" v-model="bankNum" placeholder="输入银行卡" />
			    </view>
			  </view>
			</view>
			<view class="bot-min-btn flex-cent-cent">
			  <button class="conf-btn rads" type="primary" @click="mathBankCard" >
			    下一步
			  </button>
			</view>
		</block>
    <block v-if="setUp==2">
    	<view class="yinh-cont">
    		<view class="heng">
    		</view>
    	  <view class="form-bo">
    	  	<view class="form-bo-item flex-cent">
    	  		<view class="">卡类型</view>
    	      <view class="form-bo-name">{{bankName}}</view>
    	  	</view>
    	    <view class="form-bo-item flex-cent">
    	    	<view class="">手机号码</view>
    				<input type="text" @input="phoneInput" v-model="phone" placeholder="输入手机号码" />
    	    </view>
    	  </view>
    	</view>
    	<view class="bot-min-btn flex-cent-cent">
    	  <button class="conf-btn rads" type="primary" @click="sendCode" >
    	    下一步
    	  </button>
    	</view>
    </block>
		<block v-if="setUp==3">
			<view class="yinh-cont">
				<view class="yinh-tips flex-cent">
					已发送验证码到 <text class="col-5788ff">{{phone}}</text> 手机号码
				</view>
			  <view class="form-bo">
			  	
			    <view class="form-bo-item flex-cent">
			    	<view class="">验证码</view>
						<input type="text" @input="codeInput" v-model="code" placeholder="输入验证码" />
						<view v-if="this.loopnum!=60" class="code-btn" @click="sendHandle">{{loopnum}} 秒后重发</view>
						<view v-if="this.loopnum==60" class="code-btn col-back " @click="sendHandle">发送验证码</view>
			    </view>
			  </view>
			</view>
			<view class="bot-min-btn flex-cent-cent">
			  <button class="conf-btn rads" type="primary" @click="confCode()" >
			    下一步
			  </button>
			</view>
		</block>
		<!-- <view class="bot-min-btn flex-cent-cent">
		  <button class="conf-btn rads" type="primary" @click="goPage" data-path="/pages/my/bangDingYHK/bangDingYHK" >
		    下一步
		  </button>
		</view> -->
	</view>
</template>

<script>
	import bank from '@/common/bank';
	import util from '@/common/utils/util';
	export default {
		data() {
			return {
				infoData:{},
				setUp:1, //
				bankNum:'',
				bankName:'',
				phone:'',
				code:'',
				loopnum:60
			};
		},
		onLoad(options){
			this.options = options
			this.init()
			console.log('uni.request',uni.request)
		},
		onShow(){
		},
    methods: {
      init(){
				this.$request({
					// 我的页面初始化
					url:'association/client/setting/mineInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request mineInit', res)
						let _data = res.data
						this.infoData = _data
						// this.phone = this.infoData.phone||''
					}
				})
			},
			mathBankCard(){
// 				this.setUp=2
// 				return
				if(!this.bankNum){
					util.showModal({content: '请输入银行卡号'})
					return
				}
				let backIdNum = this.bankNum; //'6226097806356631'
				uni.request({
					url: 'https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo='+backIdNum+'&cardBinCheck=true',
					success: (res) => {
						let _data = res.data
						if(!_data.validated){
							util.showModal({
								content: '输入的银行卡无效，请检查后重试',
							});
							return
						}
						console.log('request cardNo success', _data)
						console.log('request cardNo success2', bank[_data.bank])
						this.bankName = bank[_data.bank]
						if(!bank[_data.bank]){
							this.bankName = _data.bank||'未匹配到所属银行'
						}
						//
						this.setUp=2
					},
				})
			},
			sendHandle(callbcak){
				if(this.loopnum!=60){
					return
				}
				if(!this.phone){
					util.showModal({content: '请输入手机号'})
					return
				}
				this.$request({
					// sendCode
					url:'association/client/wallet/sendCode.do',
					data: {
						phone: this.phone
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						util.showToast({
							title: res.errmsg+'',
						});
						this.loopnumSet =setInterval(() => {
							this.loopnum--
							if(this.loopnum<1){
								clearInterval(this.loopnumSet)
								this.loopnum=60
							}
						}, 1000);
						callbcak&&callbcak()
					},
					fail:()=>{
					}
				})
			},
			sendCode(){
				this.sendHandle(()=>{
					this.setUp=3

				})
				
			},
			confCode(){
				if(!this.code){
					util.showModal({content: '请输入验证码'})
					return
				}
				let formData = {
					phone: this.phone,
					code: this.code,
					bank_id: this.bankNum,
					bank_name: this.bankName,
				}
				this.$request({
					// 我的页面初始化
					url:'association/client/wallet/bindingBank.do',
					data: formData,
					success: (res) => {
						console.log('ryy-my-request success', res)
						uni.redirectTo({
							url: '/pages/my/bangDingYHK/bangDingYHK?page=1'
						})
					}
				})
			},
				
			bankNumInput(e) {
				var value = e.target.value;
				this.bankNum=value
			},
			phoneInput(e) {
				var value = e.target.value;
				this.phone=value
			},
			codeInput(e) {
				var value = e.target.value;
				this.code=value
			},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
      	uni.navigateTo({
      		url: path+"?page="+ page
      	})
      }
    },
	}
</script>

<style lang="scss">
  page{
    background-color: #f4f6fb;
  }
	.code-btn{
		padding: 0 10upx;
		background: #bbbbbb;
		color: #fff;
		border-radius: 200upx;
		margin-left: 60upx;
	}
	.col-back {
		background-image: linear-gradient(120deg, 
		#39abf8 0%, 
		#7184fe 100%);
	box-shadow: 0px 3upx 3upx 0px 
		rgba(109, 135, 254, 0.5);
	}
  .form-bo{
    background-color: #fff;
    padding: 0 30upx;
    .form-bo-item{
      height: 110upx;
      >view:first-child{
        font-weight: 700;
        color: #555555;
        min-width: 120upx;
        margin-right: 20upx;
        text-align: left;
      }
      .form-bo-name{
        
      }
    }
  }
  .yinh-tips{
    color: #bbbbbb;
    height: 88upx;
    padding: 30upx;
  }
  .yinh-cont{
    min-height: calc( 100vh - 210upx );
  }
  .bot-min-btn{
    
    .conf-btn{
      background-image: unset;
      width: 670upx;
      height: 88upx;
      line-height: 88upx;
      background-color: #5788ff;
      border-radius: 10upx;
      margin: 0 40upx;
      font-size: 34upx;
      .iconfont{
        margin-right: 10upx;
        font-size: 34upx;
      }
    }
  }
  .yingh-item{
    width: 690upx;
    height: 200upx;
    margin: 0 30upx 36upx;
    padding: 20upx 30upx 30upx;
    background-color: #526ff2;
    box-shadow: 0px 9upx 8upx 0px 
      rgba(82, 111, 242, 0.35);
    border-radius: 15upx;
    .yingh-name{
      font-size: 28upx;
      font-weight: 700;
      color: #ffffff;
    }
    .yingh-user{
      font-size: 24upx;
      color: #ffffff;
    }
    .yingh-id{
      font-size: 36upx;
      font-weight: 700;
      color: #ffffff;
      margin-top: 12upx;
    }
  }
  
</style>
