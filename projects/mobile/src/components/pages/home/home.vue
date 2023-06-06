<!--
* Home
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-30 15:03:46
* @since 0.0.0
-->

<template>
    <div class="home">
        <van-cell-group inset>
            <van-field
                v-model="value"
                label="字段标题"
                autosize
                type="textarea"
                placeholder="请输入密码"
                label-align="top"
            />
            <van-field
                v-model="value1"
                label="字段标题"
                autosize
                type="textarea"
                placeholder="请输入账号"
                label-align="top"
            />
    </van-cell-group>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const value = ref('')
const value1 = ref('')
</script>

<style src="./home.styl" lang="stylus" scoped></style>
