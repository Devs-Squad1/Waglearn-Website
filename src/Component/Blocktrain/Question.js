import React, { useState } from 'react';

const Question = ({
  questions,
  selected,
  setSelected,
  answers,
  setAnswers,
}) => {
  const question = questions.find((q) => q.id === selected);

  const [choose, setChoose] = useState(0);
  const [ans, setAns] = useState('');

  const handleChoose = (id) => {
    setChoose(id);
    const selectAns = question?.options?.find((o) => o.id === id);
    setAns(selectAns.value);
  };

  const handleNextBtn = (options) => {
    setChoose(0);
    setSelected(selected + 1);
    setAnswers([...answers, ans]);
  };
  return (
    <>
      <div className="step">
        <h3 className="main_question">
          <strong>{selected}/4</strong>
          {question?.question}
        </h3>
        {question?.options?.map((op) => (
          <div className="form-group">
            <label className="container_check version_2">
              {op?.value}
              <input
                type="checkbox"
                checked={op?.id === choose}
                onClick={() => handleChoose(op?.id)}
              />
              <span style={{ borderRadius: '50%' }} className="checkmark" />
            </label>
          </div>
        ))}
      </div>
      {/* /middle-wizard */}
      <div id="bottom-wizard">
        <button
          onClick={() => {
            setChoose(0);
            setSelected(selected - 1);
          }}
          style={{ marginRight: '8px' }}
          className="backward"
        >
          Prev
        </button>
        <button onClick={() => handleNextBtn()} className="forward">
          Next
        </button>
      </div>
    </>
  );
};

export default Question;
