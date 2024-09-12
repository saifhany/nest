export async function generateBarChart(
  data: { name: string; value: number }[],
): Promise<string> {
  const d3 = (await import('d3')).default;
  const width = 500;
  const height = 300;
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.1);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value) || 0])
    .nice()
    .range([innerHeight, 0]);

  const svg = d3
    .create('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  svg
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d) => xScale(d.name) || 0)
    .attr('y', (d) => yScale(d.value))
    .attr('width', xScale.bandwidth())
    .attr('height', (d) => innerHeight - yScale(d.value));

  svg
    .append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale));

  svg.append('g').attr('class', 'y-axis').call(d3.axisLeft(yScale));

  return svg.node()?.outerHTML || '';
}
