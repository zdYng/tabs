<template>
<!-- 此组件暂时没有用，可以留着参考 -->
    <div class="home-left-panel">
        <el-tree
            class="menu-tree"
            :data="menuList" 
            :props="defaultProps" 
            @node-click="handleNodeClick"
            highlight-current
            :expand-on-click-node="false" 
            >
            <span class="menu-icon" slot-scope="{node, data}">
                <router-link :id="data.id" :to="{path: data.url}">
                    <span @click="handle(data.id)">{{node.label}}</span>
                </router-link>
                <i class="el-icon-setting"></i>
            </span>
        </el-tree>
    </div>
</template>
<script>

export default {
    name: 'HomeleftPanel',
    props:{
        menuList:Array
    },
    data(){
        return{
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        }
    },
    methods:{
        handleNodeClick(){

        },
        handle(){

        }
    },
    mounted(){
       
    }
}
</script>
<style lang="less" scoped>
.home-left-panel{
    width: 16%;
    height: 100%;
    background:rgba(235,245,255,1);
    overflow: hidden;
    overflow-y: scroll;
    /deep/ .el-tree{
        background:rgba(235,245,255,1);
        .el-tree-node:focus{
            .el-tree-node__content{
                background:rgba(235,245,255,1) !important;
            }
        }
        /deep/ .el-tree-node__content{
            height: .3125rem;
            color: #303133;
            box-sizing: border-box;
            padding-right: .104167rem;
            .menu-icon{
                width: 200px;
                a{
                   width: 80%;
                   height: .3125rem;
                   line-height: .3125rem;
                }
                i{
                    width: 20%;
                    height: .3125rem;
                    line-height: .3125rem;
                    text-align: end;
                    // font-size: .104167rem;
                }
            }
            .el-tree-node__expand-icon{
                font-size: .104167rem;
                color: #000;
                margin-left: .104167rem;
            }
            .el-tree-node__expand-icon.expanded{
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
                font-size: .104167rem;
                color: #000;
            }
            .el-icon-caret-right:before{
                content: "\e6e0";
            }
            .el-tree-node__expand-icon.expanded.el-icon-caret-right:before{
                content: '\e6df';
            }
            .el-tree-node__expand-icon.is-leaf{
                color: transparent;
                cursor: default;
            }
            .menu-icon{
                display: flex;
                width: 100%;
                justify-content: space-between;
            }
        }
        .el-tree-node__content:hover{
            cursor: pointer;
            background:rgba(166,210,255,1);
        }
    }
}
.home-left-panel::-webkit-scrollbar{
    display: none;
}
</style>