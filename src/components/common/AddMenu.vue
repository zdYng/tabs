<template>
    <div class="tips">
        <img class="add-btn" @click="handleClick" src="http://47.111.232.105:5000/img/add.png" style="margin-left: .026042rem">
        <span class="content-btn">
            <span v-show="isShow" @click="handleAdd">新增菜单</span>
            <span v-show="isShow">新增子菜单</span>
        </span>
        <img class="delete-btn" src="http://47.111.232.105:5000/img/delet.png" style="margin-left: .104167rem">
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow: false
        }
    },
    methods:{
        handleClick(){
            this.isShow = !this.isShow;
        },
        handleAdd(){
            console.log('click');
            this.$router.push({name: 'MenuDetail', params:{id: 0}})
        }
    }
}
</script>
<style scoped>
    .tips{
        width: 1.5625rem;
        height: .260417rem;
        padding: .052083rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
    .tips img{
        width: .104167rem;
        height: .104167rem;
    }
    .content-btn{
        box-shadow: 0px 0px 10px 0px rgba(0, 102, 204, 0.25);
        border-radius:20px;
        margin-left: .104167rem;
        height: .104167rem;
        line-height: .104167rem;
    }
    .content-btn span {
        font-size: .083333rem;
        color: #0066cc;
        font-weight: 600;
        margin: 0 .052083rem;
    }
</style>