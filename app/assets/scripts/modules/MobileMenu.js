import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.header = $(".site-header");
    this.icon = $(".site-header__menu-icon");
    this.content = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.icon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.header.toggleClass("site-header--is-expanded");
    this.content.toggleClass("site-header__menu-content--is-visible");
    this.icon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;