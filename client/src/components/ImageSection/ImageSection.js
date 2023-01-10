import "./ImageSection.css";
import pedestal from "./Images/Pedestal.png";

export default function ImageSection() {
	let image = () => {
		switch (location) {
			case (location = "pedestal"):
				return pedestal;
            break;
            case default:
		}
	};
	return (
		<div className="imageSectionMain">
			<img src={image} />
		</div>
	);
}

