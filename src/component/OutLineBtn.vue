<template>
  <span class="outline-btn btn">
    {{label}}
  </span>
</template>

<style scoped>
  .outline-btn {
    padding: 1px 16px;
    font-size: 12px;
    line-height: 20px;
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 2px;
    color: white;
  }
  .outline-btn:hover {
    border: 1px solid rgba(255,255,255,1);
  }
</style>


<script>
export default {
  props: ['label']
}
</script>
