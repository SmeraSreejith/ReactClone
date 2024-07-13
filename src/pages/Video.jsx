import React from 'react'

function Video() {
  return (
    <>
   
    <div className='container mt-5 rounded-4 search' style={{height:'115%'}}>
       <div className='row'>
          <div className='col-md-6 sm-12'>
            <h2 className='text-white fiverr ms-5'>fiverr<span style={{fontWeight:'lighter'}}> pro.</span></h2>
            <h1 className='text-white ms-5 mt-5' style={{fontSize:'50px',fontWeight:'500'}}>New e-Commerce <br />
            project management <br /> service made for your <br /> business</h1>
            <p className='text-white ms-5 mt-5'>An experienced e-Commerce project manager will plan, coordinate, <br /> and execute your project. Overseeing a team of e-Commerce experts, <br /> they'll handle everything from site building, design and content to<br /> optimization, marketing strategies, and UGC videos.</p>
            <div className='text-white ms-5 mt-5 '>
              <p>To get started, you should have:</p>
              <ul>
                <li>An e-Commerce project requiring expertise in various fields</li>
                <li>A budget exceeding $1000</li>
                <li>A desire to get things done, without the hassle</li>
              </ul>
              <button type='button' className='btn bg-warning rounded-0 px-4 py-2 mb-5 mt-4' style={{color:'white',fontWeight:'500'}}>Get Started</button>
            </div>
          </div>
          <div className="col-md-6 mt-5 ">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d85c8f7113e7f18d6fca144840de5afa-1718619183018/X1.png" style={{alignItems:'center',justifyContent:'center',height:'50%',width:'100%', marginTop:'150px'}} alt="no image" />
         </div>
       </div>
        
      </div>
   

    </>
  )
}

export default Video