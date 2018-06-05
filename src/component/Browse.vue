<template>
  <div class="main-wrapper">
    <h2>
      浏览 Steam
    </h2>
    <div class="items-wrapper">
      <div v-for="(item, index) in items" :key="index" class="big-btn btn">
        {{item}}
      </div>
    </div>
  </div>
</template>

<style scoped>
 h2 {
   color: white
 }
 .items-wrapper {
   display: flex;
   justify-content: space-between;
 }
 .big-btn {
   display: inline-block;
   width: 226px;
   height: 58px;
   background-image: url('/public/background_spotlight.jpg');
   background-position-y: -105px;
   border-radius: 3px;
   box-shadow: 0 0 4px #000;
   font-size: 18px;
   color: #66c0f4;
   text-align: center;
   line-height: 56px;
   vertical-align: middle;
 }
 .big-btn:hover {
   color: white;
   background-position-y: -142px;
 }
</style>

<script>
export default {
  data () {
    return {
      items: ['新品', '优惠', '免费游戏', '按用户标签']
    }
  }
}
</script>
