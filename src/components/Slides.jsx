import React from 'react'

function Slides() {
  return (
    <>
    <div className='container'>
       <div className='row mt-4'>
        <h1 className='mt-5 ' style={{fontWeight:'500'}}>A whole world of freelance <br /> talent at your fingertips</h1>
       <div className="col-md-3">
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.72379ee.svg" className='mt-5' alt="" />
        <div className='mt-4 '>
          <h5>Over 700 categories</h5>
          <p className='mt-5'>Get results from skilled freelancers from all over the world, for every task, at any price point.</p>
        </div>
       </div>
       <div className="col-md-3">
       <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/handshake.287b5d3.svg" className='mt-5' alt="" />
        <div className='mt-4 '>
          <h5>Clear, upfront pricing</h5>
          <p className='mt-5'>No hourly rates, just project-based pricing. Payments only get released when you approve.</p>
        </div>
       </div>
       <div className="col-md-3">
       <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lightning.2cded3f.svg" className='mt-5' alt="" />
        <div className='mt-4 '>
          <h5>Quality work done faster</h5>
          <p className='mt-5'>Filter to find the right freelancers quickly and get great work delivered in no time, every time.</p>
        </div>
       </div>
       <div className="col-md-3">
       <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/support.660ad7f.svg" className='mt-5' alt="" />
        <div className='mt-4 '>
          <h5>24/7 award-winning support</h5>
          <p className='mt-5'>Chat with our team to get your questions answered or resolve any issues with your orders.</p>
        </div>
       </div>
    </div>
    </div>
    </>
  )
}

export default Slides