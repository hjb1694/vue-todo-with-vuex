<template>
  <div class="main">
      <div class="container">
          <h1>Todo List</h1>
          <app-form/>
          <app-list/>
      </div>
  </div>
</template>

<script>
import Form from './components/Form.vue';
import List from './components/List.vue';
export default {
  components : {
    'app-form' : Form, 
    'app-list' : List
  }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');

    *,*::before,*::after{
      margin:0;
      padding:0;
      box-sizing:inherit;
    }

    html{
      box-sizing:border-box;
      font-size:62.5%;
      height:100%;
    }

    body{
      background:linear-gradient(to bottom right, #fc3fb4, #4093ff);
      padding:1rem;
      font-family:sans-serif;
      color:#777;
      font-family: 'Open Sans', sans-serif;
    }

    h1{
      display:inline-block;
      border-bottom:1px solid #ccc;
      padding:.5rem 0;
      background:linear-gradient(to bottom, #fc3fb4, #4093ff);
      background-clip:text;
      color:transparent;
      font-size:3rem;
      font-weight:300;
    }

    .container{
      max-width:50rem;
      padding:1rem;
      background:#fff;
      box-shadow:0 0 1rem rgba(0,0,0,.25);
      margin:10% auto;
    }
</style>
