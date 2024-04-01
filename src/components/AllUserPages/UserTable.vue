<template>
  <el-table stripe :data="displayedUsers" :fit="true" :max-height="tableHeight"
            :header-row-style="{ height: '60px',fontSize: '16px' }">
    <el-table-column prop="serialNumber" label="序号" width="80"></el-table-column>
    <el-table-column prop="caseNumber" label="案例编号" width="120"></el-table-column>
    <el-table-column prop="timeOfAdmission" label="入院时间" width="130"></el-table-column>
    <el-table-column prop="attribute" label="性别" width="120" align="center" :formatter="sexAttribute"></el-table-column>
    <el-table-column prop="attribute" label="年龄" width="120" align="center" :formatter="ageAttribute"></el-table-column>
    <el-table-column prop="attribute" label="体重指数" width="120" align="center" :formatter="bmiAttribute"></el-table-column>
    <el-table-column label='' align="center"></el-table-column>
    <el-table-column label='' align="center"></el-table-column>
    <el-table-column label="操作" fixed="right" width="150">
      <template v-slot="{ row }">
        <el-button link type="info" style="display: inline-block" @click="viewDetails(row)">详情
        </el-button>
        <el-button link type="danger" style="display: inline-block" @click="handleDelete(row)">删除</el-button>
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
      <!-- 重新设计布局 -->
      <el-row style="margin-bottom: 20px;"> <!-- 增加上下间距 -->
        <el-col :span="12">
          <!-- 案例编号和入院时间 -->
          <div style="display: flex; align-items: center;">
            <span style="font-weight: bold;">案例编号： </span> {{ selectedPatient.caseNumber }}
            <span style="margin-left: 15px; font-weight: bold;">入院时间： </span> {{ selectedPatient.timeOfAdmission }}
          </div>
        </el-col>
        <el-col :span="12">
          <!-- 性别、文化水平、出生日期、年龄 -->
          <div style="display: flex; align-items: center;">
            <span style="font-weight: bold;">性别： </span> {{ selectedPatient.parsedAttributes.gender }}
            <span style="margin-left: 15px; font-weight: bold;">文化水平： </span> {{ selectedPatient.parsedAttributes.education }}
            <span style="margin-left: 15px; font-weight: bold;">出生日期： </span> {{ selectedPatient.parsedAttributes.dob }}
            <span style="margin-left: 15px; font-weight: bold;">年龄： </span> {{ selectedPatient.parsedAttributes.age }}
          </div>
        </el-col>
      </el-row>

      <el-row style="margin-bottom: 20px;"> <!-- 增加上下间距 -->
        <el-col :span="12">
          <!-- 身高、体重、BMI -->
          <div style="display: flex; align-items: center;">
            <span style="font-weight: bold;">身高： </span> {{ selectedPatient.parsedAttributes.height }} cm
            <span style="margin-left: 15px; font-weight: bold;">体重： </span> {{ selectedPatient.parsedAttributes.weight }} kg
            <span style="margin-left: 15px; font-weight: bold;">BMI：</span> {{ selectedPatient.parsedAttributes.bmi }}
          </div>
        </el-col>
        <el-col :span="12">
          <!-- 入院首次心率、入院首次收缩压、入院首次舒张压、入院首次氧合 -->
          <div style="display: flex; align-items: center;">
            <span style="font-weight: bold;">入院首次心率： </span> {{ selectedPatient.parsedAttributes.heartRate }}
            <span style="margin-left: 15px; font-weight: bold;">入院首次收缩压： </span> {{ selectedPatient.parsedAttributes.systolicPressure }}
            <span style="margin-left: 15px; font-weight: bold;">入院首次舒张压： </span> {{ selectedPatient.parsedAttributes.diastolicPressure }}
            <span style="margin-left: 15px; font-weight: bold;">入院首次氧合： </span> {{ selectedPatient.parsedAttributes.oxygenation }}
          </div>
        </el-col>
      </el-row>

      <result-form-tabs :case-number="selectedPatient.caseNumber" :key="selectedPatient.caseNumber"></result-form-tabs>
    </div>
  </el-dialog>
</template>

<script>
import {deletePatient, getAllUser} from "@/utils/api";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import ResultFormTabs from "@/components/Basic/ResultFormTabs.vue";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
import {ElMessage} from "element-plus";

export default {
  methods: {deletePatient},
  components: {ResultFormTabs},

  setup() {
    const users = ref([]);
    // 请求数据
    // TODO:修改提示失败框
    const fetchUsers = async () => {
      //TODO：需要修改管理医生
      const manageDoctors = 1001;
      const response = await getAllUser(manageDoctors);
      // 患者进行排序
      const sortedUsers = response.sort((a, b) => {
        return new Date(b.timeOfAdmission) - new Date(a.timeOfAdmission); // 降序
      });
      users.value = response;
      console.log("users:", users)
      // localStorage.setItem("users", JSON.stringify(response));
    };

    // TODO：本地还是非本地加载用户数据，需要改
    // if (!localStorage.getItem("users")) {
    //   fetchUsers();
    // } else {
    //   users.value = JSON.parse(localStorage.getItem("users"));
    // }
    // 详情展示
    const parseAttribute = (attribute) => {
      try {
        const attributeObj = JSON.parse(attribute);
        const parsedAttributes = {};
        // 解析性别
        if (attributeObj.sex === "1") {
          parsedAttributes.gender = "男";
        } else if (attributeObj.sex === "2") {
          parsedAttributes.gender = "女";
        } else {
          parsedAttributes.gender = "未知";
        }
        // 解析文化水平
        switch (attributeObj.c) {
          case "1":
            parsedAttributes.education = "文盲";
            break;
          case "2":
            parsedAttributes.education = "小学/初中";
            break;
          case "3":
            parsedAttributes.education = "高中及以上";
            break;
          default:
            parsedAttributes.education = "未知";
            break;
        }
        parsedAttributes.dob = attributeObj.dob;
        parsedAttributes.age = attributeObj.age;
        parsedAttributes.height = attributeObj.h;
        parsedAttributes.weight = attributeObj.w;
        parsedAttributes.bmi = attributeObj.BMI;
        parsedAttributes.heartRate = attributeObj.n1;
        parsedAttributes.systolicPressure = attributeObj.n2;
        parsedAttributes.diastolicPressure = attributeObj.n3;
        parsedAttributes.oxygenation = attributeObj.n4;

        return parsedAttributes;
      } catch (error) {
        console.error("Error parsing attribute:", error);
        return {};
      }
    };
// 处理性别
    const sexAttribute = (row) => {
      if (row && row.attribute) {
        try {
          const attributeData = JSON.parse(row.attribute);
          if (attributeData && attributeData.sex) {
            if (attributeData.sex === '1') {
              return '男';
            } else if (attributeData.sex === '2') {
              return '女';
            }
          }
        } catch (error) {
          console.error('JSON 解析错误：', error);
        }
      }
      return '';
    };

// 处理年龄
    const ageAttribute = (row) => {
      if (row && row.attribute) {
        try {
          const attributeData = JSON.parse(row.attribute);
          if (attributeData && attributeData.age) {
            return `${attributeData.age}`;
          }
        } catch (error) {
          console.error('JSON 解析错误：', error);
        }
      }
      return '';
    };

// 处理BMI
    const bmiAttribute = (row) => {
      if (row && row.attribute) {
        try {
          const attributeData = JSON.parse(row.attribute);
          if (attributeData && attributeData.BMI) {
            const bmi = parseFloat(attributeData.BMI);
            if (bmi < 18.5) {
              return '消瘦';
            } else if (bmi >= 18.5 && bmi <= 24) {
              return '正常';
            } else if (bmi > 24 && bmi <= 28){
              return '超重';
            } else {
              return '肥胖';
            }
          }
        } catch (error) {
          console.error('JSON 解析错误：', error);
        }
      }
      return '';
    };

    // 查看详情功能按钮
    const detailsDialogVisible = ref(false);
    const selectedPatient = ref({});
    const viewDetails = async (row) => {
      console.log("row:", row)
      selectedPatient.value = row;
      selectedPatient.value.parsedAttributes = parseAttribute(row.attribute);
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
    //自适应高度
    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 250;
    });

    onMounted(() => {
      fetchUsers();
      console.log("users:", users);
    });

    const handleDelete = async (row) => {
      try {
        await deletePatient(row.caseNumber, row.timeOfAdmission);
        ElMessage.success({
          message: '患者删除成功！',
          duration: 5000,
          showClose: true,
        });
        // After deleting, you might want to refresh the data
        fetchUsers();
      } catch (error) {
        console.error('Error deleting patient:', error);
      }
    };

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
      handleDelete,
      parseAttribute,
      bmiAttribute,
      sexAttribute,
      ageAttribute,
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
