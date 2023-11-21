<template>
    <div :id="id" class="item" @click="select">
        <div class="container">
            <div align="left">
                {{ hrs }}:{{ mins }}
                {{ mer }}
            </div>
            <div align="left">
                {{ sorc }}
            </div>
            <div align="right">
                {{ dst }}
            </div>
            <div align="center">
                Available Seats: {{ available_seats }}
            </div>
        </div>
    </div>
</template>
<script>
    import uniqueId from 'lodash.uniqueid';

    export default{
        methods:{
            select: function(){
                console.log(this.$refs)
                console.log(this.id);
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
                document.getElementById(this.id).style.background='white';
                document.getElementById(this.id).style.color='#000000';
            }
        },
        props:{
            time: { required: true, type: Number }, // 24 hr format, 4 digits, ex: 5:30 pm = 1730
            sorc: { required: true, type: String },
            dst: { required: true, type: String },
            available_seats: { default: 18 , type: Number },
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
            return{
                state:state,
                hrs:hrs,
                mins:mins,
                mer:mer,
                id:uniqueId('shuttle-'),
                s:false
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
    color: #f3f3f3 !important;
    margin: 5.5px !important;
}
</style>