<template>
    <div class="input-box">
        <div class="title">
            <i v-if="showIcon" class="iconfont icon-bitian">&#xe603;</i>
            <span>{{title}}</span>
        </div>
        <el-input 
          v-model="itemValue" 
          :disabled="disable" 
          @change="inputValueChange"
          :placeholder="placeholder">
        </el-input>
    </div>
</template>
<script>
export default {
    name:'InputBox',
    props:{
        title:String,
        showIcon: Boolean,
        disable: Boolean,
        placeholder: String,
        defalutValue: String,
    },
    data(){
        return {
         itemValue: '',
        }
    },
    watch:{
        defalutValue: function(newVal, oldVal){
            this.itemValue = this.defalutValue;
        }
    },
    methods:{
        inputValueChange(){
            this.$emit('inputChange', this.itemValue);
        }
    }
}
</script>
<style lang="less" scoped>
.input-box{
    /deep/ .title{
        display: flex;
        font-size: 16px;
        font-family: Microsoft YaHei;
        padding: 0 0 .078125rem 0;
        .icon-bitian{
            color: red;
            font-size: .0625rem;
            padding-right: .026042rem;
        }
    }
    /deep/ .el-input__inner{
        width: 1.25rem;
        height: 40px;
        border-radius: 8px;
    }
    /deep/ .el-input__inner::placeholder{
        font-weight: 100;
        font-size: 12px;
    }
}
</style>