<template>
  <el-form :model="form" label-width="180px" :size="'small'" label-position="left">
    <el-form-item label="是否可提供口服药物？ ">
      <el-radio-group v-model="form.p0">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.p0 === '1'">
      <el-card header="阿司匹林"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p11">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p11 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p12" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
          <div v-if="form.p12 !== ''">
            <el-card class="box-card" header="原因" style="width: 50%">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="出血">
                  <el-radio-group v-model="form.p131">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="胃肠道不适">
                  <el-radio-group v-model="form.p132">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="手术或操作准备">
                  <el-radio-group v-model="form.p133">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label=" 自行停药">
                  <el-radio-group v-model="form.p134">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="医嘱停药">
                  <el-radio-group v-model="form.p135">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="其他原因">
                  <el-input v-model="form.p136"></el-input>
                </el-form-item>
              </el-form>
            </el-card>
          </div>
        </div>
      </el-card>
      <el-card header="氯吡格雷"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p21">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p21 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p22" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
          <div v-if="form.p22 !== ''">
            <el-card class="box-card" header="原因" style="width: 50%">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="出血">
                  <el-radio-group v-model="form.p231">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="胃肠道不适">
                  <el-radio-group v-model="form.p232">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="手术或操作准备">
                  <el-radio-group v-model="form.p233">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="自行停药">
                  <el-radio-group v-model="form.p234">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="医嘱停药">
                  <el-radio-group v-model="form.p235">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="其他原因">
                  <el-input v-model="form.p236"></el-input>
                </el-form-item>
              </el-form>
            </el-card>
          </div>
        </div>
      </el-card>
      <el-card header="替格瑞洛"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p31">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p31 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p32" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
          <div v-if="form.p32 !== ''">
            <el-card class="box-card" header="原因" style="width: 50%">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="出血">
                  <el-radio-group v-model="form.p331">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="胃肠道不适">
                  <el-radio-group v-model="form.p332">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="手术或操作准备">
                  <el-radio-group v-model="form.p333">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="自行停药">
                  <el-radio-group v-model="form.p334">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="医嘱停药">
                  <el-radio-group v-model="form.p335">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="气短">
                  <el-radio-group v-model="form.p336">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="其他原因">
                  <el-input v-model="form.p337"></el-input>
                </el-form-item>
              </el-form>
            </el-card>
          </div>
        </div>
      </el-card>
      <el-card header="他汀类药物"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p40">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p40 === '0'">
          <el-form-item label="药物种类？">
            <el-radio-group v-model="form.p41">
              <el-radio label="1">阿托伐</el-radio>
              <el-radio label="2">瑞舒伐</el-radio>
              <el-radio label="3">其他</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p42" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
          <div v-if="form.p42 !== ''">
            <el-card class="box-card" header="原因" style="width: 50%">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="肝功能损伤">
                  <el-radio-group v-model="form.p431">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="肌痛">
                  <el-radio-group v-model="form.p432">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="自行停药">
                  <el-radio-group v-model="form.p433">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="医嘱停药">
                  <el-radio-group v-model="form.p434">
                    <el-radio label="0">否</el-radio>
                    <el-radio label="1">是</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="其他原因">
                  <el-input v-model="form.p435"></el-input>
                </el-form-item>
              </el-form>
            </el-card>
          </div>
        </div>
      </el-card>
      <el-card header="ACEI/ARB类药物"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p51">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p51 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p52" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="ARNI"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p61">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p61 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p62" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="β受体阻滞剂"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p71">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p71 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p72" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="slg-2抑制剂"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p81">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p81 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p82" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="GLP1受体激动剂"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p91">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p91 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p92" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="二甲双胍"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p101">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.p51 === '0'">
          <el-form-item label="何时停药或换药？">
            <el-date-picker v-model="form.p102" type="date" placeholder="选择停药或换药日期"></el-date-picker>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="是否使用PCSK9?"  shadow="hover">
        <el-form-item label="是否持续用药？">
          <el-radio-group v-model="form.p13">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-card>
    </div>

  </el-form>
</template>

<script>
import {fuFormStore} from "@/store/formStore";

export default {
  name: "OralDrug",
  setup() {
    const form = fuFormStore().form
    return {
      form
    }
  },
}
</script>

<style scoped>
.el-card{
  margin-bottom: 10px;
}
.el-input{
  width: 160px;
}
</style>
