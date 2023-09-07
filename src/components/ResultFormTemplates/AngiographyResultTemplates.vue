<template>
  <el-scrollbar class="scroll-container" :height="tableHeight">
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="基础信息">
      <el-descriptions-item label="身高">
        {{ attributeData.h }} cm
      </el-descriptions-item>
      <el-descriptions-item label="体重">
        {{ attributeData.w }} Kg
      </el-descriptions-item>
      <el-descriptions-item label="文化水平">
        {{
          attributeData.c === '1' ? '文盲' :
              attributeData.c === '2' ? '小学/初中' :
                  attributeData.c === '3' ? '高中及以上' :
                      ''
        }}
      </el-descriptions-item>
      <el-descriptions-item label="入院血流动力学评估" :span="3">
        <el-descriptions>
          <el-descriptions-item label="首次心率">
            {{ attributeData.hr1 }} 次/分
          </el-descriptions-item>
          <el-descriptions-item label="首次收缩压">
            {{ attributeData.sp1 }} mmHg
          </el-descriptions-item>
          <el-descriptions-item label="首次舒张压">
            {{ attributeData.dp1 }} mmHg
          </el-descriptions-item>
          <el-descriptions-item label="首次氧饱和度">
            {{ attributeData.spo21 }} %
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="出院时生命体征" :span="3">
        <el-descriptions>
          <el-descriptions-item label="心率">
            {{ attributeData.hr2 }} 次/分
          </el-descriptions-item>
          <el-descriptions-item label="收缩压">
            {{ attributeData.sp2 }} mmHg
          </el-descriptions-item>
          <el-descriptions-item label="舒张压">
            {{ attributeData.dp2 }} mmHg
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="入院途径">
      <el-descriptions-item label="我院就诊？">{{ attributeData.r2 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.r2 === '1'">
        <el-descriptions-item label="我院急诊">{{ attributeData.r21 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="我院门诊">{{ attributeData.r22 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="其他科室">{{ attributeData.r23 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>

      <el-descriptions-item label="外院转诊？">{{ attributeData.r3 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.r3 === '1'">
        <el-descriptions-item label="省内？">{{ attributeData.r31 === '1' ? '是' : '否' }}</el-descriptions-item>
        <div v-if="attributeData.r31 === '1'">
          <el-descriptions-item label="银川市（三区两县）">{{
              attributeData.r311 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="石嘴山市">{{ attributeData.r312 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="吴忠市">{{ attributeData.r313 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="中卫市">{{ attributeData.r314 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="固原市">{{ attributeData.r315 === '1' ? '是' : '否' }}</el-descriptions-item>
        </div>
        <el-descriptions-item label="省外？">{{ attributeData.r32 === '1' ? '是' : '否' }}</el-descriptions-item>
        <div v-if="attributeData.r32 === '1'">
          <el-descriptions-item label="陕西省">{{ attributeData.r321 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="内蒙古">{{ attributeData.r322 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="甘肃省">{{ attributeData.r323 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="其他">{{ attributeData.r324 === '1' ? '是' : '否' }}</el-descriptions-item>
        </div>

        <el-descriptions-item label="我院首急诊">{{ attributeData.r331 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="我院首门诊">{{ attributeData.r332 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="我院首导管室">{{ attributeData.r333 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="我院首其他科室">{{
            attributeData.r334 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>


      </div>
    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="手术信息">
      <el-descriptions-item label="是否手术？">{{ attributeData.operate === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="手术日期">{{ attributeData.date2 }}</el-descriptions-item>
      <el-descriptions-item label="术者">
        <el-descriptions>
          <el-descriptions-item label="贾绍斌">{{ attributeData.n1 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="魏宁">{{ attributeData.n2 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="陈大鹏">{{ attributeData.n3 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="黄晖">{{ attributeData.n4 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="杨生平">{{ attributeData.n5 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="王义勇">{{ attributeData.n6 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="张政军">{{ attributeData.n7 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="李礼">{{ attributeData.n8 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="郝钰">{{ attributeData.n9 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="武海亮">{{ attributeData.n10 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="方永鹏">{{ attributeData.n11 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="杨绍兵">{{ attributeData.n12 === '1' ? '是' : '否' }}</el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>

      <el-descriptions-item label="急诊手术">{{ attributeData.q1 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item v-if="attributeData.q1 === '1'" label="D-B时间">{{ attributeData.q11 }} 分钟
      </el-descriptions-item>
      <el-descriptions-item label="手术时长">{{ attributeData.q2 }} 分钟</el-descriptions-item>
      <el-descriptions-item label="对比剂使用计量">{{ attributeData.q3 }} ml</el-descriptions-item>
      <el-descriptions-item label="肝素使用计量">{{ attributeData.q4 }} u</el-descriptions-item>
    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="冠脉基本特征">
      <el-descriptions-item label="穿刺血管途径" :span="3">
        <el-descriptions>
          <el-descriptions-item label="右桡动脉">{{ attributeData.q51 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="右股动脉">{{ attributeData.q52 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="左桡动脉">{{ attributeData.q53 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="左股动脉">{{ attributeData.q54 === '1' ? '是' : '否' }}</el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="冠脉优势型" :span="3">
        <el-descriptions>
          <el-descriptions-item label="左优势型">{{ attributeData.q61 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="右优势型">{{ attributeData.q62 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="均衡型">{{ attributeData.q63 === '1' ? '是' : '否' }}</el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="血管病变定位及狭窄程度" :span="3">
        <el-descriptions>
          <el-descriptions-item label="左主干" :span="attributeData.q71 === '1' ? 2 : 3">
            {{ attributeData.q71 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="左主干狭窄程度" :span="1" v-if="attributeData.q71 === '1'">
            {{ attributeData.n0 }}
          </el-descriptions-item>
          <el-descriptions-item label="前降支近段" :span="attributeData.q72 === '1' ? 2 : 3">
            {{ attributeData.q72 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="前降支近段狭窄程度" :span="1" v-if="attributeData.q72 === '1'">
            {{ attributeData.n13 }}
          </el-descriptions-item>
          <el-descriptions-item label="前降支中段" :span="attributeData.q73 === '1' ? 2 : 3">
            {{ attributeData.q73 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="前降支中段狭窄程度" :span="1" v-if="attributeData.q73 === '1'">
            {{ attributeData.n14 }}
          </el-descriptions-item>
          <el-descriptions-item label="前降支远段" :span="attributeData.q74 === '1' ? 2 : 3">
            {{ attributeData.q74 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="前降支远段狭窄程度" :span="1" v-if="attributeData.q74 === '1'">
            {{ attributeData.n15 }}
          </el-descriptions-item>
          <el-descriptions-item label="第一对角支" :span="attributeData.q75 === '1' ? 2 : 3">
            {{ attributeData.q75 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="第一对角支狭窄程度" :span="1" v-if="attributeData.q75 === '1'">
            {{ attributeData.n16 }}
          </el-descriptions-item>
          <el-descriptions-item label="第二对角支" :span="attributeData.q76 === '1' ? 2 : 3">
            {{ attributeData.q76 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="第二对角支狭窄程度" :span="1" v-if="attributeData.q76 === '1'">
            {{ attributeData.n17 }}
          </el-descriptions-item>
          <el-descriptions-item label="第三对角支" :span="attributeData.q77 === '1' ? 2 : 3">
            {{ attributeData.q77 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="第三对角支狭窄程度" :span="1" v-if="attributeData.q77 === '1'">
            {{ attributeData.n18 }}
          </el-descriptions-item>
          <el-descriptions-item label="中间支近段" :span="attributeData.q78 === '1' ? 2 : 3">
            {{ attributeData.q78 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="中间支近段狭窄程度" :span="1" v-if="attributeData.q78 === '1'">
            {{ attributeData.n19 }}
          </el-descriptions-item>
          <el-descriptions-item label="中间支中段" :span="attributeData.q79 === '1' ? 2 : 3">
            {{ attributeData.q79 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="中间支中段狭窄程度" :span="1" v-if="attributeData.q79 === '1'">
            {{ attributeData.n20 }}
          </el-descriptions-item>
          <el-descriptions-item label="中间支远段" :span="attributeData.q710 === '1' ? 2 : 3">
            {{ attributeData.q710 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="中间支远段狭窄程度" :span="1" v-if="attributeData.q710 === '1'">
            {{ attributeData.n21 }}
          </el-descriptions-item>
          <el-descriptions-item label="回旋支近段" :span="attributeData.q711 === '1' ? 2 : 3">
            {{ attributeData.q711 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="回旋支近段狭窄程度" :span="1" v-if="attributeData.q711 === '1'">
            {{ attributeData.n22 }}
          </el-descriptions-item>
          <el-descriptions-item label="回旋支远段" :span="attributeData.q712 === '1' ? 2 : 3">
            {{ attributeData.q712 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="回旋支远段狭窄程度" :span="1" v-if="attributeData.q712 === '1'">
            {{ attributeData.n23 }}
          </el-descriptions-item>
          <el-descriptions-item label="第一钝缘支" :span="attributeData.q713 === '1' ? 2 : 3">
            {{ attributeData.q713 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="第一钝缘支狭窄程度" :span="1" v-if="attributeData.q713 === '1'">
            {{ attributeData.n24 }}
          </el-descriptions-item>
          <el-descriptions-item label="第二钝缘支" :span="attributeData.q714 === '1' ? 2 : 3">
            {{ attributeData.q714 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="第二钝缘支狭窄程度" :span="1" v-if="attributeData.q714 === '1'">
            {{ attributeData.n25 }}
          </el-descriptions-item>
          <el-descriptions-item label="第三钝缘支" :span="attributeData.q715 === '1' ? 2 : 3">
            {{ attributeData.q715 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="第三钝缘支狭窄程度" :span="1" v-if="attributeData.q715 === '1'">
            {{ attributeData.n26 }}
          </el-descriptions-item>

          <el-descriptions-item label="右冠近段" :span="attributeData.q716 === '1' ? 2 : 3">
            {{ attributeData.q716 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠近段狭窄程度" :span="1" v-if="attributeData.q716 === '1'">
            {{ attributeData.n27 }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠中段" :span="attributeData.q717 === '1' ? 2 : 3">
            {{ attributeData.q717 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠中段狭窄程度" :span="1" v-if="attributeData.q717 === '1'">
            {{ attributeData.n28 }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠远段" :span="attributeData.q718 === '1' ? 2 : 3">
            {{ attributeData.q718 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠远段狭窄程度" :span="1" v-if="attributeData.q718 === '1'">
            {{ attributeData.n29 }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠后降支" :span="attributeData.q719 === '1' ? 2 : 3">
            {{ attributeData.q719 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠后降支狭窄程度" :span="1" v-if="attributeData.q719 === '1'">
            {{ attributeData.n30 }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠后侧支" :span="attributeData.q720 === '1' ? 2 : 3">
            {{ attributeData.q720 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠后侧支狭窄程度" :span="1" v-if="attributeData.q720 === '1'">
            {{ attributeData.n31 }}
          </el-descriptions-item>
          <el-descriptions-item label="桥血管病变" :span="attributeData.q721 === '1' ? 2 : 3">
            {{ attributeData.q721 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="桥血管病变狭窄程度" :span="1" v-if="attributeData.q721 === '1'">
            {{ attributeData.n32 }}
          </el-descriptions-item>
          <el-descriptions-item label="支架内狭窄" :span="attributeData.q722 ==='0' ? 2 : 3">
            {{ attributeData.q722 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="支架内狭窄程度" :span="1" v-if="attributeData.q722 === '1'">
            {{ attributeData.n33 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="罪犯血管特征">
      <el-descriptions-item label="梗死相关动脉（IRA）及狭窄程度" :span="3">
        <el-descriptions>
          <el-descriptions-item label="左主干" :span="attributeData.q81 === '1' ? 2 : 3">
            {{ attributeData.q81 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="左主干狭窄程度" :span="1" v-if="attributeData.q81 === '1'">
            {{ attributeData.n34 }}
          </el-descriptions-item>
          <el-descriptions-item label="前降支" :span="attributeData.q82 === '1' ? 2 : 3">
            {{ attributeData.q82 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="前降支狭窄程度" :span="1" v-if="attributeData.q82 === '1'">
            {{ attributeData.n35 }}
          </el-descriptions-item>
          <el-descriptions-item label="回旋支" :span="attributeData.q83 === '1' ? 2 : 3">
            {{ attributeData.q83 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="回旋支狭窄程度" :span="1" v-if="attributeData.q83 === '1'">
            {{ attributeData.n36 }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠脉" :span="attributeData.q84 === '1' ? 2 : 3">
            {{ attributeData.q84 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="右冠脉狭窄程度" :span="1" v-if="attributeData.q84 === '1'">
            {{ attributeData.n37 }}
          </el-descriptions-item>
          <el-descriptions-item label="桥血管" :span="attributeData.q85 === '1' ? 2 : 3">
            {{ attributeData.q85 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="桥血管狭窄程度" :span="1" v-if="attributeData.q85 === '1'">
            {{ attributeData.n38 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>


      <el-descriptions-item label="IRA病变长度">
        {{ attributeData.q9 }} mm
      </el-descriptions-item>
      <el-descriptions-item label="是否慢性全闭塞？">
        {{ attributeData.q10 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="罪犯血管介入前TIMI血流分级是？">
        {{ attributeData.q11 }} 级
      </el-descriptions-item>
      <el-descriptions-item label="罪犯血管介入后TIMI血流分级是？">
        {{ attributeData.q12 }} 级
      </el-descriptions-item>
      <el-descriptions-item label="分叉病变？">
        {{ attributeData.q13 === '1' ? '是' : '否' }}
      </el-descriptions-item>

      <el-descriptions-item label="钙化病变？">
        {{ attributeData.q14 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="开口病变？">
        {{ attributeData.q15 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="小血管病变？">
        {{ attributeData.q16 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="长病变？">
        {{ attributeData.q17 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="血栓抽吸？">
        {{ attributeData.q18 === '1' ? '是' : '否' }}
      </el-descriptions-item>


    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="罪犯血管介入过程">
      <el-descriptions-item label="罪犯血管是否行介入治疗？" :span="2">
        {{['未行手术治疗', '急诊手术', '院内择期手术'][attributeData.q19] }}
      </el-descriptions-item>
      <el-descriptions-item label="罪犯血管植入支架个数" :span="1">
        {{ attributeData.q20 }} 个
      </el-descriptions-item>
      <el-descriptions-item label="置入支架1" :span="3" v-if=" attributeData.q20 !== 0">
        <el-descriptions>
          <el-descriptions-item label="置入支架1种类？">
            {{
              attributeData.q2011 === '1' ? 'BMS' :
                  attributeData.q2011 === '2' ? '1st DES' :
                      attributeData.q2011 === '3' ? '2nd DES' :
                          attributeData.q2011 === '4' ? 'PTCA' :
                              'BAS'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="支架1长度">
            {{ attributeData.q2012 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1直径">
            {{ attributeData.q2013 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1商品名">
            {{ attributeData.q2014 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="置入支架2" :span="3" v-if="attributeData.q20 >1">
        <el-descriptions>
          <el-descriptions-item label="置入支架2种类？">
            {{
              attributeData.q2021 === '1' ? 'BMS' :
                  attributeData.q2021 === '2' ? '1st DES' :
                      attributeData.q2021 === '3' ? '2nd DES' :
                          attributeData.q2021 === '4' ? 'PTCA' :
                              'BAS'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="支架2长度">
            {{ attributeData.q2022 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架2直径">
            {{ attributeData.q2023 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架2商品名">
            {{ attributeData.q2024 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="置入支架3" :span="3" v-if="attributeData.q20 > 2">
        <el-descriptions>
          <el-descriptions-item label="置入支架3种类？">
            {{
              attributeData.q2031 === '1' ? 'BMS' :
                  attributeData.q2031 === '2' ? '1st DES' :
                      attributeData.q2031 === '3' ? '2nd DES' :
                          attributeData.q2031 === '4' ? 'PTCA' :
                              'BAS'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="支架3长度">
            {{ attributeData.q2032 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架3直径">
            {{ attributeData.q2033 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架3商品名">
            {{ attributeData.q2034 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="罪犯血管腔内影像学？">
        {{ attributeData.q22 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.q22 === '1'">
        <el-descriptions-item label="ivus">
          {{ attributeData.q211 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="oct">
          {{ attributeData.q212 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="FFR">
          {{ attributeData.q213 === '1' ? '是' : '否' }}
        </el-descriptions-item>
      </div>
    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="非罪犯血管介入过程">
      <el-descriptions-item label="非罪犯血管是否行介入治疗？" :span="2">
        {{
          ['未行手术治疗', '急诊手术', '院内择期手术']
              [attributeData.q23]
        }}
      </el-descriptions-item>
      <el-descriptions-item label="非罪犯血管植入支架个数" :span="1">
        {{ attributeData.q24 }} 个
      </el-descriptions-item>
      <el-descriptions-item label="置入支架1" :span="3" v-if=" attributeData.q24 !== 0">
        <el-descriptions>
          <el-descriptions-item label="具体位置">
            {{
              attributeData.q2311 === '1' ? '左主干' :
                  attributeData.q2311 === '2' ? '左前降' :
                      attributeData.q2311 === '3' ? '左回旋' :
                          attributeData.q2311 === '4' ? '右冠脉' :
                              attributeData.q2311 === '5' ? '桥血管' :
                                  '原支架'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="置入支架1种类？">
            {{
              attributeData.q2312 === '1' ? 'BMS' :
                  attributeData.q2312 === '2' ? '1st DES' :
                      attributeData.q2312 === '3' ? '2nd DES' :
                          attributeData.q2312 === '4' ? 'PTCA' :
                              'BAS'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="支架1长度">
            {{ attributeData.q2313 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1直径">
            {{ attributeData.q2314 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1商品名">
            {{ attributeData.q2315 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="置入支架2" :span="3" v-if="attributeData.q24 >1">
        <el-descriptions>
          <el-descriptions-item label="具体位置">
            {{
              attributeData.q2321 === '1' ? '左主干' :
                  attributeData.q2321 === '2' ? '左前降' :
                      attributeData.q2321 === '3' ? '左回旋' :
                          attributeData.q2321 === '4' ? '右冠脉' :
                              attributeData.q2321 === '5' ? '桥血管' :
                                  '原支架'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="置入支架1种类？">
            {{
              attributeData.q2322 === '1' ? 'BMS' :
                  attributeData.q2322 === '2' ? '1st DES' :
                      attributeData.q2322 === '3' ? '2nd DES' :
                          attributeData.q2322 === '4' ? 'PTCA' :
                              'BAS'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="支架1长度">
            {{ attributeData.q2323 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1直径">
            {{ attributeData.q2324 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1商品名">
            {{ attributeData.q2325 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="置入支架3" :span="3" v-if="attributeData.q24 > 2">
        <el-descriptions>
          <el-descriptions-item label="具体位置">
            {{
              attributeData.q2331 === '1' ? '左主干' :
                  attributeData.q2331 === '2' ? '左前降' :
                      attributeData.q2331 === '3' ? '左回旋' :
                          attributeData.q2331 === '4' ? '右冠脉' :
                              attributeData.q2331 === '5' ? '桥血管' :
                                  '原支架'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="置入支架1种类？">
            {{
              attributeData.q2332 === '1' ? 'BMS' :
                  attributeData.q2332 === '2' ? '1st DES' :
                      attributeData.q2332 === '3' ? '2nd DES' :
                          attributeData.q2332 === '4' ? 'PTCA' :
                              'BAS'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="支架1长度">
            {{ attributeData.q2333 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1直径">
            {{ attributeData.q2334 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1商品名">
            {{ attributeData.q2335 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="置入支架4" :span="3" v-if="attributeData.q24 > 3">
        <el-descriptions>
          <el-descriptions-item label="具体位置">
            {{
              attributeData.q2341 === '1' ? '左主干' :
                  attributeData.q2341 === '2' ? '左前降' :
                      attributeData.q2341 === '3' ? '左回旋' :
                          attributeData.q2341 === '4' ? '右冠脉' :
                              attributeData.q2341 === '5' ? '桥血管' :
                                  '原支架'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="置入支架1种类？">
            {{
              attributeData.q2342 === '1' ? 'BMS' :
                  attributeData.q2342 === '2' ? '1st DES' :
                      attributeData.q2342 === '3' ? '2nd DES' :
                          attributeData.q2342 === '4' ? 'PTCA' :
                              'BAS'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="支架1长度">
            {{ attributeData.q2343 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1直径">
            {{ attributeData.q2344 }} mm
          </el-descriptions-item>
          <el-descriptions-item label="支架1商品名">
            {{ attributeData.q2345 }}
          </el-descriptions-item>
        </el-descriptions>
      </el-descriptions-item>
      <el-descriptions-item label="罪犯血管腔内影像学？">
        {{ attributeData.q25 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.q25 === '1'">
        <el-descriptions-item label="ivus">
          {{ attributeData.q241 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="oct">
          {{ attributeData.q242 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="FFR">
          {{ attributeData.q243 === '1' ? '是' : '否' }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="是否计划2次PCI？">
        {{ attributeData.q26 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="计划时间" v-if="attributeData.q26 === '1'">
        {{ attributeData.q251 }} 月
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="术中辅助治疗">
      <el-descriptions-item label="临时起搏器" :span="2">
        {{ attributeData.q27 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="ECMO" :span="2">
        {{ attributeData.q28 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="IABP" :span="2">
        {{ attributeData.q29 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.q29 === '1'">
        <el-descriptions-item label="植入时机" :span="1">
          {{
            attributeData.q281 === '1' ? '术前' :
                attributeData.q281 === '2' ? '术中' :
                    attributeData.q281 === '3' ? '术后' :
                        ''
          }}
        </el-descriptions-item>
        <el-descriptions-item label="使用时间" :span="2">
          {{ attributeData.q282 }} 天
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="术中使用血管活性药物" :span="2">
        {{ attributeData.q30 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div>
        <el-descriptions-item label="去甲肾上腺素" :span="2">
          {{ attributeData.q291 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="肾上腺素" :span="2">
          {{ attributeData.q292 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="多巴胺" :span="2">
          {{ attributeData.q293 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="多巴酚丁胺" :span="2">
          {{ attributeData.q294 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="阿托品" :span="2">
          {{ attributeData.q295 === '1' ? '是' : '否' }}
        </el-descriptions-item>
      </div>
    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="术中并发症">
      <el-descriptions-item label="术中是否出现并发症？" :span="2">
        {{ attributeData.q31 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.q31 === '1'">
        <el-descriptions-item label="死亡" :span="1">
          {{ attributeData.q301 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="室速" :span="1">
          {{ attributeData.q302 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="室颤" :span="1">
          {{ attributeData.q303 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="心跳骤停" :span="1">
          {{ attributeData.q304 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="缓慢型心律失常" :span="1">
          {{ attributeData.q305 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="心源性休克" :span="1">
          {{ attributeData.q306 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="血管夹层" :span="1">
          {{ attributeData.q307 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="血管穿孔" :span="1">
          {{ attributeData.q308 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="支架内血栓" :span="1">
          {{ attributeData.q309 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="非干预血管急性闭塞" :span="1">
          {{ attributeData.q3010 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="慢血流/无复流" :span="1"> {{
            attributeData.q3011 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <div v-if="attributeData.q3011 === '1'">
          <el-descriptions-item label="术中是否使用药物改善无复流？" :span="2">
            {{ attributeData.q30111 === '1' ? '是' : '否' }}
          </el-descriptions-item>
          <el-descriptions-item label="术中具体使用药物？" :span="2">
            {{
              attributeData.q30112 === '1' ? '替罗非班' :
                  attributeData.q30112 === '2' ? '依替巴肽' :
                      attributeData.q30112 === '3' ? '硝普钠' :
                          attributeData.q30112 === '4' ? '尼可地尔' :
                              attributeData.q30112 === '5' ? '腺苷' :
                                  ''
            }}
          </el-descriptions-item>
          <el-descriptions-item label="具体计量" :span="3">
            {{ attributeData.q30113 }}
          </el-descriptions-item>
        </div>
      </div>
    </el-descriptions>
    <el-descriptions border :column="3" :size="'small'" v-if="attributeData" class="elds" title="出院医嘱">
      <el-descriptions-item label="阿司匹林">
        {{ attributeData.f1 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="替格瑞洛">
        {{ attributeData.f2 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="氯吡格雷">
        {{ attributeData.f3 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="β受体阻滞剂">
        {{ attributeData.f4 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="他汀类药物">
        {{ attributeData.f5 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="ACEI类药物">
        {{ attributeData.f6 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="ARB 类药物">
        {{ attributeData.f7 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="ARNI">
        {{ attributeData.f8 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="螺内酯">
        {{ attributeData.f9 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="抗心律失常药物">
        {{ attributeData.f10 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="新型口服抗凝药物">
        {{ attributeData.f11 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="华法林">
        {{ attributeData.f12 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="二甲双胍">
        {{ attributeData.f13 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="SLG-2抑制剂">
        {{ attributeData.f14 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="ppi">
        {{ attributeData.f15 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="PCSK9">
        {{ attributeData.f16 === '1' ? '是' : '否' }}
      </el-descriptions-item>
    </el-descriptions>
    <div v-else>
      <p>正在加载...</p>
    </div>
  </el-scrollbar>
</template>

<script>
import {angiographyResultAttributeDataStore} from "@/store/resultFormStore";
import {computed, onBeforeMount} from "vue";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";

export default {
  name: "AngiographyResultTemplates",

  setup() {
    const attributeDataStore = angiographyResultAttributeDataStore();
    const attributeData = computed(() => {

      return Object.values(attributeDataStore.data)[0];
    });
    // 在组件加载前重置数据
    onBeforeMount(() => {
      attributeDataStore.resetData();
    });
    //自适应高度
    const {windowHeight70} = useWindowHeightWatcher();
    const tableHeight = computed(() => {
      // 窗口高度 - 表格顶部和底部的边距 - 分页组件高度
      return windowHeight70.value - 250;
    });
    return {
      attributeData,
      tableHeight
    };
  }
}
</script>

<style scoped>
.elds{
  margin-bottom: 10px;
}
</style>
