<template>
    <div>
        <el-container class="my-layout" >
            <Header></Header>
            <el-container>
                <Aside></Aside>
                <Main></Main>
            </el-container>
        </el-container>
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

<style >
    .my-layout{
        display: contents
    }

</style>