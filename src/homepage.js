import restaurantImage from "./Assets/restuarant.jpg";
import createElement from "./utilities";

export default function generateHomepage(targetEle) {
	const mainContentSecEle = createElement({ type: "section", id: "main-content" });

	for (let i = 1; i <= 3; i++) {
		// Top level info-container
		const infoContainerEle = createElement({ type: "div", classList: "info-container" });

		//Card title and card
		const h2Ele = createElement({
			type: "h2",
			text: ["Why we exist", "Who we are", "How we started"][i - 1],
		});
		const cardEle = createElement({ type: "div", classList: "card" });

		//Card internal elements
		const smallEle = createElement({
			type: "small",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos earum voluptatibus, provident possimus ex tempore corrupti tenetur nesciunt eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus, odit accusamus animi quo temporibus dicta a at consequuntur natus.",
		});
		const imgEle = createElement({ type: "img", image: restaurantImage });

		cardEle.append(smallEle, imgEle);
		infoContainerEle.append(h2Ele, cardEle);
		mainContentSecEle.append(infoContainerEle);
	}

	targetEle.append(mainContentSecEle);
}
