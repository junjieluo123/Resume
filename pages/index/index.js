// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width:0,
    height:0,
    name: "罗俊杰",
    spell: "Luo Junjie",
    job: "前端工程师",
    exp: "学生",
    age: 25,
    sex: "男",
    email: "junjieluo123@163.com",
    address:"江西省九江市",
    tel: "13281807464",
    skill: [
      {name: "HTML/CSS/JavaScript/Vue.js", percent: "60"},
      {name: "HTTP", percent: "40"},
      {name: "数据结构与算法", percent: "50"},
      {name: "TypeScript", percent: "30"},
      {name: "linux", percent: "10"}
    ],
    education: [
      {
        school: "四川大学",
        major: "电路与系统(硕士)",
        year: "2018-2021",
        desc: "2015-2016：校级三好学生、二等奖学金"
      },
      {
        school: "贵州大学",
        major: "测控技术与仪器(本科)",
        year: "2013-2017",
        desc: "2018-2020： 二等奖学金"
      }
    ],
    project:[
      {
        name: "模拟去哪儿网移动端页面",
        desc: "项目介绍：基于Vue.js，开发模拟去哪儿网移动端页面。主要工作：1.使用swiper实现图片的轮播。2.使用Vuex实现首页和城市选择页面之间的数据共享。3.使用递归组件显示详情页面的多级标题。4.使用keep-alive优化网页性能。技术栈：Vue+Vuex+Axios"
      },
      {
        name: "小程序简历",
        desc: "项目介绍：基于小程序原生架构，构建了简历小程序。主要工作：1. 实现页面的布局。2. 使用swiper组件实现页面的切换。3. 使用scroll-view组件实现页面的垂直滚动。技术栈：WXML+WXSS+JavaScript"
      }
    ],
    introduction:"本人性格开朗、稳重、有活力，待人热情、真诚；对待工作认真负责，善于沟通、协调有较强的组织能力与团队精神；上进心强、勤于学习能不断提高自身的能力与综合素质。在未来的工作中，我将以充沛的精力，刻苦钻研的精神来努力工作，稳定地提高自己的工作能力，与企业同步发展。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var width = wx.getSystemInfoSync().windowWidth
    var height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width:width,
      height:height
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})