import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
	assignments: assignments || [],
};

const assignmentsSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {
		addAssignment: (state, { payload: assignment }) => {
			const newAssignment: any = {
				_id: assignment._id || new Date().getTime().toString(),
				title: assignment.title,
				course: assignment.course,
				description: assignment.description,
				dueDate: assignment.dueDate,
				available_from_date: assignment.available_from_date,
				available_until_date: assignment.available_until_date,
				points: assignment.points,
			};
			// add new assignment to array
			state.assignments.push(newAssignment);
		},
		deleteAssignment: (state, { payload: assignmentId }) => {
			state.assignments = state.assignments.filter(
				(m: any) => m._id !== assignmentId);
		},
		updateAssignment: (state, { payload: assignment }) => {
			state.assignments = state.assignments.map((m: any) =>
				m._id === assignment._id ? assignment : m
			) as any;
		},

	},
});
export const { addAssignment, deleteAssignment, updateAssignment } =
	assignmentsSlice.actions;
export default assignmentsSlice.reducer;