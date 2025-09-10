document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('#line-chart');
  if (!target || typeof ApexCharts === 'undefined') return;

  var options = {
    chart: { type: 'line', height: 280, toolbar: { show: false } },
    series: [
      { name: 'Visitors', data: [12, 25, 14, 36, 20, 45, 30] }
    ],
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    stroke: { curve: 'smooth', width: 3 },
    markers: { size: 4 },
    dataLabels: { enabled: false },
    colors: ['#F59E0B']
  };

  var chart = new ApexCharts(target, options);
  chart.render();
});


