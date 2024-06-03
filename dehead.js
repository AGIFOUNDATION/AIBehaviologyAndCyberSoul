var removeHead = () => {
	const body = document.querySelector('.markdown-body');
	const head = body.querySelector('h1');
	if (!head) return;
	if (head.innerText.indexOf('AI Behaviology And CyberSoul') < 0) return;

	body.removeChild(head);

	const pathname = location.pathname.replace(/^[\s\\\/]+|[\s\\\/]+$/g, '')
	if (pathname === 'AIBehaviologyAndCyberSoul') return;

	const next = body.children[0];
	if (!next) return;

	const link = newEle('a', 'navHeader');
	link.innerText = 'back';
	link.href = "/AIBehaviologyAndCyberSoul";
	body.insertBefore(link, next);
};

removeHead();