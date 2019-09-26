var pageTitle = document.getElementsByClassName("page-info__title")[0];
var breadcrumbsName = document.getElementsByClassName("breadcrumbs__item active")[0];
var itemImage = document.getElementsByClassName("item__image")[0];
var blogMore = document.getElementsByClassName("blog-more-item");


window.onload  = function(){
	var itemNumber = (Math.floor(Math.random()* 13) + 1);
	pageTitle.innerHTML = "Blog Article " + itemNumber;
	breadcrumbsName.innerHTML = "Blog Article " + itemNumber;
	itemImage.src = "../img/images-" + itemNumber + ".jpg";
	
	for (let i = 0; i < blogMore.length; i++)
	{
		var number = (Math.floor(Math.random()* 13) + 1);
		blogMore[i].getElementsByClassName("blog-more-item__name")[0].innerHTML = "Blog Article " + number;
		blogMore[i].getElementsByClassName("blog-more-item__image")[0].getElementsByTagName("img")[0].src = "../img/images-" + number + ".jpg";
	}
}