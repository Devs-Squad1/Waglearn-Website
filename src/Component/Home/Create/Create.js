import React from 'react';
import { Link } from 'react-router-dom';
import mac from '../../../img/mac.png';

const Create = () => {
  return (
    <div className="">
      <div className="container create-area">
        <div className="create-text">
          <h1>Create your <br /> content page in <br /> minutes</h1>
          <p>Page created for Blocktrain.info</p>

          <Link className="try-btn" to="/blocktrain">
            Try it
          </Link>
        </div>

        <div style={{  }} className="create-img">
          <img src={mac}  alt="" />
        </div>
      </div>
    </div>
  );
};

export default Create;
