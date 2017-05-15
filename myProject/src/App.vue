<template>
  <div id="app">
    <router-link :to="{ name: 'Druid'}">德鲁伊</router-link>
    <router-link :to="{ name: 'Hunter'}">猎人</router-link>
    <router-link :to="{ name: 'Mega'}">法师</router-link>
    <router-link :to="{ name: 'Paladin'}">圣骑士</router-link>
    <router-link :to="{ name: 'Priest'}">牧师</router-link>
    <router-link :to="{ name: 'Rogue'}">盗贼</router-link>
    <router-link :to="{ name: 'Shaman'}">萨满</router-link>
    <router-link :to="{ name: 'Walock'}">术士</router-link>
    <router-link :to="{ name: 'Warrior'}">战士</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
}
  a{
    display:inline-block;
    text-decoration: none;
    width: 33.33%;
    height: 120px;
    font-size: 30px;
    color: #1f3134;
    line-height: 120px;
    box-sizing: border-box;
    text-align: center;
  }
  .router-link-exact-active{
    color: #cd5e3c;
    border-bottom: 2px solid #cd5e3c;
  }
</style>
