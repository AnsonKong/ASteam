<template>
  <div style="background: #171a21;">
    <div class="o-container o-layout-h" style="justify-content: space-between;">
      <div class="o-layout-h">
        <router-link to="/">
          <h1 class="c-btn c-btn--grey c-btn--narrow">
            ASteam
          </h1>
        </router-link>
        <ul class="c-nav">
          <li v-for="(item, index) in items" v-if="item.title" :key="index" class="c-nav__item" @mouseover="onOver(item)" @mouseout="onOut(item)">
            <span class="c-nav__item__btn c-nav__item__btn--grey c-nav__item__btn--big">{{item.title}}</span>
            <div v-if="item.subs" :class="['c-dropdown c-dropdown--dark', item.active ? 'c-dropdown--active' : 'c-dropdown--deactive']">
              <div v-for="(subItem, subIndex) in item.subs" :key="subIndex" class="c-dropdown__item c-btn c-btn--grey c-btn--narrow">
                {{subItem}}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <template v-if="user">
          <span class="c-btn c-btn--grey c-btn--narrow">
            欢迎回来！ {{ user.name }}
          </span>
          <a class="c-btn c-btn--grey c-btn--narrow" href="/logout">
            登出
          </a>
        </template>
        <a v-else href="/passport/github" class="c-btn c-btn--green c-btn--wide">
          GitHub 登录
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: 'nothing',
      items: [
        {
          title: '商店',
          active: false,
          subs: ['精选', '探索', '鉴赏家', '愿望单', '新闻', '统计']
        },
        {
          title: '社区',
          active: false,
          subs: ['主页', '讨论', '创意工坊', '市场', '实况直播']
        },
        {
          title: '关于'
        },
        {
          title: '客服'
        }
      ]
    }
  },
  methods: {
    onOver (item) {
      item.active = true
    },
    onOut (item) {
      item.active = false
    }
  },
  beforeMount () {
    this.username = this.user ? this.user.name : ''
    this.items.splice(2, 0, {
      title: this.username,
      active: false,
      subs: ['动态', '个人资料', '好友', '组', '内容', '徽章', '库存']
    })
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
