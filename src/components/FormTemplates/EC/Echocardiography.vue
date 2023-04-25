<template>
  <el-form :model="form" label-width="180px" label-position="left" :size="'small'" >
    <el-form-item label="升主动脉内径" prop="crp">
      <el-input v-model.number="form.c1" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="主动脉根部内径" prop="crp">
      <el-input v-model.number="form.c2" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="右室流出道" prop="crp">
      <el-input v-model.number="form.c3" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="右室前后径" prop="crp">
      <el-input v-model.number="form.c4" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="主肺动脉内径" prop="crp">
      <el-input v-model.number="form.c5" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="左室舒末径" prop="crp">
      <el-input v-model.number="form.c6" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="左室缩末径" prop="crp">
      <el-input v-model.number="form.c7" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="左房前后径" prop="crp">
      <el-input v-model.number="form.c8" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="室间隔舒末厚度" prop="crp">
      <el-input v-model.number="form.c9" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="右房上下径" prop="crp">
      <el-input v-model.number="form.c10" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="右房左右径" prop="crp">
      <el-input v-model.number="form.c11" type="number" placeholder="mm"></el-input>
    </el-form-item>
    <el-form-item label="左室射血分" prop="crp">
      <el-input v-model.number="form.lvef" type="number" placeholder="%"></el-input>
    </el-form-item>
    <el-form-item label="左心室短轴缩短率" prop="crp">
      <el-input v-model.number="form.lvfs" type="number" placeholder="%"></el-input>
    </el-form-item>
    <el-form-item label="肺动脉压" prop="crp">
      <el-input v-model.number="form.pasp" type="number" placeholder="mmHg"></el-input>
    </el-form-item>
    <el-form-item label="是否有主动脉瓣反流？">
      <el-radio-group v-model="form.n1">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">轻度</el-radio>
        <el-radio label="2">中度</el-radio>
        <el-radio label="3">重度</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="否有主动脉瓣瓣膜钙化？">
      <el-radio-group v-model="form.n2">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否室壁变薄？">
      <el-radio-group v-model="form.n3">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n3 ==='1'">
      <el-form-item label="前间隔？">
        <el-radio-group v-model="form.n31">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="室间隔？">
        <el-radio-group v-model="form.n32">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="前壁？">
        <el-radio-group v-model="form.n33">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="侧壁？">
        <el-radio-group v-model="form.n34">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="后壁？">
        <el-radio-group v-model="form.n35">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="下壁？">
        <el-radio-group v-model="form.n36">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="右室？">
        <el-radio-group v-model="form.n37">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import {enFormStore} from "@/store/formStore";

export default {
  name: "Echocardiography",
  setup() {
    const form = enFormStore().form;
    return {
      form,
    };
  },
}
</script>

<style scoped>
.el-input{
  width: 160px;
}
</style>
