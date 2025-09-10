document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('#pie-chart');
  if (!target || typeof ApexCharts === 'undefined') return;

  var options = {
    chart: { type: 'donut', height: 280, toolbar: { show: false } },
    series: [40, 32, 28],
    labels: ['Afternoon', 'Evening', 'Morning'],
    colors: ['#5A6ACF', '#8593ED', '#C7CEFF'],
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
      markers: { radius: 12, width: 10, height: 10 },
      formatter: function (seriesName, opts) {
        var val = opts.w.globals.series[opts.seriesIndex];
        return seriesName + '  ' + val + '%';
      },
      itemMargin: { horizontal: 16, vertical: 6 }
    },
    plotOptions: {
      pie: {
        donut: { size: '70%' }
      }
    },
    tooltip: {
      custom: function ({ seriesIndex, w }) {
        var label = w.globals.labels[seriesIndex];
        var percent = w.globals.series[seriesIndex];
        var timeRanges = { 'Afternoon': '1pm - 4pm', 'Evening': '6pm - 10pm', 'Morning': '7am - 11am' };
        var ordersMap = { 'Afternoon': 1890, 'Evening': 1510, 'Morning': 1280 };
        var format = new Intl.NumberFormat('de-DE');
        var orders = format.format(ordersMap[label] || 0);
        return (
          '<div style="background:#2F3142;color:#fff;padding:12px 14px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.2);font-family:inherit">'
          + '<div style="opacity:.9;font-size:12px;margin-bottom:2px">' + label + '</div>'
          + '<div style="opacity:.7;font-size:12px;margin-bottom:8px">' + (timeRanges[label] || '') + '</div>'
          + '<div style="font-weight:600;font-size:16px">' + orders + ' orders</div>'
          + '</div>'
        );
      }
    }
  };

  var chart = new ApexCharts(target, options);
  chart.render();
});


