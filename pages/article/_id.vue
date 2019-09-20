<template>
  <div>
    <navserv></navserv>
    <div class="container_con">
      <div class="brand_con">
        <div class="brand">
          <nuxt-link to="/">首页</nuxt-link>/
          <nuxt-link :to="'/'+brand_data.route+'/1/'">{{brand_data.type}}</nuxt-link>/
          <span>{{datas.title}}</span>
        </div>
      </div>
      <div class="main_l">
        <h1>{{datas.title}}</h1>
        <p class="time">{{datas.date}}</p>
        <div class="article_con" v-html="datas.content"></div>
        <div class="article_oth">
          <nuxt-link v-if="prevD" :to="'/article/'+prevD.id">上一篇：{{prevD.title.length>20?prevD.title.slice(0,20)+'...':prevD.title}}</nuxt-link>
          <nuxt-link v-if="nextD" class="next_article" :to="'/article/'+nextD.id">下一篇：{{nextD.title.length>20?nextD.title.slice(0,20)+'...':nextD.title}}</nuxt-link>
        </div>
      </div>
      <div class="main_r">
        <div class="search_div">
          <input type="text" placeholder="搜索" v-model="search">
          <span class="search_btn" @click="search_btn">搜索</span>
        </div>
        <div class="Categories">
          <h2>分类</h2>
          <nuxt-link :to="'/'+item.route+'/1/'" v-for="(item,index) in article_type" :key="index">{{item.type}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import navserv from "@/components/navserv";
import axios from 'axios';
export default {
  asyncData ({ params }) {
    return axios.post('https://www.dnitu.com/api/getArticleConAndType',{arId:params.id})
    .then((res) => {
      return {datas: res.data.article_con[0],article_type: res.data.article_type,prevD:res.data.article_prev[0],nextD:res.data.article_next[0]};
    })
  },
  data(){
    return {
      brand_data:{},
      search:''
    }
  },
  head () {
    return {
      title: this.datas.title+'-'+this.brand_data.type+"_泥兔网",
      meta: [
        { name: 'description', content: this.datas.descript },
        { name: 'keyword', content: this.datas.keyword }
      ]
    }
  },
  created(){
    for(var s = 0;s<this.article_type.length;s++){
      if(this.article_type[s].id == this.datas.type){
        this.brand_data = this.article_type[s];
        break;
      }
    }
  },
  components:{
    navserv,
  },
  methods:{
    nextPage(){
      if(this.curPage<this.pag_nums[this.pag_nums.length-1]){
        ++this.curPage;
        this.$router.push('/pages/'+this.curPage);
      }
    },
    prevPage(){
      if(this.curPage != 1){
      this.$router.push('/pages/'+--this.curPage);
      }
    },
    search_btn(){
      if(this.search.length>0){
        this.$router.push({
          path: '/search',
          query: {search:this.search}
        })
      }
    }
  }
}
</script>
<style lang="scss">

.container_con {
  margin-top: 20px !important;
  margin-bottom: 70px;
  font-size: 0;
  text-align: center;
  .brand_con{
    width: 1000px;
    text-align: left;
    margin: auto;
  }
  .brand{
    width: 640px;
    margin: 20px 0;
    text-align: left;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 2px solid #db6d4c;
  }
  .main_l,
  .main_r {
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }
  .main_l {
    width: 640px;
    margin-right: 30px;
    h1{
      font-weight: 700;
      font-size: 24px;
      color: #010101;
    }
    .time{
      font-size: 12px;
      color: #aaa;
      margin-top: 10px;
    }
    .article_con{
      margin-top: 10px;
      font-size: 16px;
      color: #000;
      p{
        margin: 10px 0;
        line-height: 24px;
        text-indent: 26px;
      }
    }
    .article_oth{
      margin-top: 40px;
      a{
        display: inline-block;
        font-size: 16px;
        background: #e5e5e5;
        padding: 4px 10px;
        color: #d33;
      }
      .next_article{
        float: right;
      }
    }
  }
  .main_r {
    width: 300px;
    .search_div{
      input{
        display: inline-block;
        vertical-align: middle;
        outline: none;
        border: 1px solid #ccc;
        line-height: 30px;
        width: 200px;
        padding: 0 10px;
      }
      .search_btn{
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
    .Categories{
      margin-top: 30px;
      h2{
        font-size: 20px;
        color: #000;
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 4px solid #dedede;
      }
      a{
        display: block;
        width: 100%;
        border-bottom: 1px dotted #ddd;
        padding: 20px 0;
        font-size: 16px;
        color: #d33;
      }
    }
  }
}
</style>




