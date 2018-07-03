<template>
  <div >
      <ul v-for="item in vueData.hellows ">{{item.hellow}}</ul>
  </div>

</template>


<script>
import axios from 'axios'
var jsData ={};
jsData.msg ="";
jsData.token ="";
jsData.hellows = [];
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
  axios.get("http://localhost:48080/api/hellow/korea",config)
    .then(function (response) {
      jsData.hellows = response.data;
    })

}




export default {
  name: 'HelloWorld',
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
