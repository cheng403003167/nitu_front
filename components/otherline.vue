<template>
  <div class="otherLine">
    <p class="other_p1">友情链接：</p>
    <div class="other_con">
      <a href="https://www.zazhike.cn/">杂志客</a>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      article_type: this.$attrs.article_type
    }
  }
}
</script>
<style lang="scss">
.otherLine {
  margin-top: 30px;
  .other_p1 {
    font-size: 14px;
    color: #000;
    padding-bottom: 10px;
    border-bottom: 1px solid #dedede;
  }
  a {
    display: inline-block;
    padding: 20px 0;
    font-size: 12px;
    margin-right: 20px;
  }
}
</style>