import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';

const CarStatsPieChart = () => {
  const carStaticsData = [
    { name: 'Week', value: 75 },
    { name: 'Prev Week', value: 25 },
  ];

  const COLORS = ['#8884d8', '#82ca9d'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={carStaticsData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
          animationBegin={0} // Animation starts when the component mounts
          animationDuration={1000} // Animation duration in milliseconds
        >
          {carStaticsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CarStatsPieChart;
