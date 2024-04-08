class Accordion {
  constructor(el) {
    this.el = el;

    this.summary = el.querySelector('.accordion-summary');
    this.content = el.querySelector('.accordion-details p');

    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;

    this.summary.addEventListener('click', (element) => this.onClick(element));
  }

  onClick(e) {

    e.preventDefault();
    this.el.style.overflow = 'hidden';

    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.el.clientHeight}px`;

    const elementPaddingTop = parseFloat(window.getComputedStyle(this.el).paddingTop);
    const elementPaddingBottom = parseFloat(window.getComputedStyle(this.el).paddingBottom);

    const endHeight = `${this.summary.offsetHeight + elementPaddingTop + elementPaddingBottom}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 200,
      easing: 'ease-out',
    });

    this.animation.onfinish = () => this.onAnimationFinish(false);

    this.animation.oncancel = () => {
      this.isClosing = false;
    };
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;
    const startHeight = `${this.el.offsetHeight}px`;

    const parentPaddingTop = parseFloat(window.getComputedStyle(this.el).paddingTop);
    const parentPaddingBottom = parseFloat(window.getComputedStyle(this.el).paddingBottom);
    const endHeight = `${this.summary.clientHeight + this.content.clientHeight + parentPaddingTop + parentPaddingBottom}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 200,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => this.onAnimationFinish(true);

    this.animation.oncancel = () => {
      this.isExpanding = false;
    };
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
  }
}

export {Accordion};
