class Popup {
  constructor(popupWrapID, popupActiveID, popupCloseElClNm) {
    this.popup = document.getElementById(popupWrapID);
    this.show = document.getElementById(popupActiveID);
    this.closePopup = popupCloseElClNm;
    this.show.addEventListener("mouseup", event => {
      this.popUpShow(event);
      this.popCLoseButton(this.closePopup);
    });
  }

  popUpShow() {
    if (this.popup.hasAttribute("hidden")) {
      this.popup.removeAttribute("hidden");
    }
  }
  popUpHide() {
    this.popup.setAttribute("hidden", null);
  }
  popCLoseButton(el) {
    this.popup.addEventListener("mouseup", event => {
      if (event.target.matches(el)) {
        this.popUpHide();
      }
    });
    document.addEventListener("keydown", event => {
      console.log(event.code); // проверить что выводит на  маке  для продакшна удалить эту строку.
      if (event.code === "Escape" || event.code === "обозначение на маке") {
        this.popUpHide();
      }
    });
  }
}

const myPopup = new Popup("popup1", "showPopup", ".closePopup");
const myPopup2 = new Popup("popup2", "showPopup2", ".closePopup");
const myPopup3 = new Popup("popup3", "showPopup3", ".closePopup");
