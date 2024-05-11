<template>
	<view class="content">
		<form class="app-update-pv">

			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(0, 102, 51, 1)","textAlign":"left"}'
					class="title">商品名称</view>
				<input
					:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 102, 51, 1)","borderRadius":"0px","color":"rgba(0, 102, 51, 1)","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"28rpx","borderStyle":"solid","height":"68rpx"}'
					:disabled="ro.goodsName" v-model="ruleForm.goodsName" placeholder="商品名称"></input>
			</view>
			<view
				:style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
				class="cu-form-group" @tap="goodsPhotoTap">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(0, 102, 51, 1)","textAlign":"left"}'
					class="title">商品图片</view>
				<view class="right-input" style="padding:0;textAlign:left">
					<image
						:style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
						class="avator" v-if="ruleForm.goodsPhoto" :src="ruleForm.goodsPhoto" mode="aspectFill">
					</image>
					<image
						:style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
						class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(0, 102, 51, 1)","textAlign":"left"}'
					class="title">商品类型</view>
				<picker @change="goodsTypesChange" :value="goodsTypesIndex" :range="goodsTypesOptions" range-key="indexName">
					<view
						:style='{"borderColor":"rgba(0, 102, 51, 1)","backgroundColor":"rgba(248, 248, 248, 1)","borderRadius":"0px","color":"rgba(0, 102, 51, 1)","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"80rpx"}'
						class="uni-input">{{ruleForm.goodsTypes?ruleForm.goodsValue:"请选择商品类型"}}</view>
				</picker>
			</view>
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(0, 102, 51, 1)","textAlign":"left"}'
					class="title">库存</view>
				<input
					:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 102, 51, 1)","borderRadius":"0px","color":"rgba(0, 102, 51, 1)","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"28rpx","borderStyle":"solid","height":"68rpx"}'
					:disabled="ro.goodsKucunNumber" type="number" v-model="ruleForm.goodsKucunNumber" placeholder="库存"></input>
			</view>
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(0, 102, 51, 1)","textAlign":"left"}'
					class="title">商品原价 </view>
				<input
					:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 102, 51, 1)","borderRadius":"0px","color":"rgba(0, 102, 51, 1)","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"28rpx","borderStyle":"solid","height":"68rpx"}'
					v-model="ruleForm.goodsOldMoney" type="number" placeholder="商品原价"></input>
			</view>
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(0, 102, 51, 1)","textAlign":"left"}'
					class="title">商品现价</view>
				<input
					:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 102, 51, 1)","borderRadius":"0px","color":"rgba(0, 102, 51, 1)","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"28rpx","borderStyle":"solid","height":"68rpx"}'
					v-model="ruleForm.goodsNewMoney" type="number" placeholder="商品现价"></input>
			</view>
			
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(0, 102, 51, 1)","textAlign":"left"}'
					class="title">详情</view>
					<textarea :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 102, 51, 1)","borderRadius":"0px","color":"rgba(0, 102, 51, 1)","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"28rpx","borderStyle":"solid","height":"200rpx"}'
					 :disabled="ro.goodsContent" v-model="ruleForm.goodsContent" placeholder="详情"/>
			</view>
			
			<view class="btn">
				<button
					:style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"rgba(0, 102, 51, 1)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
					@tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="goodsOldMoneyConfirm"
			ref="goodsOldMoney" themeColor="#333333"></w-picker>

	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross: '',
				ro:{
				    goodsName: false,
				    goodsTypes: false,
				    yonghuId: false,
				    goodsPhoto: false,
				    goodsKucunNumber: false,
				    goodsOldMoney: false,
				    goodsNewMoney: false,
				    shangxiaTypes: false,
				    goodsDelete: false,
				    goodsContent: false,
				},
				ruleForm: {
				    goodsName: '',
				    goodsTypes: '',
				    yonghuId: '',
				    goodsPhoto: '',
				    goodsKucunNumber: '',
				    goodsOldMoney: '',
				    goodsNewMoney: '',
				    shangxiaTypes: '',
				    goodsDelete: '',
				    goodsContent: '',
				},
				// 登陆用户信息
				user: {},
				goodsTypesOptions : [],
				goodsTypesIndex : 0,
				
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			
			let paramsA = {
				page: 1,
				limit: 100,
				dicCode: 'goods_types',
			}
			let resA = await this.$api.page(`dictionary`, paramsA);
			this.goodsTypesOptions = resA.data.list
			
			let paramsB = {
				page: 1,
				limit: 100,
				dicCode: 'chongwu_types',
			}
			let resB = await this.$api.page(`dictionary`, paramsB);
			this.chongwuTypesOptions = resB.data.list


			
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				let res = await this.$api.info(`goods`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if (options.cross) {
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj) {
					if (o == 'goodsName') {
						this.ruleForm.goodsName = obj[o];
						this.ro.goodsName = true;
						continue;
					}
					if (o == 'shipin') {
						this.ruleForm.shipin = obj[o];
						this.ro.shipin = true;
						continue;
					}
					if (o == 'goodsPhoto') {
						this.ruleForm.goodsPhoto = obj[o];
						this.ro.goodsPhoto = true;
						continue;
					}
					if (o == 'goodsOldMoney') {
						this.ruleForm.goodsOldMoney = obj[o];
						this.ro.goodsOldMoney = true;
						continue;
					}
					if (o == 'yonghuzhanghao') {
						this.ruleForm.yonghuzhanghao = obj[o];
						this.ro.yonghuzhanghao = true;
						continue;
					}
					if (o == 'yonghuxingming') {
						this.ruleForm.yonghuxingming = obj[o];
						this.ro.yonghuxingming = true;
						continue;
					}
					if (o == 'userid') {
						this.ruleForm.userid = obj[o];
						this.ro.userid = true;
						continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			// 下拉变化
			goodsTypesChange(e) {
				this.goodsTypesIndex = e.target.value
				this.ruleForm.goodsValue = this.goodsTypesOptions[this.goodsTypesIndex].indexName
				this.ruleForm.goodsTypes = this.goodsTypesOptions[this.goodsTypesIndex].codeIndex
			},
			
			styleChange() {
				this.$nextTick(() => {
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 日长控件选择日期商品原价 
			goodsOldMoneyConfirm(val) {
				console.log(val)
				this.ruleForm.goodsOldMoney = val.result;
				this.$forceUpdate();
			},


			goodsPhotoTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.goodsPhoto = 'http://localhost:8080/ershoujiaoyi/upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(() => {
						_this.styleChange()
					})
				});
			},

			getUUID() {
				return new Date().getTime();
			},
			async onSubmitTap() {
				if ((!this.ruleForm.goodsName)) {
					this.$utils.msg(`商品名称不能为空`);
					return
				}
				if ((!this.ruleForm.goodsTypes)) {
					this.$utils.msg(`商品类型不能为空`);
					return
				}
				if ((!this.ruleForm.goodsPhoto)) {
					this.$utils.msg(`商品图片不能为空`);
					return
				}
				if ((!this.ruleForm.goodsKucunNumber)) {
					this.$utils.msg(`商品库存不能为空`);
					return
				}
				if ((!this.ruleForm.goodsOldMoney)) {
					this.$utils.msg(`商品原价不能为空`);
					return
				}
				if ((!this.ruleForm.goodsNewMoney)) {
					this.$utils.msg(`商品现价不能为空`);
					return
				}
				if ((!this.ruleForm.goodsContent)) {
					this.$utils.msg(`详情不能为空`);
					return
				}
				if (this.ruleForm.id) {
					await this.$api.update(`goods`, this.ruleForm);
				} else {
					await this.$api.save(`goods`, this.ruleForm);
				}
				this.$utils.msgBack('提交成功');
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}

	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}

	.cu-form-group.active {
		justify-content: space-between;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 20upx 0;
	}

	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}

	.cu-form-group+.cu-form-group {
		border: 0;
	}

	.cu-form-group uni-input {
		padding: 0 30upx;
	}

	.uni-input {
		padding: 0 30upx;
	}

	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}

	.cu-form-group uni-picker::after {
		line-height: 68rpx;
	}

	.select .uni-input {
		line-height: 68rpx;
	}

	.input .right-input {
		line-height: 68rpx;
	}
</style>
