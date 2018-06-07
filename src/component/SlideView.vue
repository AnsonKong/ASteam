<template>
  <div class="o-container">
    <div class="head-wrapper">
      <h2>{{title}}</h2>
      <slot name="right-content">
      </slot>
    </div>
    <div class="c-slider__container" @mouseover="onSlideOver" :style="{'height': slideWrapperHeight + 'px'}" @mouseout="onSlideOut">
      <!-- slot -->
      <div v-for="(item, index) in items" :key="index" :class="['c-slider__main', index === selectedIndex ? 'c-slider__main-active' : 'c-slider__main-deactive']">
        <slot :item="item" :index="index" :total="items.length">

        </slot>
      </div>
      <!-- left arrow -->
      <div class="c-slider__arrow-container c-slider__arrow-container--left" @click="prevSlide">
        <div class="c-slider__arrow c-slider__arrow--left"></div>
      </div>
      <!-- right arrow -->
      <div class="c-slider__arrow-container c-slider__arrow-container--right" @click="nextSlide">
        <div class="c-slider__arrow c-slider__arrow--right"></div>
      </div>
    </div>
    <div class="c-slider__thumbs-container">
      <span v-for="(item, index) in items" :key="index" :class="['c-slider__thumb', selectedIndex === index ? 'c-slider__thumb--active' : null]" @click="manualSetIndex(index)"></span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.head-wrapper
  display flex
  justify-content space-between
  align-items center

h2
  color white
  letter-spacing 2px
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
      this.$emit('selectedIndexChanged', this.selectedIndex)
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
      this.$emit('selectedIndexChanged', this.selectedIndex)
    },
    nextSlide () {
      this.selectedIndex = (this.selectedIndex + 1 === this.items.length) ? 0 : this.selectedIndex + 1 
      this.$emit('selectedIndexChanged', this.selectedIndex)
    }
  },
  mounted () {
    this.startTimer()
  }
}
</script>
