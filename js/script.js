var writeUsLink = document.querySelector(".btn-write-us");
var popupWriteUs = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close")
var form = popupWriteUs.querySelector(".write-us-form");
var yourName = popupWriteUs.querySelector("[name=name]");
var yourEMail = popupWriteUs.querySelector("[name=e-mail]");
var yourMessage = popupWriteUs.querySelector('.write-us-item-message');
var storageName = localStorage.getItem("yourName");
var storageEMail = localStorage.getItem("yourEMail");

var mapLink = document.querySelector(".btn-popup-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close")

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("yourName");
} catch (err) {
	isStorageSupport = false;
}

writeUsLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupWriteUs.classList.add("modal-show");
	if (storageName) {
		yourName.value = storageName;
		yourEMail.focus();
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
})

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
})