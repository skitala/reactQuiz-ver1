import { useState, useRef } from "react";
import QuestionsData from "../data/QuestionsData";
import Question from "./Question";
import Result from "./Result";

function QuestionList({ question }) {
  const [selectedanswers, updateSelected] = useState([]);
  let [count, updateCount] = useState(0);
  const resultBtn = useRef("");

  const correctAnswers = QuestionsData.map((question) => {
    return question.correct;
  });
  // let count = 0;
  function selectedAnswers() {
    console.log(selectedanswers);
    console.log(correctAnswers);
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === selectedanswers[i]) {
        // if (correctAnswers[i].includes(selectedanswers[i])) {
        count++;
        // return count;
        updateCount(count);
        console.log(count);
        resultBtn.current.disabled = true;
      } else {
        resultBtn.current.disabled = true;
        count += 0;
        updateCount(count);
        // return;
      }
      // return count;
    }
    // selectedanswers.find(correctAnswers);
  }

  return (
    <div className="question-list">
      {question.map((item) => {
        return (
          <Question key={item.id} item={item} updateSelected={updateSelected} />
        );
      })}
      <button onClick={selectedAnswers} ref={resultBtn} id="submit-btn">
        Submit Answers
      </button>
      <Result question={question} count={count} />
    </div>
  );
}

export default QuestionList;
