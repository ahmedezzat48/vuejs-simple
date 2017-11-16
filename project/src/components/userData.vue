<template>
 <div>
  
    <div class='row'>
    

    <div v-for='user in users' class="col-sm-6 col-md-4 users-div">
            <div class="thumbnail">
            <img :src="user.avatar_url" alt="">
            <div class="caption">
                <h3>{{user.name}}</h3>
                <p><router-link v-bind:to="'/users/' + user.id" class="btn btn-primary" role="button">More</router-link> </p>
           </div>
         </div>
    </div>

    
    </div>
    <div class='row more'>
      <button class="btn btn-primary btn-lg" v-on:click='ShowMore()' :disabled="validated == 0">Show More ..</button>
    </div>
  </div>
  

  
</template>


<script>
export default {
  
  data(){
  
    return {
      start: 0,
      validated: 1,    
      users:[]
    }
  },
  methods:{
    ShowMore: function(){

    this.$http.get('https://api.github.com/users').then(function(data){
        
      this.users = data.body.slice(this.start,this.end);
      this.validated = 0;





      
      })
      
    }
    
  },
  created(){

    this.$http.get('https://api.github.com/users').then(function(data){
       
      this.users = data.body.slice(this.start,9);

    })

  }
}
</script>

<style>
  .thumbnail > img {
    height:150px;
    width:150px;
  }
  .users-div .caption h3 ,.users-div .caption p {
  text-align:left ;
  }
  .more {
   margin-bottom:70px;
  }
</style>
