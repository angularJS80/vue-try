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
import Rx from 'rxjs/Rx'


var getApiCallObsable = function () {
  var baseUrl = "http://localhost:38080";
  var param = { username: "1", password: "1"};
  var headers= {
      'Content-Type': 'application/json',
  }
  let rtnObsable = axios.post(baseUrl+"/openapi/authenticate",
    param,
    headers)
return rtnObsable;
}

var getAutchObser = function(){



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

      getApiCallObsable.subscribe(
        //getAutchObser()
      );
    }
  }
}
</script>
