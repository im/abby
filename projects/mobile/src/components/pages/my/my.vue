<!--
* My
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-30 16:13:44
* @since 0.0.0
-->

<template>
    <div class="pt-10">

        <div class=" relative max-w-sm mx-auto bg-white mb-10 px-6 items-center  rounded-xl flex  ">
            <img class="w-24 h-24 rounded-full shadow-lg" src="https://tangxiaomi.top/mobile/logo.svg" />
            <div class="flex flex-col py-5 pl-10">
                <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">登录</strong>
                <!-- <span class="text-slate-500 text-sm font-medium dark:text-slate-400">brave</span> -->
            </div>
        </div>
        <!-- <van-contact-card type="edit" tel="15807551258" name="Abby" class="mb30" /> -->
        <!-- <van-skeleton title avatar :row="3" class="mb30" /> -->

        <van-cell-group>
            <!-- <van-cell title="商户账号的登录" is-link /> -->
            <van-cell title="消息通知" is-link />
            <van-cell title="帮助中心" is-link />
        </van-cell-group>
    </div>
</template>

<script lang="ts" setup>
import { computed, } from 'vue'
</script>

<style src="./my.styl" lang="stylus" scoped></style>
