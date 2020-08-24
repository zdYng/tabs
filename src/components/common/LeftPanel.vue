<template>
    <div class="left-panel">
        <el-tree
            class="menu-tree"
            :load="loadNode"
            :props="props"
            @node-click="handleNodeClick"
            :default-expand-all="false"
            :expand-on-click-node="false" 
            lazy>
        </el-tree>
    </div>
</template>
<script>
import {get} from '@/utils/http'
import {queryTaskTreeAPI} from '@/utils/apiList'
export default {
    name: 'LeftPanel',
    props: {
        data:Array
    },
    data(){
        return {
            props:{
                label:'label',
                children: 'children',
                // isLeaf: 'parent'
            }
        }
    },
    components:{
       
    },
    mounted(){
        console.log(this.data);
    },
    methods: {
        handleNodeClick(data){
            // console.log(data);
        },
        handle(id){
            this.$store.dispatch('setNodeId', id);
        },
        // 树形数据逐级加载
        loadNode(node, resolve){
            // console.log(node);
            if(node.level === 0){
                return resolve(this.data);
            }else{
                    let id = node.data.id;
                    let level = node.data.level;
                    let value = level + '_' + id;
                    get(queryTaskTreeAPI,{"id": value, "flag": level})
                        .then(res => {
                            if(Object.keys(res.task).length > 0){
                                let treeArr = [];
                                 res.task.forEach(item => {
                                    if(item.parent){
                                        treeArr.push(
                                            Object.assign(
                                                {},
                                                {
                                                    "id": item.id,
                                                    "level": item.level,
                                                    "label": item.name,
                                                    "children": item.parent,
                                                    "parentId": item.parentId,
                                                    "projectId": item.projectId
                                                }
                                            )
                                        );
                                        resolve(treeArr);
                                    }else{
                                        resolve([]);
                                    }
                                });
                            }else{
                                resolve([]);
                            } 
                        })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.left-panel{
    width: 1.5625rem;
    min-width: 200px;
    height: 100%;
    box-shadow:0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    .menu-tree{
        height: 100%;
        /deep/ .el-tree-node__content{
            height: .260417rem;
            font-size: .067708rem;
            color: #303133;
            position: relative;
            .menu-icon{
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
        }
    }
}
</style>
