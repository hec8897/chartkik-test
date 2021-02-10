<template>
  <section class="container">
    <h1>Demo examples of Win Win Biz</h1>
      <!-- <div class="column test">
        <h3>Line Chart</h3>
        <LineChart :data="[40, 40, 30, 50, 90, 50, 100, 50, 90 ]" :width="1000" :height="400" class='con2' style="{margin:0 auto}"/>
      </div> -->
      <!-- <div class="column test">
        <h3>Pie Chart</h3>
        <PieChart :data="[40, 20, 30, 50, 90, ]" class='con'/>
      </div> -->
    <div class="columns test">
        <h2>월간 판매량 변동 추의</h2>
            <BarChart :ChartData="PeriodData" :width="1000" :height="300" class='con2' style="{margin:0 auto}"/>
      </div>
      <select @change="ChangeData($event)">
        <option value="" disabled selected>제품번호 선택</option>
        <option value="46-살균-14">46-살균-14</option>
        <option value="3-살균-124">3-살균-124</option>
        <option value="46-살균-412">46-살균-412</option>
        <option value="46-기타-47">46-기타-47</option>
        <option value="46-살균-21">46-살균-21</option>
        <option value="46-살균-13">46-살균-13</option>
        <option value="6-살균-255">6-살균-255</option>
        <option value="2-살충-327">2-살충-327</option>
        <option value="6-살충-236">6-살충-236</option>
        <option value="6-살균-230">6-살균-230</option>
        <option value="3-살균-58">3-살균-58</option>
        <option value="39-살균-44">39-살균-44</option>
        <option value="50-살충-1">50-살충-1</option>
        <option value="4-살충-302">4-살충-302</option>
        <option value="46-살충-35">46-살충-35</option>
        <option value="6-살충-47">6-살충-47</option>
        <option value="6-살충-70">6-살충-70</option>
        <option value="6-살균-269">6-살균-269</option>
        <option value="46-살충-37">46-살충-37</option>
        <option value="46-살충-116">46-살충-116</option>
        <option value="46-살충-254">46-살충-254</option>
        <option value="46-살균-98">46-살균-98</option>
        <option value="46-살균-469">46-살균-469</option>
      </select>
      <!-- <div class="column test">
        <h3>Mix</h3>
        <MixChart :data="[40, 40, 30, 50, 90, 50, 100, 50, 90 ]" :width="1000" :height="300" class='con2' style="{margin:0 auto}"/>
    </div> -->
  </section>
</template> 
 
<script>
  import LineChart from '@/components/LineChart'
  import PieChart from '@/components/pieChart'
  import BarChart from '@/components/BarChart'
  import MixChart from '@/components/MixChart'
 
  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
      BarChart,
      PieChart,
      MixChart
    },
    data(){
      return{
        PeriodData:{DataSum:[0],DataLegend:[0]}
      }
    },
    methods:{
      ChangeData(Data){
        const TargetItem = Data.target.value

        this.$Axios.post('sale/period',{
        itemCode:TargetItem,
        // comCode:"2",
        periodCode:"1"
      })
      .then((result)=>{
        let DataSum = []
        let DataLegend = []
        result.data.Result.forEach(element => {
           DataSum.push(element.SumSu)
           DataLegend.push(element.Month+"월")
        });

        this.PeriodData = {
          DataSum,
          DataLegend
        }
      })

      }
    }
 
  }
</script>
 
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
 
  li {
    display: inline-block;
    margin: 0 10px;
  }
 
  a {
    color: #42b983;
  }
  .con{
      max-width: 400px;
      margin: 0 auto;
      text-align: center;
  }
  .con2{
      margin: 0 auto;
  }
    .test{
        max-width: 800px;
        margin: 0 auto;
    }
  

</style>