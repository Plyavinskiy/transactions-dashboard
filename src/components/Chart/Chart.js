import React, { useState, useCallback, useEffect } from "react";

import { Container, Button } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";

import {
  YEAR,
  MONTH,
  WEEK,
  inputLabels,
  INPUT_DATA_YEAR,
  INPUT_DATA_MONTH,
  INPUT_DATA_WEEK,
} from "../../constants";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const [activePeriod, setActivePeriod] = useState();
  const [activeChartData, setActiveChartData] = useState();

  const buttonProps = useCallback(
    (period) => {
      return {
        variant: "outlined",
        style: {
          textTransform: "none",
          borderColor: "#e0e0e0",
          backgroundColor: activePeriod === period ? "#f5f5f5" : "white",
          fontWeight: "inherit",
          color: "#000",
        },
      };
    },
    [activePeriod]
  );

  const onPeriodChange = useCallback((_, period) => {
    if (period === YEAR) {
      setActiveChartData(INPUT_DATA_YEAR.values);
    }

    if (period === MONTH) {
      setActiveChartData(INPUT_DATA_MONTH.values);
    }

    if (period === WEEK) {
      setActiveChartData(INPUT_DATA_WEEK.values);
    }

    setActivePeriod(period);
  });

  useEffect(() => {
    setActivePeriod(YEAR);
    setActiveChartData(INPUT_DATA_YEAR.values);
  }, []);

  return (
    <Container
      sx={{
        mt: 5,
        mb: 5,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div style={{ display: "flex" }}>
          <span>Spending over time</span>
          <div>
            <LensIcon
              sx={{
                width: "10px",
                height: "10px",
                h: 2,
                ml: 5,
                mr: 0.5,
                color: "#74e3a4",
              }}
            />
            <span>EFTs</span>
          </div>
          <div>
            <LensIcon
              sx={{
                width: "10px",
                height: "10px",
                ml: 3,
                mr: 0.5,
                color: "#abf0c5",
              }}
            />
            <span>EFTsCard payments</span>
          </div>
          <div>
            <LensIcon
              sx={{
                width: "10px",
                height: "10px",
                ml: 3,
                mr: 0.5,
                color: "#d4f8e0",
              }}
            />
            <span>International wires</span>
          </div>
        </div>
        <div>
          <Button
            {...buttonProps(YEAR)}
            onClick={(e) => onPeriodChange(e, YEAR)}
          >
            12 months
          </Button>
          <Button
            {...buttonProps(MONTH)}
            onClick={(e) => onPeriodChange(e, MONTH)}
          >
            30 days
          </Button>
          <Button
            {...buttonProps(WEEK)}
            onClick={(e) => onPeriodChange(e, WEEK)}
          >
            7 days
          </Button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={activeChartData}>
          <CartesianGrid
            vertical={false}
            stroke={"#757575"}
            strokeWidth={0.1}
          />
          <XAxis
            tickLine={false}
            axisLine={false}
            dataKey={INPUT_DATA_YEAR.dataKey}
          ></XAxis>
          <YAxis
            tickCount={7}
            axisLine={false}
            tick={true}
            hide={true}
            type="number"
          ></YAxis>
          <Tooltip />
          {inputLabels.map((label, index) => (
            <Bar
              key={index}
              dataKey={label.key}
              fill={label.color}
              stackId={INPUT_DATA_YEAR.dataKey}
              barSize={30}
              // radius={[5, 5, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Chart;
