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
            borderWidth: 1,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        }
    },
};

const labels = ['Thái Nguyên', 'Hà Tĩnh', 'Nam Định', 'Sơn La', 'Hải Dương', 'Thanh Hóa', 'Điện Biên', 'Bắc Giang', 'Bắc Ninh'];

const data = {
    labels,
    datasets: [
        {
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold' as const,
                }
            },
            label: 'tổng tiêm/ tỷ lệ phân bố',
            display: true,
            data: labels.map(() => faker.datatype.number({ min: 50, max: 250 })),
            borderColor: '#281ba4',
            backgroundColor: '#281ba4',
            fill: '0',
            barThickness: 18,
        },
    ],
};

const MaxBarChar = () => {
    return <Bar options={options} data={data} plugins={[ChartDataLabels]} height={"300px"} />;
}


export default MaxBarChar;