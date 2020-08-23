<template>
    <div>
        <p>{{message}}</p>
        <p>{{message | topper}}</p>
        <hr>
        <p>now learning vue {{num}}{{num | toppercentage}}</p>
    </div>
</template>

<script>
    export default {
        name:"Filter",
        data() {
            return {
                message: "hello vue.js world",
                num: 0.3
            }
        },
        filters:{
            topper:function(value){
                return value.toUpperCase();
            },
            toppercentage:function(value){
                return value * 100 + '%';
            }
        }
    };
</script>

<style>


</style>