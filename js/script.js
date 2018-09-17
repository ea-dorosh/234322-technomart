
// переменные для "напишите нам" //

var writeUsLink = document.querySelector(".btn-write-us");
var popupWriteUs = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var form = popupWriteUs.querySelector(".write-us-form");
var yourName = popupWriteUs.querySelector("[name=name]");
var yourEMail = popupWriteUs.querySelector("[name=e-mail]");
var yourMessage = popupWriteUs.querySelector("[name=message]");
var isStorageSupport = true;
var storageName = "";
var storageEMail = "";

// переменные для "найти нас на карте" //

var mapLink = document.querySelector(".btn-popup-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

// переменные для "корзины" //

var buyButtons = document.querySelectorAll(".btn-buy");
var popupCart = document.querySelector(".modal-cart");
var closeCart = popupCart.querySelector(".modal-close");

// код для "напишите нам" //

try {
	storageName = localStorage.getItem("yourName");
	storageEMail = localStorage.getItem("yourEMail");
} catch (err) {
	isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupWriteUs.classList.add("modal-show");
	if (storageName && storageEMail) {
		yourName.value = storageName;
		yourEMail.value = storageEMail;
		yourMessage.focus();
	} else if (storageName) {
		yourName.value = storageName;
		yourEMail.focus();
	} else if (storageEMail) {
		yourEMail.value = storageEMail;
		yourName.focus();
	} else {
		yourName.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupWriteUs.classList.remove("modal-show");
	popupWriteUs.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!yourName.value || !yourEMail.value || !yourMessage.value) {
		evt.preventDefault();
		popupWriteUs.classList.remove("modal-error");
		popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
		popupWriteUs.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("yourName", yourName.value);
			localStorage.setItem("yourEMail", yourEMail.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popupWriteUs.classList.contains("modal-show")) {
			evt.preventDefault();
			popupWriteUs.classList.remove("modal-show");
			popupWriteUs.classList.remove("modal-error");
		}
	}
});

// код для "найти нас на карте" //

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popupMap.classList.contains("modal-show")) {
			evt.preventDefault();
			popupMap.classList.remove("modal-show");
		}
	}
});

// код для "корзины" //

for (var i = 0; i <buyButtons.length; i++ ) {
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



