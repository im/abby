<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>

  <div class="app-container">
      <router-view></router-view>
  </div>
  <van-tabbar route>
    <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/deal" icon="cashier-o">交易专区</van-tabbar-item>
    <van-tabbar-item to="/finance" icon="cash-back-record">财务专区</van-tabbar-item>
    <van-tabbar-item to="/stat" icon="chart-trending-o">统计专区</van-tabbar-item>
    <van-tabbar-item to="/my" icon="manager-o">我的</van-tabbar-item>
    <!-- <van-tabbar-item name="search" to="/search" icon="search">交易查询</van-tabbar-item>
    <van-tabbar-item name="finance" to="/finance" icon="cashier-o">财务专区</van-tabbar-item>
    <van-tabbar-item name="refund" to="/refund" icon="exchange">退款管理</van-tabbar-item> -->
    <!-- <van-tabbar-item name="opasst" to="/opasst" icon="orders-o">OPASST</van-tabbar-item> -->
    <!-- <van-tabbar-item name="message" to="/message" icon="chat-o">消息通知</van-tabbar-item> -->
  </van-tabbar>
</template>

<style lang="stylus">
.app-container
  width 100%
  height 100%
</style>
