<script>
import {baseFormStore} from "@/store/formStore";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
import {computed} from "vue";

export default {
  name: "BaseInfoTemplates",
  setup() {
    const baseForm = baseFormStore().baseForm;
    const formStore = baseFormStore();
    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });
    const getData = () => {
      return formStore.baseForm;
    }
    return {
      getData,
      baseForm,
      tableHeight,
    };
  },
}
</script>

<template>
  <div class="scroll-container" >
    <el-scrollbar class="scrollbar" :height="tableHeight">
      <el-card >
        <el-form :model="baseForm" label-width="280px" :size="'small'" label-position="left">
          <el-form-item label="病例号">
            <el-input v-model="baseForm.caseNumber" placeholder="请输入病例号"></el-input>
          </el-form-item>
          <el-form-item label="录入时间">
            <el-date-picker v-model="baseForm.timeOfAdmission" type="date" placeholder="选择日期" format="YYYY-MM-DD"  value-format="YYYY-MM-DD" ></el-date-picker>
          </el-form-item>
          <el-form-item label="主管医生">
            <el-input v-model="baseForm.manageDoctors" placeholder="请输入主管医生"></el-input>
          </el-form-item>
        </el-form>
      </el-card>
    </el-scrollbar>
  </div>
</template>

<style scoped>

.scroll-container {
  display: grid;
  grid-template-rows: 1fr auto;
  overflow: hidden;
}

.scrollbar {
  overflow-y: auto;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.button{
  margin-top: 10px;
}
</style>

