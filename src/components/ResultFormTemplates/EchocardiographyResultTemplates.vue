<template>
  <el-scrollbar class="scroll-container" :height="tableHeight">
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" title="我院首次心脏彩超">
      <el-descriptions-item label="升主动脉内径">{{ attributeData.c1 }} mm</el-descriptions-item>
      <el-descriptions-item label="主动脉根部内径">{{ attributeData.c2 }} mm</el-descriptions-item>
      <el-descriptions-item label="右室流出道">{{ attributeData.c3 }} mm</el-descriptions-item>
      <el-descriptions-item label="右室前后径">{{ attributeData.c4 }} mm</el-descriptions-item>
      <el-descriptions-item label="主肺动脉内径">{{ attributeData.c5 }} mm</el-descriptions-item>
      <el-descriptions-item label="左室舒末径">{{ attributeData.c6 }} mm</el-descriptions-item>
      <el-descriptions-item label="左室缩末径">{{ attributeData.c7 }} mm</el-descriptions-item>
      <el-descriptions-item label="左房前后径">{{ attributeData.c8 }} mm</el-descriptions-item>
      <el-descriptions-item label="室间隔舒末厚度">{{ attributeData.c9 }} mm</el-descriptions-item>
      <el-descriptions-item label="右房上下径">{{ attributeData.c10 }} mm</el-descriptions-item>
      <el-descriptions-item label="右房左右径">{{ attributeData.c11 }} mm</el-descriptions-item>
      <el-descriptions-item label="左室射血分数">{{ attributeData.lvef }} %</el-descriptions-item>
      <el-descriptions-item label="左心室短轴缩短率">{{ attributeData.lvfs }} %</el-descriptions-item>
      <el-descriptions-item label="肺动脉压">{{ attributeData.pasp }} mmHg</el-descriptions-item>
      <el-descriptions-item label="是否有主动脉瓣反流？">
        {{ ['无', '轻度', '中度', '重度'] [attributeData.n1] }}
      </el-descriptions-item>
      <el-descriptions-item label="是否有主动脉瓣瓣膜钙化？">{{
          attributeData.n2 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否室壁变薄？" :span="3">{{
          attributeData.n3 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n3 === '1'">
        <el-descriptions-item label="前间隔">{{ attributeData.n31 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="室间隔">{{ attributeData.n32 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="前壁">{{ attributeData.n33 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="侧壁">{{ attributeData.n34 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="后壁">{{ attributeData.n35 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="下壁">{{ attributeData.n36 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="右室">{{ attributeData.n37 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>
    </el-descriptions>

    <div v-else>
      <p>正在加载...</p>
    </div>
  </el-scrollbar>
</template>

<script>
import {echocardiographyResultAttributeDataStore} from "@/store/resultFormStore";
import {computed, onBeforeMount} from "vue";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";

export default {
  name: "EchocardiographyResultTemplates",

  setup() {
    const attributeDataStore = echocardiographyResultAttributeDataStore();
    const attributeData = computed(() => {

      return Object.values(attributeDataStore.data)[0];
    });
    // 在组件加载前重置数据
    onBeforeMount(() => {
      attributeDataStore.resetData();
    });
    //自适应高度
    const {windowHeight70} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight70.value - 250;
    });
    return {
      attributeData,
      tableHeight
    };
  }
}
</script>

<style scoped>

</style>
