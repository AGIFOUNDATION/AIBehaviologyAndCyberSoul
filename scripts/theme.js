const addThemeChooser = () => {
	var theme = localStorage.theme || "light";
	const themer = newEle('div', 'themer', 'bottomButton');
	const updateTitle = () => {
		if (theme === 'light') {
			themer.innerText = 'D';
			document.body.classList.add('theme_dark');
		}
		else {
			themer.innerText = 'L';
			document.body.classList.remove('theme_dark');
		}
	};
	updateTitle();
	themer.addEventListener('click', evt => {
		theme = theme === 'light' ? "dark" : "light";
		localStorage.theme = theme;
		updateTitle();
	});
	document.body.appendChild(themer);
};

addThemeChooser();