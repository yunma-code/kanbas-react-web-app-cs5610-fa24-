const add = (a: number, b: number) => {
	alert(`${a} + ${b} = ${a+b}`);
};

export default function PassingDataOnEvent() {
	const handleClick = () => add(2, 3);
	return(
		<div id="wd-passing-data-on-event">
			<h2>Passing Data on Event</h2>
			<button onClick={handleClick}
			//onClick={add(2,3)};
			//direct call instead of waiting for click event
			//potential infinite loop
				className="btn btn-primary"
				id="wd-pass-data-click">
				Pass 2 and 3 to add()
			</button>
			<hr />
		</div>
	);
}