<template>
  <el-form :model="form" label-width="280px"  :size="'small'" label-position="left">
    <el-form-item label="初步诊断？">
      <el-select v-model="form.n97">
        <el-option label="STEM" value="1"></el-option>
        <el-option label="NSTEMI" value="2"></el-option>
        <el-option label="UA" value="3"></el-option>
        <el-option label="其他" value="4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="killip分级">
      <el-input v-model="form.n98" placeholder="级"></el-input>
    </el-form-item>
    <el-form-item label="是否合并感染？">
      <el-radio-group v-model="form.n99">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n99 === '1'">
      <el-form-item label="泌尿系统？">
        <el-radio-group v-model="form.n100">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="呼吸系统？">
        <el-radio-group v-model="form.n101">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="胃肠道？">
        <el-radio-group v-model="form.n102">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="骨、关节？">
        <el-radio-group v-model="form.n103">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="中枢系统？">
        <el-radio-group v-model="form.n104">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="心血管系统？">
        <el-radio-group v-model="form.n105">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="血液系统？">
        <el-radio-group v-model="form.n106">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生殖系统？">
        <el-radio-group v-model="form.n107">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="是否溶栓？">
      <el-radio-group v-model="form.n113">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n113 === '1'">
      <el-form-item label="阿替普酶？">
        <el-radio-group v-model="form.n115">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="尿激酶原？">
        <el-radio-group v-model="form.n116">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="瑞替普酶？">
        <el-radio-group v-model="form.n117">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="TNK-tPA？">
        <el-radio-group v-model="form.n118">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="尿激酶？">
        <el-radio-group v-model="form.n119">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="剂量">
        <el-input v-model="form.n120" placeholder="请输入剂量"></el-input>
      </el-form-item>
      <el-form-item label="再通？">
        <el-radio-group v-model="form.n121">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
          <el-radio label="2">未评估</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import {mhtFormStore} from '@/store/formStore'
import {onMounted} from "vue";
export default {
  name: "DiagnosticEvaluation",
  setup() {
    const form = mhtFormStore().form
    onMounted(() => {
      console.log(form)
    });
    return {
      form
    }
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
