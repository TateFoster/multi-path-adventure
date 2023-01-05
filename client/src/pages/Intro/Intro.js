import "./Intro.css";

export default function Intro() {
	const logInOut = () => {
		loggedIn = setLoggedIn(!loggedIn);
	};
	return (
		<div className="introArea">
			<section className="options">
				<div className="button">Log In</div>
				<div className="button">Start Game</div>
			</section>
		</div>
	);
}
