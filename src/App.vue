<template>
  <div id="app" class="main" style="">    
    <router-view></router-view>
  </div>
</template>
<style>
#app{
  font-family: monospace;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.main{
  background-color: #1a1919;
  width:98%;
  height: 88vh;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
}
</style>
<script>
export default {
  name: 'App',
};
</script>