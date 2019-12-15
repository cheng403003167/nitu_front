<template>
  <div class="tuijian">
    <p class='tui_tit'>相关推荐</p>
    <div class="list_item" v-for="(item,index) in datas" :key="index">
        <nuxt-link class="img_line" :to="'/article/'+item.id+'/'">
            <img
            :src="'https://traile.oss-cn-shenzhen.aliyuncs.com/'+item.front_img"
            :alt="item.title" :title="item.title"
            />
        </nuxt-link>
        <div class="item_con">
            <h2>
            <nuxt-link :to="'/article/'+item.id+'/'">{{item.title}}</nuxt-link>
            </h2>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      datas: this.$attrs.tuijian
    }
  },
  created(){
  }
};
</script>
<style lang="scss">
.tuijian{
    margin-top: 20px;
    .tui_tit{
        font-size: 20px;
        color: #000;
        font-weight: bold;
        padding: 10px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid #dedede;
    }
    .list_item{
        margin: 10px;
        font-size: 12px;
        color: #000;
        border-bottom: 1px solid #dedede;
        &:last-child{
            border-bottom: none;
        }
        .img_line{
            display: block;
        }
        img{
            display: block;
            width: 100%;
        }
        .item_con{
            margin-top: 6px;
            margin-bottom: 10px;
            h2{
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap
            }
        }
    }
}
</style>