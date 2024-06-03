const newEle = (tag, ...classList) => {
	var ele = document.createElement(tag);
	classList.forEach(cls => ele.classList.add(cls));

	return ele;
};

const init = () => {
	const html = document.querySelector('html');
	const body = document.querySelector('.markdown-body');

	var end = newEle('div', 'footnote');
	var link = newEle('a', 'goback');
	link.innerText = 'Back';
	link.href = "/AIBehaviologyAndCyberSoul";
	end.appendChild(link);
	body.appendChild(end);

	var upper = newEle('div', 'upper');
	upper.innerText = "Up";
	upper.addEventListener('click', evt => {
		html.scroll(0, 0);
	});
	document.body.appendChild(upper);
};

init();