import "./Text.css";
import Pedestal from "./Locations/Pedestal";

export default function Text() {
	let text = () => {
		switch (location) {
			case "pedestal":
				return <Pedestal />;
			default:
				return console.log("There has been a mixup in Text locations");
		}
	};

	return <div className="textArea">{text}</div>;
}
