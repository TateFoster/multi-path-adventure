import "./ImageSection.css";
import pedestal from "./Images/Pedestal.png";

export default function ImageSection() {
	let image = () => {
		switch (location) {
			case "pedestal":
				return pedestal;
				break;
			default:
				return console.log("There has been a mixup in ImageSection locations");
		}
	};
	return (
		<div className="imageSectionMain">
			<img src={image} />
		</div>
	);
}
