import React, { useState } from 'react'
import './dashboardcomponent.css'
import '../Table/table.css'
import { ExpandMoreRounded, InsertChartOutlined, ShowChartOutlined } from '@mui/icons-material'
import Chart from 'chart.js/auto';
import Barchartcomponent from '../Graph/Barchart/Barchartcomponent';
import Linechartcomponent from '../Graph/Linechart/Linechartcomponent';
import Doughnutchartcomponent from '../Graph/Doughnutchart/Doughnutchartcomponent';

const Dashboardcomponent = () => {
  const [isOrderBarView, setIsOrderBarView] = useState(true)
  const a = ['','','','','']

  return (
    <div className='dashboard-c'>
      <div className='dashboard-c__header'>Dashboard</div>

      <div className='dashboard-c__revenuechartbox'>
        <div className='dashboard-c__revenuechartheaderbox'>
          <div className='dashboard-c__revenuechartheader'>
            Revenue Sharing
          </div>
          <div className='dashboard-c__revenuecharttimeselection'>
            Month
            <div className='flex-x-y'><ExpandMoreRounded /></div>
          </div>
        </div>
        <div className='dashboard-c__revenuechartbody'>
          <div className='dashboard-c__revenuelinechart'>
            <Linechartcomponent />
          </div>
          <div className='dashboard-c__revenueroundchart'>
            <Doughnutchartcomponent />
          </div>
        </div>
      </div>


      <div className='dashboard-c__orderchartbox'>
        <div className='dashboard-c__orderchartheaderbox'>
          <div className='dashboard-c__orderchartheader'>
            Orders
          </div>
          <div className='dashboard-c__orderchartviewselection'>
            <div className={`flex-x-y${!isOrderBarView ? ' font-lightdark' : ''}`} onClick={() => setIsOrderBarView(true)}><InsertChartOutlined /></div>
            <div className={`flex-x-y${isOrderBarView ? ' font-lightdark' : ''}`} onClick={() => setIsOrderBarView(false)}><ShowChartOutlined /></div>
          </div>
          <div className='dashboard-c__orderchartweekselection'>
            Week
            <div className='flex-x-y'><ExpandMoreRounded /></div>
          </div>
        </div>
        <div className='dashboard-c__orderchart'>
          {isOrderBarView ?
            <Barchartcomponent /> :
            <Linechartcomponent />}
        </div>
      </div>


      <div className='dashboard-c__sellingtable'>
        <div className='dashboard-c__sellingtableheader'>Highest Selling Category</div>
        <div className='dashboard-c__sellingtablebody'>
        <div className='table-c' style={{margin:'30px 30px 0 0'}}>
                <div className='table-c__headerrow' style={{ gridTemplateColumns: '3fr 4fr  3fr' }}>
                    <div className='table-c__headercolumn'>Name</div>
                    <div className='table-c__headercolumn'>Image</div>
                    <div className='table-c__headercolumn'>Mode</div>
                </div>
                {a.map((erm) => {
                    return <div className='table-c__rowbox' style={{ gridTemplateColumns: '3fr 4fr  3fr' }}>
                        <div className='table-c__rowcolumn'>Watch</div>
                        <div className='table-c__rowcolumn'>10% </div>
                        <div className='table-c__rowcolumn'>10% </div>
                    </div>
                })}
            </div>

        </div>
      </div>

    </div>
  )
}

export default Dashboardcomponent