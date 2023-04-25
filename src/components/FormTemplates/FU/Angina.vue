<template>
  <el-form  :model="form" label-width="180px" :size="'small'" label-position="left">
    <!-- I1 是否再次发生心肌梗死？ -->
    <el-form-item label="是否复发心绞痛？ ">
      <el-radio-group v-model="form.a1">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 根据I1的值显示I1.1 -->
    <div v-if="form.a1 === 1">
      <el-form-item label="次数">
        <el-input-number v-model="form.n01" :min="1" :max="10"></el-input-number>
      </el-form-item>
      <el-form-item label="第一次发作具体时间（出院后）">
        <el-date-picker v-model="form.a11" type="date" placeholder="选择日期" format="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>
      <el-form-item label="是否再住院治疗？">
        <el-radio-group v-model="form.a12">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否进行术后第一次血运重建？">
        <el-radio-group v-model="form.a13o">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.a13o === 1">
        <el-form-item label="是否临床驱动的再次血运重建？">
          <el-radio-group v-model="form.a131">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="血运重建方式">
          <el-radio-group v-model="form.a132">
            <el-radio :label="1">PCI</el-radio>
            <el-radio :label="2">PTCA</el-radio>
            <el-radio :label="3">CABG</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="罪犯血管？">
          <el-select v-model="form.a133" placeholder="请选择">
            <el-option label="左主干" :value="1"></el-option>
            <el-option label="左前降" :value="2"></el-option>
            <el-option label="左回旋" :value="3"></el-option>
            <el-option label="右冠" :value="4"></el-option>
            <el-option label="桥血管" :value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="血运重建方式">
          <el-radio-group v-model="form.a134">
            <el-radio :label="1">靶病变</el-radio>
            <el-radio :label="2">靶血管</el-radio>
            <el-radio :label="3">非靶血管</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否存在原支架内再狭窄？">
          <el-radio-group v-model="form.a135">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.a135 === 1">
          <el-form-item label="管腔狭窄程度">
            <el-input-number v-model="form.a1351" :min="0" :max="100" label="管腔狭窄程度"></el-input-number>
          </el-form-item>
        </div>
      </div>
    </div>
    <div v-if="form.n01 > 1">
      <el-form-item label="第二次发作具体时间（出院后）">
        <el-date-picker v-model="form.a21" type="date" placeholder="选择日期" format="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>
      <el-form-item label="是否再住院治疗？">
        <el-radio-group v-model="form.a22">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否进行术后第一次血运重建？">
        <el-radio-group v-model="form.a23o">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.a23o === 1">
        <el-form-item label="是否临床驱动的再次血运重建？">
          <el-radio-group v-model="form.a231">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="血运重建方式">
          <el-radio-group v-model="form.a232">
            <el-radio :label="1">PCI</el-radio>
            <el-radio :label="2">PTCA</el-radio>
            <el-radio :label="3">CABG</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="罪犯血管？">
          <el-select v-model="form.a233" placeholder="请选择">
            <el-option label="左主干" :value="1"></el-option>
            <el-option label="左前降" :value="2"></el-option>
            <el-option label="左回旋" :value="3"></el-option>
            <el-option label="右冠" :value="4"></el-option>
            <el-option label="桥血管" :value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="血运重建节段是">
          <el-radio-group v-model="form.a234">
            <el-radio :label="1">靶病变</el-radio>
            <el-radio :label="2">靶血管</el-radio>
            <el-radio :label="3">非靶血管</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否存在原支架内再狭窄？">
          <el-radio-group v-model="form.a235">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.a235 === 1">
          <el-form-item label="管腔狭窄程度">
            <el-input-number v-model="form.a2351" :min="0" :max="100" label="管腔狭窄程度"></el-input-number>
          </el-form-item>
        </div>
      </div>
    </div>
    <div v-if="form.n01 >2 ">
      <el-form-item label="第三次发作具体时间（出院后）">
        <el-date-picker v-model="form.a31" type="date" placeholder="选择日期" format="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>

      <el-form-item label="是否再住院治疗？">
        <el-radio-group v-model="form.a32">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- A3.3 是否进行术后第一次血运重建？ -->
      <el-form-item label="是否进行术后第一次血运重建？">
        <el-radio-group v-model="form.a33o">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <div v-if="form.a33o === 1">
        <el-form-item label="是否临床驱动的再次血运重建？">
          <el-radio-group v-model="form.a331">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="血运重建方式">
          <el-radio-group v-model="form.a332">
            <el-radio :label="1">PCI</el-radio>
            <el-radio :label="2">PTCA</el-radio>
            <el-radio :label="3">CABG</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="罪犯血管？">
          <el-select v-model="form.a333" placeholder="请选择">
            <el-option label="左主干" :value="1"></el-option>
            <el-option label="左前降" :value="2"></el-option>
            <el-option label="左回旋" :value="3"></el-option>
            <el-option label="右冠" :value="4"></el-option>
            <el-option label="桥血管" :value="5"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="血运重建节段是">
          <el-radio-group v-model="form.a334">
            <el-radio :label="1">靶病变</el-radio>
            <el-radio :label="2">靶血管</el-radio>
            <el-radio :label="2">非靶血管</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否存在原支架内再狭窄？">
          <el-radio-group v-model="form.a335">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.a335 === 1">
          <el-form-item label="管腔狭窄程度">
            <el-input-number v-model="form.a3351" :min="0" :max="100" label="管腔狭窄程度"></el-input-number>
          </el-form-item>
        </div>
      </div>
    </div>
  </el-form>
</template>

<script>
import {fuFormStore} from "@/store/formStore";

export default {
  name: "Angina",
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
