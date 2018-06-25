<template>
  <div >
{{vueData.msg}}
  </div>









</template>


<script>
import axios from 'axios'
var jsData ={};
jsData.msg ="";
jsData.token ="";

var getToken= function(){
  var headers= {
    'Content-Type': 'application/json'
  }

  //await
  axios.get("http://localhost:48080/openapi/authenticate")
    .then(function (response) {
      console.log(response.data)
      jsData.token = response.data.token;
n
    })
}

var servercall=function () {
  getToken();
  console.log(jsData.token);

  setTimeout(delayCall,3000)


}

var delayCall= function(){
  var headers= {
    'Content-Type': 'application/json'
    ,'authorization':jsData.token
  };
  var config = {
    headers: headers,
  };

  /*axios.get("http://localhost:48080/api/hellows",config)
    .then(function (response) {
      jsData.msg = response.data[0].hellow;
    })*/
  var hellow = {"hellow_id":"korea","hellow":"안녕하세요."};
  axios.post("http://localhost:48080/api/hellow/save",hellow);

}




export default {
  name: 'EditHelloWorld',
  data () {
    return {
      vueData: jsData
    }
  },
  mounted(){
   servercall();
  },

  methods: {
    show () {
      this.$modal.show(SignIn);
    },
    hide () {
      this.$modal.hide('hello-world');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
