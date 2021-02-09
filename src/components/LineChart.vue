<script>
import {Line} from 'vue-chartjs'
export default {
  props:['data'],
  extends: Line,
  created(){
      this.datacollection.datasets[0].data = this.data
  },
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May','April', 'May','April', 'May'],
        datasets: [
          {
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            pointBackgroundColor: 'white',
            borderWidth: 2,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90],
            lineTension:false,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor:"#d7d2f7"
            // 곡선
          },
          {
            data: [40, 60, 20, 60,40, 60, 20,40,50],
            lineTension:false,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor:"#d4d1c4"
          },
                    {
            data: [20, 50, 40, 40,60, 40, 70,80,95],
            lineTension:false,
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor:"#222"
          }
        ],
        
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
            display: false
          },
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
</script>