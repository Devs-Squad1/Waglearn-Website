import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/bootstrap.css';
import '../../css/bootstrap.min.css';
import '../../css/menu.css';
import '../../css/style.css';
import logo from '../../img/logo-blocktrain.png';
import Navigation from './Navigation';
import Question from './Question';
import Summarty from './Summarty';

const BlockTrain = () => {
  const [selected, setSelected] = useState(1);
  const [answers, setAnswers] = useState([]);
  const questions = [
    {
      id: 1,
      question: 'What is an NFT?',
      options: [
        { id: 1, value: 'Non fungible token', isCorrect: true },
        { id: 2, value: 'Non fictional token', isCorrect: false },
        { id: 3, value: 'No fluctuating token', isCorrect: false },
        { id: 4, value: 'I have no clue', isCorrect: false },
      ],
    },
    {
      id: 2,
      question: 'What is a DAO?',
      options: [
        { id: 1, value: 'Degen Autonomous Organization', isCorrect: true },
        {
          id: 2,
          value: 'Decentralized Autonomous Organization',
          isCorrect: false,
        },
        { id: 3, value: 'Dope Amino Organization', isCorrect: false },
        { id: 4, value: 'I have no clue', isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "What's your favorite topic in Web3?",
      options: [
        { id: 1, value: 'Nothing, hate Web3', isCorrect: true },
        { id: 2, value: 'NFTs', isCorrect: false },
        { id: 3, value: 'DAOs', isCorrect: false },
        { id: 4, value: 'Everything about Web3', isCorrect: false },
      ],
    },
  ];
  if (selected < 1) {
    setSelected(1);
  }
  console.log(answers);
  return (
    <div>
      <Navigation />
      {/* /menu */}
      <div className="container-fluid full-height">
        <div className="row row-height">
          <div className="col-lg-6 content-left">
            <div className="content-left-wrapper">
              <Link to="/" id="logo">
                <img src={logo} alt="" width={49} height={49} />
              </Link>
              {/* /social */}
              <div>
                <figure>
                  <img
                    src="img/info_graphic_1.svg"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <h1>
                  <a href="#" style={{ color: 'white' }}>
                    Blocktrain.info
                  </a>
                </h1>
                {/* <p>Learn about Web3 and Blockchain</p> */}
                <div className="row my-4">
                  <a href="#" className="text-white h6">
                    <u>15 days of Web3 🚀</u>
                  </a>
                  <a href="#" className="ml-4 text-white h6">
                    <u>A-Z of NFTs 🚀</u>
                  </a>
                </div>
                <div>
                  <ul className="row justify-content-center lg">
                    <li>
                      <a href="#0" style={{ fontSize: '20px', color: 'white' }}>
                        <i className="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#0" style={{ fontSize: '20px', color: 'white' }}>
                        <i className="icon-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#0" style={{ fontSize: '20px', color: 'white' }}>
                        <i className="icon-mail" />
                      </a>
                    </li>
                    <li>
                      <a href="#0" style={{ fontSize: '20px', color: 'white' }}>
                        <i className="icon-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="copy" style={{ fontSize: '20px' }}>
                Create your own page
              </div>
            </div>
            {/* /content-left-wrapper */}
          </div>
          {/* /content-left */}
          <div className="col-lg-6 content-right" id="start">
            <div id="wizard_container">
              <div id="top-wizard">
                <div id="progressbar" />
              </div>
              {/* /top-wizard */}
              <input id="website" name="website" type="text" defaultValue />
              {/* Leave for security protection, read docs for details */}
              <div id="middle-wizard">
                {/* /steps*/}
                {selected === 4 ? (
                  <Summarty
                    setSelected={setSelected}
                    selected={selected}
                    answers={answers}
                  />
                ) : (
                  <Question
                    answers={answers}
                    setAnswers={setAnswers}
                    questions={questions}
                    setSelected={setSelected}
                    selected={selected}
                  />
                )}
              </div>

              {/* /bottom-wizard */}
            </div>
            {/* /Wizard container */}
          </div>
          {/* /content-right*/}
        </div>
        {/* /row*/}
      </div>
      {/* /container-fluid */}
      <div className="cd-overlay-nav">
        <span />
      </div>
      {/* /cd-overlay-nav */}
      <div className="cd-overlay-content">
        <span />
      </div>
      {/* /cd-overlay-content */}
      {/* <a href="#0" class="cd-nav-trigger">Menu<span class="cd-icon"></span></a> */}
      {/* /menu button */}
      {/* Modal terms */}
      <div
        className="modal fade"
        id="terms-txt"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="termsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="termsLabel">
                Terms and conditions
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet, in porro albucius qui, in{' '}
                <strong>nec quod novum accumsan</strong>, mei ludus tamquam
                dolores id. No sit debitis meliore postulant, per ex prompta
                alterum sanctus, pro ne quod dicunt sensibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod
                novum accumsan, mei ludus tamquam dolores id. No sit debitis
                meliore postulant, per ex prompta alterum sanctus, pro ne quod
                dicunt sensibus. Lorem ipsum dolor sit amet,{' '}
                <strong>in porro albucius qui</strong>, in nec quod novum
                accumsan, mei ludus tamquam dolores id. No sit debitis meliore
                postulant, per ex prompta alterum sanctus, pro ne quod dicunt
                sensibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod
                novum accumsan, mei ludus tamquam dolores id. No sit debitis
                meliore postulant, per ex prompta alterum sanctus, pro ne quod
                dicunt sensibus.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn_1" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </div>
  );
};

export default BlockTrain;
