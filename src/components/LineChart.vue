<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null
    };
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 600, 0);

    this.gradient.addColorStop(0.0147, "rgba(55, 81, 255, .1)");
    this.gradient.addColorStop(0.9674, "rgba(55, 81, 255, 0)");
    this.renderChart(
      {
        labels: [0, 4, 8, 12, 16, 20],
        datasets: [
          {
            borderColor: "#3751FF",
            pointBackgroundColor: "transparent",
            borderWidth: 2,
            pointBorderColor: "transparent",
            backgroundColor: this.gradient,
            pointHoverBackgroundColor: "white",
            pointHoverBorderColor: "#3751FF",
            pointHoverBorderWidth: 6,
            pointRadius: 5,
            data: [10, 30, 27, 51, 17, 47, 37]
          },
          {
            borderColor: "#DFE0EB",
            pointBackgroundColor: "transparent",
            pointBorderColor: "transparent",
            borderWidth: 2,
            backgroundColor: "transparent",
            data: [33, 23, 33, 27, 42, 29, 36]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 60,
                fontColor: "#9FA2B4"
              },
              position: "right",
              gridLines: {
                color: "#EBEDF0"
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: "#9FA2B4",
                suggestedMin: 0,
                suggestedMax: 22
              }
            }
          ]
        },
        tooltips: {
          bodyFontSize: 14,
          backgroundColor: "#FFF",
          bodyFontColor: "#000",
          borderColor: "#DFE0EB",
          borderWidth: 0.5,
          bodySpacing: 0.2,
          bodyAlign: "center",
          titleFontColor: "black"
        }
      }
    );
  }
};
</script>

<style></style>
