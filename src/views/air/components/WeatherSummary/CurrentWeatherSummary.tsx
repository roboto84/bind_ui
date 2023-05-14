import React from 'react';
import { MoonIcon, MoonPhaseEnum } from '@/components/Images/MoonIcon';
import {
  WeatherConditionEnum,
  WeatherConditionIcon,
} from '@/components/Images/WeatherConditionIcon';
import { getLocalStandardDateTime, removeSpaces } from '@/utils/formatting';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { FromNowType, getTimeFromNow } from '@/utils/fromNowUtil';
import {
  pollenMaxConcern,
  pollenSeverityView,
  precipitationTypeView,
  pressureConcern,
} from '../../utils';
import {
  CurrentWeatherProps,
  PollenSeverity,
  WeatherAlertSummary,
} from '../../types/airTypes';
import {
  CurrentTemperature,
  MoonPhase,
  MoonPhaseSummaryContainer,
  Weather,
  WeatherAlert,
  WeatherBlurb,
  WeatherElement,
  WeatherIconContainer,
  WeatherSubcategory,
  WeatherTitle,
} from '../../styles/airHomeStyles';

export function CurrentWeatherSummary(props: CurrentWeatherProps) {
  const navigate: NavigateFunction = useNavigate();
  const { currentWeatherReport, previousWeatherReport, weatherUnits } = props;
  const { temperature, temperatureApparent, precipitationType, weatherCode,
    precipitationProbability, humidity, dewPoint, epaIndex, epaHealthConcern,
    pressureSurfaceLevel, treeIndex, grassIndex, weedIndex } = currentWeatherReport;

  const pollenMax: PollenSeverity = pollenMaxConcern(treeIndex, grassIndex, weedIndex);
  const pollenSeveritySummary: string = pollenSeverityView(pollenMax.severity);
  const pressureSummary: WeatherAlertSummary = pressureConcern(
    currentWeatherReport.pressureSurfaceLevel,
    previousWeatherReport.pressureSurfaceLevel,
  );
  const moonPhase: MoonPhaseEnum = removeSpaces(currentWeatherReport.moonPhase) as MoonPhaseEnum;
  const weatherState: WeatherConditionEnum = removeSpaces(
    weatherCode,
  ) as WeatherConditionEnum;
  const dateView: FromNowType = getTimeFromNow(currentWeatherReport.date);

  return (
    <Weather>
      <WeatherSubcategory>
        <CurrentTemperature>{temperature} {weatherUnits.temperature}</CurrentTemperature>
        <WeatherIconContainer>
          <WeatherConditionIcon weatherCondition={weatherState} fontSize="104px" />
        </WeatherIconContainer>
        <WeatherBlurb>
          {weatherCode}...
          feels like {temperatureApparent} {weatherUnits.temperatureApparent}
        </WeatherBlurb>
        <WeatherBlurb>{dateView.value} {dateView.unit} ago</WeatherBlurb>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>moon</WeatherTitle>
        <MoonPhase>
          <div><MoonIcon moonPhase={moonPhase} fontSize="85px" /></div>
          <MoonPhaseSummaryContainer>
            {currentWeatherReport.moonPhase} Moon
          </MoonPhaseSummaryContainer>
        </MoonPhase>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>water</WeatherTitle>
        <WeatherElement>
          {`${precipitationProbability} ${weatherUnits.precipitationProbability} 
          Chance of ${precipitationTypeView(precipitationType)}`}
        </WeatherElement>
        <WeatherElement>{humidity} {weatherUnits.humidity} Humidity</WeatherElement>
        <WeatherElement>{dewPoint} {weatherUnits.dewPoint} Dew Point</WeatherElement>
      </WeatherSubcategory>
      <WeatherSubcategory>
        <WeatherTitle>air</WeatherTitle>
        <WeatherElement>
          {epaHealthConcern} Air Quality ({epaIndex} {weatherUnits.epaIndex})
        </WeatherElement>
        <WeatherElement>
          <span>{pressureSurfaceLevel} {weatherUnits.pressureSurfaceLevel} Pressure</span>
          {
            pressureSummary.message !== ''
              ? (
                <WeatherAlert
                  title={pressureSummary.reason.concat(' ', weatherUnits.pressureSurfaceLevel)}
                  onClick={() => navigate('/air/data/charts/pressure')}
                >{pressureSummary.message}
                </WeatherAlert>
              )
              : ''
          }
        </WeatherElement>
        <WeatherElement>
          {
            `${pollenMax.pollenType.toUpperCase()} pollen is`
          }
          {
            pollenMax.severity > 2
              ? (
                <WeatherAlert
                  title="Pollen Alert"
                  onClick={() => navigate(`/air/data/charts/pollen_${pollenMax.pollenType}`)}
                >{pollenSeveritySummary}
                </WeatherAlert>
              )
              : ` ${pollenSeveritySummary}`
          }
        </WeatherElement>
      </WeatherSubcategory>
    </Weather>
  );
}
