<template>
  <div >
    <!-- Company counter section
        ==========================================-->
    <section id="company-counter" style="background-image:url(/static/img/count-bg.jpg);">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12 wow fadeInDown">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="c-block"><i class="fa fa-user"></i><span class="counter">17</span>
                <p>Clients</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="c-block"><i class="fa fa-check"></i><span class="counter">45</span>
                <p>Finished Projects</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="c-block"><i class="fa fa-coffee"></i><span class="counter">596</span>
                <p>Cup of Coffee</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="c-block"><i class="fa fa-trophy"></i><span class="counter">56</span>
                <p>Awards won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- /Company counter section -->
  </div>
</template>

<script>
  var sampleData = {};

  export default {
    name: 'HomeBanner',
    data () {
      return {
        sampleData
      }
    }
  }
</script>


