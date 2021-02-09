<script>
import {Pie} from 'vue-chartjs'
export default {
  props:['data'],
  extends: Pie,
  created(){
      
      this.datacollection.datasets[0].data = this.data
  },
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Data One',
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
            data: [40, 20, 30, 50, 90, ]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
            display: true
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