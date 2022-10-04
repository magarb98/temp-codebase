import React from "react";
import Answers from "./Answers";

export default function Question({
  question,
  quizQuestions,
  setQuizQuestions,
  check,
}) {
  const answerElements = question.choices.map((el) => {
    return (
      <Answers
        key={el.id}
        question={question}
        choice={el}
        //choice = object with id and choice text
        setQuizQuestions={setQuizQuestions}
        quizQuestions={quizQuestions}
        check={check}
      />
    );
  });

  return (
    <div className='question'>
      <h2>{question.question}</h2>
      {answerElements}
    </div>
  );
}
