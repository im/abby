<!--
* Stat
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-30 16:10:11
* @since 0.0.0
-->

<template>
      <van-tabs v-model="active" class="tab-box" swipeable>
        <van-tab title="退款查询"><div class="content">退款查询</div></van-tab>
        <van-tab title="拒付与伪冒统计"><div class="content">拒付与伪冒统计</div></van-tab>
    </van-tabs>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const active = ref(1)
</script>

<style src="./stat.styl" lang="stylus" scoped></style>
