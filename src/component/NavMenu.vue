<template>
  <div class="nav-wrapper main-wrapper">
    <!-- items -->
    <div class="h-wrapper items-wrapper">
      <div v-for="(item, index) in items" :key="index" class="nav-item" @mouseover="onOver(item)" @mouseout="onOut(item)">
        <div class="nav-btn btn">
          {{item.title}}
          <img v-if="item.subs" src="/public/btn_arrow_down_padded_white.png" />
        </div>
        <!-- popup -->
        <div v-if="item.subs" :class="['popup', item.active ? 'popup-active' : 'popup-deactive']">
          <div v-for="(subItem, subIndex) in item.subs" :key="subIndex">
            <div v-if="subItem === 'hr'" class="sub-hr"></div>
            <div v-else-if="subItem.indexOf('label:') !== -1" class="sub-item sub-item-label"><label>{{subItem.replace('label:', '')}}</label></div>
            <div v-else class="sub-item sub-item-normal btn">{{subItem}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sub-item {
    font-size: 13px;
    padding: 5px 12px;
    white-space: nowrap;
  }
  .sub-item-label {
    color: #4f94bc;
  }
  .sub-item-normal {
    color: black;
  }
  .sub-item-normal:hover {
    color: white;
    background: #222e3c;
  }
  .sub-hr {
    height: 1px;
    margin: 5px 10px;
    background: white;
  }
  .popup {
    background: linear-gradient(to bottom, #e3eaef 5%, #c7d5e0 95%);
    position: absolute;
    padding: 8px 5px;
    transition: all 0.5s;
    box-shadow: 0 0 12px #000000;
    z-index: 200;
  }
  .popup-active {
    opacity: 1;
    visibility: visible;
  }
  .popup-deactive {
    opacity: 0;
    visibility: hidden;
  }
  .nav-wrapper {
    box-shadow: 0 0 3px rgba( 0, 0, 0, 0.4);
    background: rgba( 48, 95, 128, 0.9 );
    height: 35px;
  }
  .items-wrapper {
    height: 100%;
  }
  .nav-item {
    position: relative;
  }
  .nav-btn {
    box-sizing: border-box;
    padding: 0 10px;
    height: 100%;
    color: #d9dadd;
    border-right: 1px solid rgba( 16, 21, 25, 0.3);
    background: rgba(255, 255, 255, 0);
    font-size: 13px;
    line-height: 35px;
    vertical-align: middle;
  }
  .nav-btn:hover {
    color: black;
    background: rgba(255, 255, 255, 0.8);
  }
</style>

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
