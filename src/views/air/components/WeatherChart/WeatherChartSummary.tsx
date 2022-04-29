import React from 'react';
import { WeatherChartType } from '@/views/air/types/airTypes';
import {
  WeatherChartSectionHyperlink,
  WeatherChartSectionSummary,
} from '@/views/air/styles/airHomeStyles';

type WeatherChartSummaryProps = {
  descriptionType: WeatherChartType
}

type ChartWikiDescription = {
  summary: string,
  link: string,
}

export function WeatherChartSummary(props: WeatherChartSummaryProps) {
  const { descriptionType } = props;
  const oxidesSummary: ChartWikiDescription = {
    summary: 'There are many different types of air pollutants, such as gases including '
      + 'ammonia, carbon monoxide (CO), sulfur dioxide (SO2), nitrous oxides (NO2), methane, '
      + 'carbon dioxide and chlorofluorocarbons...',
    link: 'https://en.wikipedia.org/wiki/Air_pollution',
  };
  const pollenSummary: ChartWikiDescription = {
    summary: 'A pollen count is the measurement of the number of grains of pollen in a cubic '
      + 'meter of air. The pollen severity gives an idea of how problematic a given pollen count'
      + ' can be for people with allergic disorders...',
    link: 'https://en.wikipedia.org/wiki/Pollen_count',
  };
  const descriptionHeap: {[key: string]: ChartWikiDescription} = {
    temperature: {
      summary: 'Temperature is a physical quantity that expresses hot and cold. It is '
        + 'the manifestation of thermal energy, present in all matter, which is the source '
        + 'of the occurrence of heat, a flow of energy, when a body is in contact with another '
        + 'that is colder or hotter...',
      link: 'https://en.wikipedia.org/wiki/Temperature',
    },
    humidity: {
      summary: 'Humidity is the concentration of water vapour present in the air. Water vapor, '
        + 'the gaseous state of water, is generally invisible to the human eye. '
        + 'Humidity indicates the likelihood for precipitation, dew, or fog to be present...',
      link: 'https://en.wikipedia.org/wiki/Humidity',
    },
    precipitationProbability: {
      summary: 'A probability of precipitation (POP), also referred to as chance of '
        + 'precipitation or chance of rain, is a measure of the probability that at least '
        + 'some minimum quantity of precipitation will occur within a specified forecast period...',
      link: 'https://en.wikipedia.org/wiki/Probability_of_precipitation',
    },
    pressureSurfaceLevel: {
      summary: 'Atmospheric pressure, also known as barometric pressure (after the barometer), '
        + 'is the pressure within the atmosphere of Earth...',
      link: 'https://en.wikipedia.org/wiki/Atmospheric_pressure',
    },
    epaIndex: {
      summary: 'The Environmental Protection Agency (EPA) maintains test methods, '
        + 'which are approved procedures for measuring the presence and concentration of physical, '
        + 'chemical and biological contaminants; evaluating properties, such as toxic properties, '
        + 'of chemical substances...',
      link: 'https://en.wikipedia.org/wiki/EPA_Methods',
    },
    particulateMatter10: {
      summary: 'Particulate Matter (PM) '
        + 'are microscopic particles of solid or liquid matter suspended in the air. Sources of '
        + 'particulate matter can be natural or anthropogenic. Types of atmospheric particles '
        + 'include suspended inhalable coarse particles, designated PM10, which are coarse '
        + 'particles with a diameter of 10 micrometers (μm) or less...',
      link: 'https://en.wikipedia.org/wiki/Particulates',
    },
    particulateMatter25: {
      summary: 'Particulate Matter (PM) '
        + 'are microscopic particles of solid or liquid matter suspended in the air. Sources of '
        + 'particulate matter can be natural or anthropogenic. Types of atmospheric particles '
        + 'include particles, designated PM2.5, with a diameter of 2.5 μm or less...',
      link: 'https://en.wikipedia.org/wiki/Particulates',
    },
    pollutantCO: oxidesSummary,
    pollutantNO2: oxidesSummary,
    pollutantSO2: oxidesSummary,
    pollutantO3: {
      summary: 'Ozone can harm lung function and irritate the respiratory system. Exposure to '
        + 'ozone (and the pollutants that produce it) is linked to premature death, asthma, '
        + 'bronchitis, heart attack, and other cardiopulmonary problems...',
      link: 'https://en.wikipedia.org/wiki/Ozone',
    },
    grassIndex: pollenSummary,
    treeIndex: pollenSummary,
    weedIndex: pollenSummary,
  };

  return (
    <WeatherChartSectionSummary>
      {descriptionHeap[`${descriptionType}`].summary}
      <WeatherChartSectionHyperlink
        href={descriptionHeap[`${descriptionType}`].link}
        target="_blank"
      >
        {descriptionHeap[`${descriptionType}`].link}
      </WeatherChartSectionHyperlink>
    </WeatherChartSectionSummary>
  );
}
