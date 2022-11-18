function Result({ question, count }) {
  //   let correct = []

  // const correctArr = () => {
  //   [...question].forEach((item) => correct.push(item.correct))
  // }
  // correctArr()

  return (
    <div>
      <h1>
        You've answered {count}/{question.length} questions correctly!
      </h1>
    </div>
  );
}

export default Result;
