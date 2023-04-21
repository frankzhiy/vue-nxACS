<template>
  <el-scrollbar class="scroll-container" :style="{height: containerHeightMin}">
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData">
      <el-descriptions-item label="是否具有糖尿病病史？" :span="3">{{attributeData.n1 === '1' ? '有' : '无'}}</el-descriptions-item>
      <div v-if="attributeData.n1 === '1'">
        <el-descriptions-item label="病史">{{ attributeData.h1 }} 年</el-descriptions-item>
        <el-descriptions-item label="是否服用二甲双胍？">{{attributeData.n2 === '1' ? '有' : '无'}}</el-descriptions-item>
        <el-descriptions-item label="是否服用SLG-2抑制剂？">{{attributeData.n3 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="是否注射GLP-1激动剂？">{{attributeData.n4 === '1' ? '有' : '无'}}</el-descriptions-item>
        <el-descriptions-item label="是否注射胰岛素？">{{attributeData.n5 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="其他降糖药？">{{ attributeData.n6 === '1' ? '有' : '无' }}</el-descriptions-item>
      </div>
      <el-descriptions-item label="是否具有高血压病病史？" :span="3">{{attributeData.n7 === '1' ? '有' : '无'}}</el-descriptions-item>
      <div v-if="attributeData.n7 === '1'">
        <el-descriptions-item label="病史">{{ attributeData.h2 }} 年</el-descriptions-item>
        <el-descriptions-item label="是否服用ACEI/ARB？">{{attributeData.n8 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="是否服用CCB？">{{ attributeData.n9 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="是否服用β受体阻滞剂？">{{attributeData.n10 === '1' ? '有' : '无'}}</el-descriptions-item>
        <el-descriptions-item label="是否服用利尿剂？">{{ attributeData.n11 === '1' ? '有' : '无'}}</el-descriptions-item>
      </div>

      <el-descriptions-item label="是否具有脑血管疾病史？" :span="3">{{attributeData.n12 === '1' ? '有' : '无'}}</el-descriptions-item>
      <div v-if="attributeData.n12 === '1'">
        <el-descriptions-item label="缺血？">{{ attributeData.n13 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="出血？">{{ attributeData.n14 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="TIA发作？">{{ attributeData.n15 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="不明原因的偏瘫、言语不清等症状,未确诊？">{{ attributeData.n16 === '1' ? '有' : '无' }}</el-descriptions-item>
      </div>
      <el-descriptions-item label="是否具有外周血管疾病史">{{ attributeData.n17 === '1' ? '有' : '无' }}</el-descriptions-item>
      <el-descriptions-item label="是否具有血脂异常病史？">{{
          attributeData.n18 === '0' ? '无' :
              attributeData.n18 === '1' ? '高胆固醇血脂' :
                  attributeData.n18 === '2' ? '高甘油三酯血症' :
                      attributeData.n18 === '3' ? '高低密度脂蛋白血症' :
                          attributeData.n18 === '4' ? '低高密度脂蛋白血症' :'混合型高脂血症'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否服用他汀类药物？">{{ attributeData.n19 === '1' ? '有' : '无' }}</el-descriptions-item>
      <el-descriptions-item label="既往是否具有冠心病病史？">{{ attributeData.n20 === '1' ? '有' : '无' }}</el-descriptions-item>
      <div v-if="attributeData.n20 === '1'">
        <el-descriptions-item label="距本次心梗时间">{{ attributeData.n21 }} 年</el-descriptions-item>
        <el-descriptions-item label="是否血管狭窄>50%?">{{ attributeData.n211 === '0' ? '否' : attributeData.n211 === '1'? '是' :'不详' }}</el-descriptions-item>
        <el-descriptions-item label="既往是否为心肌梗死？">{{ attributeData.n22 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="是否行介入治疗?">{{ attributeData.n23 === '0' ? '否' : attributeData.n211 === '1'? 'PCI' :'CAG'  }}</el-descriptions-item>
        <el-descriptions-item label="支架个数">{{ attributeData.n24 }} 个 </el-descriptions-item>
        <el-descriptions-item label="是否行CABG？">{{ attributeData.n25 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="是否规律口服二级预防药物治疗？">{{ attributeData.n26 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="是否严格戒烟？">{{ attributeData.n27 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>
      <!-- 其他表单项 -->
    </el-descriptions>
    <div v-else>
      <p>正在加载...</p>
    </div>
  </el-scrollbar>
</template>

<script>
import useHeightMixin from "@/mixins/heightMixin";
import {medicalHistoryResultAttributeDataStore} from "@/store/resultFormStore";
import {computed, onBeforeMount, ref, watchEffect} from "vue";

export default {
  name: "MedicalHistoryResultTemplates",
  mixins: [useHeightMixin],
  setup() {
    const attributeDataStore = medicalHistoryResultAttributeDataStore();

    const attributeData = computed(() => {

      return Object.values(attributeDataStore.data)[0];
    });
    // 在组件加载前重置数据
    onBeforeMount(() => {
      attributeDataStore.resetData();
    });
    return {
      attributeData,

    };
  },
}
</script>

<style scoped>

</style>


