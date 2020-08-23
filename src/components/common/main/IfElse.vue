<template>
    <div>
        <h1 v-if="result==0">成绩未公布</h1>
        <h1 v-else-if="result<60">{{result}}-成绩不合格</h1>
        <h1 v-else>{{result}} - 考的不错，及格！！</h1>
        <button @click="btnClick">考试成绩</button>
    </div>
</template>

<script>
    export default {
        name:"IfElse",
        data() {
            return {
                result: 0
            }
        },
        methods:{
            btnClick: function(){
                this.result = Math.round(Math.random()*100);
            },
        },
    };
</script>

<style>


</style>