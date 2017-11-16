
<template>
 <div>
   <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">
            <img src="./imgs/logo.png" width="25px">
          </router-link>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
           <li class="nav-item">
        <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link" >Users</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li> 

            
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>


  <div id="app">
    <div class='container'>
    <router-view/>
    </div>
    <footer class="panel panel-default">
        <div class="panel-body text-center">
            © Git.com
        </div>
    </footer>
   </div>
  </div>


  
</template>


<script>

import about from '../about'
import users from '../users'
import singleUser from './components/singleUser.vue'

export default {
  name: 'app',

  components: {
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  position:fixed;
  bottom: 0;
  width: 100%;
  margin-bottom: 0px !important;
}
</style>
