<template>

            <el-header>
11
            </el-header>

</template>

<script>
    export default {
        name:'Header',
        components:{

        }
    }
</script>

<style>
    .el-header{
        background-color: #0066CC;
        color: #333;
        text-align: center;
        /*line-height: 170px;*/
        width: 1920px;
        height: 170px
    }
    .el-aside {
        /*background-color: #D3DCE6;*/
        color: #333;
        text-align: center;
        line-height: 910px;
        /*line-width: 349px;*/
        width:349px;
        height:910px;
        background:rgba(235,245,255,1);
    }
    .el-main {
        background-color: #FFFF;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    body > .el-container {
        margin-bottom: 40px;
    }

</style>