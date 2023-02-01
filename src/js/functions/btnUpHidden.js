import throttle from "lodash.throttle";
export const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
    addEventListener() {
      window.addEventListener('scroll', throttle(() => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 300 ? this.show() : this.hide();
    }, 500));
      function onScroll(){() => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 300 ? this.show() : this.hide();
    }}
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
