<template>
      <header style="padding: 8px;">
        <div><img src="../assets/logo.png" style="width:200px;height:150px;"></div>
        <div align="center"><h1 style="font-family: monospace; color: #f3f3f3;">Ashoka Shuttle Booking</h1></div>
        <div style="width: 200px;color: #9b9b9b;" align="left">
            Passengers: {{ inp_pass }} <br> Date: {{ inp_time[0] }} <br> Time: {{ inp_time[1] }}<br>
        </div>
      </header>
      <div class="sitem" v-for="item in ShuttleItems" :key="item.time">
        <shuttle-item :time=item.time :sorc="item.sorc" :dst="item.dst" :available_seats="item.available_seats" :needed_seats="inp_pass"></shuttle-item>
      </div>
      <div class="buttons">
        <div class="back-button">
          <button class="button" @click="Back">Back</button>
        </div>
        <div class="book-button">
          <a style="font-size: small; wriap" >Select shuttle and click to Book/Register interest</a><br>
          <button class="button" @click="BookSelection">Book</button>
        </div>
      </div>
  </template>
  
  <script>
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
        inp_pass: parseInt(inp_pass),
        inp_time: inp_time.split('T')
      };
    },
    methods:{
      Back: function(){
        this.$router.push({
          path:"/"
        })
      },
      BookSelection: function(){
        if(confirm("you sure dawg?")){console.log()}
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
  header{
    display: flex;
    width: 100%;
    float:left;
    align-items: center;
    justify-content:space-between;
}
  .sitem{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #1a1919;
    width: 250px;
    float: left;
  }
  .buttons{
    background-color: #1a1919;
    width: 300px;
    float: left;
  }
  .book-button{
    width: 150px;
    color: #f3f3f3;
    text-align: right;
    background-color: #1a1919;
    border: #0E3970;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 5.5px;
    border-radius: 15px;
  }
  .back-button{
    background-color: #1a1919;
    border: #0E3970;
    position: absolute;
    bottom: 0;
    left: 0;
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
    border: 3px solid #993030;
    background: #0E3970;
    color: #f3f3f3;
    margin: 5.5px;
  }
  .body{
    font-family: monospace;
    font-size: large;
  }
  
  </style>
  