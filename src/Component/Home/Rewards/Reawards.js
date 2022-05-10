import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/Responsive.css'

const Reawards = () => {
  return (
    <div className="bg">
      <div className="container reward-area">
        <div className="reward-text">
          <h1>
            Add rewards, <br />
            bounties to your content
          </h1>
          <p>
            Writer, youtuber, tiktoker? Incentivize your users <br />
            for 10x growth.
          </p>

          <Link className="try-btn" to="/blocktrain">
            Try it
          </Link>
          <a
            target="_blank"
            className="get-btn"
            href="https://twitter.com/aryan_eth"
            rel="noreferrer"
          >
            Get in touch
          </a>
        </div>

        <div className="reward-img">
          <img src="https://i.ibb.co/hgyGcVb/paid-idea-bro.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reawards;
