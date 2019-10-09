<template>
  <div class="nav">
    <div class="nav_con">
      <a href="https://www.dnitu.com/" :class="navS==0?'active':''">首页</a>
      <a href="https://www.dnitu.com/motivational/1/" :class="navS==1?'active':''">励志</a>
      <a href="https://www.dnitu.com/education/1/" :class="navS==2?'active':''">教育</a>
      <a href="https://www.dnitu.com/inspirational/1/" :class="navS==3?'active':''">灵性</a>
      <a href="https://www.dnitu.com/family/1/" :class="navS==4?'active':''">家庭</a>
      <a href="https://www.dnitu.com/love/1/" :class="navS==5?'active':''">爱</a>
      <a href="https://www.dnitu.com/funny/1/" :class="navS==6?'active':''">娱乐</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navS: undefined
    };
  },
  mounted(){
      this.navActive(this.$route.name);
  },
  methods:{
    navActive(data){
      if(data.indexOf('index') >= 0){
        this.navS = 0;
      }else if(data.indexOf('motivational')>=0){
        this.navS = 1;
      }else if(data.indexOf('education')>=0){
        this.navS = 2;
      }else if(data.indexOf('inspirational')>=0){
        this.navS = 3;
      }else if(data.indexOf('family')>=0){
        this.navS = 4;
      }else if(data.indexOf('love')>=0){
        this.navS = 5;
      }else if(data.indexOf('funny')>=0){
        this.navS = 6;
      }
    }
  }
};
</script>
<style lang="scss">
.nav {
  background: #BFAB86;
  margin-top: 10px;
  .nav_con {
    width: 1000px;
    margin: auto;
    font-size: 0;
    a {
      display: inline-block;
      padding: 10px;
      color: #fff;
      border-left: 1px solid #e2e0e0;
      font-size: 16px;
      min-width: 80px;
      text-align: center;
      &:hover {
        background: #fffbf0;
        color: #000;
      }
      &:first-child {
        border-left: none;
      }
      &.active{
        background: #fffbf0;
        color: #000;
      }
    }
  }
}
</style>