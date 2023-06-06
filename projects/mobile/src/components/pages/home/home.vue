<!--
* Home
* @author tangxiaomi <81195314@qq.com>
* @date 2023-05-30 15:03:46
* @since 0.0.0
-->

<template>
    <div class="home">
        <van-cell-group inset>
            <van-field v-model="value" label="字段标题" autosize type="textarea" placeholder="请输入密码" label-align="top" />

            <van-field v-model="fieldValue" is-link readonly label="下拉选择" placeholder="选择城市" @click="showPicker = true" />
            <van-popup v-model:show="showPicker" round position="bottom">
                <van-picker :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
            </van-popup>
            <van-field name="checkboxGroup" label="复选框组">
                <template #input>
                    <van-checkbox-group v-model="groupChecked" direction="horizontal">
                        <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
                        <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
                    </van-checkbox-group>
                </template>
            </van-field>
            <van-field name="radio" label="单选框">
                <template #input>
                    <van-radio-group v-model="checked" direction="horizontal">
                        <van-radio name="1">单选框 1</van-radio>
                        <van-radio name="2">单选框 2</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
        </van-cell-group>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const value = ref('')
const value1 = ref('')
const checked = ref(false);
const groupChecked = ref([]);
const columns = [
    { text: '杭州', value: 'Hangzhou' },
    { text: '宁波', value: 'Ningbo' },
    { text: '温州', value: 'Wenzhou' },
    { text: '绍兴', value: 'Shaoxing' },
    { text: '湖州', value: 'Huzhou' },
];
const fieldValue = ref('');
const showPicker = ref(false);

const onConfirm = ({ selectedOptions }) => {
    showPicker.value = false;
    fieldValue.value = selectedOptions[0].text;
};

</script>

<style src="./home.styl" lang="stylus" scoped></style>
