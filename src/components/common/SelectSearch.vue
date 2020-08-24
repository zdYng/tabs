<template>
    <div class="select-search">
        <div class="title">
            <span>{{title}}</span>
        </div>
        <el-select 
          @change="handleSelectChange"
          v-model="itemId" 
          filterable 
          :placeholder="placeholder">
            <el-option
                v-for="item in itemList"
                :key="item.id"
                :value="item.id"
                :label="item.name">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name: 'SelectSearch',
    props:{
        title: String,
        placeholder: String,
        itemList: Array
    },
    data() {
        return {
            itemId:''
        }
    },
    methods:{
        handleSelectChange(){
            this.$emit('selectChange', this.itemId);
        }
    }
}
</script>
<style lang="less" scoped>
.select-search{
    display: flex;
    .title{
        display: flex;
        width: 100%;
        font-size: .083333rem;
        align-items: center;
    }
    .el-select{
        margin-left: .078125rem;
        /deep/ .el-input{
            .el-input__inner{
                width: 180px;
                height: 35px;
                border-radius: 8px;
                padding: 0 10px;
            }
            .el-input__suffix{
                .el-input__suffix-inner{
                    i{
                        color: #333;
                        height: 35px;
                        line-height: 35px;
                    }
                }
            }
        }
    }
}
</style>