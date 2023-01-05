import "./ImageSection.css";

export default function ImageSection() {
	let image = () => {
		switch (location) {
			case (location = placeholder):
				return <placeholder />;
		}
	};
	return (
		<div className="imageSectionMain">
			<img src={image} />
		</div>
	);
}
