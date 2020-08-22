<template>
    <el-select class="my-select" v-model="value" placeholder="请选择" title="{{title}}">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name:"SelectBox",
        props:{
            title:String,
            required:true
        },
        data() {
            return {
                options: [{
                    value: '租户1',
                    label: '租户1'
                }, {
                    value: '租户2',
                    label: '租户2'
                }, {
                    value: '租户3',
                    label: '租户3'
                }, {
                    value: '租户4',
                    label: '租户4'
                }, {
                    value: '租户5',
                    label: '租户5'
                }],
                value: ''
            }
        }
    }
</script>

<style>
    .my-select{
        width:80px;
        height:40px;
    }

</style>