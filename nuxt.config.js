const pkg = require('./package')
import axios from 'axios';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  generate: {
    routes: function(){
      function getArticleList(){
        return axios.post('http://localhost:8080/api/getArticleList')
        .then((res) => {
          var pag_leng = Math.ceil(res.data.length/5);
          var pag_router = []
          for(var s = 1;s<= pag_leng;s++){
            pag_router.push({route: '/pages/'+s});
          }
          return pag_router;
        })
      }
      function getMotivational(){
        return axios.post('http://localhost:8080/api/getArticleList',{arId:1})
        .then((res) => {
          var pag_leng = Math.ceil(res.data.length/5);
          var pag_router = []
          for(var s = 1;s<= pag_leng;s++){
            pag_router.push({route: '/motivational/'+s});
          }
          return pag_router;
        })
      }
      function getEducation(){
        return axios.post('http://localhost:8080/api/getArticleList',{arId:2})
        .then((res) => {
          var pag_leng = Math.ceil(res.data.length/5);
          var pag_router = []
          for(var s = 1;s<= pag_leng;s++){
            pag_router.push({route: '/education/'+s});
          }
          return pag_router;
        })
      }
      function getFamily(){
        return axios.post('http://localhost:8080/api/getArticleList',{arId:4})
        .then((res) => {
          var pag_leng = Math.ceil(res.data.length/5);
          var pag_router = []
          for(var s = 1;s<= pag_leng;s++){
            pag_router.push({route: '/family/'+s});
          }
          return pag_router;
        })
      }
      function getFunny(){
        return axios.post('http://localhost:8080/api/getArticleList',{arId:6})
        .then((res) => {
          var pag_leng = Math.ceil(res.data.length/5);
          var pag_router = []
          for(var s = 1;s<= pag_leng;s++){
            pag_router.push({route: '/funny/'+s});
          }
          return pag_router;
        })
      }
      function getInspirational(){
        return axios.post('http://localhost:8080/api/getArticleList',{arId:3})
        .then((res) => {
          var pag_leng = Math.ceil(res.data.length/5);
          var pag_router = []
          for(var s = 1;s<= pag_leng;s++){
            pag_router.push({route: '/inspirational/'+s});
          }
          return pag_router;
        })
      }
      function getLove(){
        return axios.post('http://localhost:8080/api/getArticleList',{arId:5})
        .then((res) => {
          var pag_leng = Math.ceil(res.data.length/5);
          var pag_router = []
          for(var s = 1;s<= pag_leng;s++){
            pag_router.push({route: '/love/'+s});
          }
          return pag_router;
        })
      }
      function getArticleIdList(){
        return axios.get('http://localhost:8080/api/getArticleIdList')
        .then((res) => {
          var pag_leng = res.data.length;
          var pag_router = []
          for(var s = 0;s< pag_leng;s++){
            pag_router.push({route: '/article/'+res.data[s].id});
          }
          return pag_router;
        })
      }
      return axios.all([getArticleList(),getMotivational(),getEducation(),getFamily(),getFunny(),getInspirational(),getLove(),getArticleIdList()])
      .then(axios.spread(function (acct, mot,edu,fam,fun,ins,lov,articleId) {
        return acct.concat(mot,edu,fam,fun,ins,lov,articleId);
      }));
    }
  }
}
