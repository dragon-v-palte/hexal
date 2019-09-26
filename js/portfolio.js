var items = document.getElementsByClassName("portfolio-item");
window.onload  = function(){
	for (let i = 0; i < items.length; i++)
	{
		var number = (Math.floor(Math.random()* 13) + 1);
		items[i].getElementsByClassName("portfolio-item__name")[0].innerHTML = "Item Name " + number;
		items[i].getElementsByClassName("portfolio-item__image")[0].src = "img/images-" + number + ".jpg";
	}
}
	