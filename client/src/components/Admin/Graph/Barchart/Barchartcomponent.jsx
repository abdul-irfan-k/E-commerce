import React from 'react'
import { Bar } from 'react-chartjs-2'

const Barchartcomponent = () => {
  const option = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
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
    }
  };
  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuarday']
  const data = {
    labels,
    datasets: [
      {
        data: [10, 40, 60, 30, 90, 20, 45],
        backgroundColor: "#356EDD",
        barThickness: 70,
        color: 'red'
      }
    ]
  }
  return (
    <div className='barchart-c'>
      <Bar data={data} options={option} />
    </div>
  )
}

export default Barchartcomponent