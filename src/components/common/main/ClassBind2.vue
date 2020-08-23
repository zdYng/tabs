// 对象绑定

<template>
    <div>
       <div :class="myClass">红色文本1</div>
       <!-- <div :class="{active:isActive}">红色文本2</div> -->
       <button @click="btnClick">改变class吧</button>
    </div>
</template>

<script>
    export default {
        name:"ClassBind",
        data() {
            return {
                myClass:{
                    active:true,
                    big:true,
                }
                
            }
        },
        methods:{
            btnClick: function(){
                var temp = this.myClass.active;
                var temp2 = this.myClass.big;
                this.myClass.active = !temp;
                this.myClass.big= !temp2;
            },
        },
    };
</script>

<style>
    .active{
        color:red;
    }
    .big{
        font-weight:bolder;
        font-size:64px;
    }

</style>