document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('#area-chart');
  if (!target || typeof ApexCharts === 'undefined') return;

  var options = {
    chart: { type: 'area', height: 280, toolbar: { show: false } },
    series: [
      { name: 'Orders', data: [10, 41, 35, 51, 49, 62, 69] }
    ],
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 } },
    colors: ['#10B981']
  };

  var chart = new ApexCharts(target, options);
  chart.render();
});


