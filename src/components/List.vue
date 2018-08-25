<template>
  <div >

    <!--<ul>
      <li v-for="item in vmData.sampleData"><input v-model="item.username"></li>
    </ul>

    <ul>

      <tr v-for="item in filterBy(sampleData,'2','username')">{{item.username}}</tr>

    </ul>-->
  </div>
</template>
<script>
  var sampleData=[];

  sampleData.push({"username":"1","age":"1"});
  sampleData.push({"username":"1","age":"1"});
  sampleData.push({"username":"1","age":"1"});
  sampleData.push({"username":"2","age":"2"});
  import * as apiRequest from '../../js/apRequest';
  var vmData = {};

  var getUserList = function () {
    var param = {};
    var obsable = apiRequest.requestPost("/openapi/userList",param)
    obsable.subscribe(userListObserver);
  }



  var userListObserver = {
    next:(list)=>{
      console.log(list);
    }
    ,error:(err)=>{
      console.log(err);
    }
  }





  var postFileList = function(param){
    // 서버 데이터 발생 기본
    obsable = apiRequest.requestPost("/openapi/userList",param);
    // 서버 데이터 발생에 구독자를 추가 하자마자 호출됨
    obsable.subscribe(observer);
    // 사용자 버튼 클릭  데이터 발생 기본
    obsable = clickEvent();
    // But . obsable 에서 초당 걸러내게 오퍼레이터를 추가 ( 마블도를 보고서 )
    // 사용자 버튼 클릭 데이터를 받아 들이는 구독자 이벤트 발생 즉시 호출 됨.
    obsable.subscribe(observer);
  }


  export default {
    name: 'OurWorkBlock',
    data () {
      return {
        vmData

      }
    },
    mounted(){
      getUserList();
    },



    beforeDestroy() {
      EventBus.$off('login-is-true', this.postFileList);
    },


    methods:{
      doPostFileList() {
        postFileList();
      }
    }
  }
</script>


