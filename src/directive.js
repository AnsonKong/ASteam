import Vue from 'vue'
import throttle from 'lodash.throttle'

export default function createDirectives () {
  Vue.directive('scroll', {
    inserted: function (el, binding) {
      let f = throttle(function (evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }, 500)
      window.addEventListener('scroll', f)
    }
  })
}