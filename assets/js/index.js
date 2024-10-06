'use strict'
$(function () {
  chart1()
  chart2()
  chart3()
  chart4()
  chart5()
})
// Week Schedule
function chart1 () {
  var options = {
    series: [
      {
        name: 'Classes',
        type: 'column',
        data: [2, 0, 2, 1, 1] // Updated data for 'Attended'
      },
      {
        name: 'Attended',
        type: 'line',
        data: [1, 0, 1, 1, 1] // Updated data for 'Missed'
      }
    ],
    chart: {
      height: 350,
      type: 'line'
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: 0,
              to: 450,
              color: '#4F5BBC'
            },
            {
              from: 451,
              to: 500,
              color: '#E43630'
            },
            {
              from: 501,
              to: 800,
              color: '#E43630'
            }
          ]
        }
      }
    },
    legend: {
      show: true,
      labels: {
        colors: '#9aa0ac'
      }
    },
    stroke: {
      width: [0, 4]
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'], // Updated labels to show days of the week
    xaxis: {
      labels: {
        style: {
          colors: '#9aa0ac'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#9aa0ac'
        }
      }
    },
    tooltip: {
      theme: 'dark'
    }
  }

  var chart = new ApexCharts(document.querySelector('#chart1'), options)
  chart.render()
}
// Progress Rates
function chart2 () {
  var options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [
      {
        name: 'Class',
        data: [2, 0, 2, 1, 1]
      },
      {
        name: 'Lectures',
        data: [3, 0, 5, 0.5, 1.5]
      }
    ],
    legend: {
      show: true,
      labels: {
        colors: '#9aa0ac'
      }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
      labels: {
        style: {
          colors: '#9aa0ac'
        }
      }
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
        style: {
          color: '#9aa0ac'
        }
      },
      labels: {
        style: {
          colors: '#9aa0ac'
        }
      }
    },
    colors: ['#6973C6', '#FC8380'],
    tooltip: {
      theme: 'dark'
    }
  }

  var chart = new ApexCharts(document.querySelector('#chart2'), options)

  chart.render()
}
// Semester Scores
function chart3 () {
  var chart = document.getElementById('echart_graph_line')

  var barChart = echarts.init(chart)

  barChart.setOption({
    tooltip: {
      trigger: 'axis' // Trigger tooltips when hovering over an axis
    },

    legend: {
      textStyle: { color: '#9aa0ac' }, // Set the text color of the legend
      data: ['CATs', 'exams']
    },

    toolbox: {
      show: false
    },

    calculable: false,

    xAxis: [
      {
        type: 'category',
        data: ['Yr 1.1', 'Yr 1.2', 'Yr 2.1', 'Yr 2.2', 'Yr 3.1'],
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac' // Color of the x-axis labels
        }
      }
    ],

    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac'
        }
      }
    ],

    series: [
      {
        name: 'CATs',
        type: 'bar',
        data: [19.375, 23.64, 20, 16, 13],
        markPoint: {
          data: [
            {
              type: 'max',
              name: 'Max CATs'
            },
            {
              type: 'min',
              name: 'Min CATs'
            }
          ]
        },
        markLine: {
          data: [
            {
              type: 'average',
              name: 'Avg CATs'
            }
          ]
        }
      },
      {
        name: 'Exams',
        type: 'bar',
        data: [42, 44.36, 44, 35, 0],
        markPoint: {
          data: [
            {
              name: 'CATs',
              value: 20,
              xAxis: 7,
              yAxis: 40
            },
            {
              name: 'exams',
              value: 40,
              xAxis: 11,
              yAxis: 50
            }
          ]
        },
        markLine: {
          data: [
            {
              type: 'average',
              name: 'Avg exams'
            }
          ]
        }
      }
    ],

    // Color palette for the bars (CATs in blue, exams in green)
    color: ['#636FC3', '#00FF00']
  })
}
// Unit Priorities
function chart4 () {
  /* area line chart */
  var chart = document.getElementById('echart_area_line')
  var lineChart = echarts.init(chart)

  lineChart.setOption({
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: { color: '#9aa0ac' },
      data: ['Medium', 'Low', 'High']
    },
    toolbox: {
      show: false
    },
    calculable: false,
    xAxis: [
      {
        type: 'category',
        data: ['1.1', '1.2', '2.1', '2.2', '3.1'],
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac' // Color of x-axis labels
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontSize: 10,
          color: '#9aa0ac' // Color of y-axis labels
        }
      }
    ],
    series: [
      {
        name: 'Medium',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default' // Fill the area under the line
            }
          }
        },
        data: [2, 3, 4, 1, 2]
      },
      {
        name: 'Low',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default' // Fill the area under the line
            }
          }
        },
        data: [6, 2, 1, 2, 2]
      },
      {
        name: 'High',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default' // Fill the area under the line
            }
          }
        },
        data: [0, 1, 2, 3, 2]
      }
    ],
    color: [
      'rgba(102,119,239,0.6)', // Blueish color for Medium
      'rgba(251,110,28,0.6)', // Orangish color for Low
      'rgba(12,230,49,0.6)' // Greenish color for High
    ]
  })
}
// Expectation Scores
function chart5 () {
  var chartdata = [
    {
      name: 'Expected Score',
      type: 'bar',
      barMaxWidth: 10,
      data: [70, 65, 60, 55, 50]
    },

    {
      name: 'Actual Score',
      type: 'bar',
      barMaxWidth: 10,
      data: [61, 68, 54, 51, 0]
    }
  ]

  var chart = document.getElementById('echart_bar')
  var barChart = echarts.init(chart)

  var option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25'
    },
    xAxis: {
      data: ['Yr 1.1', 'Yr 1.2', 'Yr 2.1', 'Yr 2.2', 'Yr 3.1'],

      axisLabel: {
        fontSize: 10,
        color: '#9aa0ac'
      }
    },
    tooltip: {
      show: true,
      showContent: true,
      alwaysShowContent: false,
      triggerOn: 'mousemove',
      trigger: 'axis',
      axisPointer: {
        label: {
          show: false
        }
      }
    },
    yAxis: {
      axisLabel: {
        fontSize: 10,
        color: '#9aa0ac'
      }
    },
    series: chartdata,
    color: ['#9f78ff', '#32cafe']
  }

  barChart.setOption(option)
}
