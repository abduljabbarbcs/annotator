<template>
     <div>
         <div class="app-title">
             <router-link to="/dashboard">Annotator App</router-link>
         </div>
         <div class="app-body">
             <router-view></router-view>
         </div>
     </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style>
  .app-title{
      display: flex;
      justify-content: space-between;
      padding: 20px 0px;
      font-weight: bold;
  }
  .app-body{
      padding: 20px;
  }
  .comment-dropdown-menu li:first-child {
      display: none;
  }
  .r6o-editable-text{
      display: none;
  }
  .tag {
      display: none !important;
  }
  button{
      justify-content: flex-end;
  }
</style>
