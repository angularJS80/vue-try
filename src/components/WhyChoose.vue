<template>
  <div >
    <!-- Why choose us
       ==========================================-->
    <section id="why-choose-us">

      <!--section-title-->
      <div class="section-title text-center">
        <h2 class="wow zoomIn">Why choose us</h2>
      </div>
      <!--/section-title-->

      <div class="container">
        <div class="row">
          <div>

            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#Speed" aria-controls="Speed" role="tab" data-toggle="tab">Speed</a></li>
              <li role="presentation"><a href="#Design" aria-controls="Design" role="tab" data-toggle="tab">Design</a></li>
              <li role="presentation"><a href="#Support" aria-controls="Support" role="tab" data-toggle="tab">Support</a></li>
              <li role="presentation"><a href="#Best" aria-controls="Best" role="tab" data-toggle="tab">Best</a></li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content wow fadeInUp">
              <div role="tabpanel" class="tab-pane active" id="Speed"> <img src="/static/img/tab-1.jpg" class="img-responsive"> </div>
              <div role="tabpanel" class="tab-pane" id="Design"><img src="/static/img/tab-2.jpg" class="img-responsive"></div>
              <div role="tabpanel" class="tab-pane" id="Support"><img src="/static/img/tab-3.jpg" class="img-responsive"></div>
              <div role="tabpanel" class="tab-pane" id="Best"><img src="/static/img/tab-4.jpg" class="img-responsive"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  var sampleData = {};
  export default {
    name: 'WhyChoose',
    data () {
      return {
        sampleData
      }
    }
  }
</script>


