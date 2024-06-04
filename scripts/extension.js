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

	body.childNodes.forEach(node => {
		if (!!node.tagName) {
			if (node.classList.contains('mathjax')) return;
			let content = node.innerHTML;
			if (!content) return;
			let poses = [];
			content.replace(/\\?\$+/g, (m, pos) => {
				var hasPre = false, len = m.length;
				if (m.indexOf('\\') === 0) {
					len --;
					hasPre = true;
				}
				if (hasPre || len > 1) return;
				poses.push(pos);
			});
			if (poses.length === 0) return;
			let len = poses.length;
			if (len >> 1 << 1 !== len) return;
			for (let i = len - 1; i >= 0; i -= 2) {
				let bra = poses[i - 1], ket = poses[i] + 1;
				let ctx = content.substring(bra, ket);
				let pre = content.substring(0, bra);
				let post = content.substring(ket);
				content = pre + '<span class="mathjax inner">' + ctx + '</span>' + post;
			}
			node.innerHTML = content;
		}
		else {
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