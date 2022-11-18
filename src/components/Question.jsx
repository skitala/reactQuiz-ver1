import { useState, useRef } from "react";
import QuestionsData from "../data/QuestionsData";

const Question = ({ item, updateSelected }) => {
  const [selectedanswer, updateAnswer] = useState("");
  const ref = useRef("");

  function selectedA(e) {
    const selected = e.target.innerText;
    console.log(ref.current.childNodes);
    e.target.style.backgroundColor = "rgb(95, 11, 174)";
    e.target.style.color = "#fff";
    // updateAnswer(selected)
    // [...ref.current.childNodes].forEach((field) => {
    //   [...field.childNodes].map((btn) => (btn.disabled = true));
    //   // [...field.childNodes].map((btn) => (btn.disabled = true));
    // });
    [...ref.current.childNodes].map((btn) => (btn.disabled = true));
    updateSelected((selectedA) => selectedA.concat(selected));
    updateAnswer(selected);

    // console.log(ref);
  }

  return (
    <>
      <div className="question-item">
        <h2>{item.question}</h2>
        <div className="btns" ref={ref}>
          <button onClick={selectedA} disabled={false} className="answer-btn">
            {item.answer1}
          </button>
          <button onClick={selectedA} disabled={false} className="answer-btn">
            {item.answer2}
          </button>
          <button onClick={selectedA} disabled={false} className="answer-btn">
            {item.answer3}
          </button>
          <button onClick={selectedA} disabled={false} className="answer-btn">
            {item.answer4}
          </button>
        </div>
      </div>
    </>
  );
};

export default Question;
