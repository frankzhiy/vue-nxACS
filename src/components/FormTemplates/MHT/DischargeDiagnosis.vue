<template>
  <el-form :model="form" label-width="180px" :size="'small'">
    <el-form-item label="199 诊断1">
      <el-radio-group v-model="form.n199">
        <el-radio label="1">STEMI</el-radio>
        <el-radio label="2">NSTEMI</el-radio>
        <el-radio label="3">UA</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="200 前间壁">
      <el-radio-group v-model="form.n200">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="201 前壁">
      <el-radio-group v-model="form.n201">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="202 广泛前壁">
      <el-radio-group v-model="form.n202">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="203 下壁">
      <el-radio-group v-model="form.n203">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="204 后壁">
      <el-radio-group v-model="form.n204">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="205 右室">
      <el-radio-group v-model="form.n205">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="206 高侧壁">
      <el-radio-group v-model="form.n206">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

  </el-form >
</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "DischargeDiagnosis",
  data(){
    return {
      // form:{
      //   n199: '',
      //   n200: '',
      //   n201: '',
      //   n202: '',
      //   n203: '',
      //   n204: '',
      //   n205: '',
      //   n206: '',
      //
      // }
    }
  },
  setup() {
    const form = mhtFormStore().form
    return {
      form
    }
  },

}
</script>

<style scoped>
.el-form-item{
  /*display: flex;*/
  width: 30%;
}
</style>
