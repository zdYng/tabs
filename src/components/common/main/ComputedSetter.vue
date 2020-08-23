<template>
    <div>
        <!-- <p>最喜欢游戏：{{mygame}}</p> -->
        <p>price: {{price}} ,含税：{{priceInTax}},折合RMB{{priceChinaRMB}};</p>
        <button @click="btnClick(10800)"> 改价10800</button>
    </div>
</template>

<script>
    export default {
        name:"Computed",
        data() {
            return {
                price:29900
            }
        },
        computed:{
            priceInTax: {
                get: function(){
                    return this.price*1.08;
                },
                set: function(value){
                    this.price = value/1.08;
                }
            },
            priceChinaRMB:function(){
                return Math.round(this.priceInTax/16.75);
            }
        },
        methods:{
            btnClick: function(newprice){
                this.priceInTax = newprice;
            }
        }

    }
</script>

<style>
    .my-select{
        width:80px;
        height:40px;
    }

</style>