<template>
  <div class="wrapper">
    <div class="main-wrapper menu-wrapper h-wrapper">
      <div class="h-wrapper">
        <router-link to="/">
          <h1 class="normal-btn">
            ASteam
          </h1>
        </router-link>
        <ul>
          <li v-for="(item, index) in items" v-if="item.title" :key="index" class="menu-item h-list" @mouseover="onOver(item)" @mouseout="onOut(item)">
            <span class="normal-btn btn">{{item.title}}</span>
            <div v-if="item.subs" :class="['dropdown', item.active ? 'dropdown-active' : 'dropdown-deactive']">
              <div v-for="(subItem, subIndex) in item.subs" :key="subIndex" class="sub-item normal-btn btn">
                {{subItem}}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <template v-if="user">
          <span class="normal-btn btn">
            欢迎回来！ {{ user.name }}
          </span>
          <a class="normal-btn" href="/logout">
            登出
          </a>
        </template>
        <a v-else href="/passport/github" class="green-btn">
          GitHub 登录
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sub-item {
    white-space: nowrap;
    font-size: 11px;
  }
  .dropdown {
    position: absolute;
    left: 0;
    background:#171a21;
    box-shadow: 3px 3px 5px -3px #000;
    padding: 5px 15px 10px 15px;
    z-index: 1500;
    transition: all 0.5s;
  }
  .dropdown-active {
    opacity: 1;
    visibility: visible;
  }
  .dropdown-deactive {
    opacity: 0;
    visibility: hidden;
  }
  .wrapper {
    background: #171a21;
  }
  .menu-item {
    position: relative;
  }
  .menu-wrapper {
    justify-content: space-between;
  }
</style>

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
