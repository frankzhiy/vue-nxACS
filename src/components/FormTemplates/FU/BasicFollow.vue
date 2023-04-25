<template>
  <el-form :model="form" label-width="180px" :size="'small'" label-position="left">
    <el-form-item label="院内死亡?">
      <el-radio-group v-model="form.b3">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="随访具体时间">
      <el-date-picker v-model="form.n1" type="date" placeholder="选择日期" format="YYYY-MM-DD"  value-format="DD/MM/YYYY" ></el-date-picker>
    </el-form-item>
    <el-form-item label="是否失访？">
      <el-radio-group v-model="form.n2">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="生活质量？">
      <el-select v-model="form.n3" placeholder="选择生活质量">
        <el-option :label="'死亡'" :value="0"></el-option>
        <el-option :label="'回复原来工作、生活状态'" :value="1"></el-option>
        <el-option :label="'较心梗前状态略差'" :value="2"></el-option>
        <el-option :label="'在家休息，状态差'" :value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否规律随访？">
      <el-radio-group v-model="form.n4">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否严格戒烟？">
      <el-radio-group v-model="form.n5">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="血压控制？">
      <el-radio-group v-model="form.n6">
        <el-radio :label="0">未监测</el-radio>
        <el-radio :label="1">监测后140/90以内</el-radio>
        <el-radio :label="2">控制欠佳</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="血糖控制？">
      <el-radio-group v-model="form.n7">
        <el-radio :label="0">未监测</el-radio>
        <el-radio :label="1">监测后空腹8，餐后10</el-radio>
        <el-radio :label="2">控制欠佳</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>


<script>
import {fuFormStore} from "@/store/formStore";

export default {
  name: "basicFollow",
  setup() {
    const form = fuFormStore().form
    return {
      form
    }
  },

}
</script>

<style scoped>
.el-input{
  width: 160px;
}
</style>
