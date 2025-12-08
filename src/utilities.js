export default function createElement({ type, classList, text, id, image }) {
	const e = document.createElement(type);
	if (classList) {
		e.classList = classList;
	}

	if (text) {
		e.textContent = text;
	}

	if (id) {
		e.id = id;
	}

	if (image) {
		e.src = image;
		e.placeholderText = "Placeholder";
	}

	return e;
}
