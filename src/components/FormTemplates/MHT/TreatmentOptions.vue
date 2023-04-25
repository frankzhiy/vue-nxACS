<template>
  <el-form :model="form" label-width="280px" :size="'small'" label-position="left">
    <el-form-item label="急诊PCI？">
      <el-radio-group v-model="form.n123">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="急诊仅造影">
      <el-radio-group v-model="form.n124">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="院内择期造影">
      <el-radio-group v-model="form.n125">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="院内择期手术">
      <el-radio-group v-model="form.n126">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="院外择期手术">
      <el-radio-group v-model="form.n127">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="转CABG">
      <el-radio-group v-model="form.n129">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="未手术治疗">
      <el-radio-group v-model="form.n130">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n130 === '1'">
      <el-form-item label="是否发病24h内再灌注（PCI/溶栓）？">
        <el-radio-group v-model="form.n1301">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.n1301 === '1'">
        <el-form-item label="是否发病24h内到院90min内直接PCI？？">
          <el-radio-group v-model="form.n13012">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否发病24h内到院30min内溶栓？">
          <el-radio-group v-model="form.n13013">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
    </div>
  </el-form >
</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "TreatmentOptions",
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
