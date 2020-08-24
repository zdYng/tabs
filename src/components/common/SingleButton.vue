<template>
    <div class="single-btn">
        <button>{{btnText}}</button>
    </div>
</template>
<script>
export default {
    name: 'SingleButton',
    props:{
        btnText:String
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.single-btn{
    button{
        width: .416667rem;
        height: .182292rem;
        background-color: #fff;
        border-radius: .052083rem;
        border: solid 1px #0066cc;
        font-size: .083333rem;
        color: #0066cc;
        margin-left: .104167rem;
        outline: none;
    }
}
</style>