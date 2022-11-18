import { useState } from "react";
import QuestionsData from "./data/QuestionsData";
import QuestionList from "./components/QuestionList";

function App() {
  const [question, updateSelected] = useState(QuestionsData);

  return (
    <>
      <div className="container">
        <h1>React Quiz</h1>
        <QuestionList question={question} key={question.id} />
      </div>
    </>
  );
}

export default App;
