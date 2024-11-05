import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { assignmentId, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
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
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  useEffect(() => {
    if (assignmentData) {
      //  if editing existing assignment
      setTitle(assignmentData.title);
      setDescription(assignmentData.description);
      setPoints(assignmentData.points);
      setDueDate(assignmentData.dueDate);
      setAvailableFrom(assignmentData.availableFrom);
      setAvailableUntil(assignmentData.availableUntil);
    }
  }, [assignmentData]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newAssignment = {
      _id: assignmentId || new Date().getTime().toString(),
      title,
      description,
      points,
      dueDate,
      availableFrom,
      availableUntil,
      course: cid,
    };

    if (assignmentId) {
      //update existing assignment
      dispatch(updateAssignment(newAssignment)); 
    } else {
      // add new assignment
      dispatch(addAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`); //navigate back
  };

  return (
    <div id="wd-assignments-editor" className="mt-4">
      <form onSubmit={handleSave}>
        <div className="mb-4 w-50">
          <label id="wd-name" className="form-label">Assignment Name</label>
          <input
            id="wd-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-4 w-50">
          <label id="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-4 w-50">
          <label id="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            type="number"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value))}
            className="form-control"
            required
          />
        </div>

        <div className="mb-4 w-50">
          <label id="wd-due-date" className="form-label">Due Date</label>
          <input
            id="wd-due-date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-4 w-50">
          <label id="wd-available-from" className="form-label">Available From</label>
          <input
            id="wd-available-from"
            type="date"
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-4 w-50">
          <label id="wd-available-until" className="form-label">Available Until</label>
          <input
            id="wd-available-until"
            type="date"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="d-flex justify-content-end w-50">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <button type="submit" className="btn btn-save">Save</button>
        </div>
      </form>
    </div>
  );
}
