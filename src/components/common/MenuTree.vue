<template>
        <el-menu>
            <el-tree
                    :data="data"
                    :props="defaultProps"
                    accordion
                    @node-click="handleNodeClick">
            </el-tree>
        </el-menu>
</template>

<script>
    export default {
        components: {
        },
        name:'MenuTree',
        data(){
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods:{
            handleNodeClick(data) {
                console.log(data);
            }
        }
    }
</script>

<style >

    .el-menu:hover{
        background-color: #EBF5FF !important;
        border-right: 0px;
        /*width:349px;*/
        /*height:910px;*/

    }
    .el-tree{
        border-right: 0px;
        color: black;
        background: #EBF5FF;
    }

</style>