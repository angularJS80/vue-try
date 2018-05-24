<template>

    <div class="row wow fadeInUp">
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
import EventBus from '../../js/event-bus';


var observer =  {
  next: (response )=>{
    var user = response.data;
    if (user && user.token) {
      localStorage.setItem('currentUser', JSON.stringify(user));
// In order to emit an Event
      EventBus.$emit('login-is-true','Yea! Logined!');
      EventBus.$emit('close-signin','Close SignIn Component!');

// In order to consume an event and listen for it
    }
    console.log(localStorage);
  } //(this.filelist = datas)
  ,error:(error)=>(console.log(error))
  ,complete:()=>(console.log('complete'))
}

export default {
  name: 'HelloWorld',
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
