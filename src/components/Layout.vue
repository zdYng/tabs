<template>
    <div>
        <!--<el-container>-->
        <el-container>
            <Header></Header>
            <el-container>
                <Aside></Aside>
                <Main>
                    <router-link to="/createTab">创建Tab标签页</router-link>
                </Main>
            </el-container>
        </el-container>








        <!--</el-container>-->
    </div>
</template>

<script>
    import Header from './layout/Header.vue'
    import Aside from './layout/Aside.vue'
    import Main from './layout/Main.vue'
    import ElContainer from "element-ui/packages/container/src/main";
    export default {
        name:'Layout',
        components:{
            ElContainer,
            Header,
            Aside,
            Main
        }
    }
</script>

<style>
    .el-header{
        background-color: #0066CC;
        color: #333;
        text-align: center;
        line-height: 170px;
        width: 1920px;
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