import React from 'react';

const Summarty = ({ setSelected, selected, answers }) => {
  return (
    <>
      <div className="submit step">
        <h3 className="main_question">
          <strong>4/4</strong>Summary
        </h3>
        <div className="summary">
          <ul>
            <li>
              <strong>1</strong>
              <h5>What are NFTs?</h5>
              <p id="question_1">{answers[0]}</p>
            </li>
            <li>
              <strong>2</strong>
              <h5>What is a DAO?</h5>
              <p id="question_2">{answers[1]}</p>
            </li>
            <li>
              <strong>3</strong>
              <h5>What's your favorite topic in Web3?</h5>
              <p id="question_3">{answers[2]}</p>
              <p id="additional_message" />
            </li>
          </ul>
        </div>
        <p id="error_message" style={{ color: 'red' }} />
      </div>
      {/* /middle-wizard */}
      <div id="bottom-wizard">
        <button
          onClick={() => {
            setSelected(selected - 1);
          }}
          style={{ marginRight: '8px' }}
          className="backward"
        >
          Prev
        </button>
        <button className="reward" onclick="getReward(this)">
          Get reward
        </button>
      </div>
    </>
  );
};

export default Summarty;
