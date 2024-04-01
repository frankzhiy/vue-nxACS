<script>
import {baseFormStore, basicFormStore} from "@/store/formStore";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
import {computed} from "vue";

export default {
  name: "BaseInfoTemplates",
  setup() {
    const baseForm = baseFormStore().baseForm;
    const basicForm = basicFormStore().form;
    const formStore = baseFormStore();
    const bFormStore = basicFormStore();
    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });
    const getData = () => {
      return {
        formStore: formStore.baseForm,
        bFormStore: bFormStore.form,
      };
    }
    return {
      getData,
      baseForm,
      basicForm,
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
          <el-form-item label="性别">
            <el-input v-model="basicForm.sex" placeholder="请输入性别,男1，女2"></el-input>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-date-picker v-model="basicForm.dob" type="date" placeholder="选择出生日期" format="YYYY-MM-DD" value-format="YYYY-MM-DD"></el-date-picker>
          </el-form-item>
          <el-form-item label="年龄（发病时）">
            <el-input v-model="basicForm.age" placeholder="请输入年龄"></el-input>
          </el-form-item>
          <el-form-item label="身高">
            <el-input v-model="basicForm.h" placeholder="请输入身高"></el-input>
          </el-form-item>
          <el-form-item label="身高">
            <el-input v-model="basicForm.h" placeholder="请输入身高"></el-input>
          </el-form-item>
          <el-form-item label="体重">
            <el-input v-model="basicForm.w" placeholder="请输入体重"></el-input>
          </el-form-item>
          <el-form-item label="体重指数">
            <el-input v-model="basicForm.BMI" placeholder="请输入体重指数"></el-input>
          </el-form-item>
          <el-form-item label="文化水平">
            <el-input v-model="basicForm.c" placeholder="请输入文化水平 文盲1 小学/初中2 高中及以上3"></el-input>
          </el-form-item>
          <el-form-item label="入院首次心率">
            <el-input v-model="basicForm.n1" placeholder="请输入入院首次心率"></el-input>
          </el-form-item>
          <el-form-item label="入院首次收缩压">
            <el-input v-model="basicForm.n2" placeholder="请输入入院首次收缩压"></el-input>
          </el-form-item>
          <el-form-item label="入院首次舒张压">
            <el-input v-model="basicForm.n3" placeholder="请输入入院首次舒张压"></el-input>
          </el-form-item>
          <el-form-item label="入院首次氧合">
            <el-input v-model="basicForm.n4" placeholder="请输入入院首次氧合"></el-input>
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

