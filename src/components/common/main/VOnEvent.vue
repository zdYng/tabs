<template>
    <div>
        <h1>事件处理器</h1>
        <input id="txtName" v-on:keyup="txtKeyup($event)">
        <button id="btnOK" v-on:click="btnClick($event)">OK</button>
    </div>
</template>

<script>
    export default {
        name:"VOnEvent",
        data() {
        },
        methods:{
            txtKeyup:function(event){
                this.debugLog(event);
            },
            btnClick: function(event){
                this.debugLog(event);
            },
            debugLog:function(event){
                console.log(
                    event.srcElement.tagName,
                    event.srcElement.id,
                    event.srcElement.innerHTML,
                    event.key?event.key:""
                )
            }
        },
    };
</script>

<style>
    .my-select{
        width:80px;
        height:40px;
    }

</style>