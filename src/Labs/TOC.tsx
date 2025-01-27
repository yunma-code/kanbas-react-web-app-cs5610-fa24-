import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export default function TOC() {
	const { pathname } = useLocation();
	return (
		<ul className="nav nav-pills">
			<li className="nav-item">
				<a id="wd-a" href="#/Labs/*" className="nav-link">
					Labs</a></li>
      <li className="nav-item">
				<a id="wd-a1" href="#/Labs/Lab1" className={`nav-link ${pathname.includes("lab1") ? "active" : ""}`}>
					Lab 1</a></li>
      <li className="nav-item">
				<a id="wd-a2" href="#/Labs/Lab2" className={`nav-link ${pathname.includes("lab2") ? "active" : ""}`}>
					Lab 2</a></li>
      <li className="nav-item">
				<a id="wd-a3" href="#/Labs/Lab3" className={`nav-link ${pathname.includes("lab3") ? "active" : ""}`}>
					Lab 3</a></li>
			<li className="nav-item">
				<a id="wd-k" href="#/Kanbas/Account/Signin" className="nav-link">
					Kanbas</a></li>
			<li className="nav-item">
				<a id="wd-k" href="https://github.com/yunma-code/kanbas-react-web-app-cs5610-fa24" className="nav-link">
					Github Repo</a></li>
		</ul>
	)
}