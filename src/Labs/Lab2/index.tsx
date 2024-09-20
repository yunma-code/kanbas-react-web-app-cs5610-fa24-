import "./index.css";
export default function Lab2() {
	return(
		<div id="wd-lab2">
			<h2>Lab 2 - Cascading Style Sheets</h2>
			<h3>Styling with the STYLE attributes</h3>
			<p>
				Style attribute allows configuring look and feel
				right on the element. Although it's very convenient
				it is considered bad practice and you should avoid
				using the style attribute
			</p>
			<h2>Colors</h2>
				<h3 className="fg-color-blue">
						Foreground color</h3>
				<p className="fg-color-red">
						The text in this paragraph is red but
						<span className="fg-color-green">
							this text is green
						</span>
				</p>

			<h2>Colors</h2>
			<h3 className="bg-color-blue fg-color-white">
				Background color</h3>
				<p className="bg-color-red fg-color-black">
					This background of this paragraph is red but
					<span className="bg-color-green fg-color-white"> 
					the background of this text is green and the
					foreground white</span>
				</p>

			<h1>Block vs inline elements</h1>
			<p>Headings and paragraphs are block elements. Width is parent's width</p>

			Normal text renders inline <br /><br />
			<span>Span elements</span>
			<span>render inline</span> with the rest of the content

		</div>	
	);
}