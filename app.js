var xValues = ["1","2","3","4","5","6","7","8","9","10"];
var yValues = [60.5,61,62,63,64,65,66,67,68,70];
var barColors = ["#ffc4ee", "#fc9fe2","#ffb3b4","#ffb8b9","#ffd9fb","#f7cbf3","#268762","#d9e7fc","#c8dbfa","#bad5ff"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
  }
});
