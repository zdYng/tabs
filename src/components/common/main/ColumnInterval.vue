<!--分栏间隔-->
<template>
    <el-row :gutter="20" class="my-row">

                <slot></slot>

        <!--<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>-->
        <!--<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>-->
        <!--<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>-->
    </el-row>
</template>

<script>
    // import SelectBox from '@/components/common/main/SelectBox.vue';
    export default {
        name:"ColumnInterval",
        components:{
            // SelectBox
        }

    }
</script>

<style>
    /*.el-row {*/
        /*margin-bottom: 20px;*/
    /*&:last-child {*/
         /*margin-bottom: 0;*/
     /*}*/
    /*}*/
    /*.el-col {*/
        /*border-radius: 4px;*/
    /*}*/
    /*.bg-purple-dark {*/
        /*background: #99a9bf;*/
    /*}*/
    /*.bg-purple {*/
        /*background: #d3dce6;*/
    /*}*/
    /*.bg-purple-light {*/
        /*background: #e5e9f2;*/
    /*}*/
    .grid-content {
        border-radius: 4px;
        min-height: 200px;
        min-width:1571px;
    }
    /*.row-bg {*/
        /*padding: 10px 0;*/
        /*background-color: #f9fafc;*/
    /*}*/
</style>