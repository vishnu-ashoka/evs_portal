<template>
      <header style="padding: 8px;">
        <div style="max-width: 200px;"><img src="../assets/logo.png" style="width: 100%;"></div>
        <div align="center"><h1 style="font-family: monospace; color: #f3f3f3;">Ashoka Shuttle Booking</h1></div>
        <div style="width: 200px;color: #9b9b9b;padding-left: 20px;padding-right: 20px;" align="left">
            Passengers: {{ inp_pass }} <br> Date: {{ inp_time[0] }} <br> Time: {{ inp_time[1] }}<br> <input id='eid' class="inp" type="email" placeholder="Enter your email id">

        </div>
      </header>
      <div>
        <div class="sitem" v-for="item in ShuttleItems" :key="item.time">
          <shuttle-item :time=item.time :sorc="item.sorc" :dst="item.dst" :available_seats="item.available_seats" :needed_seats="inp_pass" :interested="item.interested"></shuttle-item>
        </div>
      </div>
      <footer>
        <div class="buttons">
          <div class="back-button">
            <br><br><br>
            <button class="button" @click="Back">Back</button>
          </div>
          <div class="book-button">
            <a style="font-size: small; text-wrap: 30px;" >Select shuttle and click to Book/Register interest</a><br>
            <button class="button" @click="BookSelection">Book</button>
          </div>
        </div>
      </footer>
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
    var date = inp_time.split('T');
    for(var i in data[date[0]][0][line]){
      if(Math.abs(t_base-i)<=150){
        items.push({time: parseInt(i), sorc: map[line[0]], dst: map[line[3]], available_seats: data[date[0]][0][line][i][0], interested: data[date[0]][0][line][i][1]});
      }
    }

    return {
      ShuttleItems: items,
      inp_pass: parseInt(inp_pass),
      inp_time: date,
    };
  },
  methods:{
    selected: function(){},
    Back: function(){
      this.$router.push({
        path:"/"
      })
    },
    BookSelection: function(){
      var em = document.getElementById('eid').value;
      if(em != ""){
        if(confirm("you sure dawg?")){
          this.$router.push({
                path: '/booked', 
                query: {
                  eid: em,
                }
          })
        }
      }
      else{window.alert('no email brother')}
    },
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
  clear: left;
}
.book-button{
  width: 150px;
  color: #f3f3f3;
  text-align: right;
  border: #0E3970;
  position: absolute;
  right: 0;
  margin: 5.5px;
  border-radius: 15px;
  padding-bottom: 20px;
}
.back-button{
  border: #0E3970;
  position: absolute;
  left: 15px;
  margin: 5.5px;
  border-radius: 15px;
  padding-bottom: 20px;

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
.inp{
  background-color: #3f3f3f;
  color: #000000;
  font-family: monospace;
}
</style>
