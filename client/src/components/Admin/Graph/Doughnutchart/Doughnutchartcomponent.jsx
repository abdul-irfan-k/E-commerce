import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const Doughnutchartcomponent = () => {
    const data = {
        datasets: [
            {
                data: [60, 20],
                backgroundColor: ['#FF5C00', '#E33283', 'blue']
            }
        ]
    }
    return (
        <div className='doughnutchart-c'>
            <Doughnut data={data} />
        </div>
    )
}

export default Doughnutchartcomponent