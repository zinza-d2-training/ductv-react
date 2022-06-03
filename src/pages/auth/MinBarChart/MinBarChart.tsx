import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
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
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right' as const,
        },
        title: {
            display: false,
        },
    },
};

const labels = ['Kiên Giang', 'Tây Ninh', 'Sóc Trăng', 'Hà Nội', 'Hậu Giang', 'Tiền Giang', 'An Giang', 'Bạc Liêu', 'Bà Rịa-Vũng Tàu'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            hidden: true,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 160 })),
            borderColor: '#2f80ed',
            backgroundColor: '#2f80ed',
            fill: '0'
        },
    ],
};

const MinBarChar = () => {
    return <Bar options={options} data={data} />;
}


export default MinBarChar;