<template>

            <el-aside class="my-aside">
                <MenuTree></MenuTree>
            </el-aside>

</template>

<script>
    // import ElContainer from "element-ui/packages/container/src/main";
    import MenuTree from "@/components/common/MenuTree.vue";
    export default {
        components: {
            MenuTree

        },
        name:'Aside',
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

     .my-aside {
         background-color: #D3DCE6;
         color: #333;
         background-color: #EBF5FF;
         color: #333;
         text-align: center;
         width:349px;
         height:910px;
     }


</style>