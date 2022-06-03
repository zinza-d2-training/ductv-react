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

const labels = ['Thái Nguyên', 'Hà Tĩnh', 'Nam Định', 'Sơn La', 'Hải Dương', 'Thanh Hóa', 'Điện Biên', 'Bắc Giang', 'Bắc Ninh'];

export const data = {
    labels,
    datasets: [
        {
            label: '10 địa phương có tỷ lệ tiêm cao nhất',
            display: false,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 250 })),
            borderColor: '#281ba4',
            backgroundColor: '#281ba4',
        },
    ],
};

const MaxBarChar = () => {
    return <Bar options={options} data={data} />;
}


export default MaxBarChar;