<template>
  <el-form :model="form" label-width="280px" :size="'small'" label-position="left">
    <el-form-item label="吸烟史？">
      <el-radio-group v-model="form.n53">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n53 === '1'">
      <el-form-item label="吸烟指数">
        <el-input v-model="form.n54" placeholder="请输入指数"></el-input>
      </el-form-item>
      <el-form-item label="目前是否吸烟？">
        <el-radio-group v-model="form.n55">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="戒烟距今">
        <el-input v-model="form.n56" placeholder="请输入吸烟月时常"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="月经史？">
      <el-radio-group v-model="form.n57">
        <el-radio label="0">男性</el-radio>
        <el-radio label="1">绝经</el-radio>
        <el-radio label="2">未绝经</el-radio>
      </el-radio-group>
      <div v-if="form.n57 === '2'">
        <el-form-item label="戒绝经年龄">
          <el-input v-model="form.n58" placeholder="请输入月经岁数"></el-input>
        </el-form-item>
      </div>
    </el-form-item>
    <el-form-item label="饮酒史？">
      <el-radio-group v-model="form.n59">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>

</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "PersonalHistory",

  setup() {
    const form = mhtFormStore().form
    return {
      form
    };
  },
}
</script>

<style scoped>
.el-form-item{
  /*display: flex;*/
  /*width: 30%;*/
}
.el-input{
  width: 160px;
}
</style>
