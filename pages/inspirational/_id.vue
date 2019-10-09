<template>
  <div>
    <navserv></navserv>
    <div class="container_con">
      <div class="main_l">
        <div class="list">
          <div class="list_item" v-for="(item,index) in datas" :key="index">
            <nuxt-link class="img_line" :to="'https://www.dnitu.com/article/'+item.id">
              <img :src="'https://traile.oss-cn-shenzhen.aliyuncs.com/'+item.front_img" :alt="item.title">
            </nuxt-link>
            <div class="item_con">
              <h2><nuxt-link :to="'https://www.dnitu.com/article/'+item.id+'/'">{{item.title}}</nuxt-link></h2>
              <p class="item_des">{{item.tempDes}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="main_r">
        <search></search>
        <categories v-bind:article_type="article_type"></categories>
        <otherline></otherline>
      </div>
      <pagination v-bind:article_leng="datas_leng" v-bind:cur_page="curPage"></pagination>
    </div>
  </div>

</template>

<script>
import navserv from "@/components/navserv";
import search from "@/components/searchcom";
import categories from "@/components/categories";
import pagination from "@/components/pagination";
import otherline from "@/components/otherline";
import axios from 'axios';
export default {
  asyncData ({ params }) {
    return axios.post('https://www.dnitu.com/api/getArticleListAndType',{arId:3})
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
      return {datas: res.data.article_list.reverse().slice(5*(params.id-1),5*(params.id-1)+5),curPage:params.id,article_type: res.data.article_type,datas_leng: res.data.article_list.length};
    })
  },
  data(){
    return {
    }
  },
  head () {
    return {
      title: '令人感动的故事与笑话-灵性_泥兔网',
      meta: [
      { hid: 'description', name: 'Keywords', content: '温馨，小故事，开心，学生，孩子，励志' },
      {  name: 'description', content: '国外温馨小故事和开心短笑话精选为学生和孩子们提供励志故事集，泥兔网为您提供优质的国外故事和笑话' },
      ]
    }
  },
  components:{
    navserv,
    search,
    categories,
    pagination,
    otherline
  },
  methods:{
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
  }
}
</style>




