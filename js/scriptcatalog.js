var buyButtons = document.querySelectorAll(".btn-buy");
var popupCart = document.querySelector(".modal-cart");
var closeCart = popupCart.querySelector(".modal-close");
console.log(buyButtons);

for (var i = 0; i < buyButtons.length; i++ ) {
	buyButtons[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		popupCart.classList.add("modal-show");
	});
};

closeCart.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupCart.classList.remove("modal-show")
});

window.addEventListener("keydown", function (evt) {
	if (popupCart.classList.contains("modal-show")) {
		evt.preventDefault();
		popupCart.classList.remove("modal-show");
	}
});