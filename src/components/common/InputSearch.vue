<template>
    <div class="input-search">
        <div class="title">
            <span>{{title}}</span>
        </div>
        <el-input
          @change="handleInputChange"
          v-model="value" 
          :disabled="disable" 
          :placeholder="placeholder">
        </el-input>
    </div>
</template>
<script>
export default {
    name: 'InputSearch',
    props:{
        title: String,
        disable: Boolean,
        placeholder: String
    },
    data(){
        return {
            value:''
        }
    },
    methods:{
        // 输入框change后获取对应的id传给后端
        handleInputChange(){
            this.$emit('inputChange', this.value);
        }
    }
}
</script>
<style lang="less" scoped>
.input-search{
    display: flex;
    .title{
        display: flex;
        width: 100%;
        font-size: .083333rem;
        align-items: center;
    }
    /deep/ .el-input{
        margin-left: .078125rem;
        .el-input__inner{
            width: 180px;
            height: 35px;
            border-radius: 8px;
            padding: 0 10px;
        }
    }
}
</style>