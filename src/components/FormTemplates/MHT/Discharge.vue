<template>
  <el-form ref="form" :model="form" label-width="180px" :size="'small'">
    <el-form-item label="1932 是否入住CCU？">
      <el-radio-group v-model="form.n1932">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n1932 ==='1'">
      <el-form-item label="1933 入住天数 ### 天">
        <el-input v-model="form.n1933" placeholder="请输入天数"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="1934 是否使用ECMO？">
      <el-radio-group v-model="form.n1934">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n1934 === '1'">
      <el-form-item label="1935 ECMO使用时间">
        <el-input v-model="form.n1935" placeholder="请输入天数"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="1936 是否使用IABP？">
      <el-radio-group v-model="form.n1936">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n1936 === '1'">
      <el-form-item label="1937 IABP使用时间">
        <el-input v-model="form.n1937" placeholder="请输入天数"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="162 住院期间主要并发症及不良事件？ ">
      <el-radio-group v-model="form.n162">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n162 === '1'">
      <el-form-item label="163 院内是否发生1级终点事件（死亡）？ ">
        <el-radio-group v-model="form.n163">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.n163 === '1'">
        <el-form-item label="16301 发生时间 ">
          <el-input v-model="form.n16301" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="164 院内是否发生2级终点事件（MACE事件）？">
        <el-radio-group v-model="form.n164">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.n164 === '1'">
        <el-form-item label="1641 心源性休克？">
          <el-radio-group v-model="form.n1641">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1641 === '1'">
          <el-form-item label="16411 发生时间 ">
            <el-input v-model="form.n16411" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="1642 急性再梗？">
          <el-radio-group v-model="form.n1642">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1642 === '1'">
          <el-form-item label="16421 发生时间">
            <el-input v-model="form.n16421" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="1643 不稳定型心绞痛？">
          <el-radio-group v-model="form.n1643">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1643 === '1'">
          <el-form-item label="16431 发生时间">
            <el-input v-model="form.n16431" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="1644 脑血管事件？">
          <el-radio-group v-model="form.n1644">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1644 === '1'">
          <el-form-item label="16441 发生时间">
            <el-input v-model="form.n16441" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="1645 心脏骤停、心肺复苏？">
          <el-radio-group v-model="form.n1645">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1645 === '1'">
          <el-form-item label="164511 发生时间">
            <el-input v-model="form.n164511" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="1646 室速、室颤？">
          <el-radio-group v-model="form.n1646">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1646 === '1'">
          <el-form-item label="16461 发生时间">
            <el-input v-model="form.n16461" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
      </div>
    </div>
    <el-form-item label="165 心力衰竭">
      <el-radio-group v-model="form.n165">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n165 === '1'">
      <el-form-item label="1651 是否使用洋地黄类药物？">
        <el-radio-group v-model="form.n1651">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="1652 是否使用米力农？">
        <el-radio-group v-model="form.n1652">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="1653 是否使用新活素？">
        <el-radio-group v-model="form.n1653">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="166 心律失常">
      <el-radio-group v-model="form.n166">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="167 室速、室颤？">
      <el-radio-group v-model="form.n167">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n167 === '1'" label="167-1 是否予以药物转律治疗？">
      <el-radio-group v-model="form.n1671">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="168 室上性心动过速？">
      <el-radio-group v-model="form.n168">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n168 === '1'" label="168-1 是否予以药物转律治疗？">
      <el-radio-group v-model="form.n1681">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="169 房扑/房颤？">
      <el-radio-group v-model="form.n169">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="170 阵发、持续？">
      <el-radio-group v-model="form.n170">
        <el-radio label="1">阵发性</el-radio>
        <el-radio label="2">持续性</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n170 !== '0'" label="170-1 是否予以药物转律治疗？">
      <el-radio-group v-model="form.n1701">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="171 房室传导阻滞？">
      <el-select v-model="form.n171">
        <el-option label="无" value="0"></el-option>
        <el-option label="一度" value="1"></el-option>
        <el-option label="二度I型" value="2"></el-option>
        <el-option label="二度II型" value="3"></el-option>
        <el-option label="三度" value="4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="172 新发束支传导阻滞？">
      <el-select v-model="form.n172">
        <el-option label="否" value="0"></el-option>
        <el-option label="完左" value="1"></el-option>
        <el-option label="完右" value="2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="173 其他？">
      <el-input v-model="form.n173" placeholder="请描述其他心律失常情况"></el-input>
    </el-form-item>
    <el-form-item label="174 机械并发症">
      <el-radio-group v-model="form.n174">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n174 === '1'" label="174-1 诱因？">
      <el-input v-model="form.n1741" placeholder="请描述诱因"></el-input>
    </el-form-item>

    <el-form-item label="175 游离壁破裂？">
      <el-radio-group v-model="form.n175">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n175 === '1'" label="175-1 发生时间">
      <el-input v-model="form.n1751" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
    </el-form-item>

    <el-form-item label="176 室间隔穿孔？">
      <el-radio-group v-model="form.n176">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n176 === '1'" label="176-1 发生时间">
      <el-input v-model="form.n1761" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
    </el-form-item>

    <el-form-item label="177 乳头肌或腱索断裂？">
      <el-radio-group v-model="form.n177">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n177 === '1'" label="177-1 发生时间">
      <el-input v-model="form.n1771" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
    </el-form-item>

    <el-form-item label="177-2 心脏破裂是否行外科手术？">
      <el-select v-model="form.n1772">
        <el-option label="无" value="1"></el-option>
        <el-option label="外科修补术" value="2"></el-option>
        <el-option label="经皮室间隔封堵术" value="3"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="178 心包并发症？">
      <el-radio-group v-model="form.n178">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="179 出血？">
      <el-select v-model="form.n179">
        <el-option label="否" value="0"></el-option>
        <el-option label="不需干预自行停止的出血" value="1"></el-option>
        <el-option label="需要药物干预或延长住院的出血" value="2"></el-option>
        <el-option label="3a" value="3"></el-option>
        <el-option label="3b" value="4"></el-option>
        <el-option label="3c" value="5"></el-option>
        <el-option label="CABG相关出血" value="6"></el-option>
        <el-option label="致死性出血" value="7"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="181 肺栓塞？">
      <el-radio-group v-model="form.n181">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="182 外周动脉栓塞？">
      <el-radio-group v-model="form.n182">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="184 是否使用机械辅助通气？">
      <el-radio-group v-model="form.n184">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n184 ==='1'" label="185 持续使用时间">
      <el-input v-model="form.n185" placeholder="天"></el-input>
    </el-form-item>
    <el-form-item label="186 是否发生急性肾损伤？">
      <el-radio-group v-model="form.n186">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n186 ==='1'">
      <el-form-item label="187 是否使用连续肾脏替代治疗?">
        <el-radio-group v-model="form.n187">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.n187 ==='1'">
        <el-form-item label="188 高钾血症">
          <el-radio-group v-model="form.n188">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="189 严重酸中毒">
          <el-radio-group v-model="form.n189">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="190 少尿">
          <el-radio-group v-model="form.n190">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="191 超容量负荷">
          <el-radio-group v-model="form.n191">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="192 其他">
          <el-radio-group v-model="form.n192">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>

    </div>


    <el-form-item label="193 是否使用血管活性药物？">
      <el-radio-group v-model="form.n193">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n193 ==='1'">
      <el-form-item label="t1 血管活性药物持续使用时间？">
        <el-input v-model="form.n173" placeholder="天"></el-input>
      </el-form-item>

      <el-form-item label="194 去甲肾上腺素？">
        <el-radio-group v-model="form.n194">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="195 多巴胺？">
        <el-radio-group v-model="form.n195">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="196 多巴酚丁胺？">
        <el-radio-group v-model="form.n196">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>

    <el-form-item label="1931 其他并发">
      <el-input v-model="form.n1931" placeholder="请描述其他情况"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "Discharge",
  data() {
    return {
      // form: {
      //   n1932: '',
      //   n1933: '',
      //   n1934: '',
      //   n1935: '',
      //   n1936: '',
      //   n1937: '',
      //   n162: '',
      //   n163: '',
      //   n16301: '',
      //   n164: '',
      //   n1641: '',
      //   n16411: '',
      //   n1642: '',
      //   n16421: '',
      //   n1643: '',
      //   n16431: '',
      //   n1644: '',
      //   n16441: '',
      //   n1645: '',
      //   n164511: '',
      //   n1646: '',
      //   n16461: '',
      //   n165: '',
      //   n1651: '',
      //   n1652: '',
      //   n1653: '',
      //   n166: '',
      //   n167: '',
      //   n1671: '',
      //   n168: '',
      //   n1681: '',
      //   n169: '',
      //   n170: '',
      //   n1701: '',
      //   n171: '',
      //   n172: '',
      //   n173: '',
      //   n174: '',
      //   n1741: '',
      //   n175: '',
      //   n1751: '',
      //   n176: '',
      //   n1761: '',
      //   n177: '',
      //   n1771: '',
      //   n1772: '',
      //   n178: '',
      //   n179: '',
      //   n181: '',
      //   n182: '',
      //   n184: '',
      //   n185: '',
      //   n186: '',
      //   n187: '',
      //   n188: '',
      //   n189: '',
      //   n190: '',
      //   n191: '',
      //   n192: '',
      //   n193: '',
      //   n194: '',
      //   n195: '',
      //   n196: '',
      //   t1: '',
      //   n1931: '',
      // }
    };
  },
  setup() {
    const form = mhtFormStore().form
    return {
      form
    }
  },
}
</script>

<style scoped>
.el-form-item{
  /*display: flex;*/
  width: 30%;
}
</style>
