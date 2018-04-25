<template>
  <div class="block">
    <vue-scroll id="mainBody" :ops="ops">
      
      <el-carousel>
        <el-input
        class="app_searchInput"
        placeholder="请输入内容"
        v-model="serachData"
        clearable>
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button class="app_searchButton" round>搜索</el-button>

        <el-carousel-item v-for="(item, index) in items" :key="index">
          <img :src="item.src" class="itemImg">
        </el-carousel-item>
      </el-carousel>
      
      <div class="app_icon">
        <ul>
          <li v-for="(item, index) in iconImgs" :key="index">
            <img :src="item.src" class="app_icon_image">
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>

      <on-line/>
      <everyday-book/>
      <on-line/>
    </vue-scroll>
      

    <div class="tapBar">
        <div>
          <img src="../images/发现.png">
          <span>发现</span>
        </div>
        <div>
          <img src="../images/学习.png">
          <span>今日学习</span>
        </div>
        <div>
          <img src="../images/账本.png">
          <span>知识账本</span>
        </div>
        <div>
          <img src="../images/已购应用.png">
          <span>已购</span>
        </div>
        <div>
          <img src="../images/我的.png">
          <span>我的</span>
        </div>
    </div>
  </div>
</template>
<script>
import OnLine from './online'
import EverydayBook from './everydayBook'
export default {
  components: {
      OnLine,
      EverydayBook
  },
  data() {
    return {
      ops: {
            vBar: {
              opacity: 0,
              background: '',
              pos: 'right'
            },
            hBar: {
              opacity: 0,
              background: '',
              pos: 'bottom'
            }
      },
      serachData: '',
      items: [
        {
          src: require('../images/item1.jpg')
        },
        {
          src: require('../images/item2.jpg')
        },
        {
          src: require('../images/item3.jpg')
        },
        {
          src: require('../images/item4.jpg')
        }
      ],
      iconImgs: [
        {
          src: require('../images/book.png'),
          title: '听书'
        },
        {
          src: require('../images/subscribe.png'),
          title: '订阅'
        },
        {
          src: require('../images/markit.png'),
          title: '商城'
        },
        {
          src: require('../images/textbook.png'),
          title: '电子书'
        },
        {
          src: require('../images/listen.png'),
          title: '随时听'
        }
      ]
    }
  },
  mounted() {
    var screWid = document.documentElement.clientWidth;
    var screHei = document.documentElement.clientHeight;
    console.log(screWid, screHei);
    var mainBody = document.getElementById('mainBody');
    mainBody.style.height = (screHei) - 75 + "px";
    console.log(mainBody.style.height);
  },
  methods: {

  }
};
</script>
<style scoped>
.block {
    background-color: rgb(235, 228, 228);
}

.app_searchInput {
  position: absolute;
  width: 6rem;
  left: 1.2rem;
  top: .133333rem /* 10/75 */;
  z-index: 99;
}

.app_searchButton {
  position: absolute;
  left: 7.6rem;
  top: .113333rem /* 10/75 */;
  z-index: 99;
}

.app_icon {
    background-color: #fff;
    text-align: center;
}

.app_icon ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
}

.app_icon ul li {
  list-style: none;
}
.app_icon_image {
  display: block;
  width: 1rem;
}

.el-carousel__item .itemImg {
  color: #475669;
  font-size: .186667rem /* 14/75 */;
  opacity: 0.75;
  width: 10rem;
  line-height: 2rem /* 150/75 */;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.tapBar {
  /* height: 1.2rem; */
  width: 10rem;
  display: flex;
  height: 1rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid rgb(235, 228, 228);
}

.tapBar img {
  height: .5rem;
  display: block;
  margin: 0 auto;
}
</style>
