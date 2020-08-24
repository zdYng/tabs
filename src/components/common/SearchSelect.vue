<template>
<!-- 可搜索的下拉框 -->
    <div class="search-select">
        <div class="title">
            <i v-if="showIcon" class="iconfont icon-bitian">&#xe603;</i>
            <span>{{title}}</span>
        </div>
        <el-select
          v-model="valueId"
          filterable
          clearable
          placeholder="请选择"
          @change="selectValueChange">  
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"></el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name: 'SearchSelect',
    props:{
        title: String,
        options: Array,
        showIcon: Boolean,
        defaultValue: String
    },
    watch:{
        defaultValue: function(newVal, oldVal){
            this.valueId = this.defaultValue;
        }
    },
    data(){
        return {
            valueId: ''
        }
    },
    methods:{
        selectValueChange(){
            this.$emit('selectChange', this.valueId);
        }
    }
}
</script>
<style lang="less" scoped>
.search-select{
    .title{
        display: flex;
        font-size: .083333rem;
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
    /deep/ .el-input__suffix{
        .el-input__suffix-inner{
            i{
                color: #333;
            }
        }
    }
    /deep/ .el-input__inner::placeholder{
        font-weight: 100;
        font-size: 12px;
    }
}
</style>