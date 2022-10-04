import "../App.css";

export default function Answers({
  choice,
  question,
  quizQuestions,
  setQuizQuestions,
  check,
}) {
  function styles() {
    if (check) {
      if (choice.id === question.answer.id) {
        return "option correct";
      }
      if (choice.id !== question.selectedChoiceId) {
        return "disabled option";
      }
      return "disabled incorrect option";
    }
    return question.selectedChoiceId === choice.id ? "picked" : "option";
  }

  return (
    <button
      onClick={() => {
        if (check) return;
        if (question.selectedChoiceId === choice.id) {
          question.selectedChoiceId = undefined;
          //unselect
        } else {
          question.selectedChoiceId = choice.id;
          //always runs if a choice is selected
        }
        setQuizQuestions(quizQuestions.slice());
        //have to set using function to re-render page
      }}
      className={styles()}
    >
      {choice.choiceText}
    </button>
  );
}
