<template>
  <div class="container_con">
    <div class="main_l">
      <div class="list">
        <div class="list_item" v-for="(item,index) in datas" :key="index">
          <nuxt-link class="img_line" :to="'/article/'+item.id">
            <img :src="'https://traile.oss-cn-shenzhen.aliyuncs.com/'+item.front_img" :alt="item.title">
          </nuxt-link>
          <div class="item_con">
            <h2><nuxt-link :to="'/article/'+item.id">{{item.title}}</nuxt-link></h2>
            <p class="item_des">{{item.tempDes}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main_r">
      <div class="search_div">
        <input type="text" placeholder="搜索" v-model="search">
        <span class="search_btn" @click="search_btn">搜索</span>
      </div>
      <div class="Categories">
        <h2>分类</h2>
        <nuxt-link :to="'/'+item.route+'/1'" v-for="(item,index) in article_type" :key="index">{{item.type}}</nuxt-link>
      </div>
    </div>
    <div class="pagination">
      <span class="pag_btn" @click="prevPage" v-show="curPage != 1">上一页</span>
      <span v-for="(item,index) in pag_nums" :key="index">
        <nuxt-link v-if="item != '...'" @click="curPage=item" :class="curPage == item?'active':''" :to="'/pages/'+item">{{item}}</nuxt-link>
        <i v-if="item == '...'">...</i>
      </span>
      <span class="pag_btn" @click="nextPage">下一页</span>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  asyncData ({ params }) {
    return axios.post('http://localhost:8080/api/getArticleListAndType',{arId:1})
    .then((res) => {
      res.data.article_list.forEach(function(item){
        var filterHTMLTag = function (msg) {
          var msg = msg.replace(/<\/?[^>]*>/g, '');
          msg = msg.replace(/[|]*\n/, '')
          msg = msg.replace(/&npsp;/ig, '');
          msg = msg.replace(/&nbsp;/ig,'');
          return msg;
        }
        item.tempDes = filterHTMLTag(item.content).slice(0,90)+'...';
      });
      var pag_leng = Math.ceil(res.data.article_list.length/5);
      var pag_num = [];
      if(pag_leng<7){
        for(var s = 1;s<= pag_leng;s++){
          pag_num.push(s);
        }
      }else{
        if(params.id >2){
          if(params.id == pag_leng){
            pag_num.push(1);
            pag_num.push('...');
            pag_num.push(parseInt(params.id)-2);
            pag_num.push(parseInt(params.id)-1);
            pag_num.push(pag_leng);
          }else if(params.id == pag_leng -1){
            pag_num.push(1);
            pag_num.push('...');
            pag_num.push(parseInt(params.id)-1);
            pag_num.push(parseInt(params.id));
            pag_num.push(pag_leng);
          }else if(params.id == pag_leng -2){
            pag_num.push(1);
            pag_num.push('...');
            pag_num.push(parseInt(params.id)-1);
            pag_num.push(parseInt(params.id));
            pag_num.push(parseInt(params.id)+1);
            pag_num.push(pag_leng);
          }else{
            pag_num.push(1);
            pag_num.push('...');
            pag_num.push(parseInt(params.id)-1);
            pag_num.push(parseInt(params.id));
            pag_num.push(parseInt(params.id)+1);
            pag_num.push('...');
            pag_num.push(pag_leng);
          }
        }else{
          if(params.id == 1){
            pag_num.push(parseInt(params.id));
            pag_num.push(parseInt(params.id)+1);
            pag_num.push('...');
            pag_num.push(pag_leng);
          }else{
            pag_num.push(1);
            pag_num.push(parseInt(params.id));
            pag_num.push(parseInt(params.id)+1);
            pag_num.push('...');
            pag_num.push(pag_leng);
          }
        }
      }
      return {datas: res.data.article_list.reverse().slice(5*(params.id-1),5*(params.id-1)+5),pag_nums:pag_num,curPage:params.id,article_type: res.data.article_type};
    })
  },
  data(){
    return {
      search:''
    }
  },
  head () {
    return {
      title: '令人感动的故事与笑话-励志_泥兔网',
      meta: [
      { hid: 'description', name: 'keyword', content: '温馨，小故事，开心，学生，孩子，励志' },
      {  name: 'description', content: '国外温馨小故事和开心短笑话精选为学生和孩子们提供励志故事集，泥兔网为您提供优质的国外故事和笑话' },
      ]
    }
  },
  methods:{
    nextPage(){
      if(this.curPage<this.pag_nums[this.pag_nums.length-1]){
        ++this.curPage;
        this.$router.push('/motivational/'+this.curPage);
      }
    },
    prevPage(){
      if(this.curPage != 1){
      this.$router.push('/motivational/'+--this.curPage);
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
  margin-top: 20px;
  margin-bottom: 70px;
  font-size: 0;
  text-align: center;
  .main_l,
  .main_r {
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }
  .main_l {
    width: 640px;
    margin-right: 30px;
    .list_item {
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      .img_line,
      .item_con {
        display: inline-block;
        vertical-align: top;
      }
      .img_line {
        width: 200px;
        margin-right: 20px;
        img {
          display: block;
          width: 100%;
        }
      }
      .item_con {
        width: 420px;
        h2 {
          font-weight: 700;
          font-size: 24px;
          a {
            color: #010101;
          }
        }
        .item_des {
          font-size: 16px;
          margin-top: 30px;
          color: #010101;
        }
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
  .pagination{
    width: 970px;
    margin: 20px auto;
    text-align: left;
    font-size: 0;
    span{
      display: inline-block;
      cursor: pointer;
      font-size: 16px;
      background: #e5e5e5;
      color: #d33;
      font-weight: 700;
      a{
        display: inline-block;
        padding: 5px 15px;
        text-transform: uppercase;
        color: #d33;
      }
      i{
        display: inline-block;
        padding: 5px 15px;
      }
    }
    .pag_btn{
      padding: 5px 15px;
    }
    a.active{
      color: #fff;
    }
  }
}
</style>




