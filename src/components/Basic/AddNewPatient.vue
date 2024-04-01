<template>

  <el-button plain type="primary" @click="addNewPatient" size="small">
    <el-icon>
      <Plus/>
    </el-icon>
    <span>添加新患者</span>
  </el-button>


</template>

<script>
export default {
  methods: {
    addNewPatient() {
      this.$emit('add-new-patient');
    },
  },
};
</script>
