<template>
    <div class="query-select">
        <div class="select-input">
            <el-select v-model="groupId" @change="selectGroupId($event)" clearable filterable :placeholder="placeholder1">
                <el-option
                    v-for="item in itemList1"
                    :key="item.id"
                    :value="item.id"
                    :label="item.label">
                </el-option>
            </el-select>
            <el-select v-model="conditionId" clearable filterable :placeholder="placeholder2">
                <el-option
                    v-for="item in itemList2"
                    :key="item.id"
                    :value="item.id"
                    :label="item.label">
                </el-option>
            </el-select>
        <button class="select-btn">{{buttonText}}</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'QuerySelect',
    props:{
        placeholder1: String,
        placeholder2: String,
        itemList1: Array,
        buttonText: String
    },
    data(){
        return {
            groupId: '',
            conditionId: '',
            itemList2:[],
        }
    },
    methods:{
        selectGroupId(val){
            if(val === 1){
                this.itemList2 = [{id: 3, label: '条件1'}, {id: 4, label: '条件2'}]
            }else if(val === 2){
                this.itemList2 = [{id: 5, label: '条件3'}, {id: 6, label: '条件4'}]
            }
        }
    }
}
</script>
<style scoped>
.el-select{
    /* margin-left: .133333rem; */
}
>>> .el-input__inner{
    border-radius: .066667rem;
    width: 1.041667rem;
}
>>> .el-input__inner::-webkit-input-placeholder{
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
</style>