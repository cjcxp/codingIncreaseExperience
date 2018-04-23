<template>
  <div>
      <div class="onlineImg">
          <img src="../images/videoMac.png">
          <p class="listenNum">11222333预约观看</p>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.onlineImg {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    height: 1.2rem;
    border-bottom: 1px solid rgb(170, 166, 166);
}

.onlineImg img {
    width: 2rem;
}

.listenNum {
    height: 1.2rem;
    line-height: 1.2rem;
}

</style>
