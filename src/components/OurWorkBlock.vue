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
          <div class="clearfix"></div>
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
var vmData = {};
vmData.fileList = [];
var postFileList = function(){
    var param = {};
    apiRequest.requestPost("/api/fileList",param).subscribe(observer);
}

var observer =  {
  next: (datas )=>{
    console.log(datas);
    vmData.fileList =datas.data;
  } //(this.filelist = datas)
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
    mounted(){
      postFileList();
    },
    method:{
     doPostFileList() {
        postFileList();
      }
    }
  }
</script>


