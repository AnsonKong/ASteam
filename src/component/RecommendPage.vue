<template>
  <div class="wrapper">
    <div class="big">正在寻找推荐吗?</div>
    <div class="normal">{{user ? `${user.name}，这是为您推荐的内容` : '登录以查看个性化推荐'}}</div>
    <a v-if="!user" href="/passport/github" class="c-btn c-btn--green c-btn--wide">
      GitHub 登录
    </a>
  </div>
</template>

<style lang="stylus" scoped>
.wrapper
  background black
  text-align center
  padding 25px 0

.big
  color #67c1f5
  font-size 24px

.normal
  margin-top 16px
  margin-bottom 16px
  color #8f98a0
  font-size 15px
  text-align center
</style>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
