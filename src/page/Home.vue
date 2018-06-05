<template>
  <div class="top-wrapper">
    <nav-header-menu />
    <div class="center-wrapper">
      <nav-menu class="nav" />
    </div>
    <special-choice-slide-view />
    <special-favor-slide-view />
    <browse />
    <discount />
    <recommend />
    <footer-page />
  </div>
</template>

<style scoped>
.nav {
  top: 24px;
}
.center-wrapper {
  height: 201px;
  background-image: url('/public/page_bg_schinese.png');
  background-position: center 0;
  background-repeat: no-repeat;
}
.top-wrapper {
  text-align: center;
}
</style>


<script>
import NavHeaderMenu from '../component/NavHeaderMenu.vue'
import NavMenu from '../component/NavMenu.vue'
import SpecialChoiceSlideView from '../component/SpecialChoiceSlideView.vue'
import SpecialFavorSlideView from '../component/SpecialFavorSlideView.vue'
import Browse from '../component/Browse.vue'
import Discount from '../component/Discount.vue'
import RecommendPage from '../component/RecommendPage.vue'
import Footer from '../component/Footer.vue'
export default {
  components: {
    'nav-header-menu': NavHeaderMenu,
    'nav-menu': NavMenu,
    'special-choice-slide-view': SpecialChoiceSlideView,
    'special-favor-slide-view': SpecialFavorSlideView,
    'browse': Browse,
    'discount': Discount,
    'recommend': RecommendPage,
    'footer-page': Footer
  }
}
</script>
