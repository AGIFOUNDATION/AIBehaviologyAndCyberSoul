const addFootnote = () => {
	const body = document.querySelector('.markdown-body');
	const footnote = newEle('div', 'footnote');
	footnote.innerHTML = 'AI Behaviology and Alignment © 2024 by <a target="_blank" href="https://github.com/AGIFOUNDATION">AGIFoundation</a> is licensed under <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>';
	body.appendChild(footnote);
};

const dehead = () => {
	const body = document.querySelector('.markdown-body');
	const head = body.querySelector('h1');
	if (!head) return;
	if (head.innerText.indexOf('AI Behaviology And CyberSoul') < 0) return;

	body.removeChild(head);

	const pathname = location.pathname.replace(/^[\s\\\/]+|[\s\\\/]+$/g, '')
	if (pathname === 'AIBehaviologyAndCyberSoul') {
		let parag = body.querySelector('p');
		parag.classList.add("headerInfo");
		return;
	}

	const next = body.children[0];
	if (!next) return;

	const link = newEle('a', 'navHeader');
	link.innerText = 'back';
	link.href = "/AIBehaviologyAndCyberSoul";
	body.insertBefore(link, next);
};

addFootnote();
dehead();