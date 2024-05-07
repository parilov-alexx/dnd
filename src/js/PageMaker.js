export default class PageMaker {
  constructor(data) {
    this.data = data;
    this.container = null;
    this.cardsContainerEl = null;
    this.addCards = null;
    this.forms = null;
    this.cancelBtns = null;
    this.inputs = null;
    this.cards = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Контейнер не является элементом "HTMLElement"');
    }
    this.container = container;
    this.addCards = this.container.querySelectorAll('.add-card');
    this.forms = this.container.querySelectorAll('.new-card-form');
    this.cancelBtns = this.container.querySelectorAll('.cancel-btn');
    this.inputs = this.container.querySelectorAll('.card-input');
    this.cards = this.container.querySelectorAll('.cards');
    this.cardsContainerEl = this.container.querySelector('.cards-container');
  }

  static createCard(column, value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="input-text">${value}</div>\n`
        + '              <button class="delete-btn hidden">&#10005;</button>';
    column.append(card);
  }

  static deleteCard(event) {
    event.parentElement.remove();
  }
}
