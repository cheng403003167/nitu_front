<template>
  <div class="Categories">
    <h2>分类</h2>
    <nuxt-link
      :to="'https://www.dnitu.com/'+item.route+'/1/'"
      v-for="(item,index) in article_type"
      :key="index"
    >{{item.type}}</nuxt-link>
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
.Categories {
  margin-top: 30px;
  h2 {
    font-size: 20px;
    color: #000;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 4px solid #dedede;
  }
  a {
    display: block;
    width: 100%;
    border-bottom: 1px dotted #ddd;
    padding: 20px 0;
    font-size: 16px;
    color: #d33;
  }
}
</style>