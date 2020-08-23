<template>
    <div>
        <h1>表单控件绑定</h1>
        <input  v-model="message" placeholder="来呀....">
        <p>Message is : {{ message }}</p>
    </div>
</template>

<script>
    export default {
        name:"InputText",
        data() {
            return {
                message:"Oh my GOD!!!"
            }
        },
        methods:{
           
        },
    };
</script>

<style>
    .my-select{
        width:80px;
        height:40px;
    }

</style>