<template>
    <el-select class="my-input-select" v-model="value" placeholder="请选择" title="租户名称">
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
        name:"InputBox",
        data() {
            return {

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