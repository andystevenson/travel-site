import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a")
    this.createPageSectionWaypoints();
    this.addSmoothScroll();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function () {
      Waypoint.refreshAll();
    });
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    const self = this;
    new Waypoint({
      element: self.headerTriggerElement[0],
      handler: function (direction) {
        if (direction == "down") {
          self.siteHeader.addClass("site-header--dark");
        } else {
          self.siteHeader.removeClass("site-header--dark")
        }
      },
    });
  }

  createPageSectionWaypoints() {
    const self = this;
    self.pageSections.each(function () {
      const page = this;
      new Waypoint({
        element: page,
        handler: function (direction) {
          if (direction == "down") {
            const link = page.getAttribute("data-matching-link");
            self.headerLinks.removeClass("is-current-link");
            $(link).addClass("is-current-link");
          }
        },
        offset: "18%",
      });

      new Waypoint({
        element: page,
        handler: function (direction) {
          if (direction == "up") {
            const link = page.getAttribute("data-matching-link");
            self.headerLinks.removeClass("is-current-link");
            $(link).addClass("is-current-link");
          }
        },
        offset: "-40%",
      });
    })
  }
}

export default StickyHeader;