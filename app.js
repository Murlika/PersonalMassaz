/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

import './css/lightbox.css';
import './css/bootstrap.css';
import './css/owl.carousel.css';

/*Import skripts*/
import 'jquery';
import 'bootstrap';
import 'lightbox2';
import Vue from 'vue'

require("font-awesome-webpack");

Vue.component('top-menu', require('./components/TopMenu.vue').default)
Vue.component('about-me', require('./components/AboutMe.vue').default)
Vue.component('my-services', require('./components/MyServices.vue').default)
Vue.component('my-projects', require('./components/MyProjects.vue').default)
Vue.component('my-prices', require('./components/MyPrices.vue').default)
Vue.component('my-blog', require('./components/MyBlog.vue').default)
Vue.component('contacts', require('./components/Contacts.vue').default)
Vue.component('my-testimonials', require('./components/myTestimonials.vue').default)
Vue.component('social', require('./components/Social.vue').default)
Vue.component('smoth-scrolling', require('./components/SmothScrolling.vue').default)

const app = new Vue({
  el: '#body',
  data: function () {
    return {
      title: ' Массажист <span>Андерй</span>',
      topMenuItems: [],
      myPrices: [],
      myServices: [],
      myNews: [],
      myNewsText: {
        h4Text: "(Потемки моей души!)",
        text: "Я пришел к черте, за которой прекращается ностальгия, за которой слезы становятся белоснежными, как алебастр."
      },
      myProjects: [],
      myTestimonials:[],
      aboutMeText: '<h5>Я твое повторяю имя</h5><h2> по ночам во тьме <span>молчаливой,</span></h2><h4> когда собираются звезды</h4><p>к лунному водопою</p><p>и смутные листья дремлют,</p><p>свесившись над тропою.</p>',
      SocialMe: {   
        facebook: true,
        twitter: true,
        googleplus: true,
        pinterest: true,
        vk: true
      }   
    }
  },
  created () {
    this.aboutMe = require('./data/aboutme.json');
    this.topMenuItems = require('./data/topmeu.json');
    this.myContacts = require('./data/mycontacts.json');
    this.myServices = require('./data/myservices.json');
    this.myProjects = require('./data/myprojects.json');
    this.myPrices = require('./data/myprices.json');
    this.myNews = require('./data/mynews.json');
    this.myTestimonials = require('./data/mytestimonials.json');

    //console.log(this.myStatistica)


  },
  mounted () {

  }

})
