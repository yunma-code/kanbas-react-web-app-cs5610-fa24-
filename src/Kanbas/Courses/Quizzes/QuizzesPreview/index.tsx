import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchQuizById } from "../client";

const QuizPreview = ({ quiz }: { quiz: any }) => {
  // const { quizId } = useParams(); // Get quizId from the URL
  // const [quizData, setQuizData] = useState<any>(quiz);

  // useEffect(() => {
  //   if (!quiz && quizId) {
  //     // Fetch quiz details if not provided as a prop
  //     const loadQuiz = async () => {
  //       try {
  //         const fetchedQuiz = await fetchQuizById(quizId);
  //         setQuizData(fetchedQuiz);
  //       } catch (error) {
  //         console.error("Error fetching quiz:", error);
  //       }
  //     };
  //     loadQuiz();
  //   }
  // }, [quiz, quizId]);

  // if (!quizData) {
  //   return <div>Loading quiz data...</div>;
  // }
  return (
    <div className="container">
      <h2>{quiz.title}</h2>
      <div className="alert alert-warning" role="alert">
        This is a preview of the published version of the quiz
      </div>
      <div className="text-muted mb-2">
        Started: {quiz.start_time || "Not started"}
      </div>

      <h3>Quiz Instructions</h3>
      <hr className="my-4" />

      {quiz.questions.map((question: any, index: number) => (
        <div key={question.id} className="card mt-3">
          <div className="card-header d-flex justify-content-between">
            <h5>Question {index + 1}</h5>
            <span>{question.points || 1} pts</span>
          </div>
          <div className="card-body">
            <p>{question.question_text}</p>
            <form>
              {question.options.map((option: any) => (
                <div key={option.id} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`question${index}`}
                    id={`option${option.id}`}
                    value={option.answer_text}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`option${option.id}`}
                  >
                    {option.answer_text}
                  </label>
                </div>
              ))}
            </form>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary">Next</button>
      </div>

      <div className="card d-flex mt-3 p-3">
        <div className="d-flex justify-content-end align-items-center w-100">
          <p className="text-muted mb-0 me-2">
            Quiz saved at {quiz.save_time || "unknown time"}
          </p>
          <button className="btn btn-secondary">Submit Quiz</button>
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-link">Keep Editing This Quiz</button>
      </div>

      <div className="mt-4">
        <h5>Questions</h5>
        <ul className="list-group">
          {quiz.questions.map((question: any, index: number) => (
            <li
              key={question.id}
              className={`list-group-item ${
                index === 0 ? "text-danger" : ""
              }`}
            >
              Question {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizPreview;



// export default function QuizPreview() {
// 	return(
// 		<div className="container">
// 			<h2>Q1 - HTML</h2>
// 			<div className="alert alert-warning" role="alert">
// 				This is a preview of the published version of the quiz
// 			</div>
// 			<div className="text-muted mb-2">Started: Nov 29 at 8:19 am</div>

// 			<h3>Quiz Instructions</h3>
// 			<hr className="my-4" /> 

// 			<div className="card mt-3">
// 				<div className="card-header d-flex justify-content-between">
// 					<h5>Question 1</h5> 
// 					<span>1 pts</span>
// 				</div>
// 				<div className="card-body">
// 					<p>
// 						An HTML <span className="text-decoration-underline">label</span> element can be 
// 						associated with an HTML <span className="text-decoration-underline">input</span>element by 
// 						setting their <span className="text-decoration-underline">id</span> attributes to the same value.
// 					</p>
// 					<p>
// 						The resulting effect is that when you click on the <span className="text-decoration-underline">label</span> text
// 						, the <span className="text-decoration-underline">input</span> element receives focus 
// 						as if you had clicked on the <span className="text-decoration-underline">input</span> element itself.
// 					</p>
// 					<hr />
// 					<form>
// 						<div className="form-check">
// 							<input className="form-check-input" type="radio" name="question1" id="trueOption" value="true" />
// 							<label className="form-check-label" htmlFor="trueOption">
// 								True
// 							</label> 
// 						</div><hr />
// 						<div className="form-check">
// 							<input className="form-check-input" type="radio" name="question1" id="falseOption" value="false" />
// 							<label className="form-check-label" htmlFor="falseOption"></label>
// 							False
// 						</div><hr />
// 					</form>
// 				</div>
// 			</div>
			
// 			<div className="d-flex justify-content-end mt-3"></div>
// 			<div className="d-flex justify-content-end mt-3 mb-3">
// 				<button className="btn btn-secondary">Next</button>
// 			</div>

// 			<div className="card d-flex mt-3 p-3">
// 				<div className="d-flex justify-content-end align-items-center w-100">
// 					<p className="text-muted mb-0 me-2" > Quiz saved at 8:19 am</p>
// 					<button className="btn btn-secondary">Submit Quiz</button>
// 				</div>
// 			</div>
			
// 				<div className="mt-3">
//         <button className="btn btn-link">Keep Editing This Quiz</button>
//       </div>

//       <div className="mt-4">
//         <h5>Questions</h5>
//         <ul className="list-group">
//           <li className="list-group-item text-danger">Question 1</li>
//           <li className="list-group-item">Question 2</li>
//           <li className="list-group-item">Question 3</li>
//           <li className="list-group-item">Question 4</li>
//           <li className="list-group-item">Question 5</li>
//         </ul>
//       </div>
//     </div>
//   );
// }