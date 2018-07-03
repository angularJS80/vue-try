<template>

  <section id="four" class="wrapper style2 special">
    <div class="inner">
      <header class="major narrow">
        <h2>Sign In{{vueData.hellow}}</h2>

      </header>
      <form action="#" method="POST">

        <div class="container 75%">
          <div class="row uniform 50%">
            <div class="6u 12u$(xsmall)">
              <input v-model="vueData.userId" name="userId" placeholder="userId" type="text" />
            </div>
            <div class="6u$ 12u$(xsmall)">
              <input v-model="vueData.userPw" name="userPw" placeholder="userPw" type="password" />
            </div>
          </div>
        </div>
        <ul class="actions">
          <li><input type="button" class="special" value="Submit" v-on:click="vueDoLogin()" /></li>
          <li><input type="button" class="alt" value="Reset" v-on:click="vueDoLoout()"/></li>
        </ul>
      </form>
    </div>
  </section>

</template>


<script>

  import axios from 'axios'

  import * as apiRequest from '../../js/apRequest';


  var jsData = {
    "userId":"1",
    "userPw":"1"
  };
 // import EventBus from '../../js/event-bus';


  var observer =  {
      next: (response )=>{
        var user = response.data;
        jsData.hellow = user.hellow;
  alert(jsData.hellow );
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        console.log(localStorage);
      }
      ,error:(error)=>(console.log(error))
      ,complete:()=>(console.log('complete'))
  }

  var jsDoLogin = function () {
    apiRequest.requestPost("/openapi/authenticate",jsData).subscribe(observer);
  }
  var jsDoLoout = function () {
   localStorage.removeItem("currentUser")
  }


  export default {
    name: 'SignIn',
    data () {
      return {
        vueData: jsData
      }
    },
    methods: {
      vueDoLogin(){jsDoLogin()},
      vueDoLoout(){jsDoLoout()}
    }
  }
</script>
<style>

</style>
