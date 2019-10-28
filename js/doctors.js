const linkToJson = "./persons.json"

// class PopupDoc {
//   constructor(popupWrapID, popupActive, popupCloseElClNm) {
//     this.show = popupActive;
//     this.popup = document.getElementById(popupWrapID);
//     this.closePopup = popupCloseElClNm;
//     document.querySelector("body").addEventListener("mouseup", this.ddEvent.bind(this));
//   }
//   ddEvent(event) {
//     if (event.target.matches(this.show) || event.target.closest(this.show)) {
//       this.popUpShow(event.target.closest(this.show));
//       this.popCloseButton(this.closePopup);
//     }
//   }
//   popUpShow(target) {
//     this.popup.classList.remove("popupHidden");
//   }
//   popUpHide() {
//     this.popup.classList.add("popupHidden");
//   }
//   closeByKey(event) {
//     if (event.keyCode === 27) {
//       this.popUpHide();
//     }
//   }
//   popCloseButton(el) {
//     this.popup.addEventListener("mouseup", event => {
//       if (event.target.matches(el)) {
//         this.popUpHide();
//       }
//     });
//     document.addEventListener("keydown", this.closeByKey.bind(this));
//   }
// }

class PersonService {
  constructor(url) {
    this.url = url;
  }
  async getResource() {
    const res = await fetch(this.url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this.url}), received ${res.status}`);
    }
    return await res.json();
  }

  async getPersonList() {
    const res = await this.getResource();
    return [res.persons, res.urlImages];
  }

  async getPerson(key){
    const [list, url] = await this.getPersonList();
    return [list.find(item => item.id === key), url]
  }
}

function createCard(obj, urlImage) {
  const CardPerson = document.getElementById("CardsDoc");
  const newCard = CardPerson.cloneNode(true);
  
  newCard.removeAttribute("hidden");
  newCard.id = obj.id;
  newCard.specialization = obj.specialization;
  newCard.fullName = `${obj.surename} ${obj.name} ${obj.patronymic}`;
  newCard.experience = obj.experience;
  newCard.position = obj.position;
  newCard.linkImage = `${urlImage}${obj.imgFileName}`
  newCard.querySelector(".person__surename").innerText = `${obj.surename}`;
  newCard.querySelector(".person__name").innerText = `${obj.name} ${obj.patronymic}`;
  newCard.querySelector(".person__position").innerText = newCard.position;
  newCard.querySelector(".cardPerson__photo").src = newCard.linkImage;
  return newCard;
}

async function createCardList() {
  const [objList, url] = await persons.getPersonList();
  const fragmentList = document.createDocumentFragment();
  objList.forEach(obj => {
    if (!obj.display) return;
    fragmentList.appendChild(createCard(obj, url));
  });
  return fragmentList;
}

async function appendList() {
  const parent = document.querySelector(".personsList");
  const list = await createCardList();
  parent.appendChild(list);
}
const persons = new PersonService(linkToJson);

appendList();

async function createPopup(target) {
  const CardPerson = document.getElementById("popupDoc");
  CardPerson.querySelector(".desc__fullname").innerText = target.fullName;
  CardPerson.querySelector(".desc__position").innerText = target.position;
  CardPerson.querySelector(".desc__spec").innerText = target.specialization;
  CardPerson.querySelector(".desc__experience").innerText = target.experience;
  CardPerson.querySelector(".popup__photo").src = target.linkImage;
}

class doctorPopup extends Popup{
  popUpShow(target) {
    createPopup(target)
     super.popUpShow(target);
  }
  
}
const myPopupDoc = new doctorPopup("popupWrap", ".cardPerson", ".closeButton");
