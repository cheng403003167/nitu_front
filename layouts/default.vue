<template>
  <div class="main">
    <div class="header">
      <span class="logo">泥兔</span>
    </div>
    <div class="nav">
      <div class="nav_con">
        <a href="/" :class="fullPath.indexOf('index')>=0?'active':''">首页</a>
        <a href="/motivational/1" :class="fullPath.indexOf('motivational')>=0?'active':''">励志</a>
        <a href="/education/1" :class="fullPath.indexOf('education')>=0?'active':''">教育</a>
        <a href="/inspirational/1" :class="fullPath.indexOf('inspirational')>=0?'active':''">灵性</a>
        <a href="/family/1" :class="fullPath.indexOf('family')>=0?'active':''">家庭</a>
        <a href="/love/1" :class="fullPath.indexOf('love')>=0?'active':''">爱</a>
        <a href="/funny/1" :class="fullPath.indexOf('funny')>=0?'active':''">娱乐</a>
      </div>
    </div>
    <div>
      <nuxt/>
    </div>
    <div class="footer">
      <p>
        <span>@dnitu.com</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullPath: ''
    };
  },
  created(){
    this.fullPath = this.$route.name;
  }
};
</script>
<style lang="scss">
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {
  margin: 0;
  padding: 0;
} /* 初始化标签在所有浏览器中的margin、padding值 */
fieldset,img {
  border: 0 none;
} /* 重置fieldset（表单分组）、图片的边框为0*/
dl,ul,ol,menu,li {
  list-style: none;
} /* 重置类表前导符号为onne,menu在HTML5中有效 */
blockquote,q {
  quotes: none;
} /* 重置嵌套引用的引号类型 */
blockquote:before,blockquote:after,q:before,q:after {
  content: "";
  content: none;
} /* 重置嵌套引用*/
input,select,textarea,button {
  vertical-align: middle;
} /* 重置表单控件垂直居中*/
button {
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
} /* 重置表单button按钮效果 */
body {
  background: #fff;
} /* 重置body 页面背景为白色 */
body,th,td,input,select,textarea,button {
  font-size: 12px;
  line-height: 1;
  font-family: "微软雅黑", "黑体", "宋体";
  color: #000;
} /* 重置页面文字属性 */
a {
  color: #666;
  text-decoration: none;
} /* 重置链接a标签 */
a:active,a:hover {
  text-decoration: none;
} /* 重置链接a标签的鼠标滑动效果 */
address,caption,cite,code,dfn,em,var {
  font-style: normal;
  font-weight: normal;
} /* 重置样式标签的样式 */
caption {
  display: none;
} /* 重置表格标题为隐藏 */
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
} /* 重置table属性 */
img {
  vertical-align: top;
} /* 图片在当前行内的垂直位置 */

/* 页面设置 */

/* 取消a标签点击后的虚线框 */
a {
  outline: none;
}

html {
  font-size: 16px;
  box-sizing: border-box;
}
body{
  background: #fffbf0;
}
.header {
  width: 1000px;
  margin: auto;
  .logo {
    display: inline-block;
    font-size: 40px;
    font-weight: bold;
  }
}
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
.footer {
  border-top: 1px solid #ccc;
  p {
    width: 1000px;
    margin: auto;
  }
  span {
    display: inline-block;
    padding: 4px 0;
    font-size: 16px;
  }
}
</style>

