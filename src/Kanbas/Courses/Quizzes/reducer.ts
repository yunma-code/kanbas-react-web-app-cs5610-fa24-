import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {quizzes} from "../../Database"; 

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
  answer?: boolean; // For true/false questions
};

type Quiz = {
  id: string;
  course: string;
  title: string;
  points_possible: number;
  quiz_type: string;
  assignment_group_id: string;
  shuffle_answers: boolean;
  allowed_attempts: number;
  show_correct_answers: boolean;
  one_question_at_a_time: boolean;
  has_access_code: boolean;
  require_lockdown_browser: boolean;
  cant_go_back: boolean;
  due_at: string;
  unlock_at: string;
  lock_at: string;
  description: string;
  time_limit: number;
  published: boolean;
  questions: Question[];
};

interface QuizzesState {
  quizzes: Quiz[];
}

const parseQuizzesData = (data: any[]): Quiz[] => {
  return data.map((quiz) => ({
    ...quiz,
    questions: quiz.questions.map((question: any) => ({
      ...question,
      question_type:
        question.question_type === "multiple_choice" || question.question_type === "true_false"
          ? question.question_type
          : "multiple_choice", 
    })),
  }));
};

const initialState: QuizzesState = {
  quizzes: parseQuizzesData(quizzes), 
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action: PayloadAction<Quiz>) => {
      state.quizzes.push(action.payload);
    },
    deleteQuiz: (state, action: PayloadAction<string>) => {
      state.quizzes = state.quizzes.filter((quiz) => quiz.id !== action.payload);
    },
    updateQuiz: (state, action: PayloadAction<Quiz>) => {
      state.quizzes = state.quizzes.map((quiz) =>
        quiz.id === action.payload.id ? action.payload : quiz
      );
    },
    editQuiz: (state, action: PayloadAction<string>) => {
      state.quizzes = state.quizzes.map((quiz) =>
        quiz.id === action.payload ? { ...quiz, editing: true } : quiz
      );
    },
  },
});

export const { addQuiz, deleteQuiz, updateQuiz, editQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;



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
//   },
// });

// export const { addQuiz, deleteQuiz, updateQuiz, editQuiz } =
//   quizzesSlice.actions;
// export default quizzesSlice.reducer;