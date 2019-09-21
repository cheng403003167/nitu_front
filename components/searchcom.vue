<template>
  <div class="search_div adsf">
    <input type="text" placeholder="搜索" v-model="search" />
    <span class="search_btn" @click="search_btn">搜索</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      search: ''
    }
  },
  methods: {
    search_btn() {
      if (this.search.length > 0) {
        this.$router.push({
          path: "/search",
          query: { search: this.search }
        });
      }
    }
  }
}
</script>
<style lang="scss">
.search_div {
  input {
    display: inline-block;
    vertical-align: middle;
    outline: none;
    border: 1px solid #ccc;
    line-height: 30px;
    width: 200px;
    padding: 0 10px;
  }
  .search_btn {
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 30px;
    background: #e5e5e5;
    text-align: center;
    width: 68px;
    margin-left: 10px;
    color: #010101;
    cursor: pointer;
  }
}
</style>