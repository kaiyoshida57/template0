
const items = document.querySelectorAll('.header-item');

items.forEach((item, index) => {
	item.addEventListener('click', function(){
		console.log(index);
		return false;
	});
});

