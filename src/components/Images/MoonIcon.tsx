import React from 'react';
import {
  WiMoonAltNew,
  WiMoonAltWaxingCrescent3,
  WiMoonAltFirstQuarter,
  WiMoonAltWaxingGibbous3,
  WiMoonAltFull,
  WiMoonAltWaningGibbous3,
  WiMoonAltThirdQuarter,
  WiMoonAltWaningCrescent3,
} from 'react-icons/wi';

export enum MoonPhaseEnum {
  New = 'New',
  WaxingCrescent = 'WaxingCrescent',
  FirstQuarter = 'FirstQuarter',
  WaxingGibbous = 'WaxingGibbous',
  Full = 'Full',
  WaningGibbous = 'WaningGibbous',
  ThirdQuarter = 'ThirdQuarter',
  WaningCrescent = 'WaningCrescent',
}

type MoonIconProps = {
  moonPhase: MoonPhaseEnum
  fontSize: string
}

type MoonIconCollection = {
  [MoonPhaseEnum.New]: JSX.Element,
  [MoonPhaseEnum.WaxingCrescent]: JSX.Element,
  [MoonPhaseEnum.FirstQuarter]: JSX.Element,
  [MoonPhaseEnum.WaxingGibbous]: JSX.Element,
  [MoonPhaseEnum.Full]: JSX.Element,
  [MoonPhaseEnum.WaningGibbous]: JSX.Element,
  [MoonPhaseEnum.ThirdQuarter]: JSX.Element,
  [MoonPhaseEnum.WaningCrescent]: JSX.Element,
}

export function MoonIcon(props: MoonIconProps) {
  const { moonPhase, fontSize } = props;
  const moonIcons: MoonIconCollection = {
    [MoonPhaseEnum.New]: <WiMoonAltNew />,
    [MoonPhaseEnum.WaxingCrescent]: <WiMoonAltWaxingCrescent3 />,
    [MoonPhaseEnum.FirstQuarter]: <WiMoonAltFirstQuarter />,
    [MoonPhaseEnum.WaxingGibbous]: <WiMoonAltWaxingGibbous3 />,
    [MoonPhaseEnum.Full]: <WiMoonAltFull />,
    [MoonPhaseEnum.WaningGibbous]: <WiMoonAltWaningGibbous3 />,
    [MoonPhaseEnum.ThirdQuarter]: <WiMoonAltThirdQuarter />,
    [MoonPhaseEnum.WaningCrescent]: <WiMoonAltWaningCrescent3 />,
  };
  return (
    <div style={{ fontSize: `${fontSize}`, textAlign: 'center' }}>
      {moonIcons[moonPhase]}
    </div>
  );
}
