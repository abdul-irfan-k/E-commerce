import React from 'react'
import { Line } from 'react-chartjs-2'

const Linechartcomponent = () => {
    const option = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                ticks: {
                    color: 'white'
                }
            }
        },

    };
    const labels = ['0-3', '4-7','4-7','4-7','4-7','4-7','4-7','4-7','4-7','4-7','4-7','4-7','4-7','4-7', ]
    const data = {
        labels,
        datasets: [
            {
                data: [10, 40, 60, 30, 70, 20, 45,30,40,40,65,24,40,50,20],
                backgroundColor: '#FFF',
                borderColor: '#356EDD',
                lineTension: 0.12

            },
            
        ]
    }
    return (
        <div className='linechart-c'>
            <Line data={data} options={option} />
        </div>
    )
}

export default Linechartcomponent