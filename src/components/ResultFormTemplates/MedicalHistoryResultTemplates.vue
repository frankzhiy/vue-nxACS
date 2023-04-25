<template>
  <el-scrollbar :height="tableHeight" class="scroll-container">
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="既往病史/用药史">
      <el-descriptions-item :span="3" label="是否具有糖尿病病史？">{{ attributeData.n1 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <div v-if="attributeData.n1 === '1'">
        <el-descriptions-item label="病史">{{ attributeData.h1 }} 年</el-descriptions-item>
        <el-descriptions-item label="是否服用二甲双胍？">{{ attributeData.n2 === '1' ? '有' : '无' }}
        </el-descriptions-item>
        <el-descriptions-item label="是否服用SLG-2抑制剂？">{{
            attributeData.n3 === '1' ? '有' : '无'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否注射GLP-1激动剂？">{{ attributeData.n4 === '1' ? '有' : '无' }}
        </el-descriptions-item>
        <el-descriptions-item label="是否注射胰岛素？">{{
            attributeData.n5 === '1' ? '有' : '无'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="其他降糖药？">{{ attributeData.n6 === '1' ? '有' : '无' }}</el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="是否具有高血压病病史？">{{ attributeData.n7 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <div v-if="attributeData.n7 === '1'">
        <el-descriptions-item label="病史">{{ attributeData.h2 }} 年</el-descriptions-item>
        <el-descriptions-item label="是否服用ACEI/ARB？">{{
            attributeData.n8 === '1' ? '有' : '无'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否服用CCB？">{{ attributeData.n9 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="是否服用β受体阻滞剂？">{{ attributeData.n10 === '1' ? '有' : '无' }}
        </el-descriptions-item>
        <el-descriptions-item label="是否服用利尿剂？">{{ attributeData.n11 === '1' ? '有' : '无' }}
        </el-descriptions-item>
      </div>

      <el-descriptions-item :span="3" label="是否具有脑血管疾病史？">{{ attributeData.n12 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <div v-if="attributeData.n12 === '1'">
        <el-descriptions-item label="缺血？">{{ attributeData.n13 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="出血？">{{ attributeData.n14 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="TIA发作？">{{ attributeData.n15 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="不明原因的偏瘫、言语不清等症状,未确诊？">{{
            attributeData.n16 === '1' ? '有' : '无'
          }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="是否具有外周血管疾病史">{{
          attributeData.n17 === '1' ? '有' : '无'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否具有血脂异常病史？">{{
          ['无'
            , '高胆固醇血脂', '高甘油三酯血症', '高低密度脂蛋白血症', '低高密度脂蛋白血症', '混合型高脂血症']
              [attributeData.n18]
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否服用他汀类药物？">{{
          attributeData.n19 === '1' ? '有' : '无'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="既往是否具有冠心病病史？">{{
          attributeData.n20 === '1' ? '有' : '无'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n20 === '1'">
        <el-descriptions-item label="距本次心梗时间">{{ attributeData.n21 }} 年</el-descriptions-item>
        <el-descriptions-item label="是否血管狭窄>50%?">
          {{ ['否', '是', '不详'][attributeData.n211] }}
        </el-descriptions-item>
        <el-descriptions-item label="既往是否为心肌梗死？">{{
            attributeData.n22 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否行介入治疗?">
          {{ ['否', 'PCI', 'CAG'] [attributeData.n23] }}
        </el-descriptions-item>
        <el-descriptions-item label="支架个数">{{ attributeData.n24 }} 个</el-descriptions-item>
        <el-descriptions-item label="是否行CABG？">{{ attributeData.n25 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="是否规律口服二级预防药物治疗？">{{
            attributeData.n26 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否严格戒烟？">{{ attributeData.n27 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="是否具有一级亲属冠心病家族史？">
        {{ attributeData.n28 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" label="是否有心律失常病史？">{{
          ['无', '室性心律失常', '房性心律失常', '房室传导阻滞', '束支传导阻滞']
              [attributeData.n29]
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n29 === '2' || attributeData.n29 === '3'">
        <el-descriptions-item label="若为房颤、房扑，阵发性或持续性？">
          {{ attributeData.n30 === '1' ? '阵发性' : '持续性' }}
        </el-descriptions-item>
        <el-descriptions-item label="若为房室传导阻滞具体类型？">
          {{
            attributeData.n31 === '1' ? '一度' : attributeData.n31 === '2' ? '二度I型' : attributeData.n31 === '3' ? '二度II型' : '三度'
          }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="是否有心衰病史？">{{ attributeData.n32 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <div v-if="attributeData.n32 === '1'">
        <el-descriptions-item label="病史">{{ attributeData.h3 }} 年</el-descriptions-item>
        <el-descriptions-item label="是否服用ARNI?">{{ attributeData.n33 === '1' ? '有' : '无' }}</el-descriptions-item>
        <el-descriptions-item label="若服用，计量为">{{ attributeData.n34 }}</el-descriptions-item>
        <el-descriptions-item label="是否服用ACEI/ARB类药物？">{{ attributeData.n35 === '1' ? '有' : '无' }}
        </el-descriptions-item>
        <el-descriptions-item label="是否服用庾柚图??">{{ attributeData.n36 === '1' ? '有' : '无' }}
        </el-descriptions-item>
        <el-descriptions-item label="是否服用螺内酯？">{{ attributeData.n37 === '1' ? '有' : '无' }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="是否具有慢性阻塞性肺疾病史？">
        {{ attributeData.n38 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" label="是否具有慢性肾脏疾病史？">{{ attributeData.n39 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" label="是否具有恶性肿瘤史？">{{ attributeData.n40 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <div v-if="attributeData.n40 === '1'">
        <el-descriptions-item label="恶性肿瘤类型">{{ attributeData.n41 }}</el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="是否有手术史？">{{ attributeData.n42 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <div v-if="attributeData.n42 === '1'">
        <el-descriptions-item label="手术类型">{{ attributeData.n43 }}</el-descriptions-item>
        <el-descriptions-item label="手术时间">{{ attributeData.n44 }}</el-descriptions-item>
        <el-descriptions-item label="术后是否有并发症？">{{ attributeData.n45 === '1' ? '有' : '无' }}
        </el-descriptions-item>
        <el-descriptions-item label="术后并发症类型">{{ attributeData.n46 }}</el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="是否有甲状腺疾病史？">
        {{ ['无', '甲亢', '甲减', '其他'][attributeData.n47] }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" label="是否有恶性肿瘤病史？">{{ attributeData.n48 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" label="抗血小板药物使用史？">
        {{ ['阿司匹林', '氯吡格雷', '替格瑞洛'][attributeData.n49] }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" label="抗凝药物使用史？">
        {{ ['无', '华法林', '新型口服抗凝药'][attributeData.n50] }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" label="血液系统疾病史？">{{ attributeData.n51 === '1' ? '有' : '无' }}
      </el-descriptions-item>
      <el-descriptions-item :span="3" label="乙肝病史？">{{ attributeData.n52 === '1' ? '有' : '无' }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="个人史">
      <el-descriptions-item :span="3" label="吸烟史？">{{ attributeData.n53 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.n53 === '1'">
        <el-descriptions-item label="吸烟指数">{{ attributeData.n54 }}</el-descriptions-item>
        <el-descriptions-item label="目前是否吸烟？">{{ attributeData.n55 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="戒烟距今">{{ attributeData.n56 }} 月</el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="月经史？">{{['男性', '绝经', '未绝经'][attributeData.n57] }}
      </el-descriptions-item>
      <div v-if="attributeData.n57 !== '0'">
        <el-descriptions-item label="绝经年龄">{{ attributeData.n58 }} 岁</el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="饮酒史">{{ attributeData.n59 === '1' ? '是' : '否' }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="首次医疗接触">
      <el-descriptions-item :span="3" label="既往有无劳力性胸痛、胸闷病史？">
        {{ attributeData.n60 === '1' ? '有' : '否' }}
      </el-descriptions-item>

      <div v-if="attributeData.n60 === '1'">
        <el-descriptions-item label="持续时间">{{ attributeData.n61 }} 月</el-descriptions-item>
        <el-descriptions-item label="近7天内是否使用阿司匹林？">{{ attributeData.n611 === '1' ? '有' : '否' }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="本次发病时间">{{ attributeData.n62 }}（24h制）</el-descriptions-item>
      <div v-if="attributeData.n62 !== ''">
        <el-descriptions-item label="本次发病日期">{{ attributeData.n621 }}</el-descriptions-item>
        <el-descriptions-item label="入院前24h内心绞痛发作≥2次">{{ attributeData.n622 === '1' ? '有' : '否' }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="首次医疗接触时间">{{ attributeData.n63 }} h（距发病）</el-descriptions-item>
      <el-descriptions-item label="发病地点">{{
          attributeData.n64 === '1' ? '家中' :
              attributeData.n64 === '2' ? '公共场所' : '不详'
        }}
      </el-descriptions-item>

      <el-descriptions-item :span="3" label="本次发病症状">{{ attributeData.n65 === '1' ? '有' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.n65 === '1'">
        <el-descriptions-item label="心前区闷痛">{{ attributeData.n66 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="放射痛">{{ attributeData.n67 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="恶心呕吐">{{ attributeData.n68 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="大汗">{{ attributeData.n69 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="呼吸困难">{{ attributeData.n70 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="黑矇、晕厥、意识丧失">{{ attributeData.n71 === '1' ? '有' : '否' }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="症状持续时间">{{ attributeData.n72 }} h</el-descriptions-item>

      <el-descriptions-item label="缓解方式">{{
          attributeData.n73 === '1' ? '持续不缓解' :
              attributeData.n73 === '2' ? '休息后缓解' : '自行用药'
        }}
      </el-descriptions-item>

      <div v-if="attributeData.n73 === '3'">
        <el-descriptions-item label="若用药，具体药物是？">{{
            attributeData.n74 === '1' ? '硝酸甘油' :
                attributeData.n74 === '2' ? '速效救心丸' : '其他'
          }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="到院10分钟内完成心电图？">{{ attributeData.n751 === '1' ? '有' : '无' }}
      </el-descriptions-item>

      <div v-if="attributeData.n751 === '1'">
        <el-descriptions-item label="是否发生心律失常？">{{ attributeData.n76 === '1' ? '有' : '无' }}
        </el-descriptions-item>
        <div v-if="attributeData.n76 === '1'">
          <el-descriptions-item label="心跳骤停？">{{ attributeData.n77 === '1' ? '有' : '无' }}</el-descriptions-item>
          <el-descriptions-item label="室速、室颤？">{{ attributeData.n78 === '1' ? '有' : '无' }}</el-descriptions-item>
          <el-descriptions-item label="是否予以电除颤或心肺复苏？">{{ attributeData.n781 === '1' ? '有' : '无' }}
          </el-descriptions-item>
          <el-descriptions-item label="室上性心动过速？">{{ attributeData.n79 === '1' ? '有' : '无' }}
          </el-descriptions-item>
          <el-descriptions-item label="房扑？">{{ attributeData.n80 === '1' ? '有' : '无' }}</el-descriptions-item>
          <el-descriptions-item label="房颤？">{{ attributeData.n81 === '1' ? '有' : '无' }}</el-descriptions-item>
          <el-descriptions-item label="房室传导阻滞？">{{
              attributeData.n82 === '1' ? '一度' :
                  attributeData.n82 === '2' ? '二度I型' :
                      attributeData.n82 === '3' ? '二度II型' :
                          attributeData.n82 === '4' ? '三度' : '无'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="新发束支传导阻滞？">{{
              attributeData.n83 === '1' ? '完左' :
                  attributeData.n83 === '2' ? '完右' : '无'
            }}
          </el-descriptions-item>
        </div>
      </div>
      <el-descriptions-item label="ST段改变？">{{ attributeData.n84 === '1' ? '是' : '否' }}</el-descriptions-item>

      <div v-if="attributeData.n84 === '1'">
        <el-descriptions-item label="ST段下移＜0.5mv">{{ attributeData.n841 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="ST段下移≥0.5mv">{{ attributeData.n842 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="前壁ST段抬高">{{ attributeData.n843 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>
      <el-descriptions-item label="其他？">{{ attributeData.n85 }}</el-descriptions-item>
      <el-descriptions-item label="是否使用血管活性药物维持血压？">{{ attributeData.n86 === '1' ? '有' : '否' }}
      </el-descriptions-item>

      <div v-if="attributeData.n86 === '1'">
        <el-descriptions-item label="去甲肾上腺素？">{{ attributeData.n88 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="多巴胺？">{{ attributeData.n89 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="多巴酚丁胺？">{{ attributeData.n90 === '1' ? '有' : '否' }}</el-descriptions-item>
      </div>
      <el-descriptions-item label="精神状态改变">{{ attributeData.n92 === '1' ? '有' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="皮肤四肢冰冷潮湿？">{{ attributeData.n93 === '1' ? '有' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="少尿？">{{ attributeData.n94 === '1' ? '有' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="乳酸值？">{{ attributeData.n95 }} mmol/l</el-descriptions-item>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="诊断评估">
      <el-descriptions-item label="初步诊断？">
        {{
          attributeData.n97 === '1' ? 'STEMI' : attributeData.n97 === '2' ? 'NSTEMI' : attributeData.n97 === '3' ? 'UA' : '其他'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="Killip分级">{{ attributeData.n98 }} 级</el-descriptions-item>
      <el-descriptions-item label="是否合并感染？">{{ attributeData.n99 === '1' ? '有' : '否' }}</el-descriptions-item>

      <div v-if="attributeData.n99 === '1'">
        <el-descriptions-item label="泌尿系统？">{{ attributeData.n100 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="呼吸系统？">{{ attributeData.n101 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="胃肠道？">{{ attributeData.n102 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="骨、关节？">{{ attributeData.n103 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="中枢系统？">{{ attributeData.n104 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="心血管系统？">{{ attributeData.n105 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="血液系统？">{{ attributeData.n106 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="生殖系统？">{{ attributeData.n107 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>
      <el-descriptions-item label="是否溶栓？">{{ attributeData.n113 === '1' ? '有' : '否' }}</el-descriptions-item>

      <div v-if="attributeData.n113 === '1'">
        <el-descriptions-item label="溶栓药物具体是？"></el-descriptions-item>
        <el-descriptions-item label="阿替普酶？">{{ attributeData.n115 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="尿激酶原？">{{ attributeData.n116 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="瑞替普酶？">{{ attributeData.n117 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="TNK-tPA？">{{ attributeData.n118 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="尿激酶？">{{ attributeData.n119 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>
      <el-descriptions-item label="剂量">{{ attributeData.n120 }}</el-descriptions-item>
      <el-descriptions-item label="再通">
        {{ attributeData.n121 === '1' ? '是' : attributeData.n121 === '2' ? '未评估' : '否' }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="治疗方式选择">
      <el-descriptions-item label="急诊PCI">{{ attributeData.n123 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="急诊仅造影">{{ attributeData.n124 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="院内择期造影">{{ attributeData.n125 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="院内择期手术">{{ attributeData.n126 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="院外择期手术">{{ attributeData.n127 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="转CABG">{{ attributeData.n129 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="未手术治疗">{{ attributeData.n130 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="是否发病24h内再灌注（PCI/溶栓）">{{ attributeData.n1301 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="是否发病24h内到院90min内直接PCI">{{ attributeData.n13012 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item label="是否发病24h内到院30min内溶栓">{{ attributeData.n13013 === '1' ? '是' : '否' }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="术前药物治疗">
      <el-descriptions-item label="术前是否使用阿司匹林？">{{
          attributeData.n131 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n131 === '1'">
        <el-descriptions-item label="是否足量使用？">{{
            attributeData.n132 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="到院1h内使用？">{{
            attributeData.n1321 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
      </div>

      <el-descriptions-item label="术前是否使用氯吡格雷？">{{
          attributeData.n133 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n133 === '1'">
        <el-descriptions-item label="是否足量使用？">{{
            attributeData.n134 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="到院1h内使用？">{{
            attributeData.n1341 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
      </div>

      <el-descriptions-item label="术前是否使用替格瑞洛？">{{
          attributeData.n135 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n135 === '1'">
        <el-descriptions-item label="是否足量使用？">{{
            attributeData.n136 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="到院1h内使用？">{{
            attributeData.n1361 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="急诊PCI病人口服双抗至手术时间？">{{ attributeData.n13621 }} 小时
        </el-descriptions-item>
      </div>

      <el-descriptions-item label="术前/院中是否服用他汀类药物？">{{
          attributeData.n137 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="术前/院中是否使用受体阻滞剂？">{{
          attributeData.n138 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n138 === '1'">
        <el-descriptions-item label="到院24h内使用？">{{
            attributeData.n1381 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
      </div>

      <el-descriptions-item label="术前/院中是否使用ACEI、ARB？">{{
          attributeData.n139 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="术前/院中是否使用抗凝药物？">{{
          attributeData.n140 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n140 === '1'">
        <el-descriptions-item label="具体抗凝药物是什么？"></el-descriptions-item>
        <el-descriptions-item label="低分子肝素？">{{ attributeData.n142 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="比伐卢定？">{{ attributeData.n143 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="普通肝素？">{{ attributeData.n144 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="华法林？">{{ attributeData.n145 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="利伐沙班？">{{ attributeData.n146 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="阿哌沙班？">{{ attributeData.n147 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="达比加群酯？">{{ attributeData.n148 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>

      <el-descriptions-item label="是否有室壁节段性运动异常？">{{
          attributeData.n149 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n149 === '1'">
        <el-descriptions-item label="前壁？">{{ attributeData.n150 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="下壁？">{{ attributeData.n151 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="后壁？">{{ attributeData.n152 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="右室？">{{ attributeData.n153 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="高侧壁？">{{ attributeData.n154 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>

      <el-descriptions-item label="是否有二尖瓣反流？">{{
          ['无', '轻度', '中度', '重度'][attributeData.n155]
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否有三尖瓣反流？">{{
          ['无', '轻度', '中度', '重度'][attributeData.n156]
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否有二尖瓣瓣膜钙化？">{{
          attributeData.n157 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否有三尖瓣瓣膜钙化？">{{
          attributeData.n158 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否有室壁瘤形成？">{{
          attributeData.n159 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <el-descriptions-item label="是否有附壁血栓？">{{
          attributeData.n160 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n160 === '1'">
        <el-descriptions-item label="是否有心包积液？">{{
            ['否', '少量', '中量', '大量'][attributeData.n1601]
          }}
        </el-descriptions-item>
      </div>

      <el-descriptions-item label="是否有二尖瓣狭窄？">{{
          attributeData.n161 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="出院情况">
      <el-descriptions-item label="是否入住CCU？">{{ attributeData.n1932 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.n1932 === '1'">
        <el-descriptions-item label="入住天数">{{ attributeData.n1933 }} 天</el-descriptions-item>
      </div>
      <el-descriptions-item label="是否使用 ECMO">{{ attributeData.n1934 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.n1934 === '1'">
        <el-descriptions-item label="ECMO使用时间">{{ attributeData.n1935 }} 天</el-descriptions-item>
      </div>

      <el-descriptions-item label="是否使用IABP">{{ attributeData.n1936 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.n1936 === '1'">
        <el-descriptions-item label="IABP使用时间">{{ attributeData.n1937 }} 天</el-descriptions-item>
      </div>
      <el-descriptions-item label="住院期间主要并发症及不良事件？">{{
          attributeData.n162 === '1' ? '是' : '否'
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n162 === '1'">
        <el-descriptions-item label="院内是否发生1级终点事件（死亡）？">{{
            attributeData.n163 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <div v-if="attributeData.n163 === '1'">
          <el-descriptions-item label="发生时间">{{ attributeData.n16301 }}</el-descriptions-item>
        </div>

        <el-descriptions-item label="院内是否发生2级终点事件（MACE事件）？">{{
            attributeData.n164 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <div v-if="attributeData.n164 === '1'">
          <el-descriptions-item label="心源性休克">{{
              attributeData.n1641 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <div v-if="attributeData.n1641 === '1'">
            <el-descriptions-item label="发生时间">{{ attributeData.n16411 }}</el-descriptions-item>
          </div>

          <el-descriptions-item label="急性再梗">{{ attributeData.n1642 === '1' ? '是' : '否' }}</el-descriptions-item>
          <div v-if="attributeData.n1642 === '1'">
            <el-descriptions-item label="发生时间">{{ attributeData.n16421 }}</el-descriptions-item>
          </div>

          <el-descriptions-item label="不稳定型心绞痛">{{
              attributeData.n1643 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <div v-if="attributeData.n1643 === '1'">
            <el-descriptions-item label="发生时间">{{ attributeData.n16431 }}</el-descriptions-item>
          </div>

          <el-descriptions-item label="脑血管事件">{{
              attributeData.n1644 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <div v-if="attributeData.n1644 === '1'">
            <el-descriptions-item label="发生时间">{{ attributeData.n16441 }}</el-descriptions-item>
          </div>

          <el-descriptions-item label="心脏骤停、心肺复苏">{{
              attributeData.n1645 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <div v-if="attributeData.n1645 === '1'">
            <el-descriptions-item label="发生时间">{{ attributeData.n164511 }}</el-descriptions-item>
          </div>

          <el-descriptions-item label="室速、室颤">{{ attributeData.n1646 === '1' ? '是' : '否' }}</el-descriptions-item>
          <div v-if="attributeData.n1646 === '1'">
            <el-descriptions-item label="发生时间">{{ attributeData.n16461 }}</el-descriptions-item>
          </div>
        </div>
      </div>
      <el-descriptions-item label="心力衰竭">{{ attributeData.n165 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.n165 === '1'">
        <el-descriptions-item label="是否使用洋地黄类药物？">{{
            attributeData.n1651 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否使用米力农？">{{
            attributeData.n1652 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否使用新活素？">{{
            attributeData.n1653 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="心律失常">{{ attributeData.n166 === '1' ? '是' : '无' }}</el-descriptions-item>

      <div v-if="attributeData.n166 === '1'">
        <el-descriptions-item label="室速、室颤？">{{ attributeData.n167 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item v-if="attributeData.n167 === '1'" label="是否予以药物转律治疗？">
          {{ attributeData.n1671 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="室上性心动过速？">{{
            attributeData.n168 === '1' ? '有' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item v-if="attributeData.n168 === '1'" label="是否予以药物转律治疗？">
          {{ attributeData.n1681 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="房扑/房颤？">{{ attributeData.n169 === '1' ? '有' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="阵发、持续？">
          {{ attributeData.n170 === '1' ? '阵发性' : attributeData.n170 === '2' ? '持续性' : '' }}
        </el-descriptions-item>
        <el-descriptions-item v-if="attributeData.n170 !== '0'" label="是否予以药物转律治疗？">
          {{ attributeData.n1701 === '1' ? '是' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="房室传导阻滞？">
          {{ ['无', '一度', '二度I型', '二度II型', '三度'][attributeData.n171] || '' }}
        </el-descriptions-item>
        <el-descriptions-item label="新发束支传导阻滞？">
          {{ attributeData.n172 === '1' ? '完左' : attributeData.n172 === '2' ? '完右' : '否' }}
        </el-descriptions-item>
        <el-descriptions-item label="其他">{{ attributeData.n173 }}</el-descriptions-item>
      </div>

      <el-descriptions-item label="机械并发症">{{ attributeData.n174 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.n174 === '1'">
        <el-descriptions-item label="诱因？">{{ attributeData.n1741 }}</el-descriptions-item>
        <el-descriptions-item label="游离壁破裂？">{{ attributeData.n175 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item v-if="attributeData.n175 === '1'" label="发生时间">{{ attributeData.n1751 }}
        </el-descriptions-item>
        <el-descriptions-item label="室间隔穿孔？">{{ attributeData.n176 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item v-if="attributeData.n176 === '1'" label="发生时间">{{ attributeData.n1761 }}
        </el-descriptions-item>
        <el-descriptions-item label="乳头肌或腱索断裂？">{{
            attributeData.n177 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item v-if="attributeData.n177 === '1'" label="发生时间">{{
            attributeData.n1771
          }}
        </el-descriptions-item>
        <el-descriptions-item label="心脏破裂是否行外科手术？">
          {{ ['无', '外科修补术', '经皮室间隔封堵术'][attributeData.n1772 - 1] || '' }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item label="心包并发症？">{{ attributeData.n178 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="出血">
        {{
          ['否', '不需干预自行停止的出血', '需要药物干预或延长住院的出血', '3a', '3b', '3c', 'CABG相关出血', '致死性出血', '未填写']
              [attributeData.n179]
        }}
      </el-descriptions-item>
      <el-descriptions-item label="肺栓塞">{{ attributeData.n181 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="外周动脉栓塞">{{ attributeData.n182 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="机械辅助通气">{{ attributeData.n184 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.n184 === '1'">
        <el-descriptions-item label="持续使用时间">{{ attributeData.n185 }} 天</el-descriptions-item>
      </div>
      <el-descriptions-item label="急性肾损伤">{{ attributeData.n186 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.n186 === '1'">
        <el-descriptions-item label="连续肾脏替代治疗">{{
            attributeData.n187 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <div v-if="attributeData.n187 === '1'">
          <el-descriptions-item label="高钾血症">{{ attributeData.n188 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="严重酸中毒">{{ attributeData.n189 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="少尿">{{ attributeData.n190 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="超容量负荷">{{ attributeData.n191 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="其他">{{ attributeData.n192 === '1' ? '是' : '否' }}</el-descriptions-item>
        </div>
      </div>
      <el-descriptions-item label="血管活性药物">{{ attributeData.n193 === '1' ? '是' : '否' }}</el-descriptions-item>
      <div v-if="attributeData.n193 === '1'">
        <el-descriptions-item label="持续使用时间">{{ attributeData.t1 }} 天</el-descriptions-item>
        <el-descriptions-item label="去甲肾上腺素">{{ attributeData.n194 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="多巴胺">{{ attributeData.n195 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="多巴酚丁胺">{{ attributeData.n196 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>
      <el-descriptions-item label="其他并发症">
        <pre>{{ attributeData.n1931 }}</pre>
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="出院诊断 ">
      <el-descriptions-item label="诊断">{{ ['STEMI', 'NSTEMI', 'UA'][attributeData.n199] }}</el-descriptions-item>
      <div v-if="attributeData.n199 !== ''">
        <el-descriptions-item label="前间壁？">{{ attributeData.n200 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="前壁？">{{ attributeData.n201 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="广泛前壁？">{{ attributeData.n202 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="下壁？">{{ attributeData.n203 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="后壁？">{{ attributeData.n204 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="右室？">{{ attributeData.n205 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="高侧壁？">{{ attributeData.n206 === '1' ? '是' : '否' }}</el-descriptions-item>
      </div>
    </el-descriptions>
    <div v-else>
      <p>正在加载...</p>
    </div>
  </el-scrollbar>
</template>

<script>
import {medicalHistoryResultAttributeDataStore} from "@/store/resultFormStore";
import {computed, onBeforeMount} from "vue";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";

export default {
  name: "MedicalHistoryResultTemplates",

  setup() {
    const attributeDataStore = medicalHistoryResultAttributeDataStore();

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
      tableHeight,
    };
  },
}
</script>

<style scoped>
.el-descriptions {
  margin-bottom: 10px;
}
</style>


