<template>
    <div class="single-select">
        <el-select v-model="value" clearable filterable :placeholder="placeholder">
            <el-option
                v-for="item in itemList"
                :key="item.id"
                :value="item.id"
                :label="item.label">
            </el-option>
        </el-select>
        <!-- <button class="select-btn">{{buttonText}}</button> -->
    </div>
</template>
<script>
export default {
    name: 'SingleSelectBox',
    props:{
        itemList:Array,
        buttonText: String,
        placeholder: String
    },
    data(){
        return{
            value: ''
        }
    }
}
</script>
<style lang="less" scoped>
.single-select{
    /deep/ .el-input__inner{
        border-radius: .066667rem;
        width: 1.041667rem;
    }
    /deep/ .el-input__inner::-webkit-input-placeholder{
        font-weight: 200;
    }
    .select-btn{
        width: .416667rem;
        height: .182292rem;
        background-color: #fff;
        border-radius: 10px;
        border: solid 1px #0066cc;
        font-size: .083333rem;
        color: #0066cc;
        margin-left: .104167rem;
        outline: none;
    }
}
</style>
