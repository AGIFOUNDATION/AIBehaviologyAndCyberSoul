const newEle = (tag, ...classList) => {
	var ele = document.createElement(tag);
	classList.forEach(cls => ele.classList.add(cls));

	return ele;
};