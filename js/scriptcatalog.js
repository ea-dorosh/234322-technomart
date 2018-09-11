var buy = document.querySelector(".btn-buy");
var popupCart = document.querySelector(".modal-cart");
var closeCart = popupCart.querySelector(".modal-close");

buy.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupCart.classList.add("modal-show");
})

closeCart.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupCart.classList.remove("modal-show")
})

window.addEventListener("keydown", function (evt) {
	if (popupCart.classList.contains("modal-show")) {
		evt.preventDefault();
		popupCart.classList.remove("modal-show");
	}
})