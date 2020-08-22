<template>
    <div>
        <!--<el-container>-->
        <el-container>
            <Header></Header>
            <el-container>
                <Aside></Aside>
                <Main>
                    <!--<router-link to="/createTab">创建Tab标签页</router-link>-->

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

</style>