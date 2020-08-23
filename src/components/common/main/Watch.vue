<template>
    <div>
        <!-- <p>最喜欢游戏：{{mygame}}</p> -->
        price: {{price}} ,含税：{{priceInTax}},折合RMB{{priceChinaRMB}};
        <button @click="btnClick(1000)">加价1000</button>
    </div>
</template>

<script>
    export default {
        name:"Computed",
        data() {
            return {
                price:29900,
                priceInTax:0,
                priceChinaRMB:0,
            }
        },
        watch:{
            price:function(newVal,oldVal){
                console.log(newVal,oldVal);
                this.priceInTax = Math.round(this.price*1.08);
                this.priceChinaRMB = Math.round(this.priceInTax/16.75);
                
            },
        },
        methods:{
            btnClick:function(newPrice){
                this.price+=newPrice;
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