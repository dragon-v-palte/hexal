var items = document.getElementsByClassName("blog-item");
window.onload  = function(){
	for (let i = 0; i < items.length; i++)
	{
		var number = (Math.floor(Math.random()* 13) + 1);
		items[i].getElementsByClassName("blog-item__name")[0].innerHTML = "Blog Article " + number;
		items[i].getElementsByClassName("blog-item__image")[0].src = "img/images-" + number + ".jpg";
	}
}