var imagesList = document.getElementsByClassName("images__list")[0];

window.onload  = function(){
    imagesRow();
	for (let i = 0; i < imagesList.childElementCount; i++)
		imagesList.getElementsByClassName("images__item")[i].getElementsByTagName("img")[1].src = "img/images-" + (Math.floor(Math.random()* 5) + 1) + ".jpg";
}

window.onresize = function() {
	imagesRow();
}

var imagesRow = function() {
	for (let i = 0; i < imagesList.childElementCount; i++)	
	{
		console.log(i + " of " + imagesList.getElementsByClassName("images__item")[i]);
		if (imagesList.getElementsByClassName("images__item")[i].classList.contains("images__item--border-left"))
			imagesList.getElementsByClassName("images__item")[i].classList.remove("images__item--border-left");
		if (imagesList.getElementsByClassName("images__item")[i].classList.contains("images__item--border-right"))
			imagesList.getElementsByClassName("images__item")[i].classList.remove("images__item--border-right");
		if (imagesList.getElementsByClassName("images__item")[i].classList.contains("images__item--margin-left"))
			imagesList.getElementsByClassName("images__item")[i].classList.remove("images__item--margin-left");
		if (imagesList.getElementsByClassName("images__item")[i].classList.contains("images__item--margin-right"))
			imagesList.getElementsByClassName("images__item")[i].classList.remove("images__item--margin-right");
	}
		
	var firstLine, secondLine;
	
	if (document.documentElement.clientWidth >= 1440)
		{	
		firstLine = 4;
		secondLine = 5;
		}
	
	if (document.documentElement.clientWidth < 1440 && document.documentElement.clientWidth >= 1200)
		{	
		firstLine = 3;
		secondLine = 4;
		}
	if (document.documentElement.clientWidth < 1200 && document.documentElement.clientWidth >= 992)
		{	
		firstLine = 2;
		secondLine = 3;
		}
	for (let i = 0; i < (imagesList.childElementCount / (firstLine + secondLine)); i++)	
	{		
		var marginLeftValue = i * (firstLine + secondLine);
		var marginRightValue = marginLeftValue + (firstLine - 1);
		if (marginLeftValue < imagesList.childElementCount)
			imagesList.getElementsByClassName("images__item")[marginLeftValue].classList.add("images__item--margin-left");
		if (marginRightValue < imagesList.childElementCount)
			imagesList.getElementsByClassName("images__item")[marginRightValue].classList.add("images__item--margin-right");
	}	
};

var indicatorsItem = document.getElementsByClassName("indicators__item");
var indicatorClick = function(obj) {
		for (let k = 0; k < indicatorsItem.length; k++)
			indicatorsItem[k].classList.remove("active");
		obj.classList.add("active");
		for (let i = 0; i < imagesList.childElementCount; i++)
		{
			imagesList.getElementsByClassName("images__item")[i].getElementsByTagName("img")[0].src = "img/images-" + (Math.floor(Math.random()* 5) + 1) + ".jpg";
			imagesList.getElementsByClassName("images__item")[i].getElementsByTagName("img")[0].classList.toggle("change-img");
			imagesList.getElementsByClassName("images__item")[i].getElementsByTagName("img")[1].classList.toggle("change-img");
			
			setTimeout(function(){	
				imagesList.getElementsByClassName("images__item")[i].getElementsByTagName("img")[1].src = imagesList.getElementsByClassName("images__item")[i].getElementsByTagName("img")[0].src;
				imagesList.getElementsByClassName("images__item")[i].getElementsByTagName("img")[1].classList.toggle("change-img");			
			}, 250);
			setTimeout(function(){	
			imagesList.getElementsByClassName("images__item")[i].getElementsByTagName("img")[0].classList.toggle("change-img");	
			}, 250);	
		}
	};
	