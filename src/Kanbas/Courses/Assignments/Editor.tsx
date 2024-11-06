import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { assignmentId, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const assignmentData = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find(
      (assignment: any) => assignment._id === assignmentId
    )
  );

  // init states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [available_from_date, setAvailableFrom] = useState("");
  const [available_until_date, setAvailableUntil] = useState("");

  useEffect(() => {
    // editing existing assignment
    if (assignmentId && assignmentData) {
      setTitle(assignmentData.title);
      setDescription(assignmentData.description);
      setPoints(assignmentData.points);
      setDueDate(assignmentData.dueDate);
      setAvailableFrom(assignmentData.available_from_date);
      setAvailableUntil(assignmentData.available_until_date);
    } else {
      // new assignment
      setTitle("");
      setDescription("");
      setPoints(100);
      setDueDate("");
      setAvailableFrom("");
      setAvailableUntil("");
    }
  }, [assignmentId, assignmentData]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newAssignment = {
      _id: assignmentId || new Date().getTime().toString(),
      title,
      description,
      points,
      dueDate,
      available_from_date,
      available_until_date,
      course: cid,
    };

    if (assignmentId) {
      //update existing assignment
      dispatch(updateAssignment(newAssignment)); 
    } 
    dispatch(addAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${cid}/Assignments`); //navigate
      
  };

  return (
    <div className="assignment-editor-container mt-4 p-4">
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            id="wd-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
            placeholder="New Assignment"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            rows={3}
            placeholder="New Assignment Description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            type="number"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value))}
            className="form-control"
            required
            placeholder="100"
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Assign</label>
          <div className="row border p-3 rounded">
            <div className="col-md-4">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <input
                id="wd-due-date"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="wd-available-from" className="form-label">Available from</label>
              <input
                id="wd-available-from"
                type="date"
                value={available_from_date}
                onChange={(e) => setAvailableFrom(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="wd-available-until" className="form-label">Until</label>
              <input
                id="wd-available-until"
                type="date"
                value={available_until_date}
                onChange={(e) => setAvailableUntil(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </div>
        
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <button type="submit" className="btn btn-danger">Save</button>
        </div>
      </form>
    </div>
  );
}
