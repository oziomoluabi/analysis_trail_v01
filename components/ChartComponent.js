'use client';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from 'recharts';

const chartComponents = {
  LineChart, BarChart
};

const seriesComponents = {
  Line, Bar
};

const ChartComponent = ({ data, chartType, series, title, description }) => {
    const Chart = chartComponents[chartType] || LineChart;

  return (
    <div className="bg-console-dark/50 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-inner border border-console-blue/50">
        <h3 className="text-xl font-bold text-console-cyan mb-1">{title}</h3>
        <p className="text-sm text-console-gray mb-6">{description}</p>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <Chart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a344d" />
                    <XAxis dataKey="name" stroke="#8892b0" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#8892b0" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#0d1a26', border: '1px solid #1a344d', borderRadius: '0.25rem' }}
                        labelStyle={{ color: '#66f4e1' }}
                        itemStyle={{ color: '#ccd6f6' }}
                    />
                    <Legend wrapperStyle={{fontSize: "14px"}}/>
                    {series.map((s, index) => {
                        const SeriesComponent = seriesComponents[s.type] || Line;
                        return <SeriesComponent key={index} {...s} />
                    })}
                </Chart>
            </ResponsiveContainer>
        </div>
    </div>
  );
};

export default ChartComponent;
