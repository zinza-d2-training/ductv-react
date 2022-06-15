import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 1
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  }
};

const labels: string[] = [
  'Kiên Giang',
  'Tây Ninh',
  'Sóc Trăng',
  'Hà Nội',
  'Hậu Giang',
  'Tiền Giang',
  'An Giang',
  'Bạc Liêu',
  'Bà Rịa-Vũng Tàu'
];

const data = {
  labels,
  datasets: [
    {
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold' as const
        }
      },
      label: 'tổng tiêm/ tỷ lệ phân bố',
      display: true,
      data: labels.map(() => faker.datatype.number({ min: 50, max: 160 })),
      borderColor: '#2f80ed',
      backgroundColor: '#2f80ed',
      fill: '0',
      barThickness: 18
    }
  ]
};

const MinBarChar = () => {
  return (
    <Bar
      options={options}
      data={data}
      plugins={[ChartDataLabels]}
      height="300px"
    />
  );
};

export default MinBarChar;
