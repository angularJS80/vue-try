<template>

 <div id="resInnerHtml">

 </div>

</template>


<script>

  import axios from 'axios'

  import * as apiRequest from '../../js/apRequest';


  var jsData = {
    "userId":"1",
    "userPw":"1"
  };
 // import EventBus from '../../js/event-bus';



  var testJspCallIninnerHtml = function () {
  //  console.log(requestPost("/order",jsData));
    requestPost("/order",jsData);//.subscribe(observer);
  }

  var requestPost = function (suburl,param) {
    //var baseUrl = "http://211.249.60.229:38080";
    var baseUrl = "http://localhost:38080/sbtry";
    axios.get(baseUrl+suburl)
      .then(function (response) {
        console.log(response);
        document.getElementById('resInnerHtml').innerHTML= response.data;
        }
      )
  }



  export default {
    name: 'Register',
    data () {
      return {
        vueData: jsData
      }
    },
    methods: {

    },
    mounted(){

      testJspCallIninnerHtml();
    }

  }
</script>
<style>

</style>
