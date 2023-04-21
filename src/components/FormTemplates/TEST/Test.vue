<template>
  <el-form :model="form" label-width="180px" :label-position="'top'" :size="'small'" >
    <el-form-item label="首次C反应蛋白" prop="crp">
      <el-input v-model.number="form.t1" type="number"></el-input>
    </el-form-item>
    <el-form-item label="首次N端脑钠肽前体" prop="ntprobnp">
      <el-input v-model.number="form.t2" type="number"></el-input>
    </el-form-item>

    <el-form-item label="首次肌钙蛋白" prop="troponin">
      <el-input v-model.number="form.t3" type="number"></el-input>
    </el-form-item>

    <el-form-item label="首次降钙素原" prop="procalcitonin">
      <el-input v-model.number="form.t4" type="number"></el-input>
    </el-form-item>

    <el-form-item label="白介素-6" prop="il6">
      <el-input v-model.number="form.t5" type="number"></el-input>
    </el-form-item>

    <el-form-item label="D-二聚体定量" prop="d_dimer">
      <el-input v-model.number="form.t6" type="number"></el-input>
    </el-form-item>
    <el-form-item label="PH" prop="ph">
      <el-input v-model.number="form.t7" type="number"></el-input>
    </el-form-item>

    <el-form-item label="白蛋白" prop="albumin">
      <el-input v-model.number="form.t8" type="number"></el-input>
    </el-form-item>

    <el-form-item label="丙氨酸氨基转移酶" prop="alt">
      <el-input v-model.number="form.t9" type="number"></el-input>
    </el-form-item>

    <el-form-item label="白细胞计数" prop="wbc">
      <el-input v-model.number="form.t10" type="number"></el-input>
    </el-form-item>

    <el-form-item label="大血小板比率" prop="lpr">
      <el-input v-model.number="form.t11" type="number"></el-input>
    </el-form-item>

    <el-form-item label="单核细胞绝对值" prop="monocyte_abs">
      <el-input v-model.number="form.t12" type="number"></el-input>
    </el-form-item>

    <el-form-item label="丙型肝炎抗体" prop="hcv_ab">
      <el-input v-model.number="form.t13" type="number"></el-input>
    </el-form-item>

    <el-form-item label="C1q" prop="c1q">
      <el-input v-model.number="form.t14" type="number"></el-input>
    </el-form-item>

    <el-form-item label="促甲状腺激素" prop="tsh">
      <el-input v-model.number="form.t15" type="number"></el-input>
    </el-form-item>

    <el-form-item label="胆碱酯酶" prop="che">
      <el-input v-model.number="form.t16" type="number"></el-input>
    </el-form-item>

    <el-form-item label="低密度脂蛋白" prop="ldl">
      <el-input v-model.number="form.t17" type="number"></el-input>
    </el-form-item>

    <el-form-item label="二氧化碳分压" prop="pco2">
      <el-input v-model.number="form.t18" type="number"></el-input>
    </el-form-item>

    <el-form-item label="二氧化碳结合率" prop="hco3">
      <el-input v-model.number="form.t19" type="number"></el-input>
    </el-form-item>

    <el-form-item label="二氧化碳总量" prop="co2_total">
      <el-input v-model.number="form.t20" type="number"></el-input>
    </el-form-item>

    <el-form-item label="非结合胆红素" prop="unconjugated_bilirubin">
      <el-input v-model.number="form.t21" type="number"></el-input>
    </el-form-item>

    <el-form-item label="钙" prop="calcium">
      <el-input v-model.number="form.t22" type="number"></el-input>
    </el-form-item>
    <el-form-item label="甘油三酯" prop="triglyceride">
      <el-input v-model.number="form.t23" type="number"></el-input>
    </el-form-item>

    <el-form-item label="高密度脂蛋白" prop="hdl">
      <el-input v-model.number="form.t24" type="number"></el-input>
    </el-form-item>

    <el-form-item label="高铁血红蛋白" prop="hba1c">
      <el-input v-model.number="form.t25" type="number"></el-input>
    </el-form-item>

    <el-form-item label="胱抑素" prop="cystatin_c">
      <el-input v-model.number="form.t26" type="number"></el-input>
    </el-form-item>

    <el-form-item label="红细胞分布宽度" prop="rdw">
      <el-input v-model.number="form.t27" type="number"></el-input>
    </el-form-item>

    <el-form-item label="红细胞计数" prop="rbc">
      <el-input v-model.number="form.t28" type="number"></el-input>
    </el-form-item>

    <el-form-item label="红细胞平均体积" prop="mcv">
      <el-input v-model.number="form.t29" type="number"></el-input>
    </el-form-item>

    <el-form-item label="红细胞压积" prop="hct">
      <el-input v-model.number="form.t30" type="number"></el-input>
    </el-form-item>

    <el-form-item label="活化部分凝血酶原时比值" prop="aptr">
      <el-input v-model.number="form.t31" type="number"></el-input>
    </el-form-item>

    <el-form-item label="活化部分凝血酶原时间" prop="aptt">
      <el-input v-model.number="form.t32" type="number"></el-input>
    </el-form-item>

    <el-form-item label="肌酐" prop="creatinine">
      <el-input v-model.number="form.t33" type="number"></el-input>
    </el-form-item>

    <el-form-item label="肌酸激酶" prop="cpk">
      <el-input v-model.number="form.t34" type="number"></el-input>
    </el-form-item>

    <el-form-item label="甲状腺素" prop="t4">
      <el-input v-model.number="form.t35" type="number"></el-input>
    </el-form-item>

    <el-form-item label="钾" prop="potassium">
      <el-input v-model.number="form.t36" type="number"></el-input>
    </el-form-item>

    <el-form-item label="碱性磷酸酶" prop="alp">
      <el-input v-model.number="form.t37" type="number"></el-input>
    </el-form-item>

    <el-form-item label="结合胆红素" prop="conjugated_bilirubin">
      <el-input v-model.number="form.t38" type="number"></el-input>
    </el-form-item>

    <el-form-item label="抗环瓜氨酸肽抗体" prop="anti_ccp">
      <el-input v-model.number="form.t39" type="number"></el-input>
    </el-form-item>

    <el-form-item label="类风湿因子" prop="rf">
      <el-input v-model.number="form.t40" type="number"></el-input>
    </el-form-item>

    <el-form-item label="淋巴细胞相对值" prop="lymphocyte_percentage">
      <el-input v-model.number="form.t41" type="number"></el-input>
    </el-form-item>

    <el-form-item label="磷" prop="phosphorus">
      <el-input v-model.number="form.t42" type="number"></el-input>
    </el-form-item>

    <el-form-item label="氯" prop="chloride">
      <el-input v-model.number="form.t43" type="number"></el-input>
    </el-form-item>

    <el-form-item label="梅毒螺旋体抗体" prop="syphilis">
      <el-input v-model="form.t44" ></el-input>
    </el-form-item>

    <el-form-item label="钠" prop="sodium">
      <el-input v-model.number="form.t45" type="number"></el-input>
    </el-form-item>

    <el-form-item label="尿素" prop="urea">
      <el-input v-model.number="form.t46" type="number"></el-input>
    </el-form-item>

    <el-form-item label="尿酸" prop="uric_acid">
      <el-input v-model.number="form.t47" type="number"></el-input>
    </el-form-item>

    <el-form-item label="凝血酶时间" prop="pt">
      <el-input v-model.number="form.t48" type="number"></el-input>
    </el-form-item>

    <el-form-item label="凝血酶原比值" prop="inr">
      <el-input v-model.number="form.t49" type="number"></el-input>
    </el-form-item>

    <el-form-item label="凝血酶原国际标准比值" prop="inr_std">
      <el-input v-model.number="form.t50" type="number"></el-input>
    </el-form-item>

    <el-form-item label="凝血酶原活动度" prop="pt_activity">
      <el-input v-model.number="form.t51" type="number"></el-input>
    </el-form-item>

    <el-form-item label="凝血酶原时间" prop="ptt">
      <el-input v-model.number="form.t52" type="number"></el-input>
    </el-form-item>

    <el-form-item label="葡萄糖" prop="glucose">
      <el-input v-model.number="form.t53" type="number"></el-input>
    </el-form-item>

    <el-form-item label="球蛋白" prop="globulin">
      <el-input v-model.number="form.t54" type="number"></el-input>
    </el-form-item>

    <el-form-item label="去氧血红蛋白" prop="carboxyhemoglobin">
      <el-input v-model.number="form.t55" type="number"></el-input>
    </el-form-item>

    <el-form-item label="乳酸" prop="lactate">
      <el-input v-model.number="form.t56" type="number"></el-input>
    </el-form-item>

    <el-form-item label="乳酸脱氢酶" prop="ldh">
      <el-input v-model.number="form.t57" type="number"></el-input>
    </el-form-item>

    <el-form-item label="三碘甲状腺原氨酸" prop="t3">
      <el-input v-model.number="form.t58" type="number"></el-input>
    </el-form-item>

    <el-form-item label="渗透压" prop="osmotic_pressure">
      <el-input v-model.number="form.t59" type="number"></el-input>
    </el-form-item>

    <el-form-item label="嗜碱性粒细胞相对值" prop="basophil_percentage">
      <el-input v-model.number="form.t60" type="number"></el-input>
    </el-form-item>

    <el-form-item label="嗜酸性粒细胞绝对值" prop="eosinophil_absolute">
      <el-input v-model.number="form.t61" type="number"></el-input>
    </el-form-item>

    <el-form-item label="碳酸氢根" prop="bicarbonate">
      <el-input v-model.number="form.t62" type="number"></el-input>
    </el-form-item>

    <el-form-item label="糖化血红蛋白" prop="hba1c">
      <el-input v-model.number="form.t63" type="number"></el-input>
    </el-form-item>

    <el-form-item label="天门冬/丙氨酸" prop="ast_alt_ratio">
      <el-input v-model.number="form.t64" type="number"></el-input>
    </el-form-item>

    <el-form-item label="天门冬氨酸氨基转移酶" prop="ast">
      <el-input v-model.number="form.t65" type="number"></el-input>
    </el-form-item>

    <el-form-item label="同型半胱氨酸" prop="homocysteine">
      <el-input v-model.number="form.t66" type="number"></el-input>
    </el-form-item>

    <el-form-item label="纤维蛋白原定量" prop="fibrinogen">
      <el-input v-model.number="form.t67" type="number"></el-input>
    </el-form-item>

    <el-form-item label="血红蛋白" prop="hemoglobin">
      <el-input v-model.number="form.t68" type="number"></el-input>
    </el-form-item>

    <el-form-item label="血小板计数" prop="platelet_count">
      <el-input v-model.number="form.t69" type="number"></el-input>
    </el-form-item>

    <el-form-item label="血小板平均体积" prop="mean_platelet_volume">
      <el-input v-model.number="form.t70" type="number"></el-input>
    </el-form-item>

    <el-form-item label="血小板体积分布宽度" prop="platelet_distribution_width">
      <el-input v-model.number="form.t71" type="number"></el-input>
    </el-form-item>

    <el-form-item label="血小板压积" prop="plateletcrit">
      <el-input v-model.number="form.t72" type="number"></el-input>
    </el-form-item>

    <el-form-item label="血型" prop="blood_type">
      <el-select v-model="form.t73">
        <el-option label="A型" value="A型"></el-option>
        <el-option label="B型" value="B型"></el-option>
        <el-option label="AB型" value="AB型"></el-option>
        <el-option label="O型" value="O型"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="血氧饱和度" prop="oxygen_saturation">
      <el-input v-model.number="form.t74" type="number"></el-input>
    </el-form-item>

    <el-form-item label="氧分压" prop="partial_pressure_of_oxygen">
      <el-input v-model.number="form.t75" type="number"></el-input>
    </el-form-item>

    <el-form-item label="氧合血红蛋白" prop="oxygenated_hemoglobin">
      <el-input v-model.number="form.t76" type="number"></el-input>
    </el-form-item>
    <el-form-item label="乙肝表面抗体" prop="hbsab">
      <el-input v-model.number="form.t77" type="number"></el-input>
    </el-form-item>

    <el-form-item label="乙肝表面抗原" prop="hbsag">
      <el-input v-model.number="form.t78" type="number"></el-input>
    </el-form-item>

    <el-form-item label="乙型肝炎e抗体" prop="hbeab">
      <el-input v-model.number="form.t79" type="number"></el-input>
    </el-form-item>

    <el-form-item label="乙型肝炎e抗原" prop="hbeag">
      <el-input v-model.number="form.t80" type="number"></el-input>
    </el-form-item>

    <el-form-item label="乙型肝炎核心抗体" prop="hbcab">
      <el-input v-model.number="form.t81" type="number"></el-input>
    </el-form-item>

    <el-form-item label="阴离子间隙" prop="anion_gap">
      <el-input v-model.number="form.t82" type="number"></el-input>
    </el-form-item>

    <el-form-item label="游离甲状腺素" prop="free_t4">
      <el-input v-model.number="form.t83" type="number"></el-input>
    </el-form-item>

    <el-form-item label="游离三碘甲状腺原氨酸" prop="free_t3">
      <el-input v-model.number="form.t84" type="number"></el-input>
    </el-form-item>

    <el-form-item label="有核红细胞相对值" prop="reticulocyte_percentage">
      <el-input v-model.number="form.t85" type="number"></el-input>
    </el-form-item>

    <el-form-item label="载脂蛋白A1" prop="apo_a1">
      <el-input v-model.number="form.t86" type="number"></el-input>
    </el-form-item>

    <el-form-item label="载脂蛋白B" prop="apo_b">
      <el-input v-model.number="form.t87" type="number"></el-input>
    </el-form-item>

    <el-form-item label="脂蛋白a" prop="lipoprotein_a">
      <el-input v-model.number="form.t88" type="number"></el-input>
    </el-form-item>

    <el-form-item label="中性粒细胞绝对值" prop="neutrophil_absolute">
      <el-input v-model.number="form.t89" type="number"></el-input>
    </el-form-item>

    <el-form-item label="总胆固醇" prop="total_cholesterol">
      <el-input v-model.number="form.t90" type="number"></el-input>
    </el-form-item>

    <el-form-item label="总胆红素" prop="total_bilirubin">
      <el-input v-model="form.t91" ></el-input>
    </el-form-item>
    <el-form-item label="总蛋白" prop="total_protein">
      <el-input v-model.number="form.t92" type="number"></el-input>
    </el-form-item>

    <el-form-item label="γ-谷氨酰基转移酶" prop="gamma_glutamyl_transpeptidase">
      <el-input v-model.number="form.t93" type="number"></el-input>
    </el-form-item>

    <el-form-item label="CA-125" prop="ca_125">
      <el-input v-model.number="form.t94" type="number"></el-input>
    </el-form-item>

    <el-form-item label="CA-153" prop="ca_153">
      <el-input v-model.number="form.t95" type="number"></el-input>
    </el-form-item>

    <el-form-item label="CA19-9" prop="ca19_9">
      <el-input v-model.number="form.t96" type="number"></el-input>
    </el-form-item>

    <el-form-item label="CEA" prop="cea">
      <el-input v-model.number="form.t97" type="number"></el-input>
    </el-form-item>

    <el-form-item label="NSE" prop="nse">
      <el-input v-model.number="form.t98" type="number"></el-input>
    </el-form-item>

    <!-- 更多表单项... -->
  </el-form>
</template>

<script>
import { testFormStore } from '@/store/formStore'

export default {
  name: "Test",
  setup() {
    const form = testFormStore().form;
    return {
      form,
    };
  },

}
</script>

<style scoped>
.el-form-item{
  /*display: flex;*/
  width: 30%;
  float: left;
  margin-left: 20px;
  margin-right:20px;
}
</style>
