const init = () => {
	const html = document.querySelector('html');
	const body = document.querySelector('.markdown-body');

	var end = newEle('div', 'backlink');
	var link = newEle('a', 'goback');
	link.innerText = 'Back';
	link.href = "/AIBehaviologyAndCyberSoul";
	end.appendChild(link);
	body.appendChild(end);

	var upper = newEle('div', 'upper', 'bottomButton');
	upper.innerText = "Up";
	upper.addEventListener('click', evt => {
		html.scroll(0, 0);
	});
	document.body.appendChild(upper);
};

init();