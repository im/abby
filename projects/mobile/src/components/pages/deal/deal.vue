<!--
* Deal
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-30 16:04:01
* @since 0.0.0
-->

<template>
    <van-tabs v-model="active" class="tab-box" swipeable>
        <van-tab title="正式交易">
            <div class="content">
                <van-card
                    v-for="i in 4"
                    :key="i"
                    price="2.00"
                    desc="交易描述"
                    title="交易信息"
                    thumb="https://tangxiaomi.top/mobile/logo.svg" />
            </div>
        </van-tab>
        <van-tab title="异常交易"><div class="content">异常交易</div></van-tab>
        <van-tab title="撤销交易"><div class="content">撤销交易</div></van-tab>
        <van-tab title="未付款交易"><div class="content">未付款交易</div></van-tab>
        <van-tab title="预授权交易"><div class="content">预授权交易</div></van-tab>
    </van-tabs>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const active = ref(1)
</script>

<style src="./deal.styl" lang="stylus" scoped></style>
