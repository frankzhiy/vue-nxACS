<template>
  <el-scrollbar class="scroll-container" :height="tableHeight">
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData">
      <el-descriptions-item
          v-for="(value, key) in attributeData"
          :key="key"
          :label="customLabels[key]"
      >
        {{ value }}
      </el-descriptions-item>
    </el-descriptions>
    <div v-else>
      <p>正在加载...</p>
    </div>
  </el-scrollbar>
</template>

<script>
import {testResultAttributeDataStore,} from "@/store/resultFormStore";
import {computed, onBeforeMount, ref, watchEffect} from "vue";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";

export default {
  name: "TestResultTemplates",
  props: {
    activeTab: String,
  },
  setup(props) {
    const attributeDataStore = testResultAttributeDataStore();
    const customLabels = {
      t1: "CRP",
      t2: "pro-BNP",
      t3: "肌钙蛋白 ",
      t4: "降钙素原 ",
      t5: "白介素-6 ",
      t6: "D-二聚体 ",
      t7: "PH ",
      t8: "白蛋白",
      t9: "丙氨酸氨基转移酶",
      t10: "白细胞计数 ",
      t11: "大血小板比率",
      t12: "单核细胞绝对值",
      t13: "丙型肝炎抗体IgG ",
      t14: "补体C1q ",
      t15: "促甲状腺激素",
      t16: "胆碱酯酶 ",
      t17: "低密度脂蛋白",
      t18: "二氧化碳分压 ",
      t19: "二氧化碳结合率",
      t20: "二氧化碳总量 ",
      t21: "非结合胆红素 ",
      t22: "钙 ",
      t23: "甘油三酯",
      t24: "高密度脂蛋白 ",
      t25: "高铁血红蛋白 ",
      t26: "胱抑素 ",
      t27: "红细胞分布宽度",
      t28: "红细胞计数 ",
      t29: "红细胞平均体积",
      t30: "红细胞压积 ",
      t31: "活化部分凝血酶原时比值",
      t32: "活化部分凝血酶原时间 ",
      t33: "肌酸激酶 ",
      t35: "甲状腺素 ",
      t36: "钾 ",
      t37: "碱性磷酸酶",
      t38: "结合胆红素 ",
      t39: "抗环瓜氨酸肽抗体",
      t40: "类风湿因子 ",
      t41: "淋巴细胞相对值",
      t42: "磷 ",
      t43: "氯 ",
      t44: "梅毒螺旋体抗体",
      t45: "钠 ",
      t46: "尿素",
      t47: "尿酸 ",
      t48: "凝血酶时间",
      t49: "凝血酶原比值",
      t50: "凝血酶原国际标准比值",
      t51: "凝血酶原活动度 ",
      t52: "凝血酶原时间 ",
      t53: "葡萄糖 ",
      t54: "球蛋白 ",
      t55: "去氧血红蛋白",
      t56: "乳酸 ",
      t57: "乳酸脱氢酶",
      t58: "三碘甲状腺原氨酸",
      t59: "渗透压 ",
      t60: "嗜碱性粒细胞相对值",
      t61: "嗜酸性粒细胞绝对值 ",
      t62: "碳酸氢根 ",
      t63: "糖化血红蛋白",
      t64: "天门冬/丙氨酸",
      t65: "天门冬氨酸氨基转移酶",
      t66: "同型半胱氨酸 ",
      t67: "纤维蛋白原定量",
      t68: "血红蛋白 ",
      t69: "血小板计数",
      t70: "血小板平均体积",
      t71: "血小板体积分布宽度",
      t72: "血小板压积 ",
      t73: "血型 ",
      t74: "血氧饱和度",
      t75: "氧分压 ",
      t76: "氧合血红蛋白",
      t77: "乙肝表面抗体 ",
      t78: "乙肝表面抗原 ",
      t79: "乙型肝炎e抗体",
      t80: "乙型肝炎e抗原 ",
      t81: "乙型肝炎核心抗体",
      t82: "阴离子间隙 ",
      t83: "游离甲状腺素",
      t84: "游离三碘甲状腺原氨酸",
      t85: "有核红细胞相对值 ",
      t86: "载脂蛋白A1 ",
      t87: "载脂蛋白B ",
      t88: "脂蛋白a ",
      t89: "中性粒细胞绝对值",
      t90: "总胆固醇 ",
      t91: "总胆红素 ",
      t92: "总蛋白 ",
      t93: "γ-谷氨酰基转移酶",
      t94: "CA-125 ",
      t95: "CA-153 ",
      t96: "CA19-9 ",
      t97: "CEA",
      t98: "NSE",
    };

    const attributeData = computed(() => {

      return Object.values(attributeDataStore.data)[0];
    });
    //自适应高度
    const {windowHeight70} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight70.value - 250;
    });
    // 在组件加载前重置数据
    onBeforeMount(() => {
      attributeDataStore.resetData();
    });

    return {
      attributeData,
      customLabels,
      tableHeight
    };
  },
}
</script>

<style scoped>
.scroll-container {
  display: grid;
  grid-template-rows: 1fr auto;
  overflow: hidden;
}

</style>


