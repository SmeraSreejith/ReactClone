import React from 'react'
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <>
     <div className='container cards'>
       <div className='row mt-4'>
        <div className='col-md-2 mt-4 text-center align-items-center justify-content-center d-flex border rounded-4 shadow' style={{height:'150px',width:'140px'}}>  
              <Card.Body>
                <Card.Text>
                Programming <br/>& Tech
                </Card.Text>
              </Card.Body>
             </div>
             <div className='col-md-2 mt-4 ms-5 text-center align-items-center justify-content-center d-flex border rounded-4 shadow' style={{height:'150px',width:'140px'}}>  
              <Card.Body>
                <Card.Text>
                Graphics <br/>& Design
                </Card.Text>
              </Card.Body>
             </div>
             <div className='col-md-2 mt-4 ms-5 text-center align-items-center justify-content-center d-flex border rounded-4 shadow' style={{height:'150px',width:'140px'}}>  
              <Card.Body>
                <Card.Text>
               Digital <br />Marketing
                </Card.Text>
              </Card.Body>
             </div>
             <div className='col-md-2 mt-4 ms-5 text-center align-items-center justify-content-center d-flex border rounded-4 shadow' style={{height:'150px',width:'140px'}}>  
              <Card.Body>
                <Card.Text>
                Writing <br />& Translation
                </Card.Text>
              </Card.Body>
             </div>
             <div className='col-md-2 mt-4 ms-5 text-center align-items-center justify-content-center d-flex border rounded-4 shadow' style={{height:'150px',width:'140px'}}>  
              <Card.Body>
                <Card.Text>
                Video <br />& Animation
                </Card.Text>
              </Card.Body>
             </div>
             <div className='col-md-2 mt-4 ms-5 text-center align-items-center justify-content-center d-flex border rounded-4 shadow' style={{height:'150px',width:'140px'}}>  
              <Card.Body>
                <Card.Text>
                AI <br />Services
                </Card.Text>
              </Card.Body>
             </div>
             <div className='col-md-2 mt-4 ms-5 text-center align-items-center justify-content-center d-flex border rounded-4 shadow' style={{height:'150px',width:'140px'}}>  
              <Card.Body>
                <Card.Text>
                Music <br />& Audio
                </Card.Text>
              </Card.Body>
             </div>
            
        </div>
    </div>
    </>
  )
}

export default Cards