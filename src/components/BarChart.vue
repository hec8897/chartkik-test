<script>
import {Bar} from 'vue-chartjs'
export default {
  props:['ChartData'],
  extends: Bar,
  watch:{
    ChartData(){
      this.datacollection.datasets[0].data = this.ChartData.DataSum
      this.datacollection.labels = this.ChartData.DataLegend
      this.renderChart(this.datacollection, this.options)

    }
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
            data: [40, 20, 30, 50, 90]
          }
        ]
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
}
</script>