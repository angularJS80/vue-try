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
import { Observable} from 'rxjs/Observable';
import { Observer} from 'rxjs/Observer';
import 'rxjs/add/observable/fromPromise'
import * as apiRequest from '../../js/apRequest';

var observer =  {
  next: (datas )=>{
    console.log(datas);
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
      apiRequest.requestPost().subscribe(observer);

     /* apiRequest.requestPost().subscribe((res) => {
        console.log(res)
          //res.data.forEach((item) => {});
      });*/

    }
  }
}
</script>
