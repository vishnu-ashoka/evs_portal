<template>
    <div :id="id" class="item" @click="select">
        <div id="tim" align="center">
            {{ hrs }}:{{ mins }}
            {{ mer }}
        </div>
        <div align="left">
            {{ sorc }}  &rarr;
        </div>
        <div align="right">
            &rarr; {{ dst }}
        </div>
        <div align="center">
            Available Seats: {{ available_seats }}
        </div>
    </div>
</template>
<script>
    import uniqueId from 'lodash.uniqueid';
    
    export default{
        methods:{
            select: function(){
                this.s  = !this.s;
                if(this.s){
                    document.getElementById(this.id).style.background='#D22B2B';
                    document.getElementById(this.id).style.color='white';
                }
                else{
                    document.getElementById(this.id).style.background='#272626';
                    document.getElementById(this.id).style.color='#f3f3f3;';
                }
                
            },
            deselect: function(){
                this.s = false;
                document.getElementById(this.id).style.background='#272626';
                document.getElementById(this.id).style.color='#f3f3f3';
            }
        },
        props:{
            time: { required: true, type: Number }, // 24 hr format, 4 digits, ex: 5:30 pm = 1730
            sorc: { required: true, type: String },
            dst: { required: true, type: String },
            available_seats: { default: 18 , type: Number },
            needed_seats: {required: true, type: Number},
            interested: {required:true, type: Number}
        },
        async created() {
            if(this.needed_seats > this.available_seats){
                setTimeout(() =>{ 
                    const t = document.getElementById(this.id); 
                    t.style.cssText='background-color: #5c5c5c ;border: 3px solid #D22B2B;height:78px';
                    t.innerHTML=this.hrs + ':' + this.mins + ' ' + this.mer + '<br> <a style="font-size: large"> Not enough seats</a> <br> Available Seats: '+ this.available_seats + '<br> Interested: '+ this.interested ;
                }, 10)
                // console.log(t, this.id);
            }
        },
        data(){
            var state = 'normal;'
            var hrs = ((this.time-this.time%100)/100);
            var mins = this.time%100;
            var mer;
            if(hrs >= 12){
                mer = "PM"
            }
            else{
                mer = "AM"
            }
            hrs = hrs%12;
            if (mins==0){mins="00"}
            if (hrs==0){hrs="12"}

            var id = uniqueId('shuttle-');
            return{
                state:state,
                hrs:hrs,
                mins:mins,
                mer:mer,
                id: id,
                s:false,
            }
        }
    }
</script>
<style>
.item{
    font-family: monospace;
    font-size: large;
    width: 200px;
    color:#f3f3f3;
    background-color: #272626;
    border: 3px solid #D22B2B;
    border-radius: 25px;
    padding: 20px;
    margin: 5.5px;
}
.item:hover{
    width: 200px !important;
    background-color: #D22B2B !important;
    border-radius: 25px !important;
    padding: 20px !important;
    margin: 5.5px !important;
}
</style>