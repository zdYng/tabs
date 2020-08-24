<template>
    <div class="form-group">
        <img :src="imgURL">
        <input
         :type="type"
         class="form-account"
         :name="name"
         :placeholder="placeholder"
         :disabled="disable"
         @input="$emit('input', $event.target.value)"
         :class="{'border-warn':error}"
         />
        <div v-if="error" class="err-msg">{{error}}</div>
    </div>
</template>
<script>
export default {
    name:'textField',
    props:{
        type:{
            type:String,
            default: 'text'
        },
        imgURL:String,
        value:String,
        placeholder:String,
        name:String,
        error:String,
        info:String,
        disable:String
    }
}
</script>
<style scoped>
.form-group{
    width: 82.5%;
    height: 12%;
}
.form-group input{
    width: 100%;
    height: 100%;
    border:1px solid rgba(221,221,221,1);
    border-radius:10px;
    background:rgba(255,255,255,1);
    padding-left: 17%;
    box-sizing: border-box;
    font-size: 18px;
    outline: none;
}
.form-group input::-webkit-input-placeholder{
    font-size: 16px;
    font-family:Microsoft YaHei;
    font-weight:100;
    color:rgba(214,214,214,1);
}
.form-group input:focus{
    border: 1px solid #0066cc;
}
/* 错误信息 */
.form-group .err-msg{
    position: absolute;
    color: red;
    margin: 5px 0 0 30px;

}
/* 错误提示警告框 */
.form-group >>> .border-warn{
    border: 1px solid red;
}
</style>