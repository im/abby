<!--
* Finance
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-30 15:04:00
* @since 0.0.0
-->

<template>
    <van-tabs v-model="active" class="tab-box" swipeable>
        <van-tab title="账户资金"><div class="content">账户资金</div></van-tab>
        <van-tab title="交易明细"><div class="content">交易明细</div></van-tab>
        <van-tab title="交易划款"><div class="content">交易划款</div></van-tab>
        <van-tab title="保证金划款"><div class="content">保证金划款</div></van-tab>
    </van-tabs>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const active = ref(1)
</script>

<style src="./finance.styl" lang="stylus" scoped></style>
