<template>
  <div class="main-wrapper clear-float-wrapper">
    <h2>
      更新与优惠
    </h2>
    <div>
      <div v-for="(item, i) in items" :key="i" :class="['discount-wrapper btn', i === 0 ? '' : 'discount-wrapper-small']">
        <img :src="item" :width="i === 0 ? 368 : 173" :height="i === 0 ? 398 : 182" />
        <div class="discount-info">单击查看详细信息</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
 h2 {
   color: white
 }
 .clear-float-wrapper {
   overflow: hidden;
 }
 .discount-wrapper {
   float: left;
   background: linear-gradient( 135deg, rgba(37,49,63,1) 5%,rgba(54,97,125,1) 95%);
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
export default {
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
