
// переменные для "напишите нам" //

var writeUsLink = document.querySelector(".btn-write-us");
var popupWriteUs = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");

if (popupWriteUs) {
	var form = popupWriteUs.querySelector(".write-us-form");
	var yourName = popupWriteUs.querySelector("[name=name]");
	var yourEMail = popupWriteUs.querySelector("[name=e-mail]");
	var yourMessage = popupWriteUs.querySelector("[name=message]");
}
var isStorageSupport = true;
var storageName = "";
var storageEMail = "";

// переменные для "найти нас на карте" //

var mapLink = document.querySelector(".btn-popup-map");
var popupMap = document.querySelector(".modal-map");
if (popupMap) {
	var closeMap = popupMap.querySelector(".modal-close")
};

// переменные для "корзины" //

var buyButtons = document.querySelectorAll(".btn-buy");
var popupCart = document.querySelector(".modal-cart");
if (popupCart) {
	var closeCart = popupCart.querySelector(".modal-close");
};

// переменные для "слайдера" //

var currentSlide = document.querySelector(".catalog-item-promo-active");
var currentSlideIndex;
var sliderBtnNext = document.querySelector(".catalog-btn-next");
var sliderBtnBack = document.querySelector(".catalog-btn-back");
var sliderItems = document.querySelectorAll(".catalog-item-promo");

var getCurrentSlideIndex = function () {
	for (var i = 0; i < sliderItems.length; i++) {
		if (sliderItems[i].classList.contains("catalog-item-promo-active")) {
			currentSlideIndex = i;
		}
	}
};

getCurrentSlideIndex ();

var showNextSlide = function () {
	currentSlide.classList.remove("catalog-item-promo-active");
	if (currentSlideIndex + 1 < sliderItems.length) {
		currentSlideIndex = currentSlideIndex + 1;
	} else {
		currentSlideIndex = 0;
	}
	sliderItems[currentSlideIndex].classList.add("catalog-item-promo-active");
	currentSlide = document.querySelector(".catalog-item-promo-active");
};

var showPrevSlide = function () {
	currentSlide.classList.remove("catalog-item-promo-active");
	if (currentSlideIndex - 1 >= sliderItems.length) {
		currentSlideIndex = currentSlideIndex - 1;
	} else {
		currentSlideIndex = sliderItems.length -1;
	}
	sliderItems[currentSlideIndex].classList.add("catalog-item-promo-active");
	currentSlide = document.querySelector(".catalog-item-promo-active");
};



// код для "напишите нам" //

try {
	storageName = localStorage.getItem("yourName");
	storageEMail = localStorage.getItem("yourEMail");
} catch (err) {
	isStorageSupport = false;
}

if (popupWriteUs) {
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
	})

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
	})
};

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

if (popupMap) {
	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupMap.classList.add("modal-show");
	})

	closeMap.addEventListener("click", function (evt) {
		evt.preventDefault();
		popupMap.classList.remove("modal-show");
	})
};

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

// код для "слайдера" //

sliderBtnNext.addEventListener("click", function() {
	showNextSlide();
});

sliderBtnBack.addEventListener("click", function() {
	showPrevSlide();
});
