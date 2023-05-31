<!--
* Home
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-30 15:03:46
* @since 0.0.0
-->

<template>
    <!-- <van-tabs v-model="active" class="tab-box" swipeable>
        <van-tab title="标签 1">
            <div class="content">
                内容 1
            </div>

        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs> -->
    <div>交易统计数据：当天交易情况；交易走势，主要是统计数据</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const active = ref(1)
</script>

<style src="./home.styl" lang="stylus" scoped></style>
