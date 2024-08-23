/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Chart, ArcElement, Tooltip, Title, Plugin } from "chart.js";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/storage";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Title);

const getColor = (value: number, unit: string) => {
  switch (unit) {
    case "metric":
      return value <= 20
        ? "#00FF00"
        : value <= 50
        ? "#FFFF00"
        : value <= 70
        ? "#FF8C00"
        : value <= 90
        ? "#FF0000"
        : "#8A2BE2";
    case "imperial":
      return value <= 68
        ? "#00FF00"
        : value <= 104
        ? "#FFFF00"
        : value <= 140
        ? "#FF8C00"
        : value <= 176
        ? "#FF0000"
        : "#8A2BE2";
  }
};

const GaugeChart: React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const unit = useSelector((state: RootState) => state.weather.tempUnit);
  const [currentUnit, setCurrentUnit] = useState<string>(unit as string);
  //console.log(unit);

  useEffect(() => {
    setCurrentUnit(unit);
  }, [unit]);

  const getLabel = (unit: string) => {
    return unit === "metric"
      ? ["0", "20", "40", "60", "80", "100"]
      : ["32", "68", "104", "140", "176", "212"];
  };
  const unitTemp = currentUnit === "metric" ? "°C" : "°F";

  const currentTemperature = Math.round(
    forecast?.list[0].main.feels_like ? forecast.list[0].main.feels_like : 0
  );

  const color = getColor(currentTemperature, unit);
  const data = {
    datasets: [
      {
        data: [currentTemperature, 100 - currentTemperature],
        backgroundColor: [color, "rgba(0, 0, 0, 0.1)"],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    cutout: "70%",
    plugins: {
      tooltip: { enabled: false },
    },
    animation: {
      animateRotate: true,
    },
  };

  const gaugeText: Plugin<"doughnut"> = {
    id: "gaugeText",
    beforeDatasetsDraw(chart) {
      const {
        ctx,
        chartArea: { width },
      } = chart;
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;

      ctx.save();
      ctx.fillStyle = "black";
      ctx.font = "30px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(
        chart.data.datasets[0].data[0].toString() + unitTemp,
        xCenter,
        yCenter
      );

      ctx.fillStyle = "gray";
      ctx.font = "bold 12px sans-serif";

      const labels = getLabel(unit);
      const radius = width / 1.8;
      const angleStep = Math.PI / (labels.length - 1);
      const rotationOffset = Math.PI * 1;

      labels.forEach((label, index) => {
        const angle = angleStep * index - rotationOffset;
        const x = xCenter + radius * Math.cos(angle);
        const y = yCenter + radius * Math.sin(angle);
        ctx.fillText(label, x, y);
      });

      ctx.restore();
    },
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "170px",
    height: "150px",
    margin: "0 auto",
  };

  if (!forecast) return null;
  return (
    <div style={containerStyle}>
      <Doughnut data={data} options={options} plugins={[gaugeText]} />
    </div>
  );
};

export default GaugeChart;
