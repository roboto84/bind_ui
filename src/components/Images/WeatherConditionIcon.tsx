import React from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiAlien,
  WiDayCloudy,
  WiDaySunnyOvercast,
  WiDayFog,
  WiFog,
  WiDayLightWind,
  WiDayWindy,
  WiStrongWind,
  WiSprinkle,
  WiRain,
  WiDayRain,
  WiStormShowers,
  WiSnow,
  WiDaySnow,
  WiSnowflakeCold,
  WiRainMix,
  WiRainWind,
  WiHail,
} from 'react-icons/wi';

export enum WeatherConditionEnum {
  Unknown = 'Unknown',
  Clear = 'Clear',
  Cloudy = 'Cloudy',
  MostlyClear = 'MostlyClear',
  PartlyCloudy = 'PartlyCloudy',
  MostlyCloudy = 'MostlyCloudy',
  Fog = 'Fog',
  LightFog = 'LightFog',
  LightWind = 'LightWind',
  Wind = 'Wind',
  StrongWind = 'StrongWind',
  Drizzle = 'Drizzle',
  Rain = 'Rain',
  LightRain = 'LightRain',
  HeavyRain = 'HeavyRain',
  Snow = 'Snow',
  Flurries = 'Flurries',
  LightSnow = 'LightSnow',
  HeavySnow = 'HeavySnow',
  FreezingDrizzle = 'FreezingDrizzle',
  FreezingRain = 'FreezingRain',
  LightFreezingRain = 'LightFreezingRain',
  HeavyFreezingRain = 'HeavyFreezingRain',
  IcePellets = 'IcePellets',
  HeavyIcePellets = 'HeavyIcePellets',
  LightIcePellets = 'LightIcePellets',
  Thunderstorm = 'Thunderstorm',
}

type WeatherConditionIconProps = {
  weatherCondition: WeatherConditionEnum
  fontSize: string
}

type WeatherConditionCollection = {
  [WeatherConditionEnum.Unknown]: JSX.Element,
  [WeatherConditionEnum.Clear]: JSX.Element,
  [WeatherConditionEnum.Cloudy]: JSX.Element,
  [WeatherConditionEnum.MostlyClear]: JSX.Element,
  [WeatherConditionEnum.PartlyCloudy]: JSX.Element,
  [WeatherConditionEnum.MostlyCloudy]: JSX.Element,
  [WeatherConditionEnum.Fog]: JSX.Element,
  [WeatherConditionEnum.LightFog]: JSX.Element,
  [WeatherConditionEnum.LightWind]: JSX.Element,
  [WeatherConditionEnum.Wind]: JSX.Element,
  [WeatherConditionEnum.StrongWind]: JSX.Element,
  [WeatherConditionEnum.Drizzle]: JSX.Element,
  [WeatherConditionEnum.Rain]: JSX.Element,
  [WeatherConditionEnum.LightRain]: JSX.Element,
  [WeatherConditionEnum.HeavyRain]: JSX.Element,
  [WeatherConditionEnum.Snow]: JSX.Element,
  [WeatherConditionEnum.Flurries]: JSX.Element,
  [WeatherConditionEnum.LightSnow]: JSX.Element,
  [WeatherConditionEnum.HeavySnow]: JSX.Element,
  [WeatherConditionEnum.FreezingDrizzle]: JSX.Element,
  [WeatherConditionEnum.FreezingRain]: JSX.Element,
  [WeatherConditionEnum.LightFreezingRain]: JSX.Element,
  [WeatherConditionEnum.HeavyFreezingRain]: JSX.Element,
  [WeatherConditionEnum.IcePellets]: JSX.Element,
  [WeatherConditionEnum.HeavyIcePellets]: JSX.Element,
  [WeatherConditionEnum.LightIcePellets]: JSX.Element,
  [WeatherConditionEnum.Thunderstorm]: JSX.Element,
}

export function WeatherConditionIcon(props: WeatherConditionIconProps) {
  const { weatherCondition, fontSize } = props;
  const weatherConditionIcons: WeatherConditionCollection = {
    [WeatherConditionEnum.Unknown]: <WiAlien />,
    [WeatherConditionEnum.Clear]: <WiDaySunny />,
    [WeatherConditionEnum.Cloudy]: <WiCloudy />,
    [WeatherConditionEnum.MostlyClear]: <WiDaySunnyOvercast />,
    [WeatherConditionEnum.PartlyCloudy]: <WiDayCloudy />,
    [WeatherConditionEnum.MostlyCloudy]: <WiCloudy />,
    [WeatherConditionEnum.Fog]: <WiFog />,
    [WeatherConditionEnum.LightFog]: <WiDayFog />,
    [WeatherConditionEnum.LightWind]: <WiDayLightWind />,
    [WeatherConditionEnum.Wind]: <WiDayWindy />,
    [WeatherConditionEnum.StrongWind]: <WiStrongWind />,
    [WeatherConditionEnum.Drizzle]: <WiSprinkle />,
    [WeatherConditionEnum.Rain]: <WiRain />,
    [WeatherConditionEnum.LightRain]: <WiDayRain />,
    [WeatherConditionEnum.HeavyRain]: <WiStormShowers />,
    [WeatherConditionEnum.Snow]: <WiSnow />,
    [WeatherConditionEnum.Flurries]: <WiDaySnow />,
    [WeatherConditionEnum.LightSnow]: <WiDaySnow />,
    [WeatherConditionEnum.HeavySnow]: <WiSnowflakeCold />,
    [WeatherConditionEnum.FreezingDrizzle]: <WiRainMix />,
    [WeatherConditionEnum.FreezingRain]: <WiRain />,
    [WeatherConditionEnum.LightFreezingRain]: <WiRainMix />,
    [WeatherConditionEnum.HeavyFreezingRain]: <WiRainWind />,
    [WeatherConditionEnum.IcePellets]: <WiHail />,
    [WeatherConditionEnum.HeavyIcePellets]: <WiHail />,
    [WeatherConditionEnum.LightIcePellets]: <WiHail />,
    [WeatherConditionEnum.Thunderstorm]: <WiStormShowers />,
  };
  return (
    <div style={{ fontSize: `${fontSize}`, textAlign: 'center' }}>
      {weatherConditionIcons[weatherCondition]}
    </div>
  );
}
