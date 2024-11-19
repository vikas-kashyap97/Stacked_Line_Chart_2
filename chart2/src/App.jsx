import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './Index.css';

const IrrChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          return params.map((item) => `${item.seriesName}: ${item.value}%`).join('<br/>');
        },
      },
      legend: {
        data: ['2017', '2018', '2019', '2020', '2021', '2022'],
        top: 60,
      },
      grid: {
        left: '10%',
        right: '10%',
        top: '15%',
        bottom: '10%',
      },
      xAxis: {
        type: 'category',
        name: 'Quarters since vintage inception',
        nameLocation: 'middle',
        nameGap: 30,
        data: Array.from({ length: 29 }, (_, i) => i),
        axisLine: {
          show: true,
        },
      },
      yAxis: {
        type: 'value',
        name: 'Median IRR by vintage overtime',
        nameGap: 35,
        nameTextStyle: {
          padding: [0, 0, 0, 600],
          align: 'center',
          fontSize: 15,
        },
        axisLabel: {
          formatter: '{value}%',
          interval: 1,
        },
        axisTick: {
          interval: 1,  
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
          },
          min: 0,
          max: 30,
          axisLabel: {
            formatter: function (value) {
              return value + '%';
            },
          },
          splitNumber: 6,
        },
      },
      series: [
        {
          name: '2017',
          type: 'line',
          data: [null, null, null, null, null, null, null, null, null, null, 0, 0, 2, 5, 8, 12, 15, 21, 22, 21, 19, 17, 16, 15, 14],
          lineStyle: { width: 2 },
          color: '#FFA500',
          animationDuration: 2000,
          animationDelay: (idx) => idx * 100,
        },
        {
          name: '2018',
          type: 'line',
          data: [null, null, null, null, null, 0, 0, 1, 3, 6, 10, 15, 18, 22, 24, 20, 17, 15, 13, 11, 10],
          lineStyle: { width: 2 },
          color: '#8B4513',
          animationDuration: 2000,
          animationDelay: (idx) => idx * 100,
        },
        {
          name: '2019',
          type: 'line',
          data: [0, 0, 0, 0, 0, 0, 0, 14, 14, 15, 20, 17, 15, 13, 11, 9, 8],
          lineStyle: { width: 2 },
          color: '#1E90FF',
          animationDuration: 2000,
          animationDelay: (idx) => idx * 100,
        },
        {
          name: '2020',
          type: 'line',
          data: [0, 0, -1, -2, 0, 2, 4, 5, 6, 5, 4, 4],
          lineStyle: { width: 2 },
          color: '#000080',
          animationDuration: 2000,
          animationDelay: (idx) => idx * 100,
        },
        {
          name: '2021',
          type: 'line',
          data: [-2, -5, -8, -7, -4, -2, -1, 0],
          lineStyle: { width: 2 },
          color: '#4169E1',
          animationDuration: 2000,
          animationDelay: (idx) => idx * 100,
        },
        {
          name: '2022',
          type: 'line',
          data: [-11, -15, -15, -12, -9, -6, -4],
          lineStyle: { width: 2 },
          color: '#000000',
          animationDuration: 2000,
          animationDelay: (idx) => idx * 100,
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      {/* Title and Subtext as Heading Above Both Chart and Data Table */}
      <div className="chart-heading">
        <h1>Median IRR in vintage year 2021 trails earlier vintages</h1>
        <p>Median net IRR by vintage year by quarters since inception | Vintage years 2017-2022 | Data as of Q1 2024</p>
      </div>
      <div className="chart-and-table">
        <div className="chart" ref={chartRef}></div>
        <div className="vertical-line"></div>
        <div className="data-table">
          <h3>Median IRR at select points</h3>
          <table>
            <thead>
              <tr>
                <th>Vintage</th>
                <th>4</th>
                <th>8</th>
                <th>12</th>
                <th>16</th>
                <th>20</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2017</td>
                <td>n/a*</td>
                <td>n/a</td>
                <td>0.4%</td>
                <td>9.8%</td>
                <td>21.3%</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>n/a</td>
                <td>n/a</td>
                <td>1.4%</td>
                <td>24.4%</td>
                <td>17.2%</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>-1.2%</td>
                <td>0.0%</td>
                <td>19.4%</td>
                <td>13.3%</td>
                <td>8.1%</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>0.0%</td>
                <td>13.5%</td>
                <td>7.2%</td>
                <td>4.1%</td>
                <td></td>
              </tr>
              <tr>
                <td>2021</td>
                <td>-6.0%</td>
                <td>-3.5%</td>
                <td>-1.5%</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2022</td>
                <td>-12.0%</td>
                <td>-5.8%</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IrrChart;