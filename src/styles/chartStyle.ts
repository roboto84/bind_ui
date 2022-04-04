import styled from 'styled-components';
import { GlobalThemeType } from '@/types';

export const LineChartContainer = styled.div`
  display: flex;
  justify-content: center;
  
  .tooltip {
    position: absolute;
    text-align: left;
    padding: 10px;
    font-size: 15px;
    background: ${(props: GlobalThemeType) => props.theme.core.bgColor};
    border: solid #b2b2b2 2px;
    border-radius: 3px;
    pointer-events: none;
    
    .toolTipXValue{
      color: ${(props: GlobalThemeType) => props.theme.core.mainThemeColor};
    }
    
    .toolTipYValue{
      font-size: 15px;
    }
  }
  
  .d3-component {
    border: solid ${(props: GlobalThemeType) => props.theme.chart.border} 3px;
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
