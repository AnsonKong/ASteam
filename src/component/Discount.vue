<template>
  <delay-load-view :trigger-callback="triggerLoad">
    <div class="main-wrapper clear-float-wrapper">
      <h2>
        更新与优惠
      </h2>
      <div>
        <div v-for="(item, i) in items" :key="i" :class="['discount-wrapper default-slide-bg btn', i === 0 ? '' : 'discount-wrapper-small']">
          <div :class="[i === 0 ? 'discount-img-big' : 'discount-img-small']" :data-slide="item">
          </div>
          <div class="discount-info">单击查看详细信息</div>
        </div>
      </div>
    </div>
  </delay-load-view>
</template>

<style scoped>
  .discount-img-big {
    width: 368px;
    height: 398px;
    background-size: 368px 398px;
  }
  .discount-img-small {
    width: 173px;
    height: 182px;
    background-size: 173px 182px;
  }
  h2 {
    color: white
  }
  .clear-float-wrapper {
    overflow: hidden;
  }
  .discount-wrapper {
    float: left;
    box-shadow: 0 0 10px 1px #000;
  }
  .discount-wrapper-small {
    margin: 0 0 10px 10px;
  }
  .discount-info {
    color: #acdbf5;
    height: 16px;
    text-align: right;
    line-height: 15px;
    padding: 4px;
    font-size: 11px;
  }
</style>

<script>
import DelayLoadView from './DelayLoadView.vue'

export default {
  components: {
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
        '/public/discount/discount-main.jpg',
        '/public/discount/discount1.jpg',
        '/public/discount/discount2.jpg',
        '/public/discount/discount3.jpg',
        '/public/discount/discount4.jpg',
        '/public/discount/discount5.jpg'
      ]
    }
  }
}
</script>
