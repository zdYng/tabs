<template>
    <div>
        <!-- <p>最喜欢游戏：{{mygame}}</p> -->
        price: {{price}} ,含税：{{priceInTax}},折合RMB{{priceChinaRMB}};
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
            priceInTax: function(){
                return this.price*1.08;

            },
            priceChinaRMB:function(){
                return Math.round(this.priceInTax/16.75);
            }
        }
    };
</script>

<style>
    .my-select{
        width:80px;
        height:40px;
    }

</style>