<template>
  <div>
    我是随访列表
  </div>
  <div>
    <h1>当前窗口高度: {{ windowHeight }}px</h1>
  </div>
</template>

<script>
import { useWindowHeightWatcher } from '@/utils/windowHeightWatcher';
export default {
  name: "fellowList",
  setup() {
    const { windowHeight } = useWindowHeightWatcher();
    return {
      windowHeight,
    };
  },
}
</script>

<style scoped>

</style>
