<template>
  <el-scrollbar :height="tableHeight" class="scroll-container">
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="基础事件">
      <el-descriptions-item label="随访具体时间">{{ attributeData.n1 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="是否失访？">
        {{ ['死亡', '回复原来工作、生活状态', '较心梗前状态略差', '在家休息，状态差'][attributeData.n2] }}
      </el-descriptions-item>
      <el-descriptions-item label="随访具体时间">{{ attributeData.n3 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="随访具体时间">{{ attributeData.n4 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="随访具体时间">{{ attributeData.n5 === '1' ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="随访具体时间">{{
          ['未监测', '监测可140/90以内', '控制欠佳'][attributeData.n6]
        }}
      </el-descriptions-item>
      <el-descriptions-item label="随访具体时间">{{ ['未监测', '监测可 空腹8，餐后10', '控制欠佳'][attributeData.n7] }}
      </el-descriptions-item>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="终点事件(死亡)">
      <el-descriptions-item :span="3" label="是否发生死亡？">
        {{ attributeData.d1 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.d3 === '1'">
        <el-descriptions-item label="具体死亡时间">{{ attributeData.d2 }}</el-descriptions-item>
        <el-descriptions-item label="死亡原因">
          {{ attributeData.d3 === '1' ? '心血管原因' : attributeData.d3 === '2' ? '非心血管原因' : '' }}
        </el-descriptions-item>
        <el-descriptions-item label="主要原因">
          {{
            attributeData.d31 === '1' ? '急性心肌梗死' : attributeData.d31 === '2' ? '心源性猝死' : attributeData.d31 === '3' ? '心力衰竭' : attributeData.d31 === '4' ? '中风' : attributeData.d31 === '5' ? '心血管手术' : attributeData.d31 === '6' ? '心血管系统出血' : '其他心血管原因'
          }}
        </el-descriptions-item>
      </div>

      <div v-if="attributeData.d3 === '2'">
        <el-descriptions-item label="主要原因">
          {{
            attributeData.d32 === '1' ? '胃肝脾肾脏疾病' : attributeData.d32 === '2' ? '感染炎症' : attributeData.d32 === '3' ? '自杀' : attributeData.d32 === '4' ? '创伤' : attributeData.d32 === '5' ? '恶性肿瘤' : attributeData.d32 === '6' ? '神经系统' : '其他'
          }}
        </el-descriptions-item>
      </div>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="终点事件(不良心血管事件)">
      <el-descriptions-item :span="3" label="是否再次发生心肌梗死？">
        {{ attributeData.i1 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item v-if="attributeData.i1 === '1'" :span="3" label="次数">{{
          attributeData.n0
        }}
      </el-descriptions-item>
      <div v-if="attributeData.n0 === 1">
        <el-descriptions-item label="第一次具体心肌梗死时间">{{ attributeData.i11 }}</el-descriptions-item>
        <el-descriptions-item label="心梗类型">
          {{ ['1型', '2型', '3型', '4a型', '4b型', '4c型', '5型'][attributeData.i12 - 1] }}
        </el-descriptions-item>
        <el-descriptions-item label="是否进行再次血运重建？">{{
            attributeData.i13 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>

        <div v-if="attributeData.i13 === '1'">
          <el-descriptions-item label="是否临床驱动的再次血运重建？">{{
              attributeData.i131 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建方式">{{ ['PCI', 'PTCA', '血栓抽吸', 'CABG'][attributeData.i132 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="梗死相关动脉">
            {{ ['左主干', '左前降', '左回旋', '右冠', '桥血管', '原支架'][attributeData.i133] }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建节段">{{ ['靶病变', '靶血管', '非靶血管'][attributeData.i134 - 1] }}
          </el-descriptions-item>
        </div>

        <el-descriptions-item label="是否存在原支架内再狭窄？">{{
            attributeData.i14 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>

        <div v-if="attributeData.i14 === '1'">
          <el-descriptions-item label="发生支架内再狭窄时间">{{ attributeData.i141 }}</el-descriptions-item>
          <el-descriptions-item label="管腔再狭窄程度">{{ attributeData.i142 }} %</el-descriptions-item>
        </div>
      </div>
      <div v-if="attributeData.n0 > 1">
        <el-descriptions-item label="第二次具体心肌梗死时间">{{ attributeData.i21 }}</el-descriptions-item>
        <el-descriptions-item label="心梗类型">
          {{ ['1型', '2型', '3型', '4a型', '4b型', '4c型', '5型'][attributeData.i22 - 1] }}
        </el-descriptions-item>
        <el-descriptions-item label="是否进行再次血运重建？">{{
            attributeData.i23 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>

        <div v-if="attributeData.i23 === '1'">
          <el-descriptions-item label="是否临床驱动的再次血运重建？">{{
              attributeData.i231 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建方式">{{ ['PCI', 'PTCA', '血栓抽吸', 'CABG'][attributeData.i232 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="梗死相关动脉">
            {{ ['左主干', '左前降', '左回旋', '右冠', '桥血管', '原支架'][attributeData.i233] }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建节段">{{ ['靶病变', '靶血管', '非靶血管'][attributeData.i234 - 1] }}
          </el-descriptions-item>
        </div>

        <el-descriptions-item label="是否存在原支架内再狭窄？">{{
            attributeData.i24 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>

        <div v-if="attributeData.i24 === '1'">
          <el-descriptions-item label="发生支架内再狭窄时间">{{ attributeData.i241 }}</el-descriptions-item>
          <el-descriptions-item label="管腔再狭窄程度">{{ attributeData.i242 }} %</el-descriptions-item>
        </div>
      </div>
      <div v-if="attributeData.n0 > 2">
        <el-descriptions-item label="第三次具体心肌梗死时间">{{ attributeData.i31 }}</el-descriptions-item>
        <el-descriptions-item label="心梗类型">
          {{ ['1型', '2型', '3型', '4a型', '4b型', '4c型', '5型'][attributeData.i32 - 1] }}
        </el-descriptions-item>
        <el-descriptions-item label="是否进行再次血运重建？">{{
            attributeData.i33 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>

        <div v-if="attributeData.i33 === '1'">
          <el-descriptions-item label="是否临床驱动的再次血运重建？">{{
              attributeData.i331 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建方式">{{ ['PCI', 'PTCA', '血栓抽吸', 'CABG'][attributeData.i332 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="梗死相关动脉">
            {{ ['左主干', '左前降', '左回旋', '右冠', '桥血管', '原支架'][attributeData.i333] }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建节段">{{ ['靶病变', '靶血管', '非靶血管'][attributeData.i334 - 1] }}
          </el-descriptions-item>
        </div>

        <el-descriptions-item label="是否存在原支架内再狭窄？">{{
            attributeData.i34 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>

        <div v-if="attributeData.i34 === '1'">
          <el-descriptions-item label="发生支架内再狭窄时间">{{ attributeData.i341 }}</el-descriptions-item>
          <el-descriptions-item label="管腔再狭窄程度">{{ attributeData.i342 }} %</el-descriptions-item>
        </div>
      </div>
      <el-descriptions-item :span="3" label="是否复发心绞痛？">
        {{ attributeData.a1 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <el-descriptions-item v-if="attributeData.a1 === '1'" :span="3" label="次数">{{
          attributeData.n01
        }}
      </el-descriptions-item>
      <div v-if=" attributeData.n01 === 1">
        <el-descriptions-item label="第一次发作具体时间（出院后）">{{ attributeData.a11 }}</el-descriptions-item>
        <el-descriptions-item label="是否再住院治疗？">{{
            attributeData.a12 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否进行术后第一次血运重建？">{{
            attributeData.a13o === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <div v-if="attributeData.a13o=== '1'">
          <el-descriptions-item label="是否临床驱动的再次血运重建？">{{
              attributeData.a131 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建方式">{{ ['PCI', 'PTCA', 'CABG'][attributeData.a132 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="罪犯血管">
            {{ ['左主干', ',左前降', '左回旋', '右冠', '桥血管'][attributeData.a133 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建节段">{{ ['靶病变', '靶血管', '非靶血管'][attributeData.a134 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="是否存在原支架内再狭窄？">{{
              attributeData.a135 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item v-if="attributeData.a135 === '1'" label="管腔狭窄程度">{{
              attributeData.a1351
            }}%
          </el-descriptions-item>
        </div>
      </div>
      <div v-if=" attributeData.n01 > 1">
        <el-descriptions-item label="第二次发作具体时间（出院后）">{{ attributeData.a21 }}</el-descriptions-item>
        <el-descriptions-item label="是否再住院治疗？">{{
            attributeData.a22 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否进行术后第一次血运重建？">{{
            attributeData.a23o === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <div v-if="attributeData.a23o=== '1'">
          <el-descriptions-item label="是否临床驱动的再次血运重建？">{{
              attributeData.a231 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建方式">{{ ['PCI', 'PTCA', 'CABG'][attributeData.a232 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="罪犯血管">
            {{ ['左主干', ',左前降', '左回旋', '右冠', '桥血管'][attributeData.a233 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建节段">{{ ['靶病变', '靶血管', '非靶血管'][attributeData.a234 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="是否存在原支架内再狭窄？">{{
              attributeData.a235 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item v-if="attributeData.a235 === '1'" label="管腔狭窄程度">{{
              attributeData.a2351
            }}%
          </el-descriptions-item>
        </div>

      </div>
      <div v-if=" attributeData.n01 > 2">
        <el-descriptions-item label="第三次发作具体时间（出院后）">{{ attributeData.a31 }}</el-descriptions-item>
        <el-descriptions-item label="是否再住院治疗？">{{
            attributeData.a32 === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否进行术后第一次血运重建？">{{
            attributeData.a33o === '1' ? '是' : '否'
          }}
        </el-descriptions-item>
        <div v-if="attributeData.a33o=== '1'">
          <el-descriptions-item label="是否临床驱动的再次血运重建？">{{
              attributeData.a331 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建方式">{{ ['PCI', 'PTCA', 'CABG'][attributeData.a332 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="罪犯血管">
            {{ ['左主干', ',左前降', '左回旋', '右冠', '桥血管'][attributeData.a333 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="血运重建节段">{{ ['靶病变', '靶血管', '非靶血管'][attributeData.a334 - 1] }}
          </el-descriptions-item>
          <el-descriptions-item label="是否存在原支架内再狭窄？">{{
              attributeData.a335 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item v-if="attributeData.a335 === '1'" label="管腔狭窄程度">{{
              attributeData.a3351
            }}%
          </el-descriptions-item>
        </div>

      </div>
      <el-descriptions-item :span="3" label="是否发生心律失常？">
        {{ attributeData.r1 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if=" attributeData.r1 === '1' ">
        <el-descriptions-item label="具体时间">{{ attributeData.r11 }}</el-descriptions-item>
        <el-descriptions-item label="是否房颤，阵发性或持续性？">{{
            ['否', '阵发性', '持续性'][attributeData.r12]
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否房室传导阻滞具体类型？">
          {{ ['否', '一度', '二度I型', '二度II型', '三度'][attributeData.r13] }}
        </el-descriptions-item>
        <el-descriptions-item label="是否束支传导阻滞具体类型？">{{
            ['否', '完左', '完右'][attributeData.r14]
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否室性心律失常？">{{
            ['否', '室速', '室颤', '室早'][attributeData.r15]
          }}
        </el-descriptions-item>
        <el-descriptions-item label="是否治疗？">{{ attributeData.r16 === '1' ? '是' : '否' }}</el-descriptions-item>
        <div v-if="attributeData.r16 === '1'">
          <el-descriptions-item label="药物">{{ attributeData.r161 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="永久起搏器">{{ attributeData.r162 === '1' ? '是' : '否' }}</el-descriptions-item>
          <el-descriptions-item label="射频消融手术">{{
              attributeData.r163 === '1' ? '是' : '否'
            }}
          </el-descriptions-item>
          <el-descriptions-item label="其他">{{ attributeData.r164 }}</el-descriptions-item>
        </div>
      </div>
      <el-descriptions-item :span="3" label="是否发生心力衰竭？">
        {{ attributeData.f1 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.f1 === '1' ">
        <el-descriptions-item label="具体时间">{{ attributeData.f11 }}</el-descriptions-item>
        <el-descriptions-item label="再次住院治疗？">{{ attributeData.f12 === '1' ? '是' : '否' }}</el-descriptions-item>
        <el-descriptions-item label="心功能分级">{{ 'NYHA分级：' + attributeData.f13 }}</el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="是否发生脑卒中？">
        {{ attributeData.s1 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.s1 === '1' ">
        <el-descriptions-item label="具体时间">{{ attributeData.s11 }}</el-descriptions-item>
        <el-descriptions-item label="脑卒中类型">
          {{ ['脑出血', '脑梗塞', '偏瘫、言语不清等症状,未确诊'][attributeData.s12 - 1] }}
        </el-descriptions-item>
      </div>
      <el-descriptions-item :span="3" label="是否发生出血事件？">
        {{ attributeData.b4 === '1' ? '是' : '否' }}
      </el-descriptions-item>
      <div v-if="attributeData.b4 === '1' ">
        <el-descriptions-item label="具体时间">{{ attributeData.b11 }}</el-descriptions-item>
        <el-descriptions-item label="出血分级">{{
            ['不需干预自行停止的出血', '需要药物干预或延长住院的出血', '3a', '3b', '3c', 'CABG相关出血', '致死性出血'][attributeData.b12 - 1]
          }}
        </el-descriptions-item>
        <el-descriptions-item label="具体出血部位">{{
            ['消化道', '皮肤粘膜', '颅内'][attributeData.b13 - 1]
          }}
        </el-descriptions-item>
      </div>
    </el-descriptions>
    <el-descriptions v-if="attributeData" :column="3" :size="'small'" border title="口服药物">
      <el-descriptions-item :span="3" label="是否可提供？">
        {{ attributeData.p0 === '1' ? '可提供' : '不详' }}
      </el-descriptions-item>
      <div v-if="attributeData.p0 === '1'">
        <el-descriptions-item :span="3" label="阿司匹林">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="持续使用阿司匹林？">{{
                    attributeData.p11 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="阿司匹林停药换药时间？">{{ attributeData.p12 }}</el-descriptions-item>
                <el-descriptions-item label="停药或换药理由？">
                  <el-row>
                    <el-col :span="24">
                      <el-descriptions :column="1">
                        <el-descriptions-item label="阿司匹林出血停药">{{
                            attributeData.p131 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="阿司匹林胃肠道不适停药">{{
                            attributeData.p132 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="阿司匹林手术停药">{{ attributeData.p133 === '1' ? '是' : '否' }}
                        </el-descriptions-item>
                        <el-descriptions-item label="阿司匹林自行停药">{{ attributeData.p134 === '1' ? '是' : '否' }}
                        </el-descriptions-item>
                        <el-descriptions-item label="阿司匹林医嘱停药">{{
                            attributeData.p135 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="阿司匹林其他原因停药">{{
                            attributeData.p136
                          }}
                        </el-descriptions-item>
                      </el-descriptions>
                    </el-col>
                  </el-row>
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="氯吡格雷">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p21 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p22 }}</el-descriptions-item>
                <el-descriptions-item label="停药或换药理由？">
                  <el-row>
                    <el-col :span="24">
                      <el-descriptions :column="1">
                        <el-descriptions-item label="出血">{{
                            attributeData.p231 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="胃肠道不适">{{
                            attributeData.p232 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="手术或操作准备">{{ attributeData.p233 === '1' ? '是' : '否' }}
                        </el-descriptions-item>
                        <el-descriptions-item label="自行停药">{{ attributeData.p234 === '1' ? '是' : '否' }}
                        </el-descriptions-item>
                        <el-descriptions-item label="医嘱停药">{{
                            attributeData.p235 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="其他原因">{{ attributeData.p236 }}</el-descriptions-item>
                      </el-descriptions>
                    </el-col>
                  </el-row>
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="替格瑞洛">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p31 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p32 }}</el-descriptions-item>
                <el-descriptions-item label="停药或换药理由？">
                  <el-row>
                    <el-col :span="24">
                      <el-descriptions :column="1">
                        <el-descriptions-item label="出血">{{
                            attributeData.p331 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="胃肠道不适">{{
                            attributeData.p332 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="手术或操作准备">{{ attributeData.p333 === '1' ? '是' : '否' }}
                        </el-descriptions-item>
                        <el-descriptions-item label="自行停药">{{ attributeData.p334 === '1' ? '是' : '否' }}
                        </el-descriptions-item>
                        <el-descriptions-item label="医嘱停药">{{
                            attributeData.p335 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="气短">{{
                            attributeData.p336 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="其他原因">{{ attributeData.p337 }}</el-descriptions-item>
                      </el-descriptions>
                    </el-col>
                  </el-row>
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="他汀类药物">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p40 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="药物种类？">
                  {{ attributeData.p41 === '1' ? '阿托伐' : attributeData.p41 === '2' ? '瑞舒伐' : '其他' }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p42 }}</el-descriptions-item>
                <el-descriptions-item label="停药或换药理由？">
                  <el-row>
                    <el-col :span="24">
                      <el-descriptions :column="1">
                        <el-descriptions-item label="肝功能损伤">{{
                            attributeData.p431 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="肌痛">{{
                            attributeData.p432 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="自行停药">{{ attributeData.p433 === '1' ? '是' : '否' }}
                        </el-descriptions-item>
                        <el-descriptions-item label="医嘱停药">{{
                            attributeData.p434 === '1' ? '是' : '否'
                          }}
                        </el-descriptions-item>
                        <el-descriptions-item label="其他原因">{{ attributeData.p435 }}</el-descriptions-item>
                      </el-descriptions>
                    </el-col>
                  </el-row>
                </el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="ACEI/ARB类药物">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p51 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p52 }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="ARNI">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p61 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p62 }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="β受体阻滞剂">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p71 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p72 }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="SGLT-2抑制剂">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p81 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p82 }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="GLP1受体激动剂">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p91 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p92 }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="二甲双胍">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item label="是否持续用药？">{{
                    attributeData.p101 === '1' ? '是' : '否'
                  }}
                </el-descriptions-item>
                <el-descriptions-item label="若否，何时停药或换药？">{{ attributeData.p102 }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
        <el-descriptions-item :span="3" label="是否使用PCSK9">
          <el-row>
            <el-col :span="24">
              <el-descriptions :column="1">
                <el-descriptions-item>{{ attributeData.p13 === '1' ? '是' : '否' }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
          </el-row>
        </el-descriptions-item>
      </div>
    </el-descriptions>
    <div v-else>
      <p>正在加载...</p>
    </div>
  </el-scrollbar>
</template>

<script>

import {computed, onBeforeMount} from "vue";
import {followUpResultAttributeDataStore} from "@/store/resultFormStore";
import {useWindowHeightWatcher} from "@/utils/windowHeightWatcher";

export default {
  name: "FollowUpResultTemplates",

  setup() {
    const attributeDataStore = followUpResultAttributeDataStore();
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
};
</script>

<style scoped>
.el-descriptions {
  margin-bottom: 10px;
}
</style>
