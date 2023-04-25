<template>
  <el-form :model="form" label-width="180px" label-position="left" :size="'small'">
    <el-form-item label="是否手术？">
      <el-radio-group v-model="form.operate">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.operate === '1'">
      <el-form-item label="手术日期" prop="date2">
        <el-input v-model.number="form.date2" type="number" placeholder="dd/mm/yyyy"></el-input>
      </el-form-item>
      <el-form-item label="手术时间" prop="date3">
        <el-input v-model.number="form.date3" type="number" placeholder="24小时制"></el-input>
      </el-form-item>
      <el-card header="术者" shadow="hover">
        <el-form-item label="贾绍斌">
          <el-radio-group v-model="form.n1">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="魏宁">
          <el-radio-group v-model="form.n2">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="陈大鹏">
          <el-radio-group v-model="form.n3">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="黄晖">
          <el-radio-group v-model="form.n4">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="杨生平">
          <el-radio-group v-model="form.n5">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="王义勇">
          <el-radio-group v-model="form.n6">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="张政军">
          <el-radio-group v-model="form.n7">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="李礼">
          <el-radio-group v-model="form.n8">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="郝钰">
          <el-radio-group v-model="form.n9">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="武海亮">
          <el-radio-group v-model="form.n10">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="方永鹏">
          <el-radio-group v-model="form.n11">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="杨绍兵">
          <el-radio-group v-model="form.n12">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-card>
      <el-form-item label="急症手术？">
        <el-radio-group v-model="form.q1">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.q1 === '1'">
        <el-form-item label="D-B时间" prop="q11">
          <el-input v-model.number="form.q11" type="number" placeholder="分钟"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="手术时长" prop="q2">
        <el-input v-model.number="form.q2" type="number" placeholder="分钟"></el-input>
      </el-form-item>
      <el-form-item label="对比剂使用剂量" prop="q3">
        <el-input v-model.number="form.q3" type="number" placeholder="ml"></el-input>
      </el-form-item>
      <el-form-item label="肝素使用剂量" prop="q4">
        <el-input v-model.number="form.q4" type="number" placeholder="u"></el-input>
      </el-form-item>
      <el-card header="冠脉基本特征" shadow="hover">
        <el-card header="穿刺血管途径" shadow="hover">
          <el-form-item label="右桡动脉">
            <el-radio-group v-model="form.q51">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="右股动脉">
            <el-radio-group v-model="form.q52">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="左桡动脉">
            <el-radio-group v-model="form.q53">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="左股动脉">
            <el-radio-group v-model="form.q54">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-card>
        <el-card header="冠脉优势型" shadow="hover">
          <el-form-item label="左优势型">
            <el-radio-group v-model="form.q61">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="右优势型">
            <el-radio-group v-model="form.q62">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="均衡型">
            <el-radio-group v-model="form.q63">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-card>
        <el-card header="血管病变定位及狭窄程度" shadow="hover">
          <el-form-item label="左主干">
            <el-radio-group v-model="form.q71">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q71 ==='1'">
            <el-form-item label="左主干狭窄程度" prop="n0">
              <el-input v-model.number="form.n0" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="前降支近段">
            <el-radio-group v-model="form.q72">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q72 ==='1'">
            <el-form-item label="左前降支近段狭窄程度" prop="n13">
              <el-input v-model.number="form.n13" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="前降支中段">
            <el-radio-group v-model="form.q73">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q73 ==='1'">
            <el-form-item label="前降支中段狭窄程度" prop="n14">
              <el-input v-model.number="form.n14" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="前降支远段">
            <el-radio-group v-model="form.q74">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q74 ==='1'">
            <el-form-item label="左主干狭窄程度" prop="n15">
              <el-input v-model.number="form.n15" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="第一对角支">
            <el-radio-group v-model="form.q75">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q75 ==='1'">
            <el-form-item label="第一对角支狭窄程度" prop="n16">
              <el-input v-model.number="form.n16" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="第二对角支">
            <el-radio-group v-model="form.q76">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q76 ==='1'">
            <el-form-item label="第二对角支狭窄程度" prop="n17">
              <el-input v-model.number="form.n17" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="第三对角支">
            <el-radio-group v-model="form.q77">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q77 ==='1'">
            <el-form-item label="第三对角支狭窄程度" prop="n18">
              <el-input v-model.number="form.n18" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="中间支近段">
            <el-radio-group v-model="form.q78">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q78 ==='1'">
            <el-form-item label="中间支近段狭窄程度" prop="n19">
              <el-input v-model.number="form.n19" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="中间支中段">
            <el-radio-group v-model="form.q79">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q79 ==='1'">
            <el-form-item label="中间支中段狭窄程度" prop="n20">
              <el-input v-model.number="form.n20" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="中间支远段">
            <el-radio-group v-model="form.q710">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q710 ==='1'">
            <el-form-item label="中间支远段狭窄程度" prop="n21">
              <el-input v-model.number="form.n21" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="回旋支近段">
            <el-radio-group v-model="form.q711">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q711 ==='1'">
            <el-form-item label="回旋支近段狭窄程度" prop="n22">
              <el-input v-model.number="form.n22" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="回旋支远段">
            <el-radio-group v-model="form.q712">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q712 ==='1'">
            <el-form-item label="回旋支远段狭窄程度" prop="n23">
              <el-input v-model.number="form.n23" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="第一钝缘支">
            <el-radio-group v-model="form.q713">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q713 ==='1'">
            <el-form-item label="第一钝缘支狭窄程度" prop="n24">
              <el-input v-model.number="form.n24" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="第二钝缘支">
            <el-radio-group v-model="form.q714">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q714 ==='1'">
            <el-form-item label="第二钝缘支狭窄程度" prop="n25">
              <el-input v-model.number="form.n25" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="第三钝缘支">
            <el-radio-group v-model="form.q715">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q715 ==='1'">
            <el-form-item label="第三钝缘支狭窄程度" prop="n26">
              <el-input v-model.number="form.n26" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="右冠近段">
            <el-radio-group v-model="form.q716">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q716 ==='1'">
            <el-form-item label="右冠近段支狭窄程度" prop="n27">
              <el-input v-model.number="form.n27" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="右冠中段">
            <el-radio-group v-model="form.q17">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q717 ==='1'">
            <el-form-item label="右冠中段狭窄程度" prop="n28">
              <el-input v-model.number="form.n28" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="右冠远段">
            <el-radio-group v-model="form.q718">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q718 ==='1'">
            <el-form-item label="右冠远段狭窄程度" prop="n29">
              <el-input v-model.number="form.n29" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="右冠后降支">
            <el-radio-group v-model="form.q719">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q719 ==='1'">
            <el-form-item label="右冠后降支狭窄程度" prop="n30">
              <el-input v-model.number="form.n30" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="右冠后侧支">
            <el-radio-group v-model="form.q720">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q720 ==='1'">
            <el-form-item label="右冠后侧支狭窄程度" prop="n31">
              <el-input v-model.number="form.n31" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="桥血管病变">
            <el-radio-group v-model="form.q721">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q721 ==='1'">
            <el-form-item label="桥血管病变狭窄程度" prop="n32">
              <el-input v-model.number="form.n32" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="支架内狭窄">
            <el-radio-group v-model="form.q722">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q722 ==='1'">
            <el-form-item label="支架内狭窄狭窄程度" prop="n33">
              <el-input v-model.number="form.n33" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
        </el-card>
      </el-card>
      <el-card header="罪犯血管特征" shadow="hover">
        <el-card header="梗死相关动脉（IRA）及狭窄程度" shadow="hover">
          <el-form-item label="左主干">
            <el-radio-group v-model="form.q81">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q81 ==='1'">
            <el-form-item label="左主干狭窄程度" prop="n34">
              <el-input v-model.number="form.n34" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="前降支">
            <el-radio-group v-model="form.q82">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q82 ==='1'">
            <el-form-item label="前降支狭窄程度" prop="n35">
              <el-input v-model.number="form.n35" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="回旋支">
            <el-radio-group v-model="form.q83">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q84 ==='1'">
            <el-form-item label="回旋支狭窄程度" prop="n36">
              <el-input v-model.number="form.n36" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="右冠脉">
            <el-radio-group v-model="form.q85">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q85 ==='1'">
            <el-form-item label="右冠脉狭窄程度" prop="n37">
              <el-input v-model.number="form.n37" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
          <el-form-item label="桥血管">
            <el-radio-group v-model="form.q86">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q86 ==='1'">
            <el-form-item label="桥血管狭窄程度" prop="n38">
              <el-input v-model.number="form.n38" type="number" placeholder="%"></el-input>
            </el-form-item>
          </div>
        </el-card>
        <el-form-item label="IRA病变长度" prop="q9">
          <el-input v-model.number="form.q9" type="number" placeholder="mm"></el-input>
        </el-form-item>
        <el-form-item label="是否慢性全闭塞？">
          <el-radio-group v-model="form.q10">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="罪犯血管介入前TIMI血流分级是？" prop="q11">
          <el-input v-model.number="form.q12" type="number" placeholder="级"></el-input>
        </el-form-item>
        <el-form-item label="罪犯血管介入后TIMI血流分级是？" prop="q12">
          <el-input v-model.number="form.q13" type="number" placeholder="级"></el-input>
        </el-form-item>
        <el-form-item label="分叉病变？">
          <el-radio-group v-model="form.q14">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="钙化病变？">
          <el-radio-group v-model="form.q15">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="开口病变？">
          <el-radio-group v-model="form.q16">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="小血管病变？">
          <el-radio-group v-model="form.q17">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="长病变？">
          <el-radio-group v-model="form.q18">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="血栓抽吸？">
          <el-radio-group v-model="form.q19">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-card>
      <el-card header="罪犯血管介入过程" shadow="hover">
        <el-form-item label="罪犯血管是否行介入治疗？">
          <el-radio-group v-model="form.q20">
            <el-radio label="0">未行手术治疗</el-radio>
            <el-radio label="1">急诊手术</el-radio>
            <el-radio label="2">院内择期手术</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.q20 !== '0'">
          <el-form-item label="罪犯血管植入支架个数" prop="q21">
            <el-input v-model.number="form.q21" type="number" placeholder="个"></el-input>
          </el-form-item>
          <div v-if="form.q21 === 1">
            <el-form-item label="置入支架1种类？">
              <el-select v-model="form.q2011" placeholder="请选择">
                <el-option label="BMS" value="1"></el-option>
                <el-option label="1st DES" value="2"></el-option>
                <el-option label="2nd DES" value="3"></el-option>
                <el-option label="PTCA" value="4"></el-option>
                <el-option label="BAS" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支架1长度" prop="q2012">
              <el-input v-model.number="form.q2012" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架1直径" prop="q2013">
              <el-input v-model.number="form.q2013" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架1商品名称" prop="q2014">
              <el-input v-model.number="form.q2014"  placeholder="名称"></el-input>
            </el-form-item>
          </div>
          <div v-if="form.q21 >1 ">
            <el-form-item label="置入支架2种类？">
              <el-select v-model="form.q2021" placeholder="请选择">
                <el-option label="BMS" value="1"></el-option>
                <el-option label="1st DES" value="2"></el-option>
                <el-option label="2nd DES" value="3"></el-option>
                <el-option label="PTCA" value="4"></el-option>
                <el-option label="BAS" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支架2长度" prop="q2022">
              <el-input v-model.number="form.q2022" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架2直径" prop="q2023">
              <el-input v-model.number="form.q2023" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架2商品名称" prop="q2024">
              <el-input v-model.number="form.q2024"  placeholder="名称"></el-input>
            </el-form-item>
          </div>
          <div v-if="form.q21 > 2 ">
            <el-form-item label="置入支架3种类？">
              <el-select v-model="form.q2031" placeholder="请选择">
                <el-option label="BMS" value="1"></el-option>
                <el-option label="1st DES" value="2"></el-option>
                <el-option label="2nd DES" value="3"></el-option>
                <el-option label="PTCA" value="4"></el-option>
                <el-option label="BAS" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支架3长度" prop="q2032">
              <el-input v-model.number="form.q2032" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架3直径" prop="q2033">
              <el-input v-model.number="form.q2033" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架3商品名称" prop="q2034">
              <el-input v-model.number="form.q2034"  placeholder="名称"></el-input>
            </el-form-item>
          </div>
        </div>
        <el-form-item label="罪犯血管腔内影像学？">
          <el-radio-group v-model="form.q22">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.q22 ==='1'">
          <el-form-item label="ivus">
            <el-radio-group v-model="form.q211">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="oct">
            <el-radio-group v-model="form.q212">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="FFR">
            <el-radio-group v-model="form.q213">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="非罪犯血管相关介入过程" shadow="hover">
        <el-form-item label="非罪犯血管是否行介入治疗？">
          <el-radio-group v-model="form.q23">
            <el-radio label="0">未行手术治疗</el-radio>
            <el-radio label="1">急诊手术</el-radio>
            <el-radio label="2">院内择期手术</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.q23 !== '0'">
          <el-form-item label="非罪犯血管植入支架个数" prop="q24">
            <el-input v-model.number="form.q24" type="number" placeholder="个"></el-input>
          </el-form-item>
          <div v-if="form.q24 === 1">
            <el-form-item label="具体位置？">
              <el-select v-model="form.q2311" placeholder="请选择">
                <el-option label="左主干" value="1"></el-option>
                <el-option label="左前降" value="2"></el-option>
                <el-option label="左回旋" value="3"></el-option>
                <el-option label="右冠脉" value="4"></el-option>
                <el-option label="桥血管" value="5"></el-option>
                <el-option label="原支架" value="6"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="置入支架1种类？">
              <el-select v-model="form.q2312" placeholder="请选择">
                <el-option label="BMS" value="1"></el-option>
                <el-option label="1st DES" value="2"></el-option>
                <el-option label="2nd DES" value="3"></el-option>
                <el-option label="PTCA" value="4"></el-option>
                <el-option label="BAS" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支架1长度" prop="q2313">
              <el-input v-model.number="form.q2313" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架1直径" prop="q2314">
              <el-input v-model.number="form.q2314" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架1商品名称" prop="q2315">
              <el-input v-model.number="form.q2315"  placeholder="名称"></el-input>
            </el-form-item>
          </div>
          <div v-if="form.q24 > 1">
            <el-form-item label="具体位置？">
              <el-select v-model="form.q2321" placeholder="请选择">
                <el-option label="左主干" value="1"></el-option>
                <el-option label="左前降" value="2"></el-option>
                <el-option label="左回旋" value="3"></el-option>
                <el-option label="右冠脉" value="4"></el-option>
                <el-option label="桥血管" value="5"></el-option>
                <el-option label="原支架" value="6"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="置入支架2种类？">
              <el-select v-model="form.q2322" placeholder="请选择">
                <el-option label="BMS" value="1"></el-option>
                <el-option label="1st DES" value="2"></el-option>
                <el-option label="2nd DES" value="3"></el-option>
                <el-option label="PTCA" value="4"></el-option>
                <el-option label="BAS" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支架2长度" prop="q2323">
              <el-input v-model.number="form.q2323" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架2直径" prop="q2324">
              <el-input v-model.number="form.q2324" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架2商品名称" prop="q2325">
              <el-input v-model.number="form.q2325"  placeholder="名称"></el-input>
            </el-form-item>
          </div>
          <div v-if="form.q24 > 2">
            <el-form-item label="具体位置？">
              <el-select v-model="form.q2331" placeholder="请选择">
                <el-option label="左主干" value="1"></el-option>
                <el-option label="左前降" value="2"></el-option>
                <el-option label="左回旋" value="3"></el-option>
                <el-option label="右冠脉" value="4"></el-option>
                <el-option label="桥血管" value="5"></el-option>
                <el-option label="原支架" value="6"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="置入支架3种类？">
              <el-select v-model="form.q2332" placeholder="请选择">
                <el-option label="BMS" value="1"></el-option>
                <el-option label="1st DES" value="2"></el-option>
                <el-option label="2nd DES" value="3"></el-option>
                <el-option label="PTCA" value="4"></el-option>
                <el-option label="BAS" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支架3长度" prop="q2333">
              <el-input v-model.number="form.q2333" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架3直径" prop="q2334">
              <el-input v-model.number="form.q2334" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架3商品名称" prop="q2335">
              <el-input v-model.number="form.q2335"  placeholder="名称"></el-input>
            </el-form-item>
          </div>
          <div v-if="form.q24 >3">
            <el-form-item label="具体位置？">
              <el-select v-model="form.q2341" placeholder="请选择">
                <el-option label="左主干" value="1"></el-option>
                <el-option label="左前降" value="2"></el-option>
                <el-option label="左回旋" value="3"></el-option>
                <el-option label="右冠脉" value="4"></el-option>
                <el-option label="桥血管" value="5"></el-option>
                <el-option label="原支架" value="6"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="置入支架4种类？">
              <el-select v-model="form.q2342" placeholder="请选择">
                <el-option label="BMS" value="1"></el-option>
                <el-option label="1st DES" value="2"></el-option>
                <el-option label="2nd DES" value="3"></el-option>
                <el-option label="PTCA" value="4"></el-option>
                <el-option label="BAS" value="5"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="支架4长度" prop="q2343">
              <el-input v-model.number="form.q2313" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架4直径" prop="q2344">
              <el-input v-model.number="form.q2314" type="number" placeholder="mm"></el-input>
            </el-form-item>
            <el-form-item label="支架4商品名称" prop="q2345">
              <el-input v-model.number="form.q2315"  placeholder="名称"></el-input>
            </el-form-item>
          </div>
        </div>
        <el-form-item label="非罪犯血管腔内影像学？">
          <el-radio-group v-model="form.q25">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.q25 ==='1'">
          <el-form-item label="ivus">
            <el-radio-group v-model="form.q241">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="oct">
            <el-radio-group v-model="form.q242">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="FFR">
            <el-radio-group v-model="form.q243">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <el-form-item label="是否计划2次PCI？">
          <el-radio-group v-model="form.q26">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.q26 === '1'">
          <el-form-item label="计划月数" prop="q251">
            <el-input v-model.number="form.q251"  placeholder="月"></el-input>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="术中辅助治疗" shadow="hover">
        <el-form-item label="临时起搏器？">
          <el-radio-group v-model="form.q27">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="ECMO？">
          <el-radio-group v-model="form.q28">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="IABP? ">
          <el-radio-group v-model="form.q29">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.q29 === '1'">
          <el-form-item label="植入时机？">
            <el-radio-group v-model="form.q281">
              <el-radio label="1">术前</el-radio>
              <el-radio label="2">术中</el-radio>
              <el-radio label="3">术后</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="使用天数" prop="q282">
            <el-input v-model.number="form.q282" type="number" placeholder="天"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="术中使用血管活性药物？ ">
          <el-radio-group v-model="form.q30">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.q30 === '1'">
          <el-form-item label="去甲肾上腺素？ ">
            <el-radio-group v-model="form.q291">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="肾上腺素？">
            <el-radio-group v-model="form.q292">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="多巴胺？">
            <el-radio-group v-model="form.q293">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="多巴酚丁胺？">
            <el-radio-group v-model="form.q294">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="阿托品？">
            <el-radio-group v-model="form.q295">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-card>
      <el-card header="术中并发症 " shadow="hover">
        <el-form-item label="术中并发症">
          <el-radio-group v-model="form.q31">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.q31 === '1'">
          <el-form-item label="死亡">
            <el-radio-group v-model="form.q301">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="室速">
            <el-radio-group v-model="form.q302">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="室颤">
            <el-radio-group v-model="form.q303">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="心跳骤停">
            <el-radio-group v-model="form.q304">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="缓慢型心律失常">
            <el-radio-group v-model="form.q305">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="心源性休克">
            <el-radio-group v-model="form.q306">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="血管夹层">
            <el-radio-group v-model="form.q307">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="血管穿孔">
            <el-radio-group v-model="form.q308">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="支架内血栓">
            <el-radio-group v-model="form.q309">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="非干预血管急性闭塞">
            <el-radio-group v-model="form.q3010">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="慢血流/无复">
            <el-radio-group v-model="form.q3011">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-if="form.q3011 === '1'">
            <el-form-item label="术中是否使用药物改善无复流？">
              <el-radio-group v-model="form.q30111">
                <el-radio label="0">否</el-radio>
                <el-radio label="1">是</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="术中具体使用药物？">
              <el-radio-group v-model="form.q30112">
                <el-radio label="1">替罗非班</el-radio>
                <el-radio label="2">依替巴肽</el-radio>
                <el-radio label="3">硝普钠</el-radio>
                <el-radio label="4">尼可地尔</el-radio>
                <el-radio label="5">腺苷</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="具体计量" prop="q30113">
              <el-input v-model.number="form.q30113" type="number" ></el-input>
            </el-form-item>
          </div>
        </div>
      </el-card>
    </div>
  </el-form>
</template>

<script>
import {anFormStore} from "@/store/formStore";

export default {
  name: "Operate",
  setup() {
    const form = anFormStore().form;
    return {
      form
    };
  },
}
</script>

<style scoped>

</style>
