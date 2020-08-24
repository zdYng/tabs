<template>
    <!-- Home页面的左侧树形结构菜单 -->
     <div class="menu-tree">
       <div v-for="item in data" :key="item.id">
            <el-submenu
                :index="item.id"
                v-if="item.children">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <MenuTree :data="item.children"/>
            </el-submenu>
            <el-menu-item v-else :index="item.id">
                <span @click="handleClick">
                    <router-link
                        :to="{path: item.url}" 
                        slot="title">
                        {{item.name}}
                    </router-link>
                </span>
            </el-menu-item>
       </div>
    </div>
</template>
<script>
export default {
    name: 'MenuTree',
    props:{
        data: Array,
    },
    data(){
        return {
           barArr: []
        }
    },
    mounted(){
        // console.log(this.memoryArr);
    },
    computed:{
        memoryList(){
            return this.$store.state.memoryList;
        }
    },
    methods:{
        handleClick(e){
            if(this.memoryList.length > 0){
                let flag = this.memoryList.some(item => {
                    return item.path === e.target.getAttribute('href').substr(1);
                })
                if(!flag){
                    this.memoryList.push(
                        Object.assign(
                            {},
                            {
                                "path": e.target.getAttribute('href').substr(1),
                                "title": e.target.innerHTML
                            }
                        )
                    )
                }
            }else {
                    this.memoryList.push(
                    Object.assign(
                        {},
                        {
                            "path": e.target.getAttribute('href').substr(1),
                            "title": e.target.innerHTML
                        }
                    )
                )
            }
            this.$store.dispatch('setMemoryList', this.memoryList);
        }
    }
}
</script>
<style lang="less" scoped>
.menu-tree{
    width: 100%;
    // background:rgba(235,245,255,1);
    /deep/ .el-submenu {
        .el-submenu__title{
            font-size: 14px;
            height: 45px;
            color: #000;
            font-family:Microsoft YaHei;
            background:rgba(235,245,255,1);
            display: flex;
            align-items: center;
            i{
                color: #303133;
                font-size: 16px;
                padding-right: 10px;
            }
            /deep/ .el-submenu__icon-arrow{
                color: #000 !important;
                font-size: 14px;
            }
        }
        .el-submenu__title:hover{
            background-color: #a6d2ff !important;
        }
        .el-submenu__title.is-active{
            background:rgba(166,210,255,1) !important;
        }
        /deep/ .el-menu--inline{
            background:rgba(217,236,255,1);
            .el-menu-item{
                font-size: 13px;
                font-family:Microsoft YaHei;
                height: 40px;
                span{
                    display: block;
                    width: 100%;
                    height: 100%;
                    line-height: 40px;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #303133;
                    }
                }
            }
            .el-menu-item:hover{
                background-color: #a6d2ff !important;
            }
            // .el-menu-ite.is-active{
            //     background-color: #a6d2ff !important;
            // }
        }
        /deep/ .el-menu-item.is-active{
            background-color: #a6d2ff;
            color: #000;
        }
    }
}
</style>