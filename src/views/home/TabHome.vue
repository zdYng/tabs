<template>
    <div class="home">
        <el-container class="container">
            <!--<Header></Header>-->
            <el-header class="my-header" style="height:15%">
                <div class="left">
                    <img src="@/assets/img/logo.png" alt style="background:red"/>
                    <span>极联智能制造SaaS平台后台管理系统</span>
                </div>
                <!--<h2 style="text-align:right">页面布局-头部</h2>-->
            </el-header>

            <el-container>
                <Aside>

                </Aside>
                <Main>
                    <!-- <FixedTabs> -->
                        <!-- <ColumnInterval> -->
                            <!-- <SelectBox :></SelectBox> -->
                        

                        
                        <!-- </ColumnInterval> -->
                    <!-- </FixedTabs> -->
                    <Button></Button>
                    
                    <Filter></Filter>
                    <Computed></Computed>
                    <Watch></Watch>
                    <ComputedSetter></ComputedSetter>
                    <ClassBind></ClassBind>
                    <ClassBind2></ClassBind2>
                    <IfElse></IfElse>
                    <VFor></VFor>
                    <VForO></VForO>
                    <VOnEvent></VOnEvent>
                    <InputText></InputText>
                </Main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    // import SmallColumn from "@/components/common/main/SmallColumn.vue";
    // import SelectBox from "@/components/common/main/SelectBox";
    // import ColumnInterval from "@/components/common/main/ColumnInterval";
    // import FixedTabs from '@/components/common/FixedTabs.vue';
    
    import Aside from '@/components/layout/Aside.vue';
    import Main from '@/components/layout/Main.vue';
    import ElContainer from "element-ui/packages/container/src/main";
    // import SmallColumn from "../../components/common/main/SmallColumn";
    import Button from "@/components/common/main/Button.vue";
    import Filter from '@/components/common/main/Filter.vue';
    import Computed from '@/components/common/main/Computed.vue';
    import Watch from '@/components/common/main/Watch.vue';
    import ComputedSetter from '@/components/common/main/ComputedSetter.vue';
    import ClassBind from '@/components/common/main/ClassBind.vue';
    import ClassBind2 from '@/components/common/main/ClassBind2.vue';
    import IfElse from '@/components/common/main/IfElse.vue';
    import VFor from '@/components/common/main/VFor.vue';
    import VForO from '@/components/common/main/VForO.vue';
    import VOnEvent from '@/components/common/main/VOnEvent.vue';
    import InputText from "@/components/common/form/InputText.vue";
    export default {
        name:'TabHome',
        components:{
            // SmallColumn,
            ElContainer,
            Aside,
            Main,
            Button,
            Filter,
            Computed,
            Watch,
            ComputedSetter,
            ClassBind,
            ClassBind2,
            IfElse,
            VFor,
            VForO,
            VOnEvent,
            InputText,
            // FixedTabs,
            // SelectBox,
            // ColumnInterval,
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