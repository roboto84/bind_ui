import { AppDescription } from '@/views/home/styles/homeStyles';
import React from 'react';
import { AppSummaryType } from '@/views/home/types/homeTypes';
import { appSummaries } from '../utils/appSummaries';

type AppSummaryProps = {
  summaryType: AppSummaryType
}
export default function AppSummary(props: AppSummaryProps) {
  const { summaryType } = props;
  return (
    <AppDescription>
      {appSummaries[summaryType].summary}
    </AppDescription>
  );
}
