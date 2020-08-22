<template>

        <el-tabs v-model="activeName" @tab-click="handleClick" style="width:2980px">
            <el-tab-pane label="Tab维护" name="first">
                <!--<SelectBox></SelectBox>-->
                <slot></slot>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时</el-tab-pane>
        </el-tabs>

</template>

<script>


    export default {
        name:'FixedTabs',
        components:{
        },
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style>


</style>