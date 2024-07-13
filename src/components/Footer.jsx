import React from 'react'

function Footer() {
  return (
    <>
    <hr/>
    <div className="row w-100 mt-3 p-3 ms-4">
      <div className="col-md-2 p-4 ms-5">
        <h6>Categories</h6>
        <p className='mt-4'>Graphics & Design</p>
       <div className='mb-5'>
          <p>Digital Marketing</p>
          <p>Writing & Translation</p>
          <p>Video & Animation</p>
          <p>Music & Audio</p>
          <p>Fiverr Logo Maker</p>
       </div>
      </div>
      <div className="col-md-2 p-4 ms-4">
      <h6>About</h6>
       <div className='mb-5'>
          <p className='mt-4'>Careers</p>
          <p>Press & News</p>
          <p>Partnerships</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
       </div>
      </div>
      <div className="col-md-2 p-4 ms-4">
      <h6>Support & Education </h6>
       <div className='mb-5'>
          <p className='mt-4'>Help & Support</p>
          <p>Trust & Safety</p>
          <p>Selling on Fiverr</p>
          <p>Buying on Fiverr</p>
       </div>
      </div>
      <div className="col-md-2 p-4 ms-4">
      <h6>Community</h6>
        <div className='mb-5'>
          <p className='mt-4'>Customer Success Stories</p>
          <p>Community Hub</p>
          <p>Forum</p>
          <p>Events</p>
        </div>
      </div>
      <div className="col-md-2 p-4 ms-4">
      <h6>Business Solutions</h6>
        <div className='mb-5'>
          <p className='mt-4'>About Business Solutions</p>
          <p>Fiverr Pro</p>
          <p>Fiverr Certified</p>
          <p>Become an agency</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default Footer