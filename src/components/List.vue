<template>
  <div >

    <ul>
      <li v-for="item in sampleData"><input v-model="item.username"></li>
    </ul>

    <ul>
      <li v-for="item in filterBy(sampleData,'2','username')">{{item.username}}</li>
    </ul>
  </div>
</template>

<script>
var sampleData=[];
sampleData.push({"username":"1","age":"1"});
sampleData.push({"username":"1","age":"1"});
sampleData.push({"username":"1","age":"1"});
sampleData.push({"username":"2","age":"2"});

export default {
  name: 'HelloWorld',
  data () {
    return {
      sampleData
    }
  }
}
</script>
