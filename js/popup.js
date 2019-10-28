class Popup {
	constructor(popupWrapID, popupActive, popupCloseElClNm) {
	  this.show = popupActive;
	  this.popup = document.getElementById(popupWrapID);
	  this.closePopup = popupCloseElClNm;
	  document.querySelector("body").addEventListener("mouseup", this.ddEvent.bind(this));
	}
	ddEvent(event) {
	  if (event.target.matches(this.show) || event.target.closest(this.show)) {
		this.popUpShow(event.target.closest(this.show));
		this.popCloseButton(this.closePopup);
	  }
	}
	popUpShow(target) {
	  this.popup.classList.remove("popupHidden");
	}
	popUpHide() {
	  this.popup.classList.add("popupHidden");
	}
	closeByKey(event) {
	  if (event.keyCode === 27) {
		this.popUpHide();
	  }
	}
	popCloseButton(el) {
	  this.popup.addEventListener("mouseup", event => {
		if (event.target.matches(el)) {
		  this.popUpHide();
		}
	  });
	  document.addEventListener("keydown", this.closeByKey.bind(this));
	}
  }