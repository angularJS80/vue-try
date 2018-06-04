<template>
  <div >
    <!-- our works block
            ==========================================-->
    <section id="our-work-block">
      <div class="container">
        <div class="row">
          <!--section-title-->
          <div class="section-title text-center wow fadeInUp">
            <h2>Our case of Studies</h2>
            <p>Find our latest projects we have worked on and get started.</p>
          </div>

          <!--/section-title-->
          <div class="clearfix"><a v-on:click="doPostFileList"><i class="fa fa-refresh"></i></a></div>
          <div class="works">
            <ul class="grid wow zoomIn">

              <li v-for="item in vmData.fileList">

                <figure><img v-bind:src="'http://211.249.60.229:38080/api/'+ item.filepath +'.png'"alt="Screenshot 01">
                  <figcaption>
                    <div class="caption-content">
                      <h6>Codetowp branding</h6>
                      <a href="#">Design</a> <a href="#">brand</a>
                      <ul class="work-more">
                        <li><a href="portfolio-inner.html"><i class="fa fa-link"></i></a></li>
                      </ul>
                    </div>
                  </figcaption>
                </figure>
              </li>

            </ul>
            <div class="clearfix"></div>
            <a href="portfolio.html" class="more-links">View All Projects</a> </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as apiRequest from '../../js/apRequest';
//import EventBus from '../../js/event-bus';
var vmData = {};
vmData.fileList = [];
var obsable = apiRequest.requestPost("/api/fileList",{});

var postFileList = function(param){


    // 서버 데이터 발생 기본
    obsable = apiRequest.requestPost("/api/fileList",param);


    // 서버 데이터 발생에 구독자를 추가 하자마자 호출됨
    obsable.subscribe(observer);



  // 사용자 버튼 클릭  데이터 발생 기본
  obsable = clickEvent();


   // But . obsable 에서 초당 걸러내게 오퍼레이터를 추가 ( 마블도를 보고서 )


  // 사용자 버튼 클릭 데이터를 받아 들이는 구독자 이벤트 발생 즉시 호출 됨.
  obsable.subscribe(observer);




}

var observer =  {
  next: (datas )=>{
    console.log(datas);
    vmData.fileList = datas.data;

  }
  ,error:(error)=>(console.log(error))
  ,complete:()=>(console.log('complete'))
}



  export default {
    name: 'OurWorkBlock',
    data () {
      return {
        vmData
      }
    },
    /*created() {

    },*/
    beforeDestroy() {
      EventBus.$off('login-is-true', this.postFileList);
    },
   mounted(){
        console.log("OurWorkBlock Mounted");
     /*EventBus.$on('login-is-true',function(valueOfEvent){
       console.log(valueOfEvent);
     })*/
      postFileList();
    },
    methods:{
     doPostFileList() {
        postFileList();
      }
    }
  }
</script>


