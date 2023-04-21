<template>
  <el-form :model="form" label-width="180px" :size="'small'">
    <el-form-item label="60  既往有无劳力性胸痛、胸闷病史？">
      <el-radio-group v-model="form.n60">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n60 === '1'">
      <el-form-item label="61 持续时间">
        <el-input v-model="form.n61" placeholder="请输入持续月数"></el-input>
      </el-form-item>
      <el-form-item label="62 近7天内是否使用阿司匹林？">
        <el-radio-group v-model="form.n62">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="62 本次发病时间">
      <el-input v-model="form.n62" placeholder="24h制"></el-input>
    </el-form-item>
    <div v-if="form.n62 !== ''">
      <el-form-item label="621 本次发病日期 ">
        <el-input v-model="form.n621" placeholder="dd/mm/yyyy"></el-input>
      </el-form-item>
      <el-form-item label="622 入院前24h内心绞痛发作大于等于2次？">
        <el-radio-group v-model="form.n622">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="63 首次医疗接触时间">
      <el-input v-model="form.n63" placeholder="距发病多少小时"></el-input>
    </el-form-item>
    <el-form-item label="64 发病地点">
      <el-radio-group v-model="form.n64">
        <el-radio label="0">不详</el-radio>
        <el-radio label="1">家中</el-radio>
        <el-radio label="2">公共场所</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="65 本次发病症状">
      <el-radio-group v-model="form.n65">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n65 === '1'">
      <el-form-item label="66 心前区闷痛">
        <el-radio-group v-model="form.n66">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="67 放射痛">
        <el-radio-group v-model="form.n67">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="68 恶心呕吐">
        <el-radio-group v-model="form.n68">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="69 大汗">
        <el-radio-group v-model="form.n69">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="70 呼吸困难">
        <el-radio-group v-model="form.n70">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="65 黑矇、晕厥、意识丧失">
        <el-radio-group v-model="form.n71">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="72 症状持续时间">
      <el-input v-model="form.n72" placeholder="持续多少小时"></el-input>
    </el-form-item>
    <el-form-item label="73 缓解方式">
      <el-radio-group v-model="form.n73">
        <el-radio label="1">持续不缓解</el-radio>
        <el-radio label="2">休息后缓</el-radio>
        <el-radio label="3">自行用药</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n73 === '3'">
      <el-form-item label="74 若用药，具体药物是？">
        <el-radio-group v-model="form.n74">
          <el-radio label="1">硝酸甘油</el-radio>
          <el-radio label="2">速效救心丸</el-radio>
          <el-radio label="3">其他</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="751 到院10分钟内完成心电图？">
      <el-radio-group v-model="form.n751">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n751 === '1'">
      <el-form-item label="76 是否发生心律失常？">
        <el-radio-group v-model="form.n76">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.n76 === '1'">
        <el-form-item label="77 心跳骤停？">
          <el-radio-group v-model="form.n77">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="78 室速、室颤？">
          <el-radio-group v-model="form.n78">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">有</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n78 === '1'">
          <el-form-item label="781 是否予以电除颤或心肺复苏？">
            <el-radio-group v-model="form.n781">
              <el-radio label="0">否</el-radio>
              <el-radio label="1">有</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <el-form-item label="79 室上性心动过速？">
          <el-radio-group v-model="form.n79">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="80 房扑？">
          <el-radio-group v-model="form.n80">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="81 房颤？">
          <el-radio-group v-model="form.n81">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">有</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="82 房室传导阻滞？">
          <el-select v-model="form.n82">
            <el-option label="无" value="0"></el-option>
            <el-option label="一度" value="1"></el-option>
            <el-option label="二度I型" value="2"></el-option>
            <el-option label="二度II型" value="3"></el-option>
            <el-option label="三型" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="83 新发束支传导阻滞？">
          <el-radio-group v-model="form.n83">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">完左</el-radio>
            <el-radio label="2">完右</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>
    </div>
    <el-form-item label="84 ST段改变？">
      <el-radio-group v-model="form.n84">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n84 === '1'">
      <el-form-item label="841 ST段下移＜0.5mv？">
        <el-radio-group v-model="form.n841">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="842 ST段下移≥0.5mv？">
        <el-radio-group v-model="form.n842">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="843 前壁ST段抬高？">
        <el-radio-group v-model="form.n843">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="85 其他">
        <el-input v-model="form.n85" placeholder="说明其他情况"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="86 是否使用血管活性药物维持血压？">
      <el-radio-group v-model="form.n86">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n86 ==='1'">
      <el-form-item label="88 去甲肾上腺素？">
        <el-radio-group v-model="form.n88">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="89 多巴胺？">
        <el-radio-group v-model="form.n89">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="90 多巴酚丁？">
        <el-radio-group v-model="form.n90">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">有</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="92 精神状态改变？">
      <el-radio-group v-model="form.n92">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="93 皮肤四肢冰冷潮湿？">
      <el-radio-group v-model="form.n93">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="94 少尿？">
      <el-radio-group v-model="form.n94">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="95 乳酸值">
      <el-input v-model="form.n95" placeholder="mmol/l"></el-input>
    </el-form-item>
  </el-form >
</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "FirstMedicalContact",
  setup() {
    const form = mhtFormStore().form
    return {
      form
    };
  },
}
</script>

<style scoped>
.el-form-item{
  /*display: flex;*/
  width: 30%;
}
</style>
