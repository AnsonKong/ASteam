<template>
  <div class="main-wrapper">
    <div class="head-wrapper">
      <h2>{{title}}</h2>
      <slot name="right-content">
      </slot>
    </div>
    <div class="slide-wrapper" @mouseover="onSlideOver" :style="{'height': slideWrapperHeight + 'px'}" @mouseout="onSlideOut">
      <!-- slot -->
      <div v-for="(item, index) in items" :key="index" :class="['slide-main', index === selectedIndex ? 'slide-main-on' : 'slide-main-off']">
        <slot :item="item" :index="index" :total="items.length">

        </slot>
      </div>
      <!-- left arrow -->
      <div class="arrow-wrapper arrow-wrapper-left btn" @click="prevSlide">
        <div class="arrow arrow-left"></div>
      </div>
      <!-- right arrow -->
      <div class="arrow-wrapper arrow-wrapper-right btn" @click="nextSlide">
        <div class="arrow arrow-right"></div>
      </div>
    </div>
    <div class="slide-thumbs">
      <span v-for="(item, index) in items" :key="index" :class="['slide-thumb btn', selectedIndex === index ? 'slide-thumb-focus' : '']" @click="manualSetIndex(index)"></span>
    </div>
  </div>
</template>

<style scoped>
  .head-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .slide-main {
    display: flex;
    transition: all 0.5s;
    position: absolute;
    left: 0;
    top: 0;
  }
  .slide-main-on {
    opacity: 1;
    visibility: visible;
  }
  .slide-main-off {
    opacity: 0;
    visibility: hidden;
  }
  .arrow-wrapper {
    position: absolute;
    top: calc(50% - 54px);
    width: 45px;
    height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .arrow-wrapper-left {
    left: -45px;
    background: linear-gradient( to right, rgba( 0, 0, 0, 0.3) 5%,rgba( 0, 0, 0, 0) 95%);
  }
  .arrow-wrapper-left:hover {
    background: linear-gradient( to right, rgba( 171, 218, 244, 0.3) 5%,rgba( 171, 218, 244, 0) 95%);
  }
  .arrow-wrapper-right {
    right: -45px;
    background: linear-gradient( to right, rgba( 0, 0, 0, 0) 5%,rgba( 0, 0, 0, 0.3) 95%);
  }
  .arrow-wrapper-right:hover {
    background: linear-gradient( to right, rgba( 171, 218, 244, 0) 5%,rgba( 171, 218, 244, 0.3) 95%);
  }
  .arrow {
    width: 23px;
    height: 36px;
    background-image: url('/public/arrows.png');
  }
  .arrow-left {
    left: 0;
    background-position-x: 23px;
  }
  .arrow-right {
    right: 0;
  }
  .slide-thumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  .slide-thumb {
    width: 15px;
    height: 9px;
    background-color: hsla(202,60%,100%,0.2);
    border-radius: 2px;
    transition: all 0.5s;
    margin: 0 2px;
  }
  .slide-thumb:hover {
    background-color: hsla(202,60%,100%,0.4);
  }
  .slide-thumb-focus {
    background-color: hsla(202,60%,100%,0.4);
  }
  .slide-wrapper {
    position: relative;
  }
  h2 {
    color: white;
    letter-spacing: 2px;
  }
</style>

<script>
export default {
  props: {
    'title': {
      type: String,
      default: 'empty'
    },
    'items': {
      type: Array,
      default: null
    },
    'autoPlay': {
      type: Boolean,
      default: false
    },
    'slideWrapperHeight': {
      type: Number,
      default: 353
    }
  },
  data () {
    return {
      selectedIndex: 0,
      intervalFlag: -1
    }
  },
  methods: {
    onSlideOver () {
      this.stopTimer()
    },
    onSlideOut () {
      this.startTimer()
    },
    manualSetIndex (index) {
      this.selectedIndex = index
      this.startTimer()
    },
    startTimer () {
      if (!this.autoPlay) {
        return
      }
      this.stopTimer()
      this.intervalFlag = setInterval(this.nextSlide, 5000)
    },
    stopTimer () {
      clearInterval(this.intervalFlag)
    },
    prevSlide () {
      this.selectedIndex = (this.selectedIndex - 1 < 0) ? this.items.length - 1 : this.selectedIndex - 1 
    },
    nextSlide () {
      this.selectedIndex = (this.selectedIndex + 1 === this.items.length) ? 0 : this.selectedIndex + 1 
    }
  },
  mounted () {
    this.startTimer()
  }
}
</script>
