<template>
  <el-form :model="form" label-width="180px" :label-position="'top'" :size="'small'">
    <el-form-item label="身高" prop="h">
      <el-input v-model.number="form.h" type="number" placeholder="cm"></el-input>
    </el-form-item>
    <el-form-item label="体重" prop="w">
      <el-input v-model.number="form.w" type="number" placeholder="Kg"></el-input>
    </el-form-item>
    <el-form-item label="文化水平？">
      <el-radio-group v-model="form.c">
        <el-radio label="1">文盲</el-radio>
        <el-radio label="2">小学/初中</el-radio>
        <el-radio label="3">高中及以上</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-card header="入院血流动力学评估" shadow="hover">
      <el-form-item label="首次心率" prop="hr1">
        <el-input v-model.number="form.hr1" type="number" placeholder="次/分"></el-input>
      </el-form-item>
      <el-form-item label="首次收缩压" prop="sp1">
        <el-input v-model.number="form.sp1" type="number" placeholder="mmHg"></el-input>
      </el-form-item>
      <el-form-item label="首次舒张压" prop="dp1">
        <el-input v-model.number="form.dp1" type="number" placeholder="mmHg"></el-input>
      </el-form-item>
      <el-form-item label="首次氧饱和度" prop="spo21">
        <el-input v-model.number="form.spo21" type="number" placeholder="%"></el-input>
      </el-form-item>
    </el-card>
    <el-card header="出院时生命体征" shadow="hover">
      <el-form-item label="心率" prop="hr2">
        <el-input v-model.number="form.hr2" type="number" placeholder="次/分"></el-input>
      </el-form-item>
      <el-form-item label="收缩压" prop="sp2">
        <el-input v-model.number="form.sp2" type="number" placeholder="mmHg"></el-input>
      </el-form-item>
      <el-form-item label="舒张压" prop="dp2">
        <el-input v-model.number="form.dp2" type="number" placeholder="mmHg"></el-input>
      </el-form-item>
    </el-card>
  </el-form>
</template>

<script>
import {anFormStore} from "@/store/formStore";
export default {
  name: "BasicInformation",
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
