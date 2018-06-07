<template>
  <div class="c-nav--dark o-container" style="height: 35px;">
    <!-- items -->
    <div class="o-layout-h">
      <div v-for="(item, index) in items" :key="index" class="c-nav__item" @mouseover="onOver(item)" @mouseout="onOut(item)">
        <div class="c-nav__item__btn c-nav__item__btn--dark">
          {{item.title}}
          <img v-if="item.subs" src="/public/btn_arrow_down_padded_white.png" />
        </div>
        <!-- popup -->
        <div v-if="item.subs" :class="['c-dropdown c-dropdown--light', item.active ? 'c-dropdown--active' : 'c-dropdown--deactive']">
          <div v-for="(subItem, subIndex) in item.subs" :key="subIndex">
            <div v-if="subItem === 'hr'" class="c-dropdown__hr"></div>
            <div v-else-if="subItem.indexOf('label:') !== -1" class="c-dropdown__item c-dropdown__item--big c-dropdown__item--blue"><label>{{subItem.replace('label:', '')}}</label></div>
            <div v-else class="c-dropdown__item c-dropdown__item--big c-dropdown__item--dark">{{subItem}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onOver (item) {
      item.active = true
    },
    onOut (item) {
      item.active = false
    }
  },
  data () {
    return {
      items: [
        {
          title: '您的商店',
          active: false,
          block: false,
          subs: ['商店主页', 'hr', '最近查看过的', 'Steam 鉴赏家', '最近更新']
        },
        {
          title: '游戏',
          active: false,
          block: false,
          subs: ['免费游玩', '抢先体验', '试玩', '虚拟现实', '支持 Steam 控制器', 'hr', 'label:按类型浏览:', '休闲', '体育', '冒险', '动作', '大型多人在线', '模拟', '独立', '竞速', '策略', '角色扮演', 'hr', '查看热门标签', 'hr', 'label:按平台浏览:', 'Mac OS X', 'SteamOS + Linux']
        },
        {
          title: '软件',
          active: false,
          block: false,
          subs: ['软件中心', 'hr', '动画制作与建模', '实用工具', '教育', '游戏开发', '照片编辑', '网络出版', '视频制作', '设计与插画', '音频制作']
        },
        {
          title: '硬件',
          active: false,
          block: false,
          subs: ['Steam 控制器', 'Steam 流式盒', 'HTC Vive']
        },
        {
          title: '视频',
          active: false,
          block: false,
          subs: ['视频中心', 'hr', 'label:按类型浏览:', '电影', '剧集', '纪录片', '游戏', '教程', '短片', 'hr', 'label:按类型浏览:', '动作', '日本动画', '欢乐', '剧情', '恐怖', '科幻']
        },
        {
          title: '新闻'
        }
      ]
    }
  }
}
</script>
