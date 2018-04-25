<template>
  <div class="everydayBook">
      <div class="title">
          <h3>每天听一本书</h3>
          <p class="allthing">查看全部</p>
      </div>

      <div class="rec">
          <h4>主编力荐</h4>
          <div class="recommond">
              <img src="../images/动物武器.jpg">
              <div class="recommond_describe">
                  <h4>《动物武器》Pro版 | 韩焱解读</h4>
                  <p>进化生物学家，揭秘动物世界中的武器进化规律。</p>
                  <div class="recommond_describe__timeMoney">
                      <p>35分46秒</p>
                      <p class="money">￥4.99</p>
                  </div>
                  
              </div>
          </div>
      </div>

      <div class="concentrationBookList">
          <div>
              <h4>精选书单</h4>
              <div class="recommond">
                  <img src="../images/动物武器.jpg">
                  <div class="recommond_describe">
                      <h4>《动物武器》Pro版 | 韩焱解读</h4>
                      <p>进化生物学家，揭秘动物世界中的武器进化规律。</p>
                      <div class="recommond_describe__timeMoney">
                          <p>共6本</p>
                          <p class="">2.4万人看过</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="getVip">
              <a href="#">千本好书随你听，0.1元试用七天</a>
          </div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.everydayBook {
  background-color: #fff;
}

.title {
  height: 0.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(235, 228, 228);
}

.title:after {
  content: " ";
  width: 0;
  height: 0;
  border: 0.133333rem solid transparent;
  border-left: 0.133333rem solid grey;
  position: absolute;
  right: 0.266667rem;
}

.allthing {
  margin-right: 0.633333rem;
}

.rec {
  border-bottom: 1px solid rgb(235, 228, 228);
}

.recommond {
  width: 10rem;
  height: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.recommond img {
  height: 2.4rem;
}

.recommond_describe {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.recommond_describe__timeMoney {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.money {
  color: crimson;
}

.concentrationBookList {
    display: flex;
    flex-direction: column;
}

.getVip {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    background-color: rgb(196, 177, 131);
}

.getVip>a {
    text-decoration: none;
    color: black
}
</style>
