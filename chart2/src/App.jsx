"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./index.css";

const IrrChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
        formatter: function (params) {
          return params
            .map((item) => `${item.seriesName}: ${item.value}%`)
            .join("<br/>");
        },
      },
      legend: {
        data: ["2017", "2018", "2019", "2020", "2021", "2022"],
        top: 60,
      },
      grid: {
        left: "8%", 
        right: "1%",
        top: "5%",
        bottom: "15%",
      },
      xAxis: {
        type: "category",
        name: "Quarters since vintage inception",
        nameLocation: "middle",
        nameGap: 40, // Increased gap for better spacing
        data: Array.from({ length: 29 }, (_, i) => i),
        axisLine: { show: true },
        axisLabel: {
          fontSize: 14, 
          interval: 0, 
        },
      },
      yAxis: {
        type: "value",
        name: "Median IRR by vintage overtime",
        nameGap: 50, // Increased gap for the yAxis title
        nameTextStyle: {
          fontSize: 18, // Larger font for emphasis
        },
        axisLabel: {
          fontSize: 14, // Larger label font size
          formatter: "{value}%",
        },interval: 5,
        splitLine: {
          show: true,
          lineStyle: { type: "dashed" },
        },
        axisLine: { show: true },
      },
      series: [
        {
          type: "line",
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            0,
            0,
            2,
            5,
            8,
            12,
            15,
            23,
            21,
            22,
            19,
            18.5,
            18.5,
            16.8,
            16.5,
            16.4,
            16.3,
            16.1,
          ],
          lineStyle: { width: 2 },
          color: "#FFA500",
          endLabel: {
            show: true,
            formatter: "2017",
            color: "#FFA500",
          },
        },
        {
          type: "line",
          data: [
            null,
            null,
            null,
            null,
            null,
            0,
            0,
            0,
            0,
            1,
            3,
            6,
            5,
            24,
            23,
            22,
            20,
            19.5,
            18.5,
            17.5,
            15.5,
            15.3,
          ],
          lineStyle: { width: 2 },
          color: "#8B4513",
          endLabel: {
            show: true,
            formatter: "2018",
            color: "#8B4513",
          },
        },
        {
          type: "line",
          data: [
            0, 0, 0, 0, 0, 0, 0, 1, 15, 14, 12, 13.5, 11, 10.8, 10.7, 10.6, 9.5,
            8.5, 8.3,
          ],
          lineStyle: { width: 2 },
          color: "#1E90FF",
          endLabel: {
            show: true,
            formatter: "2019",
            color: "#1E90FF",
          },
        },
        {
          type: "line",
          data: [0, 0, -1, -2, 0, 11, 10, 11, 8, 7, 6, 5, 4],
          lineStyle: { width: 2 },
          color: "#000080",
          endLabel: {
            show: true,
            formatter: "2020",
            color: "#000080",
          },
        },
        {
          type: "line",
          data: [-2, -5, -3, -7, -6, -5, -3, -4, -3.5, -3.4, -3.2, -3.1],
          lineStyle: { width: 2 },
          color: "#4169E1",
          endLabel: {
            show: true,
            formatter: "2021",
            color: "#4169E1",
          },
        },
        {
          type: "line",
          data: [-11, -15, -14, -15, -11, -8, -7, -6, -5],
          lineStyle: { width: 2 },
          color: "#000000",
          endLabel: {
            show: true,
            formatter: "2022",
            color: "#000000",
          },
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div className="chart-heading">
        <h1>Median IRR in vintage year 2021 trails earlier vintages</h1>
        <p>
          Median net IRR by vintage year by quarters since inception | Vintage
          years 2017-2022 | Data as of Q1 2024
        </p>
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
