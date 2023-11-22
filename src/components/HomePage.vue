<template>
    <div style="height: 100px; background-color: #1a1919;"></div>
    <div class="form" style="background-color: #1a1919;">
        <label for="stime" class="label">Enter your date/time of travel : </label>
        <input type="datetime-local" id="stime" name="stime" :min="mini" :max="maxi" class="inp"/><br>
        <label for="passengers" class="label">Enter number of passengers : </label>
        <input type="number" id="passengers" min="1" max="3" value=1 class="inp"><br>
        <label for="sline" class="label">Enter source and destination : </label>
        <select id="sline" name="sline" class="inp">
            <option value="aTOj">Ashoka to Jahangirpuri</option>
            <option value="jTOa">Jahangirpuri to Ashoka</option>
            <option value="aTOp">Ashoka to Parker/TDI</option>
            <option value="pTOa">Parker/TDI to Ashoka</option>
        </select>
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
            var stime_val = document.getElementById('stime').value;
            var pass_val = document.getElementById('passengers').value;
            var t1 = new Date(stime_val);
            var t2 = new Date();
            console.log(t1, t2, t1<t2)
            if( t1 > t2 & pass_val <= 3){
                this.$router.push({
                path: '/shuttle', 
                query: {
                    time: stime_val, 
                    passengers: document.getElementById('passengers').value,
                    line: document.getElementById('sline').value
                }
            })
            }
            else if(t1 < t2){
                window.alert('nah bitch change time');
            }
            else if( pass_val > 3){
                window.alert('nah bitch max 3 passengers');
            }
            
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
    margin: 5.5px;
  }
.button{
    width: 100px;
    height: 50px;
    border-radius: 15px;
    border: 3px solid #0E3970;
    margin: 5.5px;
}
.button:hover{
    width: 100px;
    height: 50px;
    border-radius: 15px;
    border: #1a1919;
    background: #0E3970;
    color: #f3f3f3;
    margin: 5.5px;
}
.inp{
    color: #1a1919;
    font-family: monospace;
    font-size: large;
}
.label{
    color: #f3f3f3;
    font-family: monospace;
    font-size: larger;
}
</style>