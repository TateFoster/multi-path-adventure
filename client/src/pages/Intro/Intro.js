import "./Intro.css";

export default function Intro() {
	const logInOut = () => {
		loggedIn = setLoggedIn(!loggedIn);
	};
	return (
		<div className="introArea">
			<h2>Will you grasp your destiny?</h2>
			<section className="options">
				<div className="button">Log In</div>
				<div className="button">Start Game</div>
				<div className="button">Delete Character</div>
			</section>
		</div>
	);
}
