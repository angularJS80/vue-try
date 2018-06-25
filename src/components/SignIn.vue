<template>

  <div class="row wow fadeInUp">
    <!-- Four -->
    <section id="four" class="wrapper style2 special">
      <div class="inner">
        <header class="major narrow">
          <h2>Get in touch</h2>
          <p>Ipsum dolor tempus commodo adipiscing</p>
        </header>
        <form action="#" method="POST">
          <div class="container 75%">
            <div class="row uniform 50%">
              <div class="6u 12u$(xsmall)">
                <input name="name" placeholder="Name" type="text" />
              </div>
              <div class="6u$ 12u$(xsmall)">
                <input name="email" placeholder="Email" type="email" />
              </div>
              <div class="12u$">
                <textarea name="message" placeholder="Message" rows="4"></textarea>
              </div>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" class="special" value="Submit" /></li>
            <li><input type="reset" class="alt" value="Reset" /></li>
          </ul>
        </form>
      </div>
    </section>

    <div class="row">
      <div class="col-sm-6 col-sm-offset-3 social-login">
        <h3>...or login with:</h3>
        <div class="social-login-buttons">
          <a class="btn btn-link-2" href="#">
            <i class="fa fa-facebook"></i> Facebook
          </a>
          <a class="btn btn-link-2" href="#">
            <i class="fa fa-twitter"></i> Twitter
          </a>
          <a class="btn btn-link-2" href="#">
            <i class="fa fa-google-plus"></i> Google Plus
          </a>
        </div>
      </div>
    </div>

    <!--blog posts container-->
    <div  style="padding: 20px">
      <form style="padding-bottom:80px">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <button type="submit" class="btn btn-primary" v-on:click="callRequest">Submit</button>
      </form>

      <!--blog posts container-->
    </div>

    <div class="clearfix"></div>
  </div>

</template>


<script>

  import axios from 'axios'

  import * as apiRequest from '../../js/apRequest';



 // import EventBus from '../../js/event-bus';


  var observer =  {
      next: (response )=>{
      var user = response.data;
  if (user && user.token) {
    localStorage.setItem('currentUser', JSON.stringify(user));
// In order to emit an Event
    //EventBus.$emit('login-is-true','Yea! Logined!');
    //EventBus.$emit('close-signin','Close SignIn Component!');

// In order to consume an event and listen for it
  }
  console.log(localStorage);
  } //(this.filelist = datas)
  ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }

  export default {
    name: 'SignIn',
    data () {
      return {
        msg: 'Welcome'
      }
    },
    methods: {
      callRequest(){
        var param = { username: "1", password: "1"};
        apiRequest.requestPost("/openapi/authenticate",param).subscribe(observer);

        /* apiRequest.requestPost().subscribe((res) => {
         console.log(res)
         //res.data.forEach((item) => {});
         });*/

      }
    }
  }
</script>
<style>

</style>
