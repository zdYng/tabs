<template>
    <div class="select-box">
        <div class="title">
            <i v-if="showIcon" class="iconfont icon-bitian">&#xe603;</i>
            <span>{{title}}</span>
        </div>
        <el-select 
          class="select-box" 
          @change="handelSelectChange" 
          v-model="itemValueId" 
          placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
        </el-select>
    </div>
</template>
<script>
export default {
  name: "SelectBox",
  props: {
    options: Array,
    title: String,
    showIcon: Boolean,
    defaultValue: Number
  },
  watch:{
    defaultValue: function (newVal, oldVal){
      console.log(newVal);
      this.itemValueId = newVal;
    }
  },
  data() {
    return {
      itemValueId: ''
    };
  },
  methods:{
    handelSelectChange(id){
      let changData = {};
      changData = this.options.find(item => {
        return item.id == id;
      });
      this.$emit('selectEvent', changData);
    }
  }
};
</script>
<style lang="less" scoped>
.select-box {
  display: inline-block;
  .title {
    width: 100%;
    display: flex;
    font-size: 0.083333rem;
    padding: 0 0 0.078125rem 0;
    .icon-bitian {
      color: red;
      font-size: 0.0625rem;
      padding-right: 0.026042rem;
    }
  }
  /deep/ .el-select{
    .el-input__suffix-inner{
      i{
        color: #333;
      }
    }
  }
//   /deep/ .el-input__inner {
//     width: 1.25rem;
//     height: 0.260417rem;
//     border-radius: 0.078125rem;
//   }
//   .el-select {
//     margin-left: 0.133333rem;
//   }
  /deep/ .el-input__inner {
    border-radius: 8px;
    width: 1.25rem;
    height: 40px;
    border: 1px solid #e5e5e5;
  }
  /deep/ .el-input__inner:focus{
    border: 1px solid #e5e5e5;
  }
  /deep/ .el-input__inner::-webkit-input-placeholder {
    font-weight: 100;
    font-size: 12px;
  }
}
</style>