<template>
    <div class="home">
        <el-container class="container">
            <!--<Header></Header>-->
            <el-header class="my-header" style="height:15%">
                <div class="left">
                    <img src="@/assets/img/logo.png" alt />
                    <span>极联智能制造SaaS平台后台管理系统</span>
                </div>
                <!--<h2 style="text-align:right">页面布局-头部</h2>-->
            </el-header>

            <el-container>
                <Aside>

                </Aside>
                <Main>
                    <FixedTabs>
                        <ColumnInterval>
                            <SelectBox :></SelectBox>

                        </ColumnInterval>
                    </FixedTabs>
                </Main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    // import SmallColumn from "@/components/common/main/SmallColumn.vue";
    // import SelectBox from "@/components/common/main/SelectBox";
    import ColumnInterval from "@/components/common/main/ColumnInterval";
    import FixedTabs from '@/components/common/FixedTabs.vue';
    import Aside from '@/components/layout/Aside.vue';
    import Main from '@/components/layout/Main.vue';
    import ElContainer from "element-ui/packages/container/src/main";
    // import SmallColumn from "../../components/common/main/SmallColumn";

    export default {
        name:'TabHome',
        components:{
            // SmallColumn,
            ElContainer,
            Aside,
            Main,
            FixedTabs,
            // SelectBox,
            ColumnInterval,
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

<style lang="less" scoped>
    @deep: ~'>>>';
    .home{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow: hidden;
        .container{
            height: 100%;
            .my-header{
                // tips: header的高度是17%,写在el-header的内嵌样式中
                /*background: url("@/assets/img/header.png") no-repeat center center;*/
                background-size: 100% 100%;

                padding: 0;
                display: flex;
                justify-content: space-between;
            }
        }

    }


</style>