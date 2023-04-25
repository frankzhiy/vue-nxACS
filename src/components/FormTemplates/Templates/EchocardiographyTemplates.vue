<template>
  <div class="scroll-container" >
    <el-scrollbar class="scrollbar" :height="tableHeight">
      <el-card>
        <echocardiography ref="ec"></echocardiography>
      </el-card>
    </el-scrollbar>
    <div class="button-container">
      <el-button type="primary" @click="submitForm"  class="button">提交</el-button>
    </div>
  </div>
</template>

<script>
import Echocardiography from "@/components/FormTemplates/EC/Echocardiography.vue";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
import {computed} from "vue";
export default {

  name: "EchocardiographyTemplates",
  components: {
    Echocardiography,
  },
  methods: {
    submitForm() {

      console.log(this.$refs.ec.form)
      //验证是否提交后离开

      // const mergedData = Object.assign({}, this.formData.formA, /* 其他表单组件的数据 */)
    },},
  setup() {
    // 自适应高度
    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });
    return {
      tableHeight,
    };
  }
}
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
