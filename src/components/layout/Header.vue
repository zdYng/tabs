<template>
<div>
    <el-header class="my-header" style="background-color: #0066CC;height:160px">
        <slot></slot>
    </el-header>
</div>
</template>

<script>
    export default {
        name:'Header',
        components:{

        }
    }
</script>

<style scoped>
    /deep/ .my-header{
        background-color: #0066CC !important;
        color: #333;
        /*text-align: center;*/
        /*line-height: 170px;*/
        width: 1920px;
        height: 170px;
    }

</style>