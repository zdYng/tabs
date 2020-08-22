<template>

            <el-main class="my-main">
                <el-container class="main-container">
                    <slot></slot>
                </el-container>

                <!--<FunctionalTest></FunctionalTest>-->
            </el-main>

</template>

<script>
    // import FixedTabs from '@/components/common/FixedTabs.vue';

    export default {
        name:'Main',
        components:{
            // FixedTabs,


        },
    }
</script>

<style scoped>
    /deep/ .my-main{
        height:1571px;
        width:1080px;
    }
    .main-container {
        height:1920px;
        width:1080px;
        background-color: #FFFF;
        color: #333;
        text-align: center;
        padding:0px;
        /*line-height: 160px;*/
    }


</style>