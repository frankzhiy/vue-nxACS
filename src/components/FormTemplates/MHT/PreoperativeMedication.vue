<template>
  <el-form :model="form" label-width="280px" :size="'small'" label-position="left">
    <el-form-item label="术前是否使用阿司匹林？">
      <el-radio-group v-model="form.n131">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n131 ==='1'">
      <el-form-item label="是否足量使用？">
        <el-radio-group v-model="form.n132">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="到院1h内使用？">
        <el-radio-group v-model="form.n132">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="术前是否使用氯吡格雷？">
      <el-radio-group v-model="form.n133">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n133 === '1'">
      <el-form-item label="是否足量使用？">
        <el-radio-group v-model="form.n134">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="到院1h内使用？">
        <el-radio-group v-model="form.n1341">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>

    <el-form-item label="术前是否使用替格瑞洛？">
      <el-radio-group v-model="form.n135">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n135 === '1'">
      <el-form-item label="是否足量使用？">
        <el-radio-group v-model="form.n136">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="到院1h内使用？">
        <el-radio-group v-model="form.n1361">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="急诊PCI病人口服双抗至手术时间？">
        <el-input v-model="form.n13621" placeholder="###.## 小时"></el-input>
      </el-form-item>
    </div>

    <el-form-item label="术前/院中是否服用他汀类药物？">
      <el-radio-group v-model="form.n137">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="术前/院中是否使用受体阻滞剂？">
      <el-radio-group v-model="form.n138">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n138 === '1'">
      <el-form-item label="到院24h内使用？">
        <el-radio-group v-model="form.n1381">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="术前/院中是否使用ACEI、ARB？">
      <el-radio-group v-model="form.n139">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="术前/院中是否使用抗凝药物？">
      <el-radio-group v-model="form.n140">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <div v-if="form.n140 === '1'">
      <el-form-item label="低分子肝素?">
        <el-radio-group v-model="form.n142">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="比伐卢定?">
        <el-radio-group v-model="form.n143">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="普通肝素? ">
        <el-radio-group v-model="form.n144">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="华法林？">
        <el-radio-group v-model="form.n145">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="利伐沙班？">
        <el-radio-group v-model="form.n146">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="阿哌沙班？">
        <el-radio-group v-model="form.n147">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="达比加群酯？">
        <el-radio-group v-model="form.n148">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

    </div>
    <el-form-item label="是否有室壁节段性运动异常？">
      <el-radio-group v-model="form.n149">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n149 === '1'">
      <el-form-item label="前壁？">
        <el-radio-group v-model="form.n150">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="下壁？">
        <el-radio-group v-model="form.n151">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="后壁？">
        <el-radio-group v-model="form.n152">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="右室？">
        <el-radio-group v-model="form.n153">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="高侧壁？">
        <el-radio-group v-model="form.n154">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="是否有二尖瓣反流？">
      <el-select v-model="form.n155">
        <el-option label="无" value="0"></el-option>
        <el-option label="轻度" value="1"></el-option>
        <el-option label="中度" value="2"></el-option>
        <el-option label="重度" value="3"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="是否有三尖瓣反流？">
      <el-select v-model="form.n156">
        <el-option label="无" value="0"></el-option>
        <el-option label="轻度" value="1"></el-option>
        <el-option label="中度" value="2"></el-option>
        <el-option label="重度" value="3"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="是否有二尖瓣瓣膜钙化？">
      <el-radio-group v-model="form.n157">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="是否有三尖瓣瓣膜钙化？">
      <el-radio-group v-model="form.n158">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="是否有室壁瘤形成？">
      <el-radio-group v-model="form.n159">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="是否有附壁血栓？">
      <el-radio-group v-model="form.n160">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <div v-if="form.n160 === '1'">
      <el-form-item label="是否有心包积液？">
        <el-select v-model="form.n1601">
          <el-option label="否" value="0"></el-option>
          <el-option label="少量" value="1"></el-option>
          <el-option label="中量" value="2"></el-option>
          <el-option label="大量" value="3"></el-option>
        </el-select>
      </el-form-item>

    </div>
    <el-form-item label="是否有二尖瓣狭窄？">
      <el-radio-group v-model="form.n161">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form >
</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "PreoperativeMedication",
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
