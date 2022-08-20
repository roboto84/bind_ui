import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const LineChartContainer = styled.figure`
  display: flex;
  justify-content: center;
  
  .tooltip {
    position: absolute;
    text-align: left;
    font-size: 15px;
    background: ${(props: GlobalThemeType) => props.theme.chart.backgroundColor};
    border: solid ${(props: GlobalThemeType) => props.theme.chart.tooltip.borderColor} 1px;
    border-radius: 5px;
    pointer-events: none;
    box-shadow: ${(props: GlobalThemeType) => props.theme.core.basicShadow};
    
    .toolTipXValue{
      text-align: center;
      padding: 5px 10px;
      background-color: ${(props: GlobalThemeType) => props.theme.chart.tooltip.timeBgColor};
      color: ${(props: GlobalThemeType) => props.theme.chart.tooltip.timeColor};
    }
    
    .toolTipYValue{
      text-align: center;
      padding: 5px 10px;
      color: ${(props: GlobalThemeType) => props.theme.chart.tooltip.valueColor};
      font-size: 15px;
    }
  }
  
  .d3-component {
    border: solid ${(props: GlobalThemeType) => props.theme.chart.border} 3px;
    border-radius: 10px;
    stroke: ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
    stroke-width: 1px;
    background-color: ${(props: GlobalThemeType) => props.theme.chart.backgroundColor};
    
    .yAxis {
      font-size: 17px;
      stroke: ${(props: GlobalThemeType) => props.theme.chart.axisYFontColor};
    }

    .xAxis {
      font-size: 17px;
      stroke: ${(props: GlobalThemeType) => props.theme.chart.axisXFontColor};
    }
    
    .axisLabel{
      font-size: 25px;
      stroke: ${(props: GlobalThemeType) => props.theme.chart.axisLabelFontColor};
    }

    .chartTitle{
      font-size: 25px;
      stroke: ${(props: GlobalThemeType) => props.theme.chart.axisLabelFontColor};
      background-color: ${(props: GlobalThemeType) => props.theme.chart.backgroundColor}
    }

    .line {
      fill: none;
      stroke: ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
      stroke-width: 3px;
    }

    .node {
      fill: ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
      stroke: ${(props: GlobalThemeType) => props.theme.core.bgColor};
      stroke-width: 2px;
    }
  }
`;
