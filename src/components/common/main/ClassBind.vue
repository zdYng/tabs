// 属性绑定
<template>
    <div>
       <div v-bind:class="{active:isActive}">红色文本1</div>
       <div :class="{active:isActive}">红色文本2</div>
       <button @click="btnClick">改变class吧</button>
    </div>
</template>

<script>
    export default {
        name:"ClassBind",
        data() {
            return {
                isActive:true,
            }
        },
        methods:{
            btnClick: function(){
                var temp = this.isActive;
                this.isActive = !temp;
            },
        },
    };
</script>

<style>
    .active{
        color:red;
    }

</style>