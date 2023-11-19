<template>
    <div>HOMIE</div>
    <div class="form">
        Enter your date/time of travel :
        <input type="datetime-local" id="stime" name="meeting-time" :min="mini" :max="maxi" /><br>
        Enter number of passengers :
        <input type="number" id="passengers" min="1" max="3" placeholder="1-3">
    </div>
    <div class="next-button">
          <button class="button" @click="Next">Next</button>
    </div>
</template>
<script>
//import { router } from '../router.js';

export default {
    name: 'HomePage',
    methods: {
        Next: function(){
            this.$router.push('/shuttle')
        }
    },
    data() {
        Date.prototype.addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        var t = new Date();
        var mi = t.toISOString().split('.')[0].slice(0, 16);
        var ma = t.addDays(3).toISOString().split('.')[0].slice(0, 16);
        console.log(mi);
        console.log(ma);
        console.log(document.getElementById('meeting-time'))
        return {
            mini: mi,
            maxi: ma
        }
    }
}
</script>
<style>
.form {
    font-family: Consolas;

}
.next-button{
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 50px;
  }
  .button{
      width: 100px;
      height: 50px;
      border-radius: 15px;
      border: 3px solid #0e0101;
      margin: 5.5px;
  }
  .button:hover{
      width: 100px;
      height: 50px;
      border-radius: 15px;
      background: #0e0101;
      color: #f3f3f3;
      margin: 5.5px;
  }
</style>