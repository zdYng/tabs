<template>
    <div>
        <p>最喜欢游戏：{{mygame}}</p>
        <button v-on:click="btnClick('my world')">my world</button>
        <button v-on:click="btnClick('my world2')">my world2</button>
        <button @click="btnClick('my world3')">my world3</button>
    </div>
</template>

<script>
    export default {
        name:"Button",
        data() {
            return {
                mygame:"my world"
            }
        },
        methods:{
            btnClick: function(pname){
                this.mygame = pname;
            },
        },
    };
</script>

<style>
    .my-select{
        width:80px;
        height:40px;
    }

</style>