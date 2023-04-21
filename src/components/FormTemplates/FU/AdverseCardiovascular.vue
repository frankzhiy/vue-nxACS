<template>
  <el-form :model="form" label-width="180px" :size="'small'">
    <!-- I1 是否再次发生心肌梗死？ -->
    <el-form-item label="I1 是否再次发生心肌梗死？">
      <el-radio-group v-model="form.i1">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 根据I1的值显示I1.1 -->
    <div v-if="form.i1 === 1">
      <el-form-item label="次数">
        <el-input-number v-model="form.n0" :min="1" :max="10"></el-input-number>
      </el-form-item>
      <el-form-item label="I1.1 第一次具体心肌梗死时间">
        <el-date-picker v-model="form.i11" type="date" placeholder="选择日期" format="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>

      <el-form-item label="I1.2 心梗类型是">
        <el-select v-model="form.i12" placeholder="请选择">
          <el-option label="1型" :value="1"></el-option>
          <el-option label="2型" :value="2"></el-option>
          <el-option label="3型" :value="3"></el-option>
          <el-option label="4a型" :value="4"></el-option>
          <el-option label="4b型" :value="5"></el-option>
          <el-option label="4c型" :value="6"></el-option>
          <el-option label="5型" :value="7"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="I1.3 是否进行再次血运重建？">
        <el-radio-group v-model="form.i13">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <div v-if="form.i13 === 1">
        <el-form-item label="I1.3.1 是否临床驱动的再次血运重建？">
          <el-radio-group v-model="form.i131">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="I1.3.2 血运重建方式">
          <el-select v-model="form.i132" placeholder="请选择">
            <el-option label="PCI" :value="1"></el-option>
            <el-option label="PTCA" :value="2"></el-option>
            <el-option label="血栓抽吸" :value="3"></el-option>
            <el-option label="CABG" :value="4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="I1.3.3 梗死相关动脉？">
          <el-select v-model="form.i133" placeholder="请选择">
            <el-option label="左主干" :value="1"></el-option>
            <el-option label="左前降" :value="2"></el-option>
            <el-option label="左回旋" :value="3"></el-option>
            <el-option label="右冠" :value="4"></el-option>
            <el-option label="桥血管" :value="5"></el-option>
            <el-option label="原支架" :value="6"></el-option>
            <el-option label="中间支" :value="7"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="I1.3.4 血运重建节段是">
          <el-select v-model="form.i134" placeholder="请选择">
            <el-option label="靶病变" :value="1"></el-option>
            <el-option label="靶血管" :value="2"></el-option>
            <el-option label="非靶血管" :value="3"></el-option>
          </el-select>
        </el-form-item>
      </div>

      <el-form-item label="I1.4 是否存在原支架内再狭窄？">
        <el-radio-group v-model="form.i14">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <div v-if="form.i14 === 1">
        <el-form-item label="I1.4.1 若是，发生支架内再狭窄时间">
          <el-date-picker v-model="form.i141" type="date" placeholder="选择日期" ormat="YYYY-MM-DD"
                          value-format="DD/MM/YYYY"></el-date-picker>
        </el-form-item>

        <el-form-item label="I1.4.2 管腔再狭窄程度">
          <el-input-number v-model="form.i142" :min="0" :max="100" label="管腔再狭窄程度"></el-input-number>
        </el-form-item>
      </div>
    </div>
    <div v-if="form.n0 > 1">
      <!-- I2.1 第二次具体心肌梗死时间 -->
      <el-form-item label="I2.1 第二次具体心肌梗死时间">
        <el-date-picker v-model="form.i21" type="date" placeholder="选择日期" ormat="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>
      <el-form-item label="I2.2 心梗类型是">
        <el-select v-model="form.i22" placeholder="请选择">
          <el-option label="1型" :value="1"></el-option>
          <el-option label="2型" :value="2"></el-option>
          <el-option label="3型" :value="3"></el-option>
          <el-option label="4a型" :value="4"></el-option>
          <el-option label="4b型" :value="5"></el-option>
          <el-option label="4c型" :value="6"></el-option>
          <el-option label="5型" :value="7"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="I2.3 是否进行再次血运重建？">
        <el-radio-group v-model="form.i23">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <div v-if="form.i23 === 1">
        <el-form-item label="I2.3.1 是否临床驱动的再次血运重建？">
          <el-radio-group v-model="form.i231">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="I2.3.2 血运重建方式">
          <el-select v-model="form.i232" placeholder="请选择">
            <el-option label="PCI" :value="1"></el-option>
            <el-option label="PTCA" :value="2"></el-option>
            <el-option label="血栓抽吸" :value="3"></el-option>
            <el-option label="CABG" :value="4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="I2.3.3 梗死相关动脉？">
          <el-select v-model="form.i233" placeholder="请选择">
            <el-option label="左主干" :value="1"></el-option>
            <el-option label="左前降" :value="2"></el-option>
            <el-option label="左回旋" :value="3"></el-option>
            <el-option label="右冠" :value="4"></el-option>
            <el-option label="桥血管" :value="5"></el-option>
            <el-option label="原支架" :value="6"></el-option>
            <el-option label="中间支" :value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="I2.3.4 血运重建节段是">
          <el-select v-model="form.i234" placeholder="请选择">
            <el-option label="靶病变" :value="1"></el-option>
            <el-option label="靶血管" :value="2"></el-option>
            <el-option label="非靶血管" :value="3"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item label="I2.4 是否存在原支架内再狭窄？">
        <el-radio-group v-model="form.i24">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <div v-if="form.i24 === 1">
        <el-form-item label="I2.4.1 若是，发生支架内再狭窄时间">
          <el-date-picker v-model="form.i241" type="date" placeholder="选择日期" ormat="YYYY-MM-DD"
                          value-format="DD/MM/YYYY"></el-date-picker>
        </el-form-item>

        <el-form-item label="I2.4.2 管腔再狭窄程度">
          <el-input-number v-model="form.i242" :min="0" :max="100" label="管腔再狭窄程度"></el-input-number>
        </el-form-item>
      </div>
    </div>
    <div v-if="form.n0 > 2">
      <!-- I3.1 第三次具体心肌梗死时间 -->
      <el-form-item label="I3.1 第三次具体心肌梗死时间">
        <el-date-picker v-model="form.i31" type="date" placeholder="选择日期" ormat="YYYY-MM-DD"
                        value-format="DD/MM/YYYY"></el-date-picker>
      </el-form-item>

      <!-- I3.2 心梗类型是 -->
      <el-form-item label="I3.2 心梗类型是">
        <el-select v-model="form.i32" placeholder="请选择">
          <el-option label="1型" :value="1"></el-option>
          <el-option label="2型" :value="2"></el-option>
          <el-option label="3型" :value="3"></el-option>
          <el-option label="4a型" :value="4"></el-option>
          <el-option label="4b型" :value="5"></el-option>
          <el-option label="4c型" :value="6"></el-option>
          <el-option label="5型" :value="7"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="I3.3 是否进行再次血运重建？">
        <el-radio-group v-model="form.i33">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <div v-if="form.i33 === 1">
        <el-form-item label="I3.3.1 是否临床驱动的再次血运重建？">
          <el-radio-group v-model="form.i331">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="I3.3.2 血运重建方式">
          <el-select v-model="form.i332" placeholder="请选择">
            <el-option label="PCI" :value="1"></el-option>
            <el-option label="PTCA" :value="2"></el-option>
            <el-option label="血栓抽吸" :value="3"></el-option>
            <el-option label="CABG" :value="4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="I3.3.3 梗死相关动脉？">
          <el-select v-model="form.i333" placeholder="请选择">
            <el-option label="左主干" :value="1"></el-option>
            <el-option label="左前降" :value="2"></el-option>
            <el-option label="左回旋" :value="3"></el-option>
            <el-option label="右冠" :value="4"></el-option>
            <el-option label="桥血管" :value="5"></el-option>
            <el-option label="原支架" :value="6"></el-option>
            <el-option label="中间支" :value="7"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="I3.3.4 血运重建节段是">
          <el-select v-model="form.i334" placeholder="请选择">
            <el-option label="靶病变" :value="1"></el-option>
            <el-option label="靶血管" :value="2"></el-option>
            <el-option label="非靶血管" :value="3"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <el-form-item label="I3.4 是否存在原支架内再狭窄？">
        <el-radio-group v-model="form.i34">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.i34 === 1">
        <el-form-item label="I3.4.1 若是，发生支架内再狭窄时间">
          <el-date-picker v-model="form.i341" type="date" placeholder="选择日期" ormat="YYYY-MM-DD"
                          value-format="DD/MM/YYYY"></el-date-picker>
        </el-form-item>
        <el-form-item label="I3.4.2 管腔再狭窄程度">
          <el-input-number v-model="form.i342" :min="0" :max="100" label="管腔再狭窄程度"></el-input-number>
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script>
import {fuFormStore,} from "@/store/formStore";

export default {
  name: "AdverseCardiovascular",
  data() {
    return {
      // form: {
      //   i1: '',
      //   n0: '',
      //   i11: '',
      //   i12: '',
      //   i13: '',
      //   i131: '',
      //   i132: '',
      //   i133: '',
      //   i14: '',
      //   i141: '',
      //   i142: '',
      //   i21: '',
      //   i22: '',
      //   i23: '',
      //   i231: '',
      //   i232: '',
      //   i233: '',
      //   i234: '',
      //   i24: '',
      //   i241: '',
      //   i242: '',
      //   i31: '',
      //   i32: '',
      //   i33: '',
      //   i331: '',
      //   i332: '',
      //   i333: '',
      //   i334: '',
      //   i34: '',
      //   i341: '',
      //   i342: '',
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

</style>
