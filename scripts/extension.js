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

	return;
	body.childNodes.forEach(node => {
		if (!node.tagName) {
			let content = node.data;
			content = content.replace(/^\s*|\s*$/g, '');
			if (!content) return;
			let match = content.match(/\\\[([\w\W]*)\\\]/);
			if (!match) return;
			let p = newEle('p', 'mathjax');
			p.innerText = "$$\n" + match[1] + '\n$$';
			body.insertBefore(p, node);
			body.removeChild(node);
		}
	});
};

init();