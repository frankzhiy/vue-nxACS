<template>
  <div class="scroll-container" >
    <el-scrollbar class="scrollbar" :height="tableHeight">
      <el-card>
        <Test ref="test"></Test>
      </el-card>
    </el-scrollbar>
    <div class="button-container">
      <el-button type="primary" @click="submitForm"  class="button">提交</el-button>
    </div>
  </div>
</template>

<script>

import Test from "@/components/FormTemplates/TEST/Test.vue";
import {computed, defineComponent, onBeforeUnmount, onMounted, provide, ref, watch,} from "vue";
import { testFormStore } from '@/store/formStore'
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
const  formStore = testFormStore();
export default defineComponent({
  name: "TestTemplates",
  components: {
    Test,
  },
  methods: {
    submitForm() {
      console.log(formStore.form)

      console.log(this.$refs.test.form)
      //验证是否提交后离开

      // const mergedData = Object.assign({}, this.formData.formA, /* 其他表单组件的数据 */)
    },
    //离开确认

  },
  setup() {

    onBeforeUnmount(() => {
      console.log('成功离开')
    });
    onMounted(() => {
      console.log('成功进入')

    });
    //自适应高度
    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });
    return {
      tableHeight,
    };
  },

});
</script>

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
