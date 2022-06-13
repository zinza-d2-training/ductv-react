import * as React from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import faker from 'faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
            usePointStyle: true,
        },
        title: {
            display: true,
            text: 'Dữ liệu tiêm theo ngày',
            position: "top" as const,
            align: 'start' as const,
            color: '#000' as const,
            font: {
                weight: 'bold' as const,
                size: 25,
            },
        },
    },
};

const labels = [
    '04/05', '05/05', '06/05', '07/05', '08/05', '09/05', '10/05',
    '11/05', '12/05', '13/05', '14/05', '15/05', '16/05', '17/05',
    '18/05', '19/05', '20/05', '21/05', '22/05', '23/05', '24/05',
    '25/05', '26/05', '27/05', '28/05', '29/05', '30/05', '31/05',
];

export const data = {
    labels,
    datasets: [
        {
            label: 'Đã tiêm',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 700000 })),
            borderColor: '#281ba4',
            backgroundColor: '#281ba4',
            pointColor: '#e50404',
            pointRadius: 3,
            pointStyle: 'circle',
            pointBackgroundColor: '#e50404',
        }
    ],
};

const LineChart = () => {
    return (
        <Line options={options} data={data} />
    );
}

export default LineChart;
