<template>
  <delay-load-view :trigger-callback="triggerLoad">
    <div class="main-wrapper">
      <slide-view title="特别优惠" :items="items" :slide-wrapper-height="390">
        <template slot="right-content">
          <div>
            <outline-btn label="浏览所有" />
          </div>
        </template>
        <template slot-scope="slotProps">
          <div v-for="(col, colI) in slotProps.item" :key="colI" class="slide-margin-right">
            <!-- spotlight -->
            <div v-if="col.type === 'spotlight'" class="slide-spotlight-wrapper">
              <div class="spotlight-wrapper default-slide-bg btn" :data-slide="col.data">
              </div>
              <div class="common-content spotlight-content">
                <h2>{{col.title}}</h2>
                <div class="spotlight-sub-title">{{col.subTitle}}</div>
                <div v-if="col.oPrice" class="price-wrapper">
                  <div class="discount-pct">
                    {{col.discount}}
                  </div><div class="discount-prices">
                    <div class="discount-original-price">
                      {{'¥ ' + col.oPrice}}
                    </div>
                    <div class="discount-new-price">
                      {{'¥ ' + col.nPrice}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- headers -->
            <div v-else>
              <div v-for="(header, headerI) in col.data" :key="headerI" :class="['slide-header-wrapper', headerI === 0 ? 'slide-header-wrapper-up' : '']">
                <div class="header-wrapper default-slide-bg btn" :data-slide="header.data">
                </div>
                <div class="common-content header-content">
                  <div class="price-wrapper">
                    <div class="discount-pct">
                      {{header.discount}}
                    </div><div class="discount-prices">
                      <div class="discount-original-price">
                        {{'¥ ' + header.oPrice}}
                      </div>
                      <div class="discount-new-price">
                        {{'¥ ' + header.nPrice}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </slide-view>
    </div>
  </delay-load-view>
</template>

<style scoped>
  .header-wrapper {
    width: 306px;
    height: 143px;
    background-size: 306px 143px;
  }
  .spotlight-wrapper {
    width: 306px;
    height: 350px;
    background-size: 306px 350px;
  }
  .discount-original-price {
    color: #7193a6;
    text-decoration: line-through;
    font-size: 11px;
  }
  .discount-new-price {
    color: #acdbf5;
    font-size: 13px;
  }
  .discount-prices {
    background-color: rgba(0,0,0,0.6);
    padding: 4px 10px 4px 7px;
    line-height: 13px;
    display: inline-block;
    text-align: right;
    vertical-align: bottom;
  }
  .discount-pct {
    color: #a4d007;
    background: #4c6b22;
    display: inline-block;
    line-height: 34px;
    padding: 0 5px;
    font-size: 26px;
  }
  .spotlight-sub-title {
    color: #acdbf5;
    margin-bottom: 10px;
  }
  h2 {
    color: white;
    margin: 0 0 10px;
    font-size: 17px;
    letter-spacing: 2px;
    padding-top: 2px;
  }
  .common-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: url( '/public/background_spotlight.jpg' ) bottom center no-repeat;
    box-sizing: border-box;
  }
  .spotlight-content {
    padding: 8px 16px 12px 16px;
  }
  .header-content {
    padding: 5px;
    text-align: right;
  }
  .slide-margin-right {
    margin-right: 11px;
  }
  .slide-spotlight-wrapper {
    position: relative;
    width: 306px;
    height: 390px;
    box-shadow: 0 0 10px 1px #000;
  }
  .slide-header-wrapper {
    position: relative;
    width: 306px;
    height: 187.52px;
    box-shadow: 0 0 10px 1px #000;
  }
  .slide-header-wrapper-up {
    margin-bottom: 15px;
  }
</style>


<script>
import SlideView from './SlideView.vue'
import OutlineBtn from './OutlineBtn.vue'
import DelayLoadView from './DelayLoadView.vue'

export default {
  components: {
    'slide-view': SlideView,
    'outline-btn': OutlineBtn,
    'delay-load-view': DelayLoadView
  },
  methods: {
    triggerLoad () {
      this.loadSlide(this.$el)
    }
  },
  data () {
    return {
      items: [
        // list 1
        [
          {
            type: 'spotlight',
            data: '/public/favors/1/spotlight1.jpg',
            title: '免费周末试玩',
            subTitle: '周日下午1 点（太平洋时间）之前免费玩',
            discount: '-50%',
            oPrice: 78,
            nPrice: 39
          },
          {
            type: 'spotlight',
            data: '/public/favors/1/spotlight2.jpg',
            title: '免费周末试玩',
            subTitle: '周日下午1 点（太平洋时间）之前免费玩',
            discount: '-50%',
            oPrice: 120,
            nPrice: 60
          },
          {
            type: 'sub',
            data: [
              {
                data: '/public/favors/1/header1.jpg',
                discount: '-42%',
                oPrice: 48,
                nPrice: 28
              },
              {
                data: '/public/favors/1/header2.jpg',
                discount: '-75%',
                oPrice: 220,
                nPrice: 55
              }
            ]
          }
        ],
        // list 2
        [
          {
            type: 'spotlight',
            data: '/public/favors/2/spotlight1.jpg',
            title: '周末特惠',
            subTitle: '特惠于周一上午 10 点止（太平洋时间）。'
          },
          {
            type: 'sub',
            data: [
              {
                data: '/public/favors/2/header1.jpg',
                discount: '-41%',
                oPrice: 68,
                nPrice:40
              },
              {
                data: '/public/favors/2/header2.jpg',
                discount: '-66%',
                oPrice: 112,
                nPrice: 38
              }
            ]
          },
          {
            type: 'sub',
            data: [
              {
                data: '/public/favors/2/header3.jpg',
                discount: '-50%',
                oPrice: 112,
                nPrice: 56
              },
              {
                data: '/public/favors/2/header4.jpg',
                discount: '-25%',
                oPrice: 126,
                nPrice: 94
              }
            ]
          }
        ]
      ]
    }
  }
}
</script>
