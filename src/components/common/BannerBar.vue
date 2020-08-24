<template>
    <div class="banner-bar">
        <div class="item-top">
            <span class="top-text">
                <span class="before-span"></span>
                <span style="margin-left: .078125rem">{{bannerText}}</span>
            </span>
            <span v-if="showDisappear" class="disappear" :isShow="isShow" @click="sendChildData">隐藏信息</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'BannerBar',
    props:{
        bannerText: String,
        showDisappear: Boolean,
        isShow: Boolean,
    },
    data(){
        return{
            showContent: this.isShow,
        }
    },
    methods:{
        // 子组件把是否隐藏的状态传给父组件
        sendChildData(e){
            this.showContent = !this.showContent;
            this.$emit('listenChildEvent', this.showContent);
            if(!this.showContent){
                e.target.innerHTML = '展开信息'
            }else{
                e.target.innerHTML = '隐藏信息'
            }
        }
    }
}
</script>
<style lang="less" scoped>
.banner-bar{
    .item-top{
    height: .3125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px 0 20px;
    .top-text{
        font-size: 16px;
        display: flex;
        vertical-align: center;
       align-items: center;
        .before-span{
            display: inline-block;
            width: 6px;
            height: 14px;
            background-color: #000;
        }
    }
    .disappear{
            font-size: .083333rem;
            color: #0066cc;
            cursor: pointer;
        } 
}
}
</style>