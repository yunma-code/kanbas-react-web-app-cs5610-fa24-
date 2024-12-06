import { useSelector, useDispatch } from "react-redux";
import { deleteQuiz } from "./reducer";
import { Link, useParams } from "react-router-dom";

const Quizzes = () => {
  const dispatch = useDispatch();
  const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes); 
  const { cid } = useParams<{ cid: string }>();

  const handleDelete = (quizId: string) => {
    dispatch(deleteQuiz(quizId));
  };

  if (!quizzes || quizzes.length === 0) {
    return <div>No quizzes available or loading...</div>;
  }

  return (
    <div className="container">
      <h1>Quizzes</h1>
      <ul className="list-group">
        {quizzes.map((quiz: any) => (
          <li
            key={quiz.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{quiz.title}</h5>
              <p>{quiz.description || "No description available."}</p>
            </div>
            <div>
              <Link to={`/Kanbas/Courses/${cid}/Quizzes/preview/${quiz.id}`}
                className="btn btn-primary me-2">
                Preview
              </Link>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quizzes;




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { fetchQuizzesForCourse } from "./client"; 

// export default function QuizModel() {
//   const { cid } = useParams(); 
//   const [quiz, setQuiz] = useState<any>(null);
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState<string | null>(null); 

//   useEffect(() => {
//     const loadQuizzes = async () => {
//       try {
//         if (!cid) {
//           setError("Course ID is missing in the URL.");
//           console.error("Course ID is missing.");
//           return;
//         }

//         console.log("Fetching quizzes for course ID:", cid);
//         const fetchedQuizzes = await fetchQuizzesForCourse(cid);
//         if (fetchedQuizzes.length > 0) {
//           setQuiz(fetchedQuizzes[0]); 
//         } else {
//           setError("No quizzes available for this course.");
//         }
//       } catch (err) {
//         console.error("Error fetching quizzes:", err);
//         setError("Failed to fetch quizzes. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadQuizzes();
//   }, [cid]);

//   if (loading) {
//     return <div>Loading quizzes...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!quiz) {
//     return <div>No quizzes available for display.</div>;
//   }

//   return (
//     <div className="container">
//       <h2>{quiz.title}</h2>
//       <div className="alert alert-warning" role="alert">
//         This is a preview of the published version of the quiz
//       </div>
//       <div className="text-muted mb-2">
//         Started: {quiz.start_time || "Not started"}
//       </div>

//       <h3>Quiz Instructions</h3>
//       <hr className="my-4" />

//       {quiz.questions.map((question: any, index: number) => (
//         <div key={question.id} className="card mt-3">
//           <div className="card-header d-flex justify-content-between">
//             <h5>Question {index + 1}</h5>
//             <span>{question.points || 1} pts</span>
//           </div>
//           <div className="card-body">
//             <p>{question.question_text}</p>
//             <form>
//               {question.options.map((option: any) => (
//                 <div key={option.id} className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name={`question${index}`}
//                     id={`option${option.id}`}
//                     value={option.answer_text}
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor={`option${option.id}`}
//                   >
//                     {option.answer_text}
//                   </label>
//                 </div>
//               ))}
//             </form>
//           </div>
//         </div>
//       ))}

//       <div className="d-flex justify-content-end mt-3">
//         <button className="btn btn-secondary">Next</button>
//       </div>

//       <div className="card d-flex mt-3 p-3">
//         <div className="d-flex justify-content-end align-items-center w-100">
//           <p className="text-muted mb-0 me-2">
//             Quiz saved at {quiz.save_time || "unknown time"}
//           </p>
//           <button className="btn btn-secondary">Submit Quiz</button>
//         </div>
//       </div>

//       <div className="mt-3">
//         <button className="btn btn-link">Keep Editing This Quiz</button>
//       </div>

//       <div className="mt-4">
//         <h5>Questions</h5>
//         <ul className="list-group">
//           {quiz.questions.map((question: any, index: number) => (
//             <li
//               key={question.id}
//               className={`list-group-item ${
//                 index === 0 ? "text-danger" : ""
//               }`}
//             >
//               Question {index + 1}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
