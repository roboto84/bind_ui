import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import 'd3-time-format';
import { getStandardTimeObject } from '@/utils/formatting';
import { LineChartContainer } from '@/styles/chartStyle';
import { ScaleLinear, ScaleTime } from 'd3';
import { StandardTime } from '@/views/air/types/airTypes';
import { timeFormatMorph } from '@/utils/utils';

export type ChartData = {
  x: string,
  y: number,
}

export type D3ChartData = [number, number]

export type ChartObject = {
  chartData: ChartData[],
}

export type LineChartProps = {
  yAxisLabel: string,
  xAxisLabel: string,
  chartObject: ChartObject,
  yDomainRange ?: [number, number]
}

export function LineChart(props: LineChartProps) {
  const { xAxisLabel, yAxisLabel, yDomainRange, chartObject } = props;
  const d3Chart = useRef();
  const d3Container = useRef();

  useEffect(() => {
    const margin = { top: 30, right: 5, bottom: 40, left: 10 };
    const width = 1425 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;
    const data: D3ChartData[] = [];

    // Setup Date Parser
    const parseTime: Function = d3.timeParse('%Y-%m-%dT%H:%M:%S');

    // Compute data values
    chartObject.chartData.forEach((dataValue) => {
      data.push([+parseTime(timeFormatMorph(dataValue.x)), dataValue.y]);
    });

    const xType = d3.scaleUtc;
    const yType = d3.scaleLinear;
    const yMax: number = d3.max(data, (d) => d[1]);
    const yMin: number = d3.min(data, (d) => d[1]);
    const yDomainBuffer = (yMax - yMin) * 0.15;

    // Computer Range and Domain
    const xRange: number[] = [0, width];
    const yRange: number[] = [height, 0];
    const xDomain: [number, number] = d3.extent(data, (d) => d[0]);
    const yDomain: [number, number] = yDomainRange || [yMin - yDomainBuffer, yMax + yDomainBuffer];

    // Construct scales and axes.
    const xScale: ScaleTime<any, any> = xType(xDomain, xRange);
    const yScale: ScaleLinear<any, any> = yType(yDomain, yRange);
    const xAxis: d3.Axis<Date|d3.NumberValue> = d3.axisBottom(xScale)
      .ticks(width / 80).tickSizeOuter(0);
    const yAxis: d3.Axis<d3.NumberValue> = d3.axisLeft(yScale);

    // Construct a line generator.
    const valueLine: d3.Line<any> = d3.line()
      .curve(d3.curveLinear)
      .x((d) => xScale(d[0]))
      .y((d) => yScale(d[1]));

    // Setup tooltips
    const tooltip: d3.Selection<any, any, any, any> = d3.select(d3Container.current)
      .append('div')
      .attr('class', 'tooltip')
      .style('opacity', 0);

    const svg: d3.Selection<any, any, any, any> = d3.select(d3Chart.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .attr('viewBox', [0, 0, width - margin.left - margin.right - 40, height + margin.top + margin.bottom + 70])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    svg.append('path')
      .data([data])
      .attr('fill', 'none')
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-opacity', 1)
      .attr('d', valueLine);

    // Append tooltips to the graph
    svg.selectAll('dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'node')
      .attr('r', 5)
      .attr('cx', (d) => xScale(d[0]))
      .attr('cy', (d) => yScale(d[1]))
      .on('mouseover', (e) => {
        const dataPointDate: StandardTime = getStandardTimeObject(
          // eslint-disable-next-line no-underscore-dangle
          new Date(e.originalTarget.__data__[0]),
        );
        tooltip.transition()
          .duration(200)
          .style('opacity', 1);
        tooltip.html(
          // eslint-disable-next-line no-underscore-dangle
          `<div class="toolTipXValue">${dataPointDate.month}/${dataPointDate.date} ${dataPointDate.hour}:${dataPointDate.minute}</div><div class="toolTipYValue">${e.originalTarget.__data__[1]} ${yAxisLabel}</div>`,
        );
      })
      .on('mousemove', (e) => tooltip
        .style('top', `${e.y + 16}px`)
        .style('left', `${e.x + 16}px`))
      .on('mouseout', () => {
        tooltip.transition()
          .duration(200)
          .style('opacity', 0);
      });

    // Setup X-axis
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .attr('class', 'xAxis')
      .call(xAxis)
      .call((g) => g.append('text')
        .attr('class', 'axisLabel')
        .attr('x', 600)
        .attr('y', -(margin.bottom - 120))
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'start')
        .text(xAxisLabel));

    // Setup Y-axis
    svg.append('g')
      .attr('class', 'yAxis')
      .call(yAxis)
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('.tick line').clone()
        .attr('x2', width)
        .attr('stroke-opacity', 0.1))
      .call((g) => g.append('text')
        .attr('class', 'axisLabel')
        .attr('transform', 'rotate(-90)')
        .attr('x', -(margin.left) - 260)
        .attr('y', -80)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'start')
        .text(yAxisLabel));

    return () => {
      svg.remove();
    };
  }, [chartObject, xAxisLabel, yAxisLabel, yDomainRange]);

  return (
    <LineChartContainer ref={d3Container}>
      <svg className="d3-component" ref={d3Chart} />
    </LineChartContainer>
  );
}
