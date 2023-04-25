<template>
    <el-table stripe :data="displayedUsers" :fit="true" :max-height="tableHeight"
              :header-row-style="{ height: '60px',fontSize: '16px' }">
      <el-table-column prop="serialNumber" label="序号" width="60"></el-table-column>
      <el-table-column prop="caseNumber" label="案例编号" width="100"></el-table-column>
      <el-table-column prop="timeOfAdmission" label="入院时间" width="100"></el-table-column>
      <el-table-column label="列4"></el-table-column>
      <el-table-column label="列5"></el-table-column>
      <el-table-column label="列6"></el-table-column>
      <el-table-column label="列7"></el-table-column>
      <el-table-column label="列8"></el-table-column>
      <el-table-column label="列9"></el-table-column>
      <el-table-column label="操作" fixed="right">
        <template v-slot="{ row }">
          <el-button link type="info" style="display: inline-block" @click="viewDetails(row)">详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        v-model="currentPage"
        :page-sizes="[20, 30, 50, 70]"
        :page-size="pageSize"
        :page-count="totalPages"
        :pager-count="5"
        :total="totalCount"
        :i18n="paginationI18n"
        layout="total,->, sizes, prev, pager, next, jumper"
        @size-change="onChangePageSize"
        @current-change="onChangePage"
    ></el-pagination>

  <el-dialog v-model="detailsDialogVisible" title="患者详情" width="90%" center style="overflow: hidden">
    <div style="overflow-y: auto">


      <div style="display: flex; flex-direction: row; ">
        <div style="margin-right: 15px">案例编号: {{ selectedPatient.caseNumber }}</div>
        <div>入院时间: {{ selectedPatient.timeOfAdmission }}</div>
      </div>

      <result-form-tabs :case-number="selectedPatient.caseNumber"
                        :key="selectedPatient.caseNumber"></result-form-tabs>
    </div>
  </el-dialog>
</template>

<script>
import {getAllUser} from "@/utils/api";
import {ref, onMounted, computed, onBeforeUnmount, nextTick, watch, watchEffect} from "vue";
import ResultFormTabs from "@/components/Basic/ResultFormTabs.vue";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";

export default {
  components: {ResultFormTabs},

  setup() {
    const users = ref([]);
    // 请求数据
    // TODO:修改提示失败框
    const fetchUsers = async () => {
      const manageDoctors = 1001; // 登陆后缓存的用户信息替代。设置为你想要的 manageDoctors 值
      const response = await getAllUser(manageDoctors);
      users.value = response;
      localStorage.setItem("users", JSON.stringify(response));
    };

    // TODO：本地还是非本地加载用户数据，需要改
    if (!localStorage.getItem("users")) {
      fetchUsers();
    } else {
      users.value = JSON.parse(localStorage.getItem("users"));
    }
    // 查看详情功能按钮
    const detailsDialogVisible = ref(false);
    const selectedPatient = ref({});
    const viewDetails = async (row) => {
      console.log('Clicked view details');
      selectedPatient.value = row;
      await nextTick();
      detailsDialogVisible.value = true;
    };


    watch(selectedPatient, async (newValue, oldValue) => {
      if (newValue !== oldValue) {
        await nextTick();
        detailsDialogVisible.value = true;
      }
    });

    // 分页功能
    const paginationI18n = {
      prev: "上一页",
      next: "下一页",
      page: "页",
      pageSizes: "每页显示数量",
      total: "总条目数",
      pageCount: "页数",
      jumper: "跳转到第",
      confirm: "确定",
    };
    const currentPage = ref(1);
    const pageSize = ref(30);
    const totalCount = computed(() => users.value.length);
    const totalPages = computed(() => {
      return Math.ceil(users.value.length / pageSize.value);
    });
    const onChangePage = (newPage) => {
      currentPage.value = newPage;
    };
    const displayedUsers = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize.value;
      return users.value.slice(startIndex, startIndex + pageSize.value);
    });
    const onChangePageSize = (newSize) => {
      pageSize.value = newSize;
      currentPage.value = 1;
    };

    //自适应患者数量
    // function updatePageSize() {
    //   const headerHeight = 50; // 根据实际情况调整表头高度
    //   const footerHeight = 50; // 根据实际情况调整分页器高度
    //   const rowHeight = 50;    // 根据实际情况调整行高
    //   const availableHeight = window.innerHeight - headerHeight - footerHeight;
    //   const rowsPerPage = Math.floor(availableHeight / rowHeight);
    //   pageSize.value = Math.max(rowsPerPage, 1); // 确保每页至少显示一条记录
    // };
    const { windowHeight } = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });

    // 计算表格高度
    // const tableHeight = computed(() => {
    //   // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
    //   return window.innerHeight - 250;
    // });


    onMounted(() => {
      fetchUsers();
      console.log("users:", users);
    });


    return {
      users,
      currentPage,
      displayedUsers,
      totalPages,
      viewDetails,
      onChangePage,
      pageSize,
      onChangePageSize,
      totalCount,
      paginationI18n,
      detailsDialogVisible,
      selectedPatient,
      tableHeight,
    };
  },
};
</script>


<style scoped>
.el-table {
  border-radius: 8px;
  margin-bottom: 10px;
}

.el-pagination {
  display: flex;
  justify-content: flex-end;
}


</style>
