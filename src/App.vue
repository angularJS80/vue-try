<template>
  <div id="app">
    <header-templeate></header-templeate>

    <home-banner></home-banner>
    <about-us></about-us>


    <why-choose></why-choose>
    <from-blog></from-blog>
    <our-service></our-service>
    <our-work-block></our-work-block>
    <router-view/>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import AboutUs from '@/components/AboutUs.vue'
import WhyChoose from '@/components/WhyChoose.vue'

import FromBlog from '@/components/FromBlog.vue'

import OurService from '@/components/OurService.vue'
import OurWorkBlock from '@/components/OurWorkBlock.vue'

export default {
  name: 'App',
  components:{
    "header-templeate":Header,
    "home-banner":HomeBanner,
    "about-us":AboutUs,
    "why-choose":WhyChoose,


    "from-blog":FromBlog,

    "our-service":OurService,


    "our-work-block":OurWorkBlock,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
