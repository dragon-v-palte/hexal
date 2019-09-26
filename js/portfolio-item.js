var pageTitle = document.getElementsByClassName("page-info__title")[0];
var breadcrumbsName = document.getElementsByClassName("breadcrumbs__item active")[0];
var itemImage = document.getElementsByClassName("item__image")[0];
var portfolioMore = document.getElementsByClassName("portfolio-more-item");


window.onload  = function(){
	var itemNumber = (Math.floor(Math.random()* 13) + 1);
	pageTitle.innerHTML = "Item Name " + itemNumber;
	breadcrumbsName.innerHTML = "Item Name " + itemNumber;
	itemImage.src = "../img/images-" + itemNumber + ".jpg";
	
	for (let i = 0; i < portfolioMore.length; i++)
	{
		var number = (Math.floor(Math.random()* 13) + 1);
		portfolioMore[i].getElementsByClassName("portfolio-more-item__name")[0].innerHTML = "Item Name " + number;
		portfolioMore[i].getElementsByClassName("portfolio-more-item__image")[0].getElementsByTagName("img")[0].src = "../img/images-" + number + ".jpg";
	}
}