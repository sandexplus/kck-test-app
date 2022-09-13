export default function clickOutside(Vue) {
  Vue.directive('click-outside', {
    bind(el, binding, vnode) {
      const innerEl = el;
      innerEl.clickOutsideEvent = (event) => {
        if (!(el === event.target || el.contains(event.target))) {
          vnode.context[binding.expression](event);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    },
  });
}
