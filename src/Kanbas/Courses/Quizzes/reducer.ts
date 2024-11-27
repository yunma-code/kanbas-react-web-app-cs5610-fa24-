// import { createSlice } from "@reduxjs/toolkit";
// import { quizzes } from "../../Database";

// const initialState = {
//   quizzes: quizzes,
// };
// const quizzesSlice = createSlice({
//   name: "quizzes",
//   initialState,
//   reducers: {
//     addQuiz: (state, { payload: quiz }) => {
//       const newquiz: any = {
//         _id: quiz._id,
//         title: quiz.title,
//         course: quiz.course,
//         points: quiz.points,
//         type: quiz.type,
//         assignTo: quiz.assignTo,
//         available: quiz.available,
//         due: quiz.due,
//         until: quiz.until,
//         description: quiz.description,
//       };
//       state.quizzes = [...state.quizzes, newquiz] as any;
//     },
//     deleteQuiz: (state, { payload: quizId }) => {
//       state.quizzes = state.quizzes.filter(
//         (a: any) => a._id !== quizId);
//     },
//     updateQuiz: (state, { payload: quiz }) => {
//       state.quizzes = state.quizzes.map((a: any) =>
//         a._id === quiz._id ? quiz : a
//       ) as any;
//     },
//     editQuiz: (state, { payload: moduleId }) => {
//       state.quizzes = state.quizzes.map((a: any) =>
//         a._id === moduleId ? { ...a, editing: true } : a
//       ) as any;
//     },
//     setQuiz: (state, action) => {
//       state.quizzes = state.quizzes.map((quiz) => 
//         quiz.id === action.payload.id ? action.payload : quiz);
//     },
//   },
// });
// export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuiz } =
//   quizzesSlice.actions;
// export default quizzesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [], 
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuiz: (state, action ) => {
      state.quizzes = action.payload; 
    },
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        _id: new Date().getTime().toString(),
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
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === quiz._id ? quiz : a
      ) as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((quiz: any) => quiz._id !== quizId);
    },
  },
});

export const { setQuiz, addQuiz, deleteQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
