<template>
  <div class="pagination">
    <span class="pag_btn" @click="prevPage" v-show="params != 1">上一页</span>
    <span v-for="(item,index) in pag_nums" :key="index">
      <nuxt-link
        v-if="item != '...'"
        @click="params=item"
        :class="params == item?'active':''"
        :to="'/pages/'+item"
      >{{item}}</nuxt-link>
      <i v-if="item == '...'">...</i>
    </span>
    <span class="pag_btn" @click="nextPage">下一页</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      leng: this.$attrs.article_leng,
      params: this.$attrs.cur_page,
      pag_nums: []
    }
  },
  created(){
      var pag_leng = Math.ceil(this.leng/5);
      var pag_num = [];
      if(pag_leng<7){
        for(var s = 1;s<= pag_leng;s++){
          pag_num.push(s);
        }
      }else{
        if(this.params >2){
          if(this.params == pag_leng){
            pag_num.push(1);
            pag_num.push('...');
            pag_num.push(parseInt(this.params)-2);
            pag_num.push(parseInt(this.params)-1);
            pag_num.push(pag_leng);
          }else if(this.params == pag_leng -1){
            pag_num.push(1);
            pag_num.push('...');
            pag_num.push(parseInt(this.params)-1);
            pag_num.push(parseInt(this.params));
            pag_num.push(pag_leng);
          }else if(this.params == pag_leng -2){
            pag_num.push(1);
            pag_num.push('...');
            pag_num.push(parseInt(this.params)-1);
            pag_num.push(parseInt(this.params));
            pag_num.push(parseInt(this.params)+1);
            pag_num.push(pag_leng);
          }else{
            pag_num.push(1);
            pag_num.push('...');
            pag_num.push(parseInt(this.params)-1);
            pag_num.push(parseInt(this.params));
            pag_num.push(parseInt(this.params)+1);
            pag_num.push('...');
            pag_num.push(pag_leng);
          }
        }else{
          if(this.params == 1){
            pag_num.push(parseInt(this.params));
            pag_num.push(parseInt(this.params)+1);
            pag_num.push('...');
            pag_num.push(pag_leng);
          }else{
            pag_num.push(1);
            pag_num.push(parseInt(this.params));
            pag_num.push(parseInt(this.params)+1);
            pag_num.push('...');
            pag_num.push(pag_leng);
          }
        }
      }
      this.pag_nums = pag_num;
  },
  methods:{
    nextPage(){
      if(this.params<this.pag_nums[this.pag_nums.length-1]){
        ++this.params;
        this.$router.push('/'+this.$route.name.split('-')[0]+'/'+this.params);
      }
    },
    prevPage(){
      if(this.params != 1){
      this.$router.push('/'+this.$route.name.split('-')[0]+'/'+--this.params);
      }
    }
  }
}
</script>
<style lang="scss">
.pagination {
  width: 970px;
  margin: 20px auto;
  text-align: left;
  font-size: 0;
  span {
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    background: #e5e5e5;
    color: #d33;
    font-weight: 700;
    a {
      display: inline-block;
      padding: 5px 15px;
      text-transform: uppercase;
      color: #d33;
    }
    i {
      display: inline-block;
      padding: 5px 15px;
    }
  }
  .pag_btn {
    padding: 5px 15px;
  }
  a.active {
    color: #fff;
  }
  .nuxt-link-active{
    color: #fff !important;
  }
}
</style>