<template>
<div class="druid">
  <div class="picture">
    <div class="select">
      <div class="cardProfession" @click="listShow()">职业卡牌</div>
      <div class="cardRarity" @click="rarityListShow()">稀有度</div>
      <div class="cardCost" @click="costList()">费用</div>
    </div>
    <ul class="cardList" @click="allMiss()">
      <li v-for="(val,$index) in cardUrl"><img :src="val" alt="" @click="getCard($index)"></li>
    </ul>
    <div class="list" v-show="isList">
      <div class="allCard">全部</div>
      <div class="neutrality">中立</div>
      <div class="self">德鲁伊</div>
    </div>
    <div class="rarityList" v-show="isRarity">
      <div class="allCard">全部</div>
      <div class="common">普通</div>
      <div class="rare">稀有</div>
      <div class="epic">史诗</div>
      <div class="legend">传说</div>
    </div>
    <div class="costList" v-show="isCost">
      <div class="allCard">全部</div>
      <div class="zero">0费</div>
      <div class="one">1费</div>
      <div class="two">2费</div>
      <div class="three">3费</div>
      <div class="four">4费</div>
      <div class="five">5费</div>
      <div class="six">6费</div>
      <div class="sevenPlus">7费+</div>
    </div>
  </div>
  <div class="picked" @click="allMiss()">
    <div class="druidImag">
      <img src="../img/druid_s.png" alt="">
    </div>
     <ul>
       <li v-for="(item,$index) in pickedCard" v-bind:style="{backgroundImage:'url(' + item.img + ')'}" @click="deleteCard($index)">{{item.name}}</li>
     </ul>
    <div class="cardNum">
      <div class="num">15/30</div>
      <div class="reNum">重置</div>
    </div>
    <div class="complete">
      <img src="../img/complete.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'druid',
    data () {
      return {
        cardUrl: [],
        pickedCard: [],
        cardName: [],
        isList: false,
        isRarity: false,
        isCost: false

      }
    },
    mounted: function () {
      this.getUrl()
    },
    methods: {
      getUrl () { // 全部卡牌数据渲染
        this.$http.get('../static/cards.json').then((res) => {
          let by = function (name) {
            return function (o, p) {
              let a, b
              if (typeof o === 'object' && typeof p === 'object' && o && p) {
                a = o[name]
                b = p[name]
                if (a === b) { return 0 }
                if (typeof a === typeof b) { return a < b ? -1 : 1 }
                return typeof a < typeof b ? -1 : 1
              }
            }
          }
          let temp = res.data.sort(by('cost'))
          for (let i = 0; i < temp.length; i++) {
            if (temp[i].playerClass === 'NEUTRAL' || temp[i].playerClass === 'DRUID') {
              let sortedCard = temp.sort(by(temp[i].cost))
              this.cardUrl.push(sortedCard[i].img)
              localStorage.cardUrl = this.cardUrl
              this.cardName.push(sortedCard[i].name)
            }
          }
        })
      },
      getCard ($index) {  // 添加卡牌数据到右边卡牌列表
        this.pickedCard.push({'img': this.cardUrl[$index], 'name': this.cardName[$index]})
      },
      deleteCard ($index) { // 删除卡牌
        this.pickedCard.pop(this.pickedCard[$index])
      },
      listShow () { // 职业卡牌选项分类列表显示
        this.isList = !this.isList
        this.isRarity = false
        this.isCost = false
      },
      rarityListShow () { // 稀有度卡牌选项分类列表显示
        this.isRarity = !this.isRarity
        this.isList = false
        this.isCost = false
      },
      costList () { // 费用分类列表选项列表显示
        this.isCost = !this.isCost
        this.isList = false
        this.isRarity = false
      },
      allMiss () { // 点击任意处卡牌选择列表消失
        this.isCost = false
        this.isList = false
        this.isRarity = false
      }
    }
  }
</script>

<style>
  .druid{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .picture{
    box-sizing: border-box;
    width: 75%;
    position: relative;
  }
  .picture .select{
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-bottom: 1px solid sandybrown;
    margin-bottom: 10px;
  }
  .picture .select div{
    width: 33.33%;
    height: 75px;
    box-sizing: border-box;
    border-top: 1px solid sandybrown;
    border-right: 1px solid sandybrown;
    line-height: 75px;
    font-size: 30px;
  }
  .picture .list,.rarityList,.costList{
    position: absolute;
    width: 100%;
    height: 75px;
    top:73px;
    display: flex;
    flex-wrap: wrap;
    background-color: bisque;
  }
  .picture .list div{
    width: 33.33%;
    font-size: 30px;
    line-height: 75px;
    box-sizing: border-box;
    border: 1px solid sandybrown;
  }
  .picture .rarityList div{
    width: 20%;
    font-size: 30px;
    line-height: 75px;
    box-sizing: border-box;
    border: 1px solid sandybrown;
  }
  .picture .costList div{
    width: 20%;
    font-size: 30px;
    line-height: 75px;
    box-sizing: border-box;
    border: 1px solid sandybrown;
    background-color: bisque;
  }
  .picture .cardList{
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 0;
    padding:0;
    height:1360px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .picture .cardList li{
    width: 33.33%;
    list-style: none;
  }
  .picture .cardList li img{
    width: 200px;
  }
  .picked{
    box-sizing: border-box;
    width: 24%;
  }
  .picked ul{
    margin: 0;
    padding:0;
    height: 1130px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .picked ul li{
    margin-top: 5px;
    list-style: none;
    height: 30px;
    background-size: 500px 750px;
    background-repeat: no-repeat;
    background-position: -150px -150px;
    color: sandybrown;
    font-size: 20px;
    border: 2px solid sandybrown;
  }
  .picked .druidImag img{
    width: 235px;
  }
  .picked .complete img{
    width: 235px;
  }
  .picked .cardNum{
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid sandybrown;
    margin-bottom: 5px;
  }
  .picked .cardNum div{
    width: 50%;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    box-sizing: border-box;
  }
  .picked .cardNum .num{
    border-right: 1px solid sandybrown;
  }
</style>
