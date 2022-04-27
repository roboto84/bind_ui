import React from 'react';
import { WeatherChartType } from '@/views/air/types/airTypes';
import { WeatherChartSectionSummary } from '@/views/air/styles/airHomeStyles';

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
    summary: 'Air pollution is the contamination of air due to the '
      + 'presence of substances in the atmosphere that are harmful to the health of humans '
      + 'and other living beings, or cause damage to the climate or to materials. There are '
      + 'many different types of air pollutants, such as gases (including ammonia, carbon '
      + 'monoxide, sulfur dioxide, nitrous oxides, methane, carbon dioxide and chlorofluorocarbons), '
      + 'particulates (both organic and inorganic), and biological molecules...',
    link: 'https://en.wikipedia.org/wiki/Air_pollution',
  };
  const pollenSummary: ChartWikiDescription = {
    summary: 'A pollen count is the measurement of the number of grains of pollen in a cubic '
      + 'meter of air. High pollen counts can sometimes lead to increased rates of allergic '
      + 'reaction for those with allergic disorders. Usually, the counts are announced for '
      + 'specific plants such as grass, ash, or olive. These are tailored to common plants '
      + 'in the measured areas. Mild winters with warmer days lead to an increase in pollen '
      + 'counts[1] while colder winters lead to delayed pollen release...',
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
        + 'the gaseous state of water, is generally invisible to the human eye.'
        + 'Humidity indicates the likelihood for precipitation, dew, or fog to be present...',
      link: 'ttps://en.wikipedia.org/wiki/Humidity',
    },
    precipitationProbability: {
      summary: 'A probability of precipitation (POP), also referred to as chance of '
        + 'precipitation or chance of rain, is a measure of the probability that at least '
        + 'some minimum quantity of precipitation will occur within a specified forecast period...',
      link: 'https://en.wikipedia.org/wiki/Probability_of_precipitation',
    },
    pressureSurfaceLevel: {
      summary: 'Atmospheric pressure, also known as barometric pressure (after the barometer), '
        + 'is the pressure within the atmosphere of Earth. The standard atmosphere (symbol: atm) '
        + 'is a unit of pressure defined as 101,325 Pa (1,013.25 hPa), which is equivalent to '
        + '1013.25 millibars (unit now deprecated), 760 mm Hg, 29.9212 inches Hg, or 14.696 '
        + 'psi. The atm unit is roughly equivalent to the mean sea-level atmospheric pressure '
        + 'on Earth; that is, the Earth\'s atmospheric pressure at sea level is approximately '
        + '1 atm...',
      link: 'https://en.wikipedia.org/wiki/Atmospheric_pressure',
    },
    epaIndex: {
      summary: 'The United States Environmental Protection Agency (EPA) maintains test methods, '
        + 'which are approved procedures for measuring the presence and concentration of physical, '
        + 'chemical and biological contaminants; evaluating properties, such as toxic properties, '
        + 'of chemical substances; or measuring the effects of substances under various conditions. '
        + 'The methods in the Agency index are known as EPA Methods. There are other types of '
        + 'methods such as the ASTM and United States Pharmacopeia, but the EPA Methods are the '
        + 'most widely accepted and used...',
      link: 'https://en.wikipedia.org/wiki/EPA_Methods',
    },
    particulateMatter10: {
      summary: 'Particulates – also known as atmospheric aerosol particles, atmospheric '
        + 'particulate matter, particulate matter (PM) or suspended particulate matter (SPM) – '
        + 'are microscopic particles of solid or liquid matter suspended in the air. The term '
        + 'aerosol commonly refers to the particulate/air mixture, as opposed to the particulate '
        + 'matter alone.[1] Sources of particulate matter can be natural or anthropogenic. '
        + 'They have impacts on climate and precipitation that adversely affect human health, '
        + 'in ways additional to direct inhalation. Types of atmospheric particles include '
        + 'suspended particulate matter; thoracic and respirable particles;[3] inhalable '
        + 'coarse particles, designated PM10, which are coarse particles with a diameter '
        + 'of 10 micrometers (μm) or less...',
      link: 'https://en.wikipedia.org/wiki/Particulates',
    },
    particulateMatter25: {
      summary: 'Particulates – also known as atmospheric aerosol particles, atmospheric '
        + 'particulate matter, particulate matter (PM) or suspended particulate matter (SPM) – '
        + 'are microscopic particles of solid or liquid matter suspended in the air. The term '
        + 'aerosol commonly refers to the particulate/air mixture, as opposed to the particulate '
        + 'matter alone. Sources of particulate matter can be natural or anthropogenic. '
        + 'They have impacts on climate and precipitation that adversely affect human health, '
        + 'in ways additional to direct inhalation. Types of atmospheric particles include'
        + ' particles, designated PM2.5, with a diameter of 2.5 μm or less...',
      link: 'https://en.wikipedia.org/wiki/Particulates',
    },
    pollutantCO: oxidesSummary,
    pollutantNO2: oxidesSummary,
    pollutantSO2: oxidesSummary,
    pollutantO3: {
      summary: 'There is a great deal of evidence to show that ground-level ozone can harm '
        + 'lung function and irritate the respiratory system. Exposure to ozone (and '
        + 'the pollutants that produce it) is linked to premature death, asthma, bronchitis, '
        + 'heart attack, and other cardiopulmonary problems...',
      link: 'https://en.wikipedia.org/wiki/Ozone',
    },
    grassIndex: pollenSummary,
    treeIndex: pollenSummary,
    weedIndex: pollenSummary,
  };

  return (
    <>
      <div>
        <a href={descriptionHeap[`${descriptionType}`].link}>
          {descriptionHeap[`${descriptionType}`].link}
        </a>
      </div>
      <WeatherChartSectionSummary>
        {descriptionHeap[`${descriptionType}`].summary}
      </WeatherChartSectionSummary>
    </>
  );
}
