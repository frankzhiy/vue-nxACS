<template>
  <el-form :model="form" label-width="180px" :size="'small'" label-position="left">
    <!-- R1 是否发生心律失常？ -->
    <el-form-item label="是否发生心律失常？">
      <el-radio-group v-model="form.r1">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <!-- 根据R1的值显示R1.1 - R1.6 -->
    <div v-if="form.r1 === 1">
      <el-form-item label="具体时间">
        <el-date-picker v-model="form.r11" type="date" placeholder="选择日期" format="YYYY-MM-DD" value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>
      <el-form-item label="是否房颤，阵发性或持续性？">
        <el-radio-group v-model="form.r12">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">阵发性</el-radio>
          <el-radio :label="2">持续性</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否房室传导阻滞具体类型？">
        <el-radio-group v-model="form.r13">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">一度</el-radio>
          <el-radio :label="2">二度I型</el-radio>
          <el-radio :label="3">二度II型</el-radio>
          <el-radio :label="4">三度</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否束支传导阻滞具体类型？">
        <el-radio-group v-model="form.r14">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">完左</el-radio>
          <el-radio :label="2">完右</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否室性心律失常？">
        <el-radio-group v-model="form.r15">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">室速</el-radio>
          <el-radio :label="2">室颤</el-radio>
          <el-radio :label="3">室早</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否治疗？">
        <el-radio-group v-model="form.r16">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.r16 === '1'">
        <el-form-item label="药物 ">
          <el-radio-group v-model="form.r161">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="永久起搏器 ">
          <el-radio-group v-model="form.r162">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="射频消融手术">
          <el-radio-group v-model="form.r163">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="其他">
          <el-input v-model="form.r164"></el-input>
        </el-form-item>
      </div>
    </div>
    <el-form-item label="是否发生心力衰竭？">
      <el-radio-group v-model="form.f1">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.f1 === 1">
      <el-form-item label="具体时间">
        <el-date-picker v-model="form.f11" type="date" placeholder="选择日期" format="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>

      <el-form-item label="再次住院治疗？">
        <el-radio-group v-model="form.f12">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="心功能分级">
        <el-select v-model="form.f23" placeholder="请选择">
          <el-option label="I级" :value="1"></el-option>
          <el-option label="II级" :value="2"></el-option>
          <el-option label="III级" :value="3"></el-option>
          <el-option label="IV级" :value="4"></el-option>
        </el-select>
      </el-form-item>
    </div>
    <el-form-item label="是否发生脑卒中？">
      <el-radio-group v-model="form.s1">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.s1 === 1">
      <el-form-item label="具体时间">
        <el-date-picker v-model="form.s11" type="date" placeholder="选择日期" format="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>
      <el-form-item label="脑卒中类型是">
        <el-select v-model="form.s12" placeholder="请选择">
          <el-option label="脑出血" :value="1"></el-option>
          <el-option label="脑梗塞" :value="2"></el-option>
          <el-option label="偏瘫、言语不清等症状,未确诊" :value="3"></el-option>
        </el-select>
      </el-form-item>
    </div>

    <el-form-item label="是否发生出血事件？">
      <el-radio-group v-model="form.b4">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.b4 === 1">
      <el-form-item label="具体时间">
        <el-date-picker v-model="form.b11" type="date" placeholder="选择日期" format="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>
      <el-form-item label="脑卒中类型是">
        <el-select v-model="form.b12" placeholder="请选择">
          <el-option label="不需干预自行停止的出血" :value="1"></el-option>
          <el-option label="需要药物干预或延长住院的出血" :value="2"></el-option>
          <el-option label="3a" :value="3"></el-option>
          <el-option label="3b" :value="4"></el-option>
          <el-option label="3c" :value="5"></el-option>
          <el-option label="CABG相关出血" :value="6"></el-option>
          <el-option label="致死性出血" :value="7"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="具体出血部位">
        <el-select v-model="form.b13" placeholder="请选择">
          <el-option label="消化道" :value="1"></el-option>
          <el-option label="皮肤粘膜" :value="2"></el-option>
          <el-option label="颅内" :value="3"></el-option>
        </el-select>
      </el-form-item>
    </div>
  </el-form>

</template>

<script>
import {fuFormStore} from "@/store/formStore";

export default {
  name: "Arrhythmia",
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
