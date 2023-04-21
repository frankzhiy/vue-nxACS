<template>
  <div>
    <add-new-patient v-if="!showForm" @add-new-patient="showForm = true" class="anp"></add-new-patient>
    <new-patient-form v-if="showForm" @close-form="showForm = false"></new-patient-form>
    <div v-if="!showForm" :style="{ height: containerHeight }">
      <!-- 患者列表内容 -->
      <UserTable></UserTable>
    </div>
  </div>
</template>

<script>
import UserTable from "@/components/AllUserPages/UserTable.vue";
import AddNewPatient from "@/components/Basic/AddNewPatient.vue";
import NewPatientForm from "@/components/Basic/NewPatientForm.vue";
import useHeightMixin from "@/mixins/heightMixin";
import { useRoute, useRouter } from 'vue-router';
export default {
  mixins: [useHeightMixin],
  name: 'rolesList',
  components: {
    UserTable,
    AddNewPatient,
    NewPatientForm,
  },
  data() {
    return {
      showDialog: false,
      showForm: false
    };
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    function goBack() {
      router.back();
    }

    return {
      route,
      goBack,
    };
  },
}
</script>
<style scoped>
.anp {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-top: -10px;
}
</style>
