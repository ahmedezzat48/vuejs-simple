<template>
<div id="singleUser">
  <div class="col-sm-12 col-md-12">
            <div class="thumbnail">
                <img :src="userData.avatar_url" alt="" width="250" height="300">
                <div class="caption text-center">
                    <h3 class="text-center">{{userData.name}}</h3>
                </div>
                <article class="panel panel-default">
                    <div class="panel-body">
                     <span v-if='userData.email'> Email: {{userData.email}}</span><br>
                      <span v-if='userData.created_at'>Created Date: {{userData.created_at}}</span>
                    </div>
                </article>
            </div>
             <router-link to='/users' class="btn btn-lg btn-primary" role="button">Back</router-link>
       
  </div>
</div>
  </template>

<script>

export default {
  name: 'singleUser',
  data () {
    return {
      id: this.$route.params.id,
      userData:[]
    }
  },
  created() {
    this.$http.get('https://api.github.com/users/' + this.id).then(function(data){
    
    this.userData = data.body;
    console.log(this.userData);
    
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  text-align: center;
}
</style>
