import peppPizzaImage from "./Assets/pepperoni-pizza.webp";
import createElement from "./utilities";

export default function loadMenuPage(targetEle) {
	const menuSectionEle = createElement({ type: "section", id: "menu-section" });

	for (let i = 1; i <= 3; i++) {
		// Card elements
		const menuCardEle = createElement({ type: "div", classList: "menu-card" });

		//Card internal elements
		const h3Ele = createElement({
			type: "h3",
			text: "Pomodoro Pizza",
		});

		const smallEle = createElement({
			type: "small",
			text: "Succulent tomato base with cheese, and a bit of garlic and pepparoni",
		});

		const imgEle = createElement({ type: "img", image: peppPizzaImage });

		menuCardEle.append(h3Ele, smallEle, imgEle);
		menuSectionEle.append(menuCardEle);
	}

	targetEle.append(menuSectionEle);
}
