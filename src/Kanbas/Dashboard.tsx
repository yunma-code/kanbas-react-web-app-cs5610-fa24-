import { Link } from "react-router-dom";
import * as db from "./Database";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer";
import { useDispatch } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse = () => {},
  deleteCourse,
  updateCourse,
  userRole,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse?: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  userRole: string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleEnrollments = () => setShowAllCourses(!showAllCourses);
  const isFaculty = userRole === "FACULTY";
  const isStudent = userRole === "STUDENT";

  // Get all enrolled course IDs for the current user
  const enrolledCourseIds = enrollments
    .filter((enrollment: any) => enrollment.user === currentUser._id)
    .map((enrollment: any) => enrollment.course);

  // Show all courses or only enrolled courses based on the toggle
  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) => enrolledCourseIds.includes(course._id));

  const handleEnrollClick = (courseId: string) => {
    dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
  };

  const handleUnenrollClick = (courseId: string) => {
    dispatch(unenrollCourse({ user: currentUser._id, course: courseId }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {isFaculty && (
        <>
          {/* Add title and addNewCourse button */}
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
          {/* Published courses */}
          <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
          <hr />
        </>
      )}

      {isStudent && (
        <button className="btn btn-primary float-end mb-3" onClick={toggleEnrollments}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={
                    isFaculty || enrolledCourseIds.includes(course._id)
                      ? `/Kanbas/Courses/${course._id}/Home`
                      : "#"
                  }
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    if (isStudent && !enrolledCourseIds.includes(course._id)) {
                      e.preventDefault(); // Prevent navigation if student is not enrolled
                    }
                  }}
                >
                  <img src={course.img} alt={course.name} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>

                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        if (isStudent && !enrolledCourseIds.includes(course._id)) {
                          e.preventDefault();
                        }
                      }}
                    >
                      Go
                    </button>

                    {/* Enrollment and Unenrollment for students */}
                    {isStudent && enrolledCourseIds.includes(course._id) ? (
                      <button
                        className="btn btn-danger float-end"
                        onClick={(e) => {
                          e.preventDefault();
                          handleUnenrollClick(course._id);
                        }}
                      >
                        Unenroll
                      </button>
                    ) : (
                      isStudent && (
                        <button
                          className="btn btn-success"
                          onClick={(e) => {
                            e.preventDefault();
                            handleEnrollClick(course._id);
                          }}
                        >
                          Enroll
                        </button>
                      )
                    )}

                    {/* Edit and delete buttons only visible to faculty */}
                    {isFaculty && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

          // {/* course 2 */}
          // <div className="wd-dashboard-course col" style={{ width: "300px" }} key="course2">
          //   <div className="card rounded-3 overflow-hidden">
          //     <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
          //       <img src="/images/css.png" width="100%" height={160} alt="CSS" />
          //       <div className="card-body">
          //         <h5 className="wd-dashboard-course-title card-title">CS1110 CSS</h5>
          //         <p className="card-text">Full Stack software developer</p>
          //         <button className="btn btn-primary"> Go </button>
          //       </div>
          //     </Link>
          //   </div>
          // </div>

          // {/* course 3 */}
          // <div className="wd-dashboard-course col" style={{ width: "300px" }} key="course3">
          //   <div className="card rounded-3 overflow-hidden">
          //     <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
          //       <img src="/images/js.png" width="100%" height={160} alt="JavaScript" />
          //       <div className="card-body">
          //         <h5 className="wd-dashboard-course-title card-title">CS1120 JavaScript</h5>
          //         <p className="card-text">Full Stack software developer</p>
          //         <button className="btn btn-primary"> Go </button>
          //       </div>
          //     </Link>
          //   </div>
          // </div>

          // {/* course 4 */}
          // <div className="wd-dashboard-course col" style={{ width: "300px" }} key="course4">
          //   <div className="card rounded-3 overflow-hidden">
          //     <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
          //       <img src="/images/cpp.png" width="100%" height={160} alt="C++ Foundation" />
          //       <div className="card-body">
          //         <h5 className="wd-dashboard-course-title card-title">CS1130 C++ Foundation</h5>
          //         <p className="card-text">Full Stack software developer</p>
          //         <button className="btn btn-primary"> Go </button>
          //       </div>
          //     </Link>
          //   </div>
          // </div>

          // {/* course 5 */}
          // <div className="wd-dashboard-course col" style={{ width: "300px" }} key="course5">
          //   <div className="card rounded-3 overflow-hidden">
          //     <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
          //       <img src="/images/sql.png" width="100%" height={160} alt="SQL" />
          //       <div className="card-body">
          //         <h5 className="wd-dashboard-course-title card-title">CS1140 SQL</h5>
          //         <p className="card-text">Full Stack software developer</p>
          //         <button className="btn btn-primary"> Go </button>
          //       </div>
          //     </Link>
          //   </div>
          // </div>

          // {/* course 6 */}
          // <div className="wd-dashboard-course col" style={{ width: "300px" }} key="course6">
          //   <div className="card rounded-3 overflow-hidden">
          //     <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
          //       <img src="/images/python.png" width="100%" height={160} alt="Python" />
          //       <div className="card-body">
          //         <h5 className="wd-dashboard-course-title card-title">CS1150 Python</h5>
          //         <p className="card-text">Full Stack software developer</p>
          //         <button className="btn btn-primary"> Go </button>
          //       </div>
          //     </Link>
          //   </div>
          // </div>

          // {/* course 7 */}
          // <div className="wd-dashboard-course col" style={{ width: "300px" }} key="course7">
          //   <div className="card rounded-3 overflow-hidden">
          //     <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
          //       <img src="/images/java.png" width="100%" height={160} alt="Java" />
          //       <div className="card-body">
          //         <h5 className="wd-dashboard-course-title card-title">CS1160 Java</h5>
          //         <p className="card-text">Full Stack software developer</p>
          //         <button className="btn btn-primary"> Go </button>
          //       </div>
          //     </Link>
          //   </div>
          // </div>
   