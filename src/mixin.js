export default {
  beforeRouteUpdate (to, from, next) {
    const { asyncData } = this.$options
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next)
    } else {
      next()
    }
  },
  methods: {
    loadSlide (dom) {
      const r = dom.querySelectorAll('div[data-slide]')
      r.forEach(element => {
        element.style['background-image'] = `url(${element.dataset['slide']})`
      });
    }
  }
}
