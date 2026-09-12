import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from '@mui/material';
const Pie = ({ data }) => {
    const theme = useTheme();
  return (
    <Box sx={{ height: "75vh" }}>
   <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    arcLinkLabel={() => "20%"}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor={theme.palette.text.primary}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
     theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1
              }
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary
              }
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary
              }
            }
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1
            }
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary
              }
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary
              }
            }
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1
            }
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {}
          }
        }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: "ruby"
        },
        id: "dots"
      },
      {
        match: {
          id: "c"
        },
        id: "dots"
      },
      {
        match: {
          id: "go"
        },
        id: "dots"
      },
      {
        match: {
          id: "python"
        },
        id: "dots"
      },
      {
        match: {
          id: "scala"
        },
        id: "lines"
      },
      {
        match: {
          id: "lisp"
        },
        id: "lines"
      },
      {
        match: {
          id: "elixir"
        },
        id: "lines"
      },
      {
        match: {
          id: "javascript"
        },
        id: "lines"
      }
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: theme.palette.text.primary,
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
      }
    ]}
  />
    </Box>
  );
};

export default Pie;
