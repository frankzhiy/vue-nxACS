<template>
  <el-form :model="form" label-width="180px" :label-position="'top'" :size="'small'">
    <el-form-item label="阿司匹林">
      <el-radio-group v-model="form.f1">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="替格瑞洛">
      <el-radio-group v-model="form.f2">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="氯吡格雷">
      <el-radio-group v-model="form.f3">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="β受体阻滞剂">
      <el-radio-group v-model="form.f4">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="他汀类药物 ">
      <el-radio-group v-model="form.f5">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="ACEI类药物">
      <el-radio-group v-model="form.f6">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="ARB类药物">
      <el-radio-group v-model="form.f7">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="ARNI">
      <el-radio-group v-model="form.f8">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="螺内酯">
      <el-radio-group v-model="form.f9">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="抗心律失常药物">
      <el-radio-group v-model="form.f10">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="新型口服抗凝药物">
      <el-radio-group v-model="form.f11">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="华法林">
      <el-radio-group v-model="form.f12">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="二甲双胍">
      <el-radio-group v-model="form.f13">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="SLG-2抑制剂">
      <el-radio-group v-model="form.f14">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="PPI">
      <el-radio-group v-model="form.f15">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="PCSK9">
      <el-radio-group v-model="form.f16">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import {anFormStore} from "@/store/formStore";
export default {
  name: "DischargeInstructions",
  setup() {
    const form = anFormStore().form;
    return {
      form
    };
  },
}
</script>

<style scoped>

</style>
