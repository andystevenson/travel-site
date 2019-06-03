import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(selector, offset) {
    this.itemsToReveal = selector;
    this.offset = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var self = this;
    this.itemsToReveal.each(function () {
      var item = this;
      new Waypoint({
        element: item,
        handler: function () { $(item).addClass("reveal-item--is-visible") },
        offset: self.offset,
      });
    });
  }
}

export default RevealOnScroll;