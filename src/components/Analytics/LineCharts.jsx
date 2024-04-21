import React from 'react';
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
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
// import faker from 'faker';

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
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};




const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
function LineCharts() {
    const list = useSelector((store) => store.counter.list);
    useSelector((state) => {console.log(state);})
    console.log(list);
    // Assuming each item in the list has a 'value' property for the chart
    // const labels = list.map((item) => item.id.toString()); // Adjust as necessary
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset from Redux',
                data: list, // Adjust as necessary
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Line options={options} data={data} />;

}


export default LineCharts