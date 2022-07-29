(function () {
  class Tooltip {
    get name() {
      return 'tooltip';
    }
    
    get indent() {
      return 5;
    }

    constructor() {
      this.el = document.createElement('div');
      this.el.style.position = 'absolute';

      this.el.classList.add(this.name);
      this.el.classList.toggle(`${this.name}_active`, false);

      this.listeners = [];

      document.body.appendChild(this.el);

      this.onShow = this.onShow.bind(this);
      this.onHide = this.onHide.bind(this);
    }

    delegate(eventName, element, cssSelector, callback) {
      let fn = event => {
        if (!event.target.matches(cssSelector)) {
          return;
        }

        callback(event);
      };

      element.addEventListener(eventName, fn);
      this.listeners.push({ fn, element, eventName });

      return this;
    }

    onShow(event) {
      this.el.innerHTML = event.target.getAttribute('data-tooltip');
      this.el.classList.toggle(`${this.name}_active`, true);

      let spanRect = event.target.getBoundingClientRect();
      let elRect = this.el.getBoundingClientRect();

      let top = spanRect.bottom + this.indent;

      if (top + elRect.height > document.documentElement.clientHeight) {
        top = spanRect.top - elRect.height - this.indent;
      }

      this.el.style.top = `${top}px`;
    }

    onHide() {
      this.el.classList.toggle(`${this.name}_active`, false);
    }
    
    attach(root) {
      this
        .delegate('mouseover', root, '[data-tooltip]', this.onShow)
        .delegate('mouseout', root, '[data-tooltip]', this.onHide);
    }

    detach() {
      for (let {fn, element, eventName} of this.listeners) {
        element.removeEventListener(eventName, fn);
      }
    }
  }

  window.Tooltip = Tooltip;
})();