export function precipitationTypeView(precipitationType: string): string {
  return precipitationType !== 'N/A' ? precipitationType : 'Rain';
}

export function pollenSeverityView(pollenSeverityNumber:number):string {
  const pollenSeverityLegend: { [key: number]: string } = {
    0: 'None',
    0.5: 'Extremely Low',
    1: 'Very Low',
    1.5: 'Very Low',
    2: 'Low',
    2.5: 'Low',
    3: 'Medium',
    3.5: 'Medium',
    4: 'High',
    4.5: 'Very High',
    5: 'Extremely High',
  };
  return pollenSeverityLegend[pollenSeverityNumber];
}

export function pollenMaxConcern(treePollen:number, grassPollen:number, weedPollen:number) {
  return Math.max(treePollen, grassPollen, weedPollen);
}
