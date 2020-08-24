<template>
    <div class="date-picker">
        <div class="title">
            <span>{{text}}</span>
        </div>
        <el-date-picker
          v-model="value"
          type="date"
          @change="handleDatePickerChange"
          :placeholder="placeholder"
          value-format="yyyy-MM-dd">
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name:'DatePicker',
    props:{
        text: String,
        placeholder: String,
    },
    data(){
        return{
            value:''
        }
    },
    methods:{
        handleDatePickerChange(){
            this.$emit('datePickerChange', this.value);
        }
    }
}
</script>
<style lang="less" scoped>
.date-picker{
    .title{
        font-size: .083333rem;
        padding: 0 0 .078125rem 0;
    }
    /deep/ .el-input__inner{
        width: 1.25rem;
        height: 40px;
        border-radius: 10px;
    }
}
</style>