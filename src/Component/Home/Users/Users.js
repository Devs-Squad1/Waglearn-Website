import React from 'react';

const Users = () => {
  return (
    <div className="">
      <div className="container users-area">
        <h1 className="title">
          Users answer questions and get <br /> rewards
        </h1>

        <div className="users-box">
          <div className='d-flex'>
              <div className="single-user mr-35 ">
                  <div className="img-center">
                    <img src="https://i.ibb.co/9NZLXpZ/1.png" alt="" />
                  </div>
                  <h2>Reader earns rewards</h2>
                  <p>Simple add an NFT or token to your blog for the readers</p>
                </div>

                <div className="single-user">
                  <div className="img-center">
                    <img src="https://i.ibb.co/kq76KcC/2.png" alt="" />
                  </div>
                  <h2>10x Growth</h2>
                  <p>Incentives are the best way to introduce new content!</p>
                </div>
           </div>

          <div className='center-div'>
          <div className="single-user ">
            <div className="img-center">
              <img src="https://i.ibb.co/HXzYtWb/3.png" alt="" />
            </div>
            <h2>Control your Community </h2>
            <p>Manage your community by seeing who all engage the most</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
