<template>
  <div class="main-wrapper">
    <slide-view title="精选和推荐" :items="items" :auto-play="true" :slide-wrapper-height="353">
      <template slot-scope="slotProps">
        <div class="total-wrapper btn">
          <div class="main-screen-wrapper">
            <img :src="slotProps.item.screenIndex === -1 ? slotProps.item.main : slotProps.item.screenshots[slotProps.item.screenIndex]" width="616" height="353" />
          </div>
          <div class="info-wrapper">
            <div class="info-title">{{slotProps.item.title}}</div>
            <div v-if="slotProps.item.screenshots" class="info-screenshots">
              <img v-for="(s, i) in slotProps.item.screenshots" :key="i" :src="s" width="162" class="screenshot" @mouseover="slotProps.item.screenIndex = i" @mouseout="slotProps.item.screenIndex = -1"/>
            </div>
            <div class="info-price">
              {{slotProps.item.price !== -1 ? `¥ ${slotProps.item.price}` : '免费游玩'}}
            </div>
            <div class="info-platforms">
              <img v-for="(p, i) in slotProps.item.platforms" :key="i" :src="p === 'win' ? '/public/icon_platform_win.png' : (p === 'mac' ? '/public/icon_platform_mac.png' : '/public/icon_platform_linux.png')" />
            </div>
          </div>
        </div>
      </template>
    </slide-view>
  </div>
</template>

<style scoped>
.info-price {
    color: #acdbf5;
    font-size: 11px;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .info-platforms {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .screenshot {
    opacity: 0.6;
    transition: all 0.5s;
  }
  .screenshot:hover {
    opacity: 1;
  }
  .main-screen-wrapper {
    flex: 616px;
    z-index: 2;
    box-shadow: 0 0 10px 1px #000;
  }
  .total-wrapper {
    box-shadow: 0 0 10px 1px #000;
    display: flex;
    background: rgb(11, 21, 30);
    overflow: hidden;
  }
  .info-wrapper {
    display: inline-block;
    flex: auto;
    position: relative;
  }
  .info-title {
    color: white;
    padding: 10px 6px;
    font-size: 24px;
    height: 52px;
  }
</style>


<script>
import SlideView from './SlideView.vue'
export default {
  components: {
    'slide-view': SlideView
  },
  data () {
    return {
      items: [
        {
          main: '/public/slides/1/capsule_616x353.jpg',
          title: 'Total War: WARHAMMER',
          screenIndex: -1,
          screenshots: [
            '/public/slides/1/screenshot1.jpg',
            '/public/slides/1/screenshot2.jpg',
            '/public/slides/1/screenshot3.jpg',
            '/public/slides/1/screenshot4.jpg'
          ],
          price: 55,
          platforms: ['win', 'mac', 'linux']
        },
        {
          main: '/public/slides/2/capsule_616x353.jpg',
          title: 'World of Warships',
          screenIndex: -1,
          screenshots: [
            '/public/slides/2/screenshot1.jpg',
            '/public/slides/2/screenshot2.jpg',
            '/public/slides/2/screenshot3.jpg',
            '/public/slides/2/screenshot4.jpg'
          ],
          price: -1,
          platforms: ['win']
        },
        {
          main: '/public/slides/3/capsule_616x353.jpg',
          title: 'Divinity: Original Sin 2',
          screenIndex: -1,
          screenshots: [
            '/public/slides/3/screenshot1.jpg',
            '/public/slides/3/screenshot2.jpg',
            '/public/slides/3/screenshot3.jpg',
            '/public/slides/3/screenshot4.jpg'
          ],
          price: 133,
          platforms: ['win']
        },
        {
          main: '/public/slides/4/capsule_616x353.jpg',
          title: "PLAYERUNKNOWN'S BATTLEGROUNDS",
          screenIndex: -1,
          screenshots: [
            '/public/slides/4/screenshot1.jpg',
            '/public/slides/4/screenshot2.jpg',
            '/public/slides/4/screenshot3.jpg',
            '/public/slides/4/screenshot4.jpg'
          ],
          price: 98,
          platforms: ['win']
        },
        {
          main: '/public/slides/5/capsule_616x353.jpg',
          title: 'Jurassic World Evolution',
          screenIndex: -1,
          screenshots: [
            '/public/slides/5/screenshot1.jpg',
            '/public/slides/5/screenshot2.jpg',
            '/public/slides/5/screenshot3.jpg',
            '/public/slides/5/screenshot4.jpg'
          ],
          price: 150,
          platforms: ['win']
        }
      ]
    }
  }
}
</script>
