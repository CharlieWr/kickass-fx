window.count = 0;
Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.borderColor = 'rgba(39,170,224,.75)';
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = 14;
var customTooltips = function(tooltip) {
  // Tooltip Element
  var tooltipEl = $('#chartjs-tooltip');
  if (!tooltipEl[0]) {
    $('body').append('<div id="chartjs-tooltip"></div>');
    tooltipEl = $('#chartjs-tooltip');
  }
  // Hide if no tooltip
  if (!tooltip.opacity) {
    tooltipEl.css({
      opacity: 0
    });
    $('.chartjs-wrap canvas')
      .each(function(index, el) {
        $(el).css('cursor', 'default');
      });
    return;
  }
  $(this._chart.canvas).css('cursor', 'pointer');
  // Set caret Position
  tooltipEl.removeClass('above below no-transform');
  if (tooltip.yAlign) {
    tooltipEl.addClass(tooltip.yAlign);
  } else {
    tooltipEl.addClass('no-transform');
  }
  // Set Text
  if (tooltip.body) {
    var innerHtml = [
      (tooltip.beforeTitle || []).join('\n'), (tooltip.title || []).join('\n'), (tooltip.afterTitle || []).join('\n'), (tooltip.beforeBody || []).join('\n'), (tooltip.body || []).join('\n'), (tooltip.afterBody || []).join('\n'), (tooltip.beforeFooter || [])
      .join('\n'), (tooltip.footer || []).join('\n'), (tooltip.afterFooter || []).join('\n')
    ];
    tooltipEl.html(innerHtml.join('\n'));
  }
  // Find Y Location on page
  var top = 0;
  if (tooltip.yAlign) {
    if (tooltip.yAlign == 'above') {
      top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
    } else {
      top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
    }
  }
  var position = $(this._chart.canvas)[0].getBoundingClientRect();
  // Display, position, and set styles for font
  tooltipEl.css({
    opacity: 1,
    width: tooltip.width ? (tooltip.width + 'px') : 'auto',
    left: position.left + tooltip.x + 'px',
    top: position.top + top + 'px',
    fontFamily: tooltip._fontFamily,
    fontSize: tooltip.fontSize,
    fontStyle: tooltip._fontStyle,
    padding: tooltip.yPadding + 'px ' + tooltip.xPadding + 'px',
  });
};
var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
var lineChartData = {
  labels: generateDates(),
  datasets: [{
    label: "",
    data: generateData(),
    backgroundColor: 'transparent',
    strokeColor: '#27AAE0',
    pointColor: '#000'
  }]
};
function generateData() {
  var a = [];
  for (var i=0;i<days;i++) {
    a.push(randomScalingFactor());
  }
  return a;
}
function generateDates() {
  var a = [];
  for (i=days;i>0;i--) {
    var d = new Date();
    d.setDate(d.getDate()-i);
    a.push(months[d.getUTCMonth()]+' '+d.getUTCDate());
  }
  return a;
}
window.onload = function() {
  var chartEl = document.getElementById("chart1");
  window.myLine = new Chart(chartEl, {
    type: 'line',
    data: lineChartData,
    options: {
      tooltips: {
        enabled: false,
        custom: customTooltips
      },
      scales: {
        gridLines: {
          display: false
        }
      }
    }
  });
};
