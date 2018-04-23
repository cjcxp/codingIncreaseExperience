<template>
  <div class="block">
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
    </div>
</template>
<script>
import OnLine from './online'
export default {
  components: {
      OnLine
  },
  data() {
    return {
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
          src: require('../images/absorve.png'),
          title: '订阅专栏'
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
  }
};
</script>
<style scoped>
.block {
    background-color: #fff;
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
    border-bottom: 1px solid rgb(170, 166, 166);
}

.app_icon ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
  align-content: center;
  margin-top: .2rem;
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
