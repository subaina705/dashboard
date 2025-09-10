document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('#bar-chart');
  if (!target || typeof ApexCharts === 'undefined') return;

  var options = {
    chart: { type: 'bar', height: 280, toolbar: { show: false } },
    series: [
      { name: 'Dine-in', data: [31, 40, 28, 51, 42, 109, 100] },
      { name: 'Delivery', data: [23, 35, 18, 39, 55, 80, 95] }
    ],
    xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    plotOptions: { bar: { columnWidth: '45%', borderRadius: 4 } },
    dataLabels: { enabled: false },
    colors: ['#5A6ACF', '#C7CEFF'],
    legend: { position: 'bottom' }
  };

  var chart = new ApexCharts(target, options);
  chart.render();
});


