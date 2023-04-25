<template>
  <el-form ref="form" :model="form" label-width="280px" label-position="left" :size="'small'">
    <el-form-item label="是否入住CCU？">
      <el-radio-group v-model="form.n1932">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n1932 ==='1'">
      <el-form-item label="入住天数">
        <el-input v-model="form.n1933" placeholder="请输入天数"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="是否使用ECMO？">
      <el-radio-group v-model="form.n1934">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n1934 === '1'">
      <el-form-item label="ECMO使用时间">
        <el-input v-model="form.n1935" placeholder="请输入天数"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="是否使用IABP？">
      <el-radio-group v-model="form.n1936">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n1936 === '1'">
      <el-form-item label="IABP使用时间">
        <el-input v-model="form.n1937" placeholder="请输入天数"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="住院期间主要并发症及不良事件？">
      <el-radio-group v-model="form.n162">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n162 === '1'">
      <el-form-item label="院内是否发生1级终点事件（死亡）？">
        <el-radio-group v-model="form.n163">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.n163 === '1'">
        <el-form-item label="发生时间">
          <el-input v-model="form.n16301" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="院内是否发生2级终点事件（MACE事件）？">
        <el-radio-group v-model="form.n164">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.n164 === '1'">
        <el-form-item label="心源性休克？">
          <el-radio-group v-model="form.n1641">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1641 === '1'">
          <el-form-item label="发生时间 ">
            <el-input v-model="form.n16411" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="急性再梗？">
          <el-radio-group v-model="form.n1642">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1642 === '1'">
          <el-form-item label="发生时间">
            <el-input v-model="form.n16421" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="不稳定型心绞痛？">
          <el-radio-group v-model="form.n1643">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1643 === '1'">
          <el-form-item label="发生时间">
            <el-input v-model="form.n16431" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="脑血管事件？">
          <el-radio-group v-model="form.n1644">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1644 === '1'">
          <el-form-item label="发生时间">
            <el-input v-model="form.n16441" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="心脏骤停、心肺复苏？">
          <el-radio-group v-model="form.n1645">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1645 === '1'">
          <el-form-item label="发生时间">
            <el-input v-model="form.n164511" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="室速、室颤？">
          <el-radio-group v-model="form.n1646">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.n1646 === '1'">
          <el-form-item label="发生时间">
            <el-input v-model="form.n16461" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
          </el-form-item>
        </div>
      </div>
    </div>
    <el-form-item label="心力衰竭">
      <el-radio-group v-model="form.n165">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n165 === '1'">
      <el-form-item label="是否使用洋地黄类药物？">
        <el-radio-group v-model="form.n1651">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否使用米力农？">
        <el-radio-group v-model="form.n1652">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否使用新活素？">
        <el-radio-group v-model="form.n1653">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="心律失常">
      <el-radio-group v-model="form.n166">
        <el-radio label="0">无</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="室速、室颤？">
      <el-radio-group v-model="form.n167">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n167 === '1'" label="是否予以药物转律治疗？">
      <el-radio-group v-model="form.n1671">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="室上性心动过速？">
      <el-radio-group v-model="form.n168">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n168 === '1'" label="是否予以药物转律治疗？">
      <el-radio-group v-model="form.n1681">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="房扑/房颤？">
      <el-radio-group v-model="form.n169">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="阵发、持续？">
      <el-radio-group v-model="form.n170">
        <el-radio label="1">阵发性</el-radio>
        <el-radio label="2">持续性</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n170 !== '0'" label="是否予以药物转律治疗？">
      <el-radio-group v-model="form.n1701">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">有</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="房室传导阻滞？">
      <el-select v-model="form.n171">
        <el-option label="无" value="0"></el-option>
        <el-option label="一度" value="1"></el-option>
        <el-option label="二度I型" value="2"></el-option>
        <el-option label="二度II型" value="3"></el-option>
        <el-option label="三度" value="4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="新发束支传导阻滞？">
      <el-select v-model="form.n172">
        <el-option label="否" value="0"></el-option>
        <el-option label="完左" value="1"></el-option>
        <el-option label="完右" value="2"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="其他？">
      <el-input v-model="form.n173" placeholder="请描述其他心律失常情况"></el-input>
    </el-form-item>
    <el-form-item label="机械并发症">
      <el-radio-group v-model="form.n174">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n174 === '1'" label="诱因？">
      <el-input v-model="form.n1741" placeholder="请描述诱因"></el-input>
    </el-form-item>

    <el-form-item label="游离壁破裂？">
      <el-radio-group v-model="form.n175">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n175 === '1'" label="发生时间">
      <el-input v-model="form.n1751" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
    </el-form-item>

    <el-form-item label="室间隔穿孔？">
      <el-radio-group v-model="form.n176">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n176 === '1'" label="发生时间">
      <el-input v-model="form.n1761" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
    </el-form-item>

    <el-form-item label="乳头肌或腱索断裂？">
      <el-radio-group v-model="form.n177">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n177 === '1'" label="发生时间">
      <el-input v-model="form.n1771" placeholder="<dd/mm/yyyy>  ##.##(24小时制)"></el-input>
    </el-form-item>

    <el-form-item label="心脏破裂是否行外科手术？">
      <el-select v-model="form.n1772">
        <el-option label="无" value="1"></el-option>
        <el-option label="外科修补术" value="2"></el-option>
        <el-option label="经皮室间隔封堵术" value="3"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="心包并发症？">
      <el-radio-group v-model="form.n178">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="出血？">
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

    <el-form-item label="肺栓塞？">
      <el-radio-group v-model="form.n181">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="外周动脉栓塞？">
      <el-radio-group v-model="form.n182">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否使用机械辅助通气？">
      <el-radio-group v-model="form.n184">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.n184 ==='1'" label="持续使用时间">
      <el-input v-model="form.n185" placeholder="天"></el-input>
    </el-form-item>
    <el-form-item label="是否发生急性肾损伤？">
      <el-radio-group v-model="form.n186">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n186 ==='1'">
      <el-form-item label="是否使用连续肾脏替代治疗?">
        <el-radio-group v-model="form.n187">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <div v-if="form.n187 ==='1'">
        <el-form-item label="高钾血症">
          <el-radio-group v-model="form.n188">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="严重酸中毒">
          <el-radio-group v-model="form.n189">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="少尿">
          <el-radio-group v-model="form.n190">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="超容量负荷">
          <el-radio-group v-model="form.n191">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="其他">
          <el-radio-group v-model="form.n192">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </div>

    </div>


    <el-form-item label="是否使用血管活性药物？">
      <el-radio-group v-model="form.n193">
        <el-radio label="0">否</el-radio>
        <el-radio label="1">是</el-radio>
      </el-radio-group>
    </el-form-item>
    <div v-if="form.n193 ==='1'">
      <el-form-item label="血管活性药物持续使用时间？">
        <el-input v-model="form.n173" placeholder="天"></el-input>
      </el-form-item>

      <el-form-item label="去甲肾上腺素？">
        <el-radio-group v-model="form.n194">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="多巴胺？">
        <el-radio-group v-model="form.n195">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="多巴酚丁胺？">
        <el-radio-group v-model="form.n196">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
    </div>

    <el-form-item label="其他并发">
      <el-input v-model="form.n1931" placeholder="请描述其他情况"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import {mhtFormStore} from "@/store/formStore";

export default {
  name: "Discharge",
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
  /*width: 30%;*/
}
.el-input{
  width: 160px;
}
</style>
