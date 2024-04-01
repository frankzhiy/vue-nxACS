<template>
  <div>
    <el-tabs tab-position="left">
      <el-tab-pane label="MACE事件" name="1"><MacePredict/></el-tab-pane>
<!--      <el-tab-pane label="Tab 2" name="2">Content of Tab 2</el-tab-pane>-->
<!--      <el-tab-pane label="Tab 3" name="3">Content of Tab 3</el-tab-pane>-->
<!--      <el-tab-pane label="Tab 4" name="4">Content of Tab 4</el-tab-pane>-->
<!--      <el-tab-pane label="Tab 5" name="5">Content of Tab 5</el-tab-pane>-->
    </el-tabs>
  </div>

  <!--  <el-table stripe :fit="true" :max-height="tableHeight"-->
  <!--            :header-row-style="{ height: '60px',fontSize: '16px' }">-->
  <!--  </el-table>-->
</template>

<script>
import {useWindowHeightWatcher} from '@/utils/windowHeightWatcher';
import {computed} from "vue";
import MacePredict from "@/components/Predict/MacePredict.vue";

export default {
  name: "fellowList",
  components: {MacePredict},
  setup() {


    return {

    };
  },
}
</script>

<style scoped>

</style>
