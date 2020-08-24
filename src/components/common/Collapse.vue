<template>
<!-- 折叠面板组件 -->
        <li class="Collapse">
            <div class="title">
                <i class="el-icon-setting"></i>
                <div @click="toggle" class="collapse-item">
                    <span class="item-title first">{{model.title}}</span>
                    <span v-if="isFolder">
                        <i :class="[open ? 'el-icon-arrow-down' : 'el-icon-arrow-right']"></i>
                    </span>
                </div>
            </div>
            <ul v-show="open" v-if="isFolder">
                <Collapse 
                  class="item" 
                  v-for="model in model.children" 
                  :model="model" 
                  :key="model.title"/>
            </ul>
        </li>
</template>
<script>
export default {
    name: 'Collapse',
    props:{
        model: Object
    },
    data(){
        return{
            open: false //打开状态
        }
    },
    computed:{
        isFolder: function(){
            return this.model.children && this.model.children.length;
        }
    },
    methods:{
        toggle(){
            if(this.isFolder){
                this.open = !this.open;
            }
        }
    }
}
</script>
<style lang="less" scoped>
.Collapse{
    width: 100%;
    .title{
        display: flex;
        .el-icon-setting{
            line-height: .3125rem;
            font-size: .104167rem;
        }
    }
    .collapse-item{
        width: 100%;
        .item-title{
            width: 100%;
            height: .3125rem;
            line-height: .3125rem;
            font-size: .072917rem;
        }
    }
}
</style>