import { Link } from "react-router-dom";
export default function TOC() {
	return (
		<ul>
			<li><Link to="Labs">Labs</Link></li>
      <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      <li><Link to="/Labs/Lab3">Lab 3</Link></li>
			<li><Link to="/Kanbas/Account/Signin">Kanbas</Link></li>
			<li><Link to="https://github.com/yunma-code/kanbas-react-web-app-cs5610-fa24" id="wd-github">Github Repo</Link></li>
		</ul>
	)
}