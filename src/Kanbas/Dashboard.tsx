import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
				{/* course1 */}
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/react.png" width={200} />
            <div>
              <h5>
								CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

				{/* course2 */}
        <div className="wd-dashboard-course"> 
					<Link className="wd-dashboard-course-link"
								to="/Kanbas/Courses/1234/Home">
						<img src="/images/css.png" width={200} />
						<div>
							<h5>CS1110 CSS</h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
						</Link>
				</div>

				{/* course3 */}
        <div className="wd-dashboard-course"> 
					<Link className="wd-dashboard-course-link"
								to="/Kanbas/Courses/1234/Home">
						<img src="/images/js.png" width={200} />
						<div>
							<h5>CS1120 Javascript</h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
						</Link>
				</div>
				
				{/* course4 */}
        <div className="wd-dashboard-course"> 
					<Link className="wd-dashboard-course-link"
								to="/Kanbas/Courses/1234/Home">
						<img src="images/cpp.png" width={200} />
						<div>
							<h5>CS1130 c++ Foundation</h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
						</Link>
				</div>
				
				{/* course5 */}
        <div className="wd-dashboard-course"> 
					<Link className="wd-dashboard-course-link"
								to="/Kanbas/Courses/1234/Home">
						<img src="images/sql.png" width={200} />
						<div>
							<h5>CS1140 sql</h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
						</Link>
				</div>
				
				{/* course6 */}
        <div className="wd-dashboard-course"> 
					<Link className="wd-dashboard-course-link"
								to="/Kanbas/Courses/1234/Home">
						<img src="images/python.png" width={200} />
						<div>
							<h5>CS1150 python</h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
						</Link>
				</div>

				{/* course7 */}
        <div className="wd-dashboard-course"> 
					<Link className="wd-dashboard-course-link"
								to="/Kanbas/Courses/1234/Home">
						<img src="images/java.png" width={200} />
						<div>
							<h5>CS1160 java</h5>
							<p className="wd-dashboard-course-title">
								Full Stack software developer
							</p>
							<button> Go </button>
						</div>
						</Link>
				</div>
				
				
      </div>
    </div>
  );
}

