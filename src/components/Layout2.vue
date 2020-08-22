<template>
    <div>
        <el-container >
            <!--<Header></Header>-->
            <el-header class="my-header" style="background-color: #0066CC;height:160px">
                <h2 style="text-align:center">页面布局-头部</h2>
            </el-header>

            <el-container>
                <Aside>

                </Aside>
                <Main>
                </Main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    // import Header from './layout/Header.vue';
    import Aside from './layout/Aside.vue';
    import Main from './layout/Main.vue';
    import ElContainer from "element-ui/packages/container/src/main";
    // import FunctionalTest from '@/components/test/FunctionalTest.vue';
    // import SelectBox from '@/components/common/main/SelectBox.vue';
    export default {
        name:'Layout',
        components:{
            ElContainer,
            // Header,
            Aside,
            Main,
            // FunctionalTest,
            // SelectBox,
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

<style scoped>
   .my-header{
        background-color: #0066CC;
        height: 170px;

    }

</style>