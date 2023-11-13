import React from 'react'
import './productaddcomponent.css'
import { ExpandMoreRounded } from '@mui/icons-material'

const Productaddcomponent = () => {
  return (
    <div className='productadd-c'>
      <div className='productadd-c__header'>Product</div>

      <div className='productadd-c__inputbox'>
        <div className='productadd-c__inputimagebox'>
          <div className='productadd-c__inputimage'></div>
          <div className='productadd-c__uploadedimagebox'>
            <div className='productadd-c__uploadedimage'><img src="http://localhost:8000/asset/image/product/tshirt.jpeg" alt="" /></div>
            <div className='productadd-c__uploadedimage'><img src="http://localhost:8000/asset/image/product/tshirt.jpeg" alt="" /></div>
            <div className='productadd-c__uploadedimage'><img src="http://localhost:8000/asset/image/product/tshirt.jpeg" alt="" /></div>
            <div className='productadd-c__uploadedimage'><img src="http://localhost:8000/asset/image/product/tshirt.jpeg" alt="" /></div>
          </div>
        </div>
        <div className='productadd-c__imageaddbutton'>Add</div>

        <div className='productadd-c__inputnormal'>
          <div>Name</div>
          <input type="text" />
        </div>

        <div className='productadd-c__inputselectionbox'>
          <div className='productadd-c__inputselectionlabel'>Category</div>
          <div className='productadd-c__inputselectioncontent'>
            <div className='productadd-c__inputselectionheader'>
              <div>Select Category</div>
              <div className='flex-x-y'><ExpandMoreRounded /></div>
            </div>
          </div>
        </div>
        <div className='productadd-c__inputselectionbox'>
          <div className='productadd-c__inputselectionlabel'>Color</div>
          <div className='productadd-c__inputselectioncontent'>
            <div className='productadd-c__inputselectionheader'>
              <div>Select Color</div>
              <div className='flex-x-y'><ExpandMoreRounded /></div>
            </div>
          </div>
        </div>
        <div className='productadd-c__inputselectionbox'>
          <div className='productadd-c__inputselectionlabel'>Size</div>
          <div className='productadd-c__inputselectioncontent'>
            <div className='productadd-c__inputselectionheader'>
              <div>Select Size</div>
              <div className='flex-x-y'><ExpandMoreRounded /></div>
            </div>
            <div className='productadd-c__inputselection'>
              selection
            </div>
          </div>
        </div>

        <div className='productadd-c__inputnormal'>
          <div>Price</div>
          <input type="text" />
        </div>
        <div className='productadd-c__inputnormal'>
          <div>Stock</div>
          <input type="text" />
        </div>
        <div className='productadd-c__inputdiscription'>
          <div>Discription</div>
          <textarea name="" id="" cols="30" rows="4"></textarea>
        </div>
        <div className='productadd-c__addmorebutton'>Add more </div>
        <div className='productadd-c__submitbutton bg-yellow flex-x-y'> Submit</div>
      </div>

    </div>
  )
}

export default Productaddcomponent