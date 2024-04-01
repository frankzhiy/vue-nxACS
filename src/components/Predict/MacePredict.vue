<template>
  <div>
    <!-- 患者表格 -->
    <el-table
        stripe
        :data="displayedPatients"
        :fit="true"
        :max-height="tableHeight"
        :header-row-style="{ height: '60px', fontSize: '16px' }"
    >
      <el-table-column prop="serialNumber" label="ID" ></el-table-column>
      <el-table-column prop="caseNumber" label="案例号" ></el-table-column>
      <el-table-column prop="timeOfAdmission" label="入院时间" width="130"></el-table-column>
      <el-table-column prop="completion" label="完成度" ></el-table-column>
      <el-table-column prop="riskIndex" label="风险指数" ></el-table-column>
      <el-table-column label="查看详情" align="center">
        <template v-slot="{ row }">
          <el-button type="primary" text @click="viewDetails(row)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 翻页 -->
    <el-pagination
        background
        v-model="currentPage"
        :page-sizes="[20, 30, 50, 70]"
        :page-size="pageSize"
        :page-count="totalPages"
        :pager-count="5"
        :total="totalCount"
        :i18n="paginationI18n"
        layout="total,->,sizes,prev,pager,next,jumper"
        @size-change="onChangePageSize"
        @current-change="onChangePage"
    ></el-pagination>
    <el-dialog v-model="detailsDialogVisible" width="60%" center>
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">患者详情</h4>
        </div>
      </template>
      <el-container style="padding: 8px; flex-direction: column;">
        <el-row class="layer layer4">
          <el-col :span="24">
            <el-descriptions :bordered="true" :column="4" size="small" title="潜在风险因素详情">
              <el-descriptions-item v-for="(item, index) in formattedAttributes" :key="index" :label="item.label">{{ item.value }}</el-descriptions-item>
            </el-descriptions>
          </el-col>
        </el-row>
        <!-- 第一层：原始概率和打印按钮 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-text style="display: block; text-align: center; font-size: 18px; margin-bottom: 10px;">发生MACE不良事件风险评估</el-text>
          </div>
          <el-row type="flex" justify="space-between" align="middle" class="layer layer1">
            <el-col :span="12">
              <div class="progress-container">
                <el-progress  :stroke-width="16" :percentage="probabilityPercentage" style="width:100%"/>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="button-container" style="text-align: right;">
                <el-button type="primary" @click="printAttributeAsJson">查看风险</el-button>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card" v-if="showInterventionOptions">
          <div slot="header" class="clearfix">
            <el-text style="display: block; text-align: center; font-size: 18px; margin-bottom: 10px;">介入评估</el-text>
          </div>
          <el-row type="flex" justify="start" align="middle" class="layer layer2">
            <el-col :span="24">
              <el-text style="display: block; text-align: left; margin-bottom: 8px; margin-left: 8px;">请选择介入方式：</el-text>
              <el-radio-group v-if="showInterventionOptions" v-model="selectedIntervention" @change="generateProbabilities" style="padding-left: 8px;">
                <el-radio label="surgery" size="small">外科手术</el-radio>
                <el-radio label="drug" size="small">药物治疗</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row type="flex" justify="space-between" align="middle" class="layer layer3">
            <el-col :span="12">
              <div class="progress-container">
                <el-progress v-if="selectedIntervention === 'drug'" :percentage="drugInterventionResult"  :stroke-width="16" style="width:100%"></el-progress>
                <el-progress v-if="selectedIntervention === 'surgery'" :percentage="surgeryInterventionResult"  :stroke-width="16" style="width:100%"></el-progress>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="button-container" style="text-align: right;">
                <el-button v-if="selectedIntervention === 'drug'" type="primary" @click="applyDrugIntervention">查看药物干预风险</el-button>
                <el-button v-if="selectedIntervention === 'surgery'" type="primary" @click="applySurgeryIntervention">查看手术干预风险</el-button>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start" align="middle" class="layer layer3.5">
            <el-col :span="24">
              <el-text style="display: block; text-align: left; margin-bottom: 8px; margin-left: 8px;">关键风险因素</el-text>
              <ul v-if="selectedIntervention === 'drug' && showDrugRelatedAttributes">
                <li v-for="attr in drugRelatedAttributes" :key="attr.label" :style="{ color: attr.color, fontSize: '13px'  }">{{ attr.label || '暂无关键风险因素' }}</li>
              </ul>
              <ul v-if="selectedIntervention === 'surgery' && showSurgeryRelatedAttributes">
                <li v-for="attr in surgeryRelatedAttributes" :key="attr.label" :style="{ color: attr.color, fontSize: '13px' }">{{ attr.label || '暂无关键风险因素' }}</li>
              </ul>
            </el-col>
          </el-row>
        </el-card>
      </el-container>
    </el-dialog>
  </div>
</template>

<style scoped>
.layer {
  margin-bottom: 16px; /* 为每一层添加一些底部外边距 */
}

.progress-container, .button-container {
  display: flex;
  justify-content: space-between; /* 确保元素两端对齐 */
  align-items: center;
  padding: 0 8px; /* 添加左右边距 */
}

.layer2 .el-radio-group {
  display: flex; /* 使单选按钮组块级显示，以实现整体左对齐 */
  justify-content: flex-start; /* 左对齐 */
  padding: 0 8px; /* 添加左右边距 */
}

.layer3 .progress-container, .layer3 .button-container {
  padding: 0 8px; /* 添加左右边距 */
}
.box-card {
  margin-bottom: 16px;
}
</style>


<script>
import {computed, onMounted, ref} from 'vue';
import {getMacePredict} from "@/utils/api";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";
import {postPrediction} from "@/utils/apipy";
import {left, right} from "core-js/internals/array-reduce";

export default {
  name: "MacePredict",
  methods: {right, left},
  setup() {
    const patients = ref([]);
    const currentPage = ref(1);
    const pageSize = ref(30);
    const detailsDialogVisible = ref(false);
    const selectedPatient = ref({});
    //干预效果部分
    const showInterventionOptions = ref(false); // 控制选项显示的标志位
    const selectedIntervention = ref(null); // 选中的干预类型
    const drugProbability = ref(0); // 药物治疗概率
    const surgeryProbability = ref(0); // 外科手术概率
    const drugInterventionResult = ref(0); // 药物干预结果
    const surgeryInterventionResult = ref(0); // 手术干预结果


    // 获取患者数据
    const fetchPatientsData = async () => {
      try {
        const manageDoctors = 1001;
        const response = await getMacePredict(manageDoctors);
        // 患者进行排序
        const sortedUsers = response.sort((a, b) => {
          return new Date(b.timeOfAdmission) - new Date(a.timeOfAdmission); // 降序
        });
        patients.value = response;
        // 为每个患者计算完成度
        patients.value = sortedUsers.map(patient => {
          patient.completion = calculateCompletion(patient.attribute);
          return patient;
        });
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    onMounted(() => {
      fetchPatientsData();
    });
    // 计算完成度的函数
    const calculateCompletion = (attribute) => {
      if (!attribute) return '0/0';  // 处理空属性的情况

      const attributes = JSON.parse(attribute);
      const totalAttributes = Object.keys(attributes).length;
      const filledAttributes = Object.values(attributes).filter(value => value !== "" && value !== null).length;

      return `${filledAttributes}/${totalAttributes}`;
    };

    const displayedPatients = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize.value;
      return patients.value.slice(startIndex, startIndex + pageSize.value);
    });

    const totalCount = computed(() => patients.value.length);
    const totalPages = computed(() => Math.ceil(patients.value.length / pageSize.value));

    const onChangePage = (newPage) => {
      currentPage.value = newPage;
    };

    const onChangePageSize = (newSize) => {
      pageSize.value = newSize;
      currentPage.value = 1;
    };

    const viewDetails = (patient) => {
      console.log("patient", patient);
      drugInterventionResult.value = 0;
      surgeryInterventionResult.value = 0;
      probability.value = 0;
      selectedPatient.value = patient;
      detailsDialogVisible.value = true;
      selectedIntervention.value = null; // 如果您希望每次打开详情时都没有预选的干预选项
      showInterventionOptions.value = false; // 根据您的逻辑决定是否需要
      // 重置显示控制变量
      showAttributesList.value = false;
      showInterventionResults.value = false;

      // 其他逻辑保持不变
      drugInterventionResult.value = 0;
      surgeryInterventionResult.value = 0;
      selectedPatient.value = patient;
      detailsDialogVisible.value = true;
      selectedIntervention.value = null;
    };

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

    const {windowHeight} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight.value - 200;
    });
    //查看患者详情
    const parsedAttributes = computed(() => {
      if (!selectedPatient.value.attribute) return {};
      try {
        return JSON.parse(selectedPatient.value.attribute);
      } catch (error) {
        console.error('Error parsing attribute:', error);
        return {};
      }
    });
    //详情对映的名字

    const attributeMappings = {
      age: '年龄',
      sex: '性别',
      n1: '糖尿病',
      n7: '高血压病',
      n12: '脑血管病史',
      n17: '外周血管疾病',
      n18: '血脂异常',
      n20: '冠心病史',
      n32: '是否心衰病史',
      n39: 'CKD病史',
      n40: '消化道溃疡病史',
      n42: '风湿系统疾病',
      n51: '血液系统疾病',
      n52: '乙肝病史',
      n53: '吸烟史',
      n57: '月经史',
      n751: '到院10分钟内完成心电图',
      n92: '精神状态改变',
      n93: '皮肤湿冷',
      n94: '少尿',
      n200: '前间壁',
      n201: '前壁',
      n202: '广前',
      n203: '下壁',
      n204: '后壁',
      n205: '右室',
      n206: '高侧壁',
      n99: '合并感染',
      n149: '室壁节段性运动异常',
      n159: '室壁瘤',
      n160: '附壁血栓',
      n98: 'killip分级',
      n54: '吸烟指数',
      c6: '左室舒末径',
      lvef: '左室射血分数',
      n63: '首次医疗接触时间',
    };


    const formattedAttributes = computed(() => {
      if (!selectedPatient.value.attribute) return [];
      try {
        const attributes = JSON.parse(selectedPatient.value.attribute);
        return Object.keys(attributeMappings).map(key => {
          let value = attributes[key];
          if (['n98', 'n54', 'c6', 'lvef', 'n63', 'age'].includes(key)) {
            // 直接显示数值
            value = value || '暂无数据';  // 如果值是 null 或 undefined，则显示 'N/A'
          } else if (key === 'n57') {
            value = value === '0' ? '男性' : value === '1' ? '绝经' : value === '2' ? '未绝经' : '暂无数据';
          } else if (key === 'n18') {
            value = (value === '0' || !value) ? '无' : '有';
          } else if (key === 'sex') {
            value = value === '1' ? '男性' : value === '2' ? '女性' : '暂无数据';
          } else {
            value = (value === '0' || !value) ? '无' : value === '1' ? '有' : '暂无数据';
          }
          return {
            label: attributeMappings[key],
            value: value
          };
        });
      } catch (error) {
        console.error('Error parsing attribute:', error);
        return [];
      }
    });
    //提交属性至python
    const printAttributeAsJson = async () => {
      showInterventionOptions.value = true;
      if (!selectedPatient.value.attribute) return;
      try {
        const attributes = JSON.parse(selectedPatient.value.attribute);
        const keyMappings = {
          c6: 'n383',
          n1: 'n5',
          n7: 'n6',
          n12: 'n7',
          n17: 'n8',
          n18: 'n9',
          n20: 'n10',
          n32: 'n12',
          n39: 'n14',
          n40: 'n15',
          n42: 'n16',
          n51: 'n17',
          n52: 'n18',
          n53: 'n19',
          n54: 'n20',
          n57: 'n21',
          n63: 'n26',
          n92: 'n46',
          n93: 'n47',
          n94: 'n48',
          n98: 'n50',
          n99: 'n58',
          sex: 'sex',
          lvef: 'n389',
          n149: 'n402',
          n159: 'n412',
          n160: 'n413',
          n200: 'n51',
          n201: 'n52',
          n202: 'n53',
          n203: 'n54',
          n204: 'n55',
          n205: 'n56',
          n206: 'n57',
          n751: 'n35',
          age: 'age',
        };

        // Create a new object to store the formatted attributes
        const formattedAttributes = {};

        Object.keys(attributes).forEach(oldKey => {
          const newKey = keyMappings[oldKey] || oldKey;  // Get the new key from the mappings, or use the old key if there isn't a mapping
          if (['n98', 'n54', 'c6', 'lvef', 'n63', 'age'].includes(oldKey)) {
            // Directly show the values
            formattedAttributes[newKey] = attributes[oldKey] || '暂无数据';  // If the value is null or undefined, display '暂无数据'
          } else if (oldKey === 'n57') {
            formattedAttributes[newKey] = attributes[oldKey] === '0' ? 'MALE' : attributes[oldKey] === '1' ? 'MENOPAUSE' : attributes[oldKey] === '2' ? 'NOT MENOPAUSE' : 'NO';
          } else if (oldKey === 'n18' ) {
            formattedAttributes[newKey] = (attributes[oldKey] === '0' || !attributes[oldKey]) ? 'NO' : attributes[oldKey] === '1' ? 'YES' : 'NO';
          } else if (oldKey === 'sex') {
            formattedAttributes[newKey] = attributes[oldKey] === '1' ? 'MALE' : attributes[oldKey] === '2' ? 'FEMALE' : '暂无数据';
          } else {
            formattedAttributes[newKey] = (attributes[oldKey] === '0' || !attributes[oldKey]) ? 'NO' : attributes[oldKey] === '1' ? 'YES' : 'NO';
          }
        });

        // Process "暂无数据" cases
        const specialKeys = ['n50', 'n20', 'n383', 'n389', 'n26', 'age'];
        Object.keys(formattedAttributes).forEach(key => {
          if (formattedAttributes[key] === '暂无数据') {
            formattedAttributes[key] = specialKeys.includes(key) ? '0' : 'NO';
          }
        });

        console.log(JSON.stringify(formattedAttributes, null, 2));  // Print the formatted attributes to the console
        // 发送数据到 API
        const requestData = [formattedAttributes];
        const response = await postPrediction(requestData);
        console.log('API Response:', response.probabilities);  // Optionally print the API response to the console
        probability.value = response.probabilities[0];
      } catch (error) {
        console.error('Error formatting attribute:', error);
      }

    };
    //结果计算
    const probability = ref(0);  // 定义响应式数据

    // const probabilityPercentage = computed(() => {
    //   return Math.log10(parseFloat((probability.value * 100).toFixed(2)) + 1) * 100;
    //   // return parseFloat((probability.value * 100).toFixed(2));  // 将概率值转换为百分比
    // });
    const probabilityPercentage = computed(() => {
      // 将概率值转换为百分比
      const percentage = parseFloat((probability.value * 100).toFixed(2));

      // 使用对数函数进行放大，这里以10为底
      let amplifiedPercentage = Math.log10(percentage + 1) * 100;

      // 使用线性函数限制最大值
      amplifiedPercentage = Math.min(amplifiedPercentage, 100);

      return amplifiedPercentage;
    });
    const progressColor = computed(() => {
      const green = Math.floor(255 - probability.value * 255);
      const red = Math.floor(probability.value * 255);
      return `rgb(${red}, ${green}, 0)`;
    });

    function generateProbabilities() {
      const maxProbability = parseFloat(probabilityPercentage.value);
      const maxDifference = maxProbability * 0.8;
      const baseMin = maxProbability - maxDifference;

      // 生成初始随机概率
      let randomSurgeryProbability = Math.random() * maxDifference + baseMin;
      let randomDrugProbability = Math.random() * maxDifference + baseMin;

      // 根据选中的干预类型调整概率
      const drugConditions = ['是否心衰病史','CKD病史','消化道溃疡病史','风湿系统疾病','血液系统疾病'];
      const surgeryConditions = ['糖尿病','外周血管疾病','脑血管病史','冠心病史','室壁节段性运动异常','室壁瘤','附壁血栓'];
      const conditionsForDrug = drugConditions.some(condition => formattedAttributes.value.some(attr => attr.value === '有' && attr.label === condition));
      console.log('123',formattedAttributes.value)
      console.log('conditionsForDrug', conditionsForDrug);
      const conditionsForSurgery = surgeryConditions.some(condition => formattedAttributes.value.some(attr => attr.value === '有' && attr.label === condition));
      console.log('conditionsForSurgery', conditionsForSurgery);
      if (conditionsForDrug && selectedIntervention.value === 'drug') {
        randomDrugProbability = Math.min(randomDrugProbability + (maxDifference * 0.1), maxProbability);
      }

      if (conditionsForSurgery && selectedIntervention.value === 'surgery') {
        randomSurgeryProbability = Math.min(randomSurgeryProbability + (maxDifference * 0.1), maxProbability);
      }

      // 更新干预结果的概率
      surgeryProbability.value = parseFloat(randomSurgeryProbability.toFixed(2));
      drugProbability.value = parseFloat(randomDrugProbability.toFixed(2));
    }

    function applyDrugIntervention() {
      const newProbability = Math.max(0, probabilityPercentage.value / 100 - (drugProbability.value / 100));
      drugInterventionResult.value = (newProbability * 100).toFixed(2);
      showDrugRelatedAttributes.value = false;
      showSurgeryRelatedAttributes.value = false;
      showInterventionResults.value = false; // 重置结果显示状态
      setTimeout(() => {
        if (selectedIntervention.value === 'drug') {
          showDrugRelatedAttributes.value = true;
        }
      }, 1000);
    }

    function applySurgeryIntervention() {
      const newProbability = Math.max(0, probabilityPercentage.value / 100 - (surgeryProbability.value / 100));
      surgeryInterventionResult.value = (newProbability * 100).toFixed(2);
      showInterventionResults.value = false; // 重置结果显示状态
      showDrugRelatedAttributes.value = false;
      showSurgeryRelatedAttributes.value = false;
      setTimeout(() => {
        if (selectedIntervention.value === 'surgery') {
          showSurgeryRelatedAttributes.value = true;
        }
      }, 1000);
    }
    // function applyDrugIntervention() {
    //   const newProbability = Math.max(0, probability.value - (drugProbability.value / 100));
    //   drugInterventionResult.value = (newProbability * 100).toFixed(2);
    //   showDrugRelatedAttributes.value = false;
    //   showSurgeryRelatedAttributes.value = false;
    //   showInterventionResults.value = false; // 重置结果显示状态
    //   setTimeout(() => {
    //     if (selectedIntervention.value === 'drug') {
    //       showDrugRelatedAttributes.value = true;
    //     }
    //   }, 1000);
    // }
    //
    // function applySurgeryIntervention() {
    //   const newProbability = Math.max(0, probability.value - (surgeryProbability.value / 100));
    //   surgeryInterventionResult.value = (newProbability * 100).toFixed(2);
    //   showInterventionResults.value = false; // 重置结果显示状态
    //   showDrugRelatedAttributes.value = false;
    //   showSurgeryRelatedAttributes.value = false;
    //   setTimeout(() => {
    //     if (selectedIntervention.value === 'surgery') {
    //       showSurgeryRelatedAttributes.value = true;
    //     }
    //   }, 1000);
    // }
    const progressColorBasedOnResult = (result) => {
      const value = parseFloat(result) / 100;
      const green = Math.floor(255 - value * 255);
      const red = Math.floor(value * 255);
      return `rgb(${red}, ${green}, 0)`;
    };

    const gradientColor = (index, total) => {
      const red = 255;
      const green = Math.round(165 * (index / total)); // 从0渐变到165
      const blue = 0;
      return `rgb(${red}, ${green}, ${blue})`;
    };

    const drugConditions = ['是否心衰病史','CKD病史','消化道溃疡病史','风湿系统疾病','血液系统疾病'];
    const surgeryConditions = ['糖尿病','外周血管疾病','脑血管病史','冠心病史','室壁节段性运动异常','室壁瘤','附壁血栓'];

    const drugRelatedAttributes = computed(() => {
      let list = drugConditions.map((condition, index) => {
        const attr = formattedAttributes.value.find(attr => attr.label === condition && attr.value === '有');
        if (attr) {
          return {
            ...attr,
            color: gradientColor(index, drugConditions.length)
          };
        }
        return null;
      }).filter(attr => attr !== null);

      // 如果列表为空，则添加表示空消息的对象
      if (list.length === 0) {
        list = [{ label: '暂无关键风险因素', color: '#044cdc' }];
      }

      return list;
    });

    const surgeryRelatedAttributes = computed(() => {
      let list = surgeryConditions.map((condition, index) => {
        const attr = formattedAttributes.value.find(attr => attr.label === condition && attr.value === '有');
        if (attr) {
          return {
            ...attr,
            color: gradientColor(index, surgeryConditions.length)
          };
        }
        return null;
      }).filter(attr => attr !== null);

      // 如果列表为空，则添加表示空消息的对象
      if (list.length === 0) {
        list = [{ label: '暂无关键风险因素', color: '#044cdc' }];
      }

      return list;
    });
    //延迟显示
    const showAttributesList = ref(false); // 默认不显示属性列表
    const showInterventionResults = ref(false); // 默认不显示干预结果
    const showDrugRelatedAttributes = ref(false);
    const showSurgeryRelatedAttributes = ref(false);



    return {
      displayedPatients,
      currentPage,
      pageSize,
      onChangePage,
      onChangePageSize,
      viewDetails,
      printAttributeAsJson,
      calculateCompletion,
      detailsDialogVisible,
      formattedAttributes,
      parsedAttributes,
      selectedPatient,
      paginationI18n,
      totalCount,
      totalPages,
      tableHeight,
      probabilityPercentage,
      progressColor,
      generateProbabilities,
      applyDrugIntervention,
      applySurgeryIntervention,
      selectedIntervention,
      drugProbability,
      surgeryProbability,
      showInterventionOptions,
      drugInterventionResult,
      surgeryInterventionResult,
      progressColorBasedOnResult,
      drugRelatedAttributes,
      surgeryRelatedAttributes,
      gradientColor,
      showAttributesList,
      showInterventionResults,
      showDrugRelatedAttributes,
      showSurgeryRelatedAttributes,
    };
  },
};
</script>


