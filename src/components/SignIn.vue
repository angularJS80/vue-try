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

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <!--blog posts container-->
      </div>

      <div class="clearfix"></div>
    </div>

</template>


<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
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
