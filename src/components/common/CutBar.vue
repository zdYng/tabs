<template>
    <div class="cut-bar">
        <div 
          :class="{ 'cut-item': true, isCut: item.id === current}"
          @click="isCut(item.id, item.path)"
          v-for="item in CutBar"
          :key="item.id">
            <span :class="{'before-span': true, isActive: item.id === current}"></span>
            <span class="title">{{item.value}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CutBar',
    props:{
        CutBar:Array
    },
    data(){
        return {
            current: 1
        }
    },
    methods:{
        isCut(id, path){
            this.current = id;
            this.$router.push({
                name: path
            })
        }
    }
}
</script>
<style lang="less" scoped>
.cut-bar{
    width: 100%;
    height: .3125rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .cut-item{
        width: .625rem;
        display: flex;
        align-items: center;
        color:rgba(51,51,51,1);
        .before-span{
            display: inline-block;
            width: 6px;
            height: 14px;
            background-color: #000;
            margin-right: .052083rem;
        }
        .title{
            font-size: 16px;
            font-family:Microsoft YaHei;
            font-weight:bold;
        }
        .isActive{
            background-color: #0066cc;
        }
    }
    .isCut{
        color: #0066cc;
    }
}
</style>