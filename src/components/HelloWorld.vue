<template>

        <el-container>
            <Header>
                <!--<el-row>-->
                    <!--<el-col :span="24" ><div class="grid-content bg-purple-dark"></div></el-col>-->
                <!--</el-row>-->
            </Header>
            <el-container>
                <Aside>

                </Aside>
                <Main>

                </Main>

            </el-container>
        </el-container>


</template>
<script>
import Header from '@/components/layout/Header.vue'
import Aside from '@/components/layout/Aside.vue'
import Main from '@/components/layout/Main.vue'
// import ElContainer from "element-ui/packages/container/src/main";
export default {
    components:{
        // ElContainer,
        Header,
        Aside,
        Main,
    },

  };
</script>
<style>


</style>