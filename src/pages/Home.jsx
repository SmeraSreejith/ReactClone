import React from 'react'
import Search from '../components/Search'
import Cards from '../components/Cards'
import Slides from '../components/Slides'
import Video from './Video'
import Card from 'react-bootstrap/Card';


function Home() {
 

  return (
    <>
     <Search/>
     <Cards/>
     <Slides/>
     <Video/>
     <div className='container mt-5 pt-5'>
     <h1 className='mb-5' style={{fontWeight:'400',fontSize:'50px'}}>What they're saying about Fiverr</h1>
     <div className='d-flex me-5'>
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg" height={'90%'} width={'90%'} alt="" />
      <div className='ms-5 mb-5'>
        <h5 className='mb-5 mt-5 ms-4 text-secondary ' style={{fontWeight:'400'}}>Tim and Dan Joo, Co-Founders  | </h5>
        <h3 className='mb-5 mt-5 ms-4' style={{fontWeight:'500'}}>"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."</h3>
      </div>
     </div>
     </div>

     <div className='container p-3 mt-5 rounded-4 logo' style={{height:'100%'}}>
       
         <div className='row'>
            <div className='col-md-6 sm-12'>
              <h2 className='text-dark mt-4 p-3'style={{fontWeight:'900'}}>fiverr <span style={{fontWeight:'500'}}>logo maker.</span></h2>
              <h1 className='ms-3 mt-4' style={{fontWeight:'400',fontSize:'50px'}}>Make an incredible <br />
              logo<span style={{color:'darkorange'}}> in seconds</span></h1>
              <p className='ms-3 mt-5 para' style={{fontSize:'23px'}}>Pre-designed by top talent. Just add your touch.</p>
              <button className='btn btn-dark rounded-3 ms-3 mt-4 mb-5' style={{fontSize:'18px',fontWeight:'400'}}>Try Fiverr Logo Maker</button>
          
            </div>
          <div className='col-md-6 sm-12 mt-4'>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png"  height={'90%'} width={'90%'}  alt="" />
          </div>
         </div>
      </div>

      <div className='container  mt-5'>
        <h1 style={{fontWeight:'400',fontSize:'50px'}}>Guides to help you grow</h1>
    <div className='row w-100 mt-5'>
       <div className='col-md-4'>
          <Card style={{border:'0px' }}>
          <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg"/>
          <Card.Body>
            <Card.Title className='title' style={{fontSize:'18px'}}>Start a side business</Card.Title>
          </Card.Body>
        </Card>
       </div>
       <div className='col-md-4'>
          <Card style={{ border:'0px' }}>
          <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg" />
          <Card.Body>
            <Card.Title className='title' style={{fontSize:'18px'}}>Ecommerce business Ideas</Card.Title>
          </Card.Body>
        </Card>
       </div>
       <div className='col-md-4'>
          <Card style={{border:'0px' }}>
          <Card.Img variant="top" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg" />
          <Card.Body>
            <Card.Title className='title' style={{fontSize:'18px'}}>Start an online business and work from home</Card.Title>
          </Card.Body>
        </Card>
       </div>
    </div>
      </div>

      <div className='container mt-5 bg p-3 rounded-4' style={{height:'30vh',marginBottom:'90px'}}>
        <h1 style={{fontSize:'65px',fontWeight:'400'}} className='text-center text-white'>Freelance services at your <span className='text-warning'>fingertips!</span></h1>
        <button className='btn btn-light px-4 py-2 rounded-1 text-black mt-4' style={{fontSize:'18px',fontWeight:'500',alignItems:'center',justifyContent:'center',marginLeft:'40%'}}>Join Fiverr</button>
      </div>
     
    </>
  )
}

export default Home