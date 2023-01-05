import "./Main.css";
import ImageSection from "../../components/ImageSection/ImageSection.js";
import Text from "../../components/Text/Text.js";

export default function Main() {
	return (
		<div className="mainSection">
			<div className="topDecoration"></div>
			<div className="leftDecoration"></div>
			<section>
				<ImageSection />
				<Text />
			</section>
			<div className="rightDecoration"></div>
		</div>
	);
}
