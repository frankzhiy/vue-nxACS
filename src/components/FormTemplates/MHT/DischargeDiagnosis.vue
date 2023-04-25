<template>
  <el-form :model="form" label-width="280px" :size="'small'" label-position="left">
    <el-form-item label="出院诊断">
      <el-radio-group v-model="form.n199">
        <el-radio label="1">STEMI</el-radio>
        <el-radio label="2">NSTEMI</el-radio>
        <el-radio label="3">UA</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n199 !== ''">
      <el-form-item label="前间壁">
        <el-radio-group v-model="form.n200">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="前壁">
        <el-radio-group v-model="form.n201">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="广泛前壁">
        <el-radio-group v-model="form.n202">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="下壁">
        <el-radio-group v-model="form.n203">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="后壁">
        <el-radio-group v-model="form.n204">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="右室">
        <el-radio-group v-model="form.n205">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="高侧壁">
        <el-radio-group v-model="form.n206">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "DischargeDiagnosis",
  setup() {
    const form = mhtFormStore().form
    return {
      form
    }
  },

}
</script>

<style scoped>
.el-form-item {
  /*display: flex;*/
  /*width: 30%;*/
}

.el-input {
  width: 160px;
}
</style>
