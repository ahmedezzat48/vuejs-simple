<template>
<div>
  <div class="jumbotron">
         <h1>Welcome To Git</h1>
        <p>This is a demo blog :)</p>
  </div> 
  <router-link to='/users' class="btn btn-lg btn-primary" role="button">Check Users</router-link>
  
 </div>
  </template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

</style>
