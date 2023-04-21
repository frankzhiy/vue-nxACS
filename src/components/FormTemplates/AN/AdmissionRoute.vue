<template>
  <el-form :model="form" label-width="180px" :label-position="'top'" :size="'small'">
    <el-form-item label="R2 我院就诊？">
      <el-radio-group v-model="form.r2">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.r2 === '1'">
      <el-form-item label="R21 我院急诊？">
        <el-radio-group v-model="form.r21">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="R22 我院门诊？">
        <el-radio-group v-model="form.r22">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="R23 其他科室？">
        <el-radio-group v-model="form.r23">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="R3 外院转诊？">
      <el-radio-group v-model="form.r3">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.r3 === '1'">
      <el-form-item label="R31 省内？">
        <el-radio-group v-model="form.r31">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.r31 === '1'">
        <el-form-item label="R311 银川市（三区两县）">
          <el-radio-group v-model="form.r311">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="R312 石嘴山市">
          <el-radio-group v-model="form.r312">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="R313 吴忠市">
          <el-radio-group v-model="form.r313">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="R314 中卫市">
          <el-radio-group v-model="form.r314">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="R315 固原市">
          <el-radio-group v-model="form.r315">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
      <el-form-item label="R32 外省？">
        <el-radio-group v-model="form.r32">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.r32 === '1'">
        <el-form-item label="R321 陕西省？">
          <el-radio-group v-model="form.r321">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="R322 内蒙古？">
          <el-radio-group v-model="form.r322">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="R323 甘肃省？">
          <el-radio-group v-model="form.r323">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="R324 其他？">
          <el-radio-group v-model="form.r324">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
      <el-form-item label="R331 我院首急诊？">
        <el-radio-group v-model="form.r331">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="R332 我院首急诊？">
        <el-radio-group v-model="form.r332">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="R333 我院导管室首诊？">
        <el-radio-group v-model="form.r333">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="R334 我院其他科室首诊？">
        <el-radio-group v-model="form.r334">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import {anFormStore} from "@/store/formStore";

export default {
  name: "AdmissionRoute",
  setup() {
    const form = anFormStore().form;
    return {
      form,
    };
  },

}
</script>

<style scoped>

</style>
