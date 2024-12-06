import {Routes, Route, Navigate} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Session from "./Account/Session";
import CourseStatus from "./Courses/Home/Status";
import "bootstrap/dist/css/bootstrap.min.css";
import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";

import "./styles.css";
import { useSelector } from "react-redux";

export default function Kanbas() {
	const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });

	// // get user role from db
	// const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const userRole = currentUser?.username
  //   ? db.users.find((user: any) => user.username === currentUser.username)?.role || "STUDENT"
  //   : "STUDENT";
	const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);


  const addNewCourse = async () => {
		const newCourse = await userClient.createCourse(course);
    setCourses([...courses, { ...course, newCourse }]);
  };
  const deleteCourse = async (courseId: any) => {
		const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
		await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

	const userRole = currentUser?.role || "STUDENT";

	return (
		<Session>
		<div id="wd-kanbas">
			<KanbasNavigation />
			<div className="wd-main-content-offset p-3">
				<Routes>
					<Route path="/" element={<Navigate to="Account" />} />
					<Route path="/Account/*" element={<Account />} />
					<Route path="/Dashboard" element={
						<ProtectedRoute>
						<Dashboard
						 courses={courses}
						 course={course}
						 setCourse={setCourse}
						 addNewCourse={userRole === "FACULTY" ? addNewCourse : undefined}
						 deleteCourse={deleteCourse}
						 updateCourse={updateCourse}
						 userRole={userRole}/>
						</ProtectedRoute>
				 } />
					<Route path="/Courses/:cid/*" 
						element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
					<Route path="/Calendar" element={<h1>Calendar</h1>} />
					<Route path="/Inbox" element={<h1>Inbox</h1>} />
				</Routes>
			</div>
		</div>
		</Session>
	)
}