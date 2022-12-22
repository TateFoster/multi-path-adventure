import "./FirstChoice.css";

export default function FirstChoice() {
	return (
		<div className="FirstChoiceContainer">
			<img>Pedistal image</img>
			<p>The Darkness surrounds you</p>
			<div className="choiceBox">
				<p>1: Choose the path of strength</p>
			</div>
			<div className="choiceBox">
				<p>2: Choose the path of flexability</p>
			</div>
			<div className="choiceBox">
				<p>3: Choose the path of knowledge</p>
			</div>
			<div className="choiceBox">
				<p>4: Reject all paths</p>
			</div>
		</div>
	);
}
