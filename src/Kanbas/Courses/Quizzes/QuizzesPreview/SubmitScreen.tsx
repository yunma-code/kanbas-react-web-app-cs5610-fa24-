import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type QuestionOption = {
  id: string;
  answer_text: string;
  is_correct: boolean;
};

type Question = {
  id: string;
  question_text: string;
  question_type: "multiple_choice" | "true_false";
  options?: QuestionOption[];
  answer?: boolean;
};

type Quiz = {
  id: string;
  questions: Question[];
};

const SubmitScreen = () => {
  const location = useLocation();
  const { state } = location;
  const { score, totalQuestions, quiz, userAnswers } = state || {};

  if (!state || !quiz || !userAnswers) {
    return (
      <div className="container">
        <h2 className="text-danger">Error</h2>
        <p>There was an error retrieving your quiz data. Please try again.</p>
        <Link to="/Kanbas/Courses/:cid/Quizzes" className="btn btn-primary">
          Back to Quizzes
        </Link>
      </div>
    );
  }

  // function to check correctness of answers
  const isCorrect = (question: Question): boolean => {
    const userAnswer = userAnswers[question.id]?.trim().toLowerCase();

    if (question.question_type === "multiple_choice") {
      const correctOption = question.options?.find((option) => option.is_correct)?.answer_text;
      return userAnswer === correctOption?.toLowerCase();
    } else if (question.question_type === "true_false" && question.answer !== undefined) {
      return userAnswer === String(question.answer).toLowerCase();
    }
		// else if (question.question_type === "Fill_in_the_blank" && question.blanks) {
    //   return question.blanks.some((blank) => blank.toLowerCase() === userAnswer);
    // }
    return false;
  };

  return (
    <div className="container text-center mt-5">
      <h3 className="fs-4">Congratulations! You have successfully completed the quiz.</h3>

      <div className="alert mt-4">
        <h4>Your Score</h4>
        <p>
          {score} / {totalQuestions}
        </p>
      </div>

      <div className="mt-5">
        <h4 className="text-start">Review Your Answers:</h4>
        <ul className="list-group mt-3">
          {quiz.questions.map((question: Question, index: number) => {
            const correct = isCorrect(question);
            const userAnswer = userAnswers[question.id] || "No answer provided";

            return (
              <li
								key={question.id}
								className={`list-group-item ${
									correct ? "text-success" : "text-danger"
								}`}
							>
								<div className="d-flex align-items-start text-start">
									<div className="flex-grow-1">
										<div className="fw-bold mb-2">
											Question {index + 1}: {question.question_text}
										</div>
										<div className={`mb-1 ${correct ? "text-success" : "text-danger"}`}>
											<strong>Your Answer:</strong> {userAnswer}
										</div>
										<div>
											<strong>Correct Answer:</strong>{" "}
											{question.question_type === "multiple_choice"
												? question.options?.find((option) => option.is_correct)?.answer_text || "N/A"
												: String(question.answer)}
										</div>
									</div>
                <div>
                  {correct ? (<FaCheckCircle size={24} className="text-success" />) : 
									(<FaTimesCircle size={24} className="text-danger" />)}
								</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Link to="/Kanbas/Courses/:cid/Quizzes" className="btn btn-primary mt-5">
        Back to Quizzes
      </Link>
    </div>
  );
};

export default SubmitScreen;
