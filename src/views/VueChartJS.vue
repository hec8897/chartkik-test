<template>
  <section class="container">
    <h1>Demo examples of vue-chartjs</h1>
      <div class="column test">
        <h3>Line Chart</h3>
        <LineChart :data="[40, 40, 30, 50, 90, 50, 100, 50, 90 ]" width="1000" height="300" class='con2' style="{margin:0 auto}"/>
      </div>
      <div class="column test">
        <h3>Pie Chart</h3>
        <PieChart :data="[40, 20, 30, 50, 90, ]" class='con'/>
        <!--Bar Chart example-->
      </div>
    <div class="columns test">
        <h3>Bar Chart</h3>
            <BarChart :data="[40, 40, 30, 50, 90, 50, 100, 50, 90 ]" width="1000" height="300" class='con2' style="{margin:0 auto}"/>
      </div>
      <div class="column test">
        <h3>Mix</h3>
        <MixChart :data="[40, 40, 30, 50, 90, 50, 100, 50, 90 ]" width="1000" height="300" class='con2' style="{margin:0 auto}"/>
    </div>
  </section>
</template>
 
<script>
  import LineChart from '@/components/LineChart'
  import PieChart from '@/components/pieChart'
  import BarChart from '@/components/BarChart'
  import MixChart from '@/components/MixChart'
//   import BubbleChart from '@/components/BubbleChart'
//   import Reactive from '@/components/Reactive'
 
  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
      BarChart,
      PieChart,
      MixChart
    //   BubbleChart,
    //   Reactive
    },
 
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