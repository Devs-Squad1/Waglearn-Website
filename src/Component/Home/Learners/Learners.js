import React from 'react';
import '../../../css/Home.css';

const Learners = () => {
  return (
    <div className=''>
     <div className='container'>
     <h1 className='title'>For the learners</h1>
        <div className="learners-img">
            <div className='learners-box'>
              <div className="single-img">
                <img className='sn-img' src="https://i.ibb.co/q5LDz61/learners1.png" alt="" />
               
            </div>
            <p>Answer questions</p>
            </div>
            <div className='icon-box'>
             <img className='icon'  src="https://i.ibb.co/zb39hgY/arrow-pointing-to-right.png" alt="" />
             <img className='icon2' src="https://i.ibb.co/tzNWmFS/Screenshot-1.jpg" alt="" />
         </div>

         <div className='learners-box'>
            <div className="single-img">
                  <img className='sn-img' src="https://i.ibb.co/7SBND40/learners2.png" alt="" />
                 
              </div>
              <p>Complete the quiz</p>
         </div>
         <div className='icon-box'>
             <img className='icon'  src="https://i.ibb.co/zb39hgY/arrow-pointing-to-right.png" alt="" />
             <img className='icon2' src="https://i.ibb.co/tzNWmFS/Screenshot-1.jpg" alt="" />
         </div>


         <div className='learners-box'>
            <div className="single-img">
                  <img className='sn-img' src="https://i.ibb.co/ysq3RPg/learners3.png" alt="" />
                 
              </div>
              <p>Earn rewards</p>
        </div>
        <div className='icon-box'>
             <img className='icon'  src="https://i.ibb.co/zb39hgY/arrow-pointing-to-right.png" alt="" />
             <img className='icon2' src="https://i.ibb.co/tzNWmFS/Screenshot-1.jpg" alt="" />
         </div>

        <div className='learners-box'>
          <div className="single-img">
                <img className='sn-img' src="https://i.ibb.co/ccSs0ht/learners4.png" alt="" />
                
            </div>
            <p>Start learning today</p>
        </div>
        

        </div>
        <p className="reservsed">All rights reserved.</p>
     </div>
    </div>
  );
};

export default Learners;