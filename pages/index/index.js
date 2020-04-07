//index.js
//获取应用实例
const app = getApp()

Page({
	data: {},
	onLoad: function() {},
	toCSJ: function() {
		wx.redirectTo({
			url: "../csj/csj"
		})
	},
	toHX: function() {
		wx.redirectTo({
			url: "../hx/hx"
		})
	},
	toJT: function() {
		wx.redirectTo({
			url: "../jt/jt"
		})
	}
})
