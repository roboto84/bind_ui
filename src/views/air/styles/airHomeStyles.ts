import styled from 'styled-components';
import { GlobalThemeType } from '@/types';
import { SubNavigationProps, WeatherSubcategoryProps } from '../types/airTypes';

export const WeatherIconContainer = styled.div`
  margin: -20px 0 -58px 0;
`;

export const WeatherIconSubTileContainer = styled.div`
  margin: -24px 0 -52px 0;
`;

export const WeatherElement = styled.div`
  border-bottom: #2F3436 solid 1px;
  color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.fontColor};
  padding: 16px;
`;

export const AirHomeContainer = styled.div`
  margin-top: 20px;
`;

export const WeatherSubcategory = styled.div<WeatherSubcategoryProps>`
  color: ${(props: WeatherSubcategoryProps) => props.theme.air.weatherSubcategory.fontColor};
  border: 6px solid ${(props: WeatherSubcategoryProps) => (
    props.isHighLight ? props.theme.core.mainThemeColor : props.theme.air.weatherSubcategory.borderColor)};
  margin: 20px 20px 20px 20px;
  flex-direction: column;
  background-color: ${(props: WeatherSubcategoryProps) => props.theme.air.weatherSubcategory.backgroundColor};
  border-radius: 3px;
`;

export const Weather = styled.div`
  font-size: 13px;
  height: 85%;
  width: 95%;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  
  &.weather_data{
    border-top: #2F3436 solid 1px;
    color: #ccc;
    padding: 16px;
  }
`;

export const WeatherTitle = styled.div`
  font-size: 18px;
  color: #535353;
  padding: 5px;
  border-bottom: #2F3436 solid 4px;
  text-align: center;
  letter-spacing: 3px;
`;

export const CurrentTemperature = styled.div`
  font-size: 35px;
  margin: 0 30px 7px 30px;
  text-align: center;
`;

export const WeatherBlurb = styled.div`
  margin: 0 20px;
  font-size: 18px;
  color: #737373;
  text-align: center;
`;

export const MoonPhase = styled.div`
  margin: 20px 20px 0 20px;
`;

export const MoonPhaseSummaryContainer = styled.div`
  margin-top: -10px;
  text-align: center;
`;

export const WeatherForecastTemperature = styled.div`
  color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.fontColor};
  font-size: 25px;
  margin: 5px;
  padding: 0;
  text-align: center;
`;

export const WeatherForecastTemperatureApparent = styled.div`
  font-size: 14px;
  color: #737373;
  margin: 20px 5px 5px 5px;
  padding: 5px;
  text-align: center;
`;

export const WeatherForecastElement = styled.div`
  border-top: #2F3436 solid 1px;
  color: ${(props: GlobalThemeType) => props.theme.air.weatherSubcategory.fontColor};
  margin: 4px;
  padding: 4px;
`;

export const WeatherSubContainer = styled.div`
  margin-top: 20px;
`;

export const SubNavigation = styled.div<SubNavigationProps>`
  display: flex;
  justify-content: ${(props: SubNavigationProps) => props.justifyContent};
  margin: ${(props: SubNavigationProps) => props.margin};
`;

export const WeatherTableContainer = styled.div`
  margin: 0 20px;
`;
