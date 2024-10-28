import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

export default function Lab4() {
	function sayHello() {
		alert("Hello");
	}
	return(
		<div id="wd-lab4">
			<h2>Lab4</h2>
			<ClickEvent />
			<PassingDataOnEvent />
			<PassingFunctions theFunction={sayHello} />
		</div>
	);
}