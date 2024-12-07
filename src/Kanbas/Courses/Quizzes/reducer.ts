import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";

const initialState = {
  quizzes: quizzes,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      const newquiz: any = {
        _id: quiz._id,
        title: quiz.title,
        course: quiz.course,
        points: quiz.points,
        type: quiz.type,
        assignTo: quiz.assignTo,
        available: quiz.available,
        due: quiz.due,
        until: quiz.until,
        description: quiz.description,
      };
      state.quizzes = [...state.quizzes, newquiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (a: any) => a._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === quiz._id ? quiz : a
      ) as any;
    },
    editQuiz: (state, { payload: moduleId }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === moduleId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});

export const { addQuiz, deleteQuiz, updateQuiz, editQuiz } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { quizzes } from "../../Database";

// // //function to parse quiz data
// // const parseQuizzesData = (data: any[]) => {
// //   return data.map((quiz) => ({
// //     ...quiz,
// //     questions: quiz.questions.map((question: any) => ({
// //       ...question,
// //       question_type:
// //         question.question_type === "multiple_choice" || question.question_type === "true_false"
// //           ? question.question_type
// //           : "multiple_choice", 
// //     })),
// //   }));
// // };

// //set init data
// const initialState = {
//   quizzes: quizzes,
// };

// const quizzesSlice = createSlice({
//   name: "quizzes",
//   initialState,
//   reducers: {
//     addQuiz: (state, { payload: quiz }) => {
//       const newQuiz = {
//         ...quiz,
//         questions: quiz.questions.map((question: any) => ({
//           ...question,
//           question_type:
//             question.question_type === "multiple_choice" || question.question_type === "true_false"
//               ? question.question_type
//               : "multiple_choice",
//         })),
//       };
//       state.quizzes = [...state.quizzes, newQuiz];
//     },
//     deleteQuiz: (state, { payload: quizId }) => {
//       state.quizzes = state.quizzes.filter((quiz: any) => quiz.id !== quizId);
//     },
//     updateQuiz: (state, { payload: updatedQuiz }) => {
//       state.quizzes = state.quizzes.map((quiz: any) =>
//         quiz.id === updatedQuiz.id ? updatedQuiz : quiz
//       );
//     },
//     editQuiz: (state, { payload: quizId }) => {
//       state.quizzes = state.quizzes.map((quiz: any) =>
//         quiz.id === quizId ? { ...quiz, editing: true } : quiz
//       );
//     },
//   },
// });

// export const { addQuiz, deleteQuiz, updateQuiz, editQuiz } = quizzesSlice.actions;
// export default quizzesSlice.reducer;


