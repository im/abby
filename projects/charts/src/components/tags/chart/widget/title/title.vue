<!--
* Title
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-08 09:32:39
* @since 0.0.0
-->

<template>
     <Widget title="标题" tooltip="设置图表标题">
        <div class="wrapper">
            <el-checkbox v-model="data.show" label="" size="small" @change="change" />
            <el-input v-model="data.value" size="small" @input="change" />
            <el-color-picker v-model="data.color" size="small" :predefine="predefineColors" @change="change" />
        </div>
    </Widget>
</template>

<script lang="ts" setup>
import { computed, ref, inject, onMounted } from 'vue'
import Widget from '@/components/tags/chart/widget'
import { ChartKey } from '@/utils/symbols'
import injectStrict from '@/utils/injectStrict'
import { updateChartConfig } from '@/utils/chart'
import { ChartConfigTitleObject } from '@/typings/chart'

const CHART = injectStrict(ChartKey)

const data = ref({} as ChartConfigTitleObject)

const predefineColors = ref([
    '#ffffff',
    '#000000',
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
])

const init = () => {
    const { config } = CHART.value
    data.value = { ...config?.title }
}

const change = () => {
    updateChartConfig(CHART.value, 'title', data.value)
}

onMounted(() => {
    init()
})

</script>

<style src="./title.styl" lang="stylus" scoped></style>
