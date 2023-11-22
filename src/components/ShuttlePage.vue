<template>
    <body>
    <h1 style="font-family: monospace; color: #f3f3f3;">Shuttle Booking</h1>
    <div class="sitem" v-for="item in ShuttleItems" :key="item.time">
      <shuttle-item :time=item.time :sorc="item.sorc" :dst="item.dst" :available_seats="item.available_seats" :needed_seats="inp_pass"></shuttle-item>
    </div>
    <div class="book-button">
      <button class="button" @click="BookSelection">Book</button>
    </div>
  </body>
  </template>
  
  <script>
  // import uniqueId from "lodash.uniqueid";
  import ShuttleItem from "./ShuttleItem.vue"
  import data from '../assets/schedule.json'


  export default {
    name: "shuttle-page",
    components: {
      ShuttleItem
    },
    data() {
      var inp_time = this.$route.query.time;
      var inp_pass = this.$route.query.passengers;
      
      var line = this.$route.query.line;
      var t_base =  Math.round(parseInt(inp_time.split('T')[1].replace(":", ""))/100)*100;
      var items = [];
      var map = {'a': 'Ashoka', 'j': 'Jahangirpuri', 'p':'Parker/TDI'}
      for(var i in data['weekday'][0][line]){
        if(Math.abs(t_base-i)<=150){
          items.push({time: parseInt(i), sorc: map[line[0]], dst: map[line[3]], available_seats: data['weekday'][0][line][i]});
        }
      }

      return {
        ShuttleItems: items,
        inp_pass: parseInt(inp_pass)
      };
    },
    methods:{
      BookSelection: function(){

      }
    }
  };
  </script>
  
  <style>
  #app {
    font-family: monospace;
    font-size: large;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .sitem{
    background-color: #1a1919;
    width: 300px;
    float: left;
  }
  .book-button{
    background-color: #1a1919;
    border: #0E3970;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 5.5px;
    border-radius: 15px;
  }
  .button{
    background-color: #272626;
    color: #f3f3f3;
    font-family: monospace;
    font-size: large;
    width: 100px;
    height: 50px;
    border-radius: 15px;
    border: 3px solid #0E3970;
    margin: 5.5px;
  }
  .button:hover{
    font-family: monospace;
    font-size: large;
    width: 100px ;
    height: 50px ;
    border-radius: 15px;
    border: 3px solid black;
    background: #0E3970;
    color: #f3f3f3;
    margin: 5.5px;
  }
  .body{
    font-family: monospace;
    font-size: large;
  }
  .item2{
    font-family: monospace;
    font-size: large;
    width: 200px;
    color:#f3f3f3;
    background-color: #0000ff;
    border: 3px solid rgb(82, 210, 43);
    border-radius: 25px;
    padding: 20px;
    margin: 5.5px;
}
.item2:hover{
    width: 200px !important;
    background-color: #2b9dd2 !important;
    border-radius: 25px !important;
    padding: 20px !important;
    color: #f3f3f3 !important;
    margin: 5.5px !important;
}
  </style>
  