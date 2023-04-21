<template>
  <el-form :model="form" label-width="180px" :size="'small'">
    <el-form-item label="1 是否具有糖尿病病史？">
      <el-radio-group v-model="form.n1">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n1 === '1'">
      <el-form-item label="h1 病史">
        <el-input v-model="form.h1" placeholder="请输入病史年数"></el-input>
      </el-form-item>
      <el-form-item label="2 是否服用二甲双胍？">
        <el-radio-group v-model="form.n2">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="3 是否服用SLG-2抑制剂？">
        <el-radio-group v-model="form.n3">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="4 是否注射GLP-1激动剂？">
        <el-radio-group v-model="form.n4">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="5 是否注射胰岛素？">
        <el-radio-group v-model="form.n5">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="6 其他降糖药？">
        <el-radio-group v-model="form.n6">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="7 是否具有高血压病病史？">
      <el-radio-group v-model="form.n7">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n7 === '1'">
      <el-form-item label="h2 病史">
        <el-input v-model="form.h2" placeholder="请输入病史年数"></el-input>
      </el-form-item>
      <el-form-item label="8 是否服用ACEI/ARB？">
        <el-radio-group v-model="form.n8">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="9 是否服用CCB？">
        <el-radio-group v-model="form.n9">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="10 是否服用β受体阻滞剂">
        <el-radio-group v-model="form.n10">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="11 是否服用利尿剂？">
        <el-radio-group v-model="form.n11">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="12 是否具有脑血管疾病史？">
      <el-radio-group v-model="form.n12">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n12 === '1'">
      <el-form-item label="13 缺血？">
        <el-radio-group v-model="form.n13">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="14 出血？">
        <el-radio-group v-model="form.n14">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="15 TIA发作？">
        <el-radio-group v-model="form.n15">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="16 不明原因的偏瘫、言语不清等症状,未确诊？">
        <el-radio-group v-model="form.n16">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="17 是否具有外周血管疾病史">
      <el-radio-group v-model="form.n17">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="18 是否具有血脂异常病史？">
      <el-select v-model="form.n18">
        <el-option label="无" value="0"></el-option>
        <el-option label="高胆固醇血脂" value="1"></el-option>
        <el-option label="高甘油三酯血症" value="2"></el-option>
        <el-option label="高低密度脂蛋白血症" value="3"></el-option>
        <el-option label="低高密度脂蛋白血症" value="4"></el-option>
        <el-option label="混合型高脂血症" value="5"></el-option>
      </el-select>
    </el-form-item>
    <div v-if="form.n18 !== '0'">
      <el-form-item label="19 是否服用他汀类药物？">
        <el-radio-group v-model="form.n19">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="20 既往是否具有冠心病病史？">
      <el-radio-group v-model="form.n20">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n20 === '1'">
      <el-form-item label="21 距本次心梗时间">
        <el-input v-model="form.n21" placeholder="请输入时间"></el-input>
      </el-form-item>
      <el-form-item label="211 是否血管狭窄大于50%？">
        <el-radio-group v-model="form.n211">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
          <el-radio label="2">不详</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="22 既往是否为心肌梗死？">
        <el-radio-group v-model="form.n22">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="23 是否行介入治疗? ">
        <el-radio-group v-model="form.n23">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">PCI</el-radio>
          <el-radio label="2">CAG</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="24 支架个数">
        <el-input v-model="form.n24" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="25 是否行CABG？">
        <el-radio-group v-model="form.n25">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="26 是否规律口服二级预防药物治疗？">
        <el-radio-group v-model="form.n26">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="27 是否严格戒烟？">
        <el-radio-group v-model="form.n27">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="28 是否具有一级亲属冠心病家族史？">
      <el-radio-group v-model="form.n28">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="29 是否有心律失常病史？">
      <el-select v-model="form.n29">
        <el-option label="无" value="0"></el-option>
        <el-option label="室性心律失常" value="1"></el-option>
        <el-option label="房性心律失" value="2"></el-option>
        <el-option label="房室传导阻滞" value="3"></el-option>
        <el-option label="束支传导阻滞" value="4"></el-option>
      </el-select>
    </el-form-item>
    <div v-if="form.n29 !== '0'">
      <el-form-item label="30 若为房颤、房扑，阵发性或持续性？">
        <el-radio-group v-model="form.n30">
          <el-radio label="1">阵发性</el-radio>
          <el-radio label="2">持续</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="31 若为房室传导阻滞具体类型？">
        <el-select v-model="form.n31">
          <el-option label="一度" value="1"></el-option>
          <el-option label="二度I型" value="2"></el-option>
          <el-option label="二度II型" value="3"></el-option>
          <el-option label="三型" value="4"></el-option>
        </el-select>
      </el-form-item>
    </div>
    <el-form-item label="32 是否有心衰病史？">
      <el-radio-group v-model="form.n32">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n32 !== '0'">
      <el-form-item label="h3 病史">
        <el-input v-model="form.h3" placeholder="请输入病史年数"></el-input>
      </el-form-item>
      <el-form-item label="33 是否服用ARNI?">
        <el-radio-group v-model="form.n33">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="form.n33 === '1'" label="34 若服用，计量为">
        <el-input v-model="form.n34" placeholder="请输入计量"></el-input>
      </el-form-item>
      <el-form-item label="35 是否有心功能分级？">
        <el-radio-group v-model="form.n35">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="36 是否有心功能分级？">
        <el-radio-group v-model="form.n36">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="37 是否服用螺内酯？">
        <el-radio-group v-model="form.n37">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="38 是否具有慢性阻塞性肺疾病史？">
        <el-radio-group v-model="form.n38">
          <el-radio label="0">无</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="39 是否具有慢性肾脏疾病史？">
      <el-radio-group v-model="form.n39">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="40 是否有消化道溃疡病史？">
      <el-radio-group v-model="form.n40">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n40 === '1'" label="41 是否有消化道出血病史？">
      <el-radio-group v-model="form.n41">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="42 是否有风湿系统疾病？">
      <el-radio-group v-model="form.n42">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n42 === '1'">
      <el-form-item label="43 类风湿性关节炎？">
        <el-radio-group v-model="form.n43">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="44 系统性红斑狼疮？">
        <el-radio-group v-model="form.n44">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="45 干燥综合征？">
        <el-radio-group v-model="form.n45">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="46 其他">
        <el-input v-model="form.n46" placeholder="请输入"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="47 是否有甲状腺疾病史？">
      <el-radio-group v-model="form.n47">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">甲亢</el-radio>
        <el-radio :label="2">甲减</el-radio>
        <el-radio :label="3">其他</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 48 是否有恶性肿瘤病史？ -->
    <el-form-item label="48 是否有恶性肿瘤病史？">
      <el-radio-group v-model="form.n48">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 49 抗血小板药物使用史？ -->
    <el-form-item label="49 抗血小板药物使用史？">
      <el-radio-group v-model="form.n49">
        <el-radio :label="1">阿司匹林</el-radio>
        <el-radio :label="2">氯吡格雷</el-radio>
        <el-radio :label="3">替格瑞洛</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 50 抗凝药物使用史？ -->
    <el-form-item label="50 抗凝药物使用史？">
      <el-radio-group v-model="form.n50">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">华法林</el-radio>
        <el-radio :label="2">新型口服抗凝药</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 51 血液系统疾病史？ -->
    <el-form-item label="51 血液系统疾病史？">
      <el-radio-group v-model="form.n51">
        <el-radio :label="0">否</el-radio>
        <el-radio :label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <!-- 52 乙肝病史？ -->
    <el-form-item label="52 乙肝病史？">
      <el-radio-group v-model="form.n52">
        <el-radio :label="0">无</el-radio>
        <el-radio :label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "MedicationHistory",
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
  width: 30%;
}
</style>
