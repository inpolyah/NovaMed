// class Popup {
//   constructor(popupWrapID, popupActiveID, popupCloseElClNm) {
//     this.popup = document.getElementById(popupWrapID);
// 	this.show = document.getElementById(popupActiveID);
//     this.closePopup = popupCloseElClNm;
//     this.show.addEventListener("mouseup", event => {
//       this.popUpShow(event);
//       this.popCLoseButton(this.closePopup);
//     });
//   }

//   popUpShow() {
//     if (this.popup.hasAttribute("hidden")) {
//       this.popup.removeAttribute("hidden");
//     }
//   }
//   popUpHide() {
//     this.popup.setAttribute("hidden", null);
//   }
//   popCLoseButton(el) {
//     this.popup.addEventListener("mouseup", event => {
//       if (event.target.matches(el)) {
//         this.popUpHide();
//       }
//     });
//     document.addEventListener("keydown", event => {
//       if (event.code === "Escape" || event.code === "обозначение на маке") {
//         this.popUpHide();
//       }
//     });
//   }
// }

const myPopup = new Popup("formsPopup", ".showPopup", ".closePopup");
// const myPopup2 = new Popup("popup2", "showPopup2", ".closePopup");
// const myPopup3 = new Popup("popup3", "showPopup3", ".closePopup");

//-----форма для телефона-------------
function mask(inputName, mask, evt) {
  try {
    var text = document.getElementById(inputName);
    var value = text.value;

    // If user pressed DEL or BACK SPACE, clean the value
    try {
      var e = (evt.which) ? evt.which : event.keyCode;
      if ( e == 46 || e == 8 ) {
        text.value = "";
        return;
      }
    } catch (e1) {}

    var literalPattern=/[0\*]/;
    var numberPattern=/[0-9]/;
    var newValue = "";

    for (var vId = 0, mId = 0 ; mId < mask.length ; ) {
      if (mId >= value.length)
        break;

      // Number expected but got a different value, store only the valid portion
      if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
        break;
      }

      // Found a literal
      while (mask[mId].match(literalPattern) == null) {
        if (value[vId] == mask[mId])
          break;

      newValue += mask[mId++];
    }

    newValue += value[vId++];
    mId++;
  }

  text.value = newValue;
} catch(e) {}
}
//------------------------
//----------------форма для календаря
