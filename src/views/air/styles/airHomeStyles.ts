import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { Section } from '@/views/styles/appStyles';
import { device } from '@/styles/responsive';
import { SubNavigationProps, WeatherSubcategoryProps } from '../types/airTypes';

export const WeatherIconContainer = styled.li`
  margin: -15px 0px -40px;
`;

export const WeatherIconSubTileContainer = styled.li`
  margin: -15px 0px -50px;
`;

export const AirHomeContainer = styled.div`
  margin-top: 20px;

  @media ${device.tabletS} {
    margin-top: 5px;
  }
`;

export const AirSubTitleContainer = styled.section`
  display: flex;
  justify-content: space-between;

  @media ${device.tabletS} {
    margin: 15px 0 10px 0;
  }
`;

export const WeatherSubcategory = styled.ul<WeatherSubcategoryProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${(props: WeatherSubcategoryProps) => props.theme.air.weatherSubcategory.fontColor};
  border: ${(props: WeatherSubcategoryProps) => (
    props.isHighLight ? '3px' : '1px')} solid ${(props: WeatherSubcategoryProps) => (props.isHighLight ? props.theme.core.mainThemeColor : props.theme.air.weatherSubcategory.borderColor)};
  margin: 15px 10px;
  padding: 10px;
  background-color: ${(props: WeatherSubcategoryProps) => props.theme.air.weatherSubcategory.backgroundColor};
  box-shadow: ${(props: WeatherSubcategoryProps) => props.theme.core.basicShadow};
  border-radius: 3px;
  width: 230px;

  @media ${device.tabletS} {
    width: initial;
    min-width: 200px;
  }
  
  li {
    list-style: none;
  }
`;

export const Weather = styled.section`
  font-size: 12px;
  margin: 14px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  
  &.weather_data{
    border-top: #2F3436 solid 1px;
    color: #ccc;
    padding: 16px;
  }

  @media ${device.tabletS} {
    margin: 0;
    flex-direction: column;
    width: 100%;
  }
`;

export const WeatherTitle = styled.li<GlobalThemeType>`
  font-size: 17px;
  color: ${(props: GlobalThemeType) => props.theme.air.weatherTitle.color};
  padding: 0 5px 5px;
  border-bottom: ${(props: GlobalThemeType) => props.theme.air.weatherTitle.borderColor} solid 2px;
  text-align: center;
  letter-spacing: 3px;
`;

export const CurrentTemperature = styled.li`
  font-size: 32px;
  text-align: center;
`;

export const WeatherBlurb = styled.li`
  font-size: 14px;
  color: ${(props: GlobalThemeType) => props.theme.air.weatherTemperatureApparentColor};
  text-align: center;
`;

export const MoonPhase = styled.li`
  margin: 20px 20px 0 20px;
`;

export const MoonPhaseSummaryContainer = styled.div`
  margin-top: -10px;
  text-align: center;
`;

export const WeatherForecastTemperature = styled.li`
  color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.fontColor};
  font-size: 25px;
  margin: 5px;
  padding: 0;
  text-align: center;
`;

export const WeatherForecastTemperatureApparent = styled.li`
  font-size: 14px;
  color: ${(props: GlobalThemeType) => props.theme.air.weatherTemperatureApparentColor};
  margin: 20px 5px 5px 5px;
  padding: 5px;
  text-align: center;
`;

export const WeatherElement = styled.li`
  color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.fontColor};
  padding: 16px;
  
  :not(:nth-child(2)){
    border-top: #3d4650 solid 1px;
  }
`;

export const WeatherAlert = styled.span`
  margin-left: 10px;
  color: white;
  cursor: pointer;
  background-color: #bc2c2c;
  padding: 1px 5px;
  border-radius: 3px;
  font-weight: bold;
`;

export const WeatherChartSection = styled(Section)`
  max-width: 1385px;
  margin: 10px auto;
`;

export const WeatherChartSectionSummary = styled.figcaption`
  font-size: 14px;
`;

export const WeatherChartSectionHyperlink = styled.a`
  margin-left: 10px;
`;

export const WeatherForecastElement = styled(WeatherElement)`
  margin: 4px;
  padding: 4px;
`;

export const WeatherSubContainer = styled.section`
  padding: 10px;

  @media ${device.tabletS} {
    padding: 10px 0;
  }
`;

export const SubNavigationContainer = styled.nav<SubNavigationProps>`
  font-size: 12px;
  display: flex;
  justify-content: ${(props: SubNavigationProps) => props.justifyContent};
  margin: ${(props: SubNavigationProps) => props.margin || 'inherit'};
  gap: ${(props: SubNavigationProps) => props.gap || '0'};
  flex-wrap: wrap;

  @media ${device.tabletS} {
    margin-right: 5px;
  }
}
`;

export const WeatherTableContainer = styled.div`
  margin: 0 10px;

  @media ${device.tabletS} {
    margin: 0 5px;
  }
`;

export const WeatherTableNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WeatherTableNavTitle = styled.h1`
  @media ${device.tabletS} {
    display: none;
  }
`;
