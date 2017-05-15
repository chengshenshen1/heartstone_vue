<template>
<div class="druid">
  <div class="picture">
    <ul class="cardList">
      <li v-for="val in cardUrl"><img :src="val" alt="""></li>
    </ul>
  </div>
  <div class="picked">
     <ul>
       <li></li>
     </ul>
  </div>
</div>
</template>

<script>
  export default {
    name: 'druid',
    data () {
      return {
        cardUrl: [],
        pickedCard: {}
      }
    },
    mounted: function () {
      this.getUrl()
    },
    methods: {
      getUrl () {
        this.$http.get('../static/cards.json').then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].playerClass === ('NEUTRAL' || 'Druid')) {
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
              let sortedCard = res.data.sort(by(res.data[i].cost))
              this.cardUrl.push(sortedCard[i].img)
            }
          }
        })
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

  }
  .picture .cardList{
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    padding:0;
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
    width: 25%;
  }
</style>
