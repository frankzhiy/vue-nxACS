<template>
  <el-form :model="form" label-width="180px" :size="'small'">
    <el-form-item label="D1 是否发生死亡?">
      <el-radio-group v-model="form.d1">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="D2 具体死亡时间" v-if="form.d1 === 1">
      <el-date-picker v-model="form.d2" type="date" placeholder="选择日期" format="dd/MM/yyyy"
                      value-format="yyyy-MM-dd"></el-date-picker>
    </el-form-item>

    <el-form-item label="D3 死亡原因是" v-if="form.d1 === 1">
      <el-radio-group v-model="form.d3">
        <el-radio :label="1">心血管原因</el-radio>
        <el-radio :label="2">非心血管原因</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="D3.1 如果死亡为心血管原因，主要是" v-if="form.d3 === 1">
      <el-select v-model="form.d31" placeholder="请选择">
        <el-option label="急性心肌梗死" value="1"></el-option>
        <el-option label="心源性猝死" value="2"></el-option>
        <el-option label="心力衰竭" value="3"></el-option>
        <el-option label="中风" value="4"></el-option>
        <el-option label="心血管手术" value="5"></el-option>
        <el-option label="心血管系统出血" value="6"></el-option>
        <el-option label="其他心血管原因" value="7"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="D3.2 如果死亡为非心血管原因，主要是" v-if="form.d3 === 2">
      <el-select v-model="form.d32" placeholder="请选择">
        <el-option label="胃肝脾肾脏疾病" value="1"></el-option>
        <el-option label="感染炎症" value="2"></el-option>
        <el-option label="自杀" value="3"></el-option>
        <el-option label="创伤" value="4"></el-option>
        <el-option label="恶性肿瘤" value="5"></el-option>
        <el-option label="神经系统" value="6"></el-option>
        <el-option label="其他" value="7"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import {fuFormStore} from "@/store/formStore";

export default {
  name: "Death",
  data() {
    return {
      // form: {
      //   d1: '',
      //   d2: '',
      //   d3: '',
      //   d31: '',
      //   d32: ''
      // }
    }
  },
  setup() {
    const form = fuFormStore().form
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
