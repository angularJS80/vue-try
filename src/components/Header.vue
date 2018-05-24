<template>
  <div >
    <header id="menutop">

      <!-- Navigation
        ==========================================-->
      <nav id="top-menu" class="navbar navbar-default navbar-fixed-top">

        <!--Header top-->
        <section id="header-top-bar">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="pull-left">
                  <ul class="">
                    <li>KakaoID : angularJS80</li>
                  </ul>
                </div>
                <div class="pull-right">
                  <ul class="list-inline top-social-link">
                    <li> <a href="mailto:someone@example.com?"><i class="fa fa-facebook"></i></a></li>
                    <li> <a href="mailto:someone@example.com?"><i class="fa fa-rss"></i></a></li>
                    <li> <a href="mailto:someone@example.com?"><i class="fa fa-twitter"></i></a></li>
                    <li> <a href="mailto:someone@example.com?"><i class="fa fa-linkedin-square"></i></a></li>
                    <li> <a href="mailto:someone@example.com?"><i class="fa fa-vimeo-square"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--/Header top-->

        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            <a class="navbar-brand" href="index.html">LET'S Programming</a></div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <!--search-cart-block -->
            <div class="search-cart-block">
              <!--search form-->

              <form method="get" action="/search" id="search">
                <input name="q" type="text" size="40" placeholder="Search..." />
              </form>
              <!--/search form-->
              <div class="cart-notify"><a href="#"><i class="fa fa-cart-plus"><span>0</span></i></a></div>
            </div>
            <!--/search-cart-block -->

            <ul class="nav navbar-nav navbar-right">
              <li ><a href="index.html" class="page-scroll active-on"></a></li>

              <li v-for="topMenu in vmData.topMenuList"><a href="blog-post.html" class="page-scroll">{{topMenu.menuNm}}</a>
                <ul class="sub-menu">
                  <li v-for="subMenu in topMenu.subMenuList"><a href="#">{{subMenu.menuNm}}</a>
                    <ul>
                      <li v-for="deepMenu in subMenu.deepMenuList"><a href="#">{{deepMenu.menuNm}} </a>
<!--
                        <ul class="sub-menu">
                          <li><a href="#">Sub Deep 1</a></li>
                          <li><a href="#">Sub Deep 2</a></li>
                          <li><a href="#">Sub Deep 3</a></li>
                          <li><a href="#">Sub Deep 4</a></li>
                        </ul>
-->
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>


              <li><a hef="#" v-on:click="contractModalShow()">Contact</a></li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->

        </div>
        <!-- /.container-fluid -->

      </nav>
    </header>
    <modals-container/>
  </div>
</template>

<script>
  import SignIn from '@/components/SignIn'
  import EventBus from '../../js/event-bus';
  var getMenuList = function(){
    var topMenuList =[];
    var subMenuList;
    var deepMenuList;
    topMenuList.push({"menuNm":"Our Home","path":""})
    subMenuList=[];
    deepMenuList = []
    deepMenuList.push({"menuNm":"deep1","path":""})
    deepMenuList.push({"menuNm":"deep1","path":""})

    subMenuList.push({"menuNm":"sub1","path":"","deepMenuList":deepMenuList})
    subMenuList.push({"menuNm":"sub2","path":""})

    subMenuList.push({"menuNm":"Single","path":""})
    topMenuList.push({"menuNm":"Single","path":"","subMenuList":subMenuList});

    topMenuList.push({"menuNm":"Blog","path":""})
    topMenuList.push({"menuNm":"Page","path":""})
    topMenuList.push({"menuNm":"Portfolio","path":""})
    topMenuList.push({"menuNm":"Elements","path":""})
    return topMenuList
  }


  var vmData={};
  vmData.topMenuList = [];
  vmData.topMenuList = getMenuList();
  export default {
    name: 'Header',
    data () {
      return {
        vmData
      }

    },methods: {
      vmMenuList(){
          getMenuList()
      },
      mounted(){
        console.log("Header Mounted");
        EventBus.$on('close-signin',function(valueOfEvent){
          console.log(valueOfEvent);
          this.hide();
        });
      },
      beforeDestroy() {
        EventBus.$off('close-signin', this.postFileList);
      },
      contractModalShow () {
        this.$modal.show(SignIn
          ,{}
          ,{
            resizable:true,
            draggable:true,
            adaptive:true
          }
        );
      },
      hide () {
        this.$modal.hide(SignIn);
      }
    }
  }


</script>
