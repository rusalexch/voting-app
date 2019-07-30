import React from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import { renderCustomizedLabel } from '../../utils';
import { COLORS } from '../../constants';
import { consumer } from '../data-context';
import PropTypes from 'prop-types';

export function PieChartVotes({ data }) {
  return (
    <PieChart className="w-100 text-center" width={400} height={400}>
      <Pie
        data={data}
        dataKey="votes"
        nameKey="name"
        cx="50%"
        cy="50%"
        startAngle={90}
        endAngle={450}
        outerRadius={200}
        fill="#8884d8"
        labelLine={false}
        label={renderCustomizedLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

PieChartVotes.propTypes = {
  data: PropTypes.array
};

export default consumer()(PieChartVotes);
