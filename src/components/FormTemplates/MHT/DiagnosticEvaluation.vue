<template>
  <el-form :model="form" label-width="180px"  :size="'small'">
    <el-form-item label="97 初步诊断？">
      <el-select v-model="form.n97">
        <el-option label="STEM" value="1"></el-option>
        <el-option label="NSTEMI" value="2"></el-option>
        <el-option label="UA" value="3"></el-option>
        <el-option label="其他" value="4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="98 killip分级">
      <el-input v-model="form.n98" placeholder="级"></el-input>
    </el-form-item>
    <el-form-item label="99 是否合并感染？">
      <el-radio-group v-model="form.n99">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n99 === '1'">
      <el-form-item label="100 泌尿系统？">
        <el-radio-group v-model="form.n100">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="101 呼吸系统？">
        <el-radio-group v-model="form.n101">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="102 胃肠道？">
        <el-radio-group v-model="form.n102">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="103 骨、关节？">
        <el-radio-group v-model="form.n103">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="104 中枢系统？">
        <el-radio-group v-model="form.n104">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="105 心血管系统？">
        <el-radio-group v-model="form.n105">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="106 血液系统？">
        <el-radio-group v-model="form.n106">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="107 生殖系统？">
        <el-radio-group v-model="form.n107">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="113 是否溶栓？">
      <el-radio-group v-model="form.n113">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n113 === '1'">
      <el-form-item label="115 阿替普酶？">
        <el-radio-group v-model="form.n115">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="116 尿激酶原？">
        <el-radio-group v-model="form.n116">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="117 瑞替普酶？">
        <el-radio-group v-model="form.n117">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="118 TNK-tPA？">
        <el-radio-group v-model="form.n118">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="119 尿激酶？">
        <el-radio-group v-model="form.n119">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="120 剂量">
        <el-input v-model="form.n120" placeholder="请输入剂量"></el-input>
      </el-form-item>
      <el-form-item label="121 再通？">
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
  data() {
    return {
      // form: {
      //   n97: "",
      //   n98: "",
      //   n99: "",
      //   n100: "",
      //   n101: "",
      //   n102: "",
      //   n103: "",
      //   n104: "",
      //   n105: "",
      //   n106: "",
      //   n107: "",
      //   n113: "",
      //   n115: "",
      //   n116: "",
      //   n117: "",
      //   n118: "",
      //   n119: "",
      //   n120: "",
      //   n121: "",
      // }
    }
  },
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
  width: 30%;
}
</style>
