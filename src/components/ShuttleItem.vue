<template>
    <div :id="id" class="item" @click="select">
        <div class="container">
            <div align="left">
                {{ hrs }}
                {{ mins }}
                {{ mer }}
            </div>
            <div align="left">
                {{ sorc }}
            </div>
            <div align="right">
                {{ dst }}
            </div>
            <div align="center">
                {{ available_seats }}
            </div>
        </div>
    </div>
</template>
<script>
    import uniqueId from 'lodash.uniqueid';

    export default{
        methods:{
            select: function(){
                console.log(this.id);
                this.s  = !this.s;
                if(this.s){
                    document.getElementById(this.id).style.background='#D22B2B';
                    document.getElementById(this.id).style.color='white';
                }
                else{
                    document.getElementById(this.id).style.background='white';
                    document.getElementById(this.id).style.color='#000000';
                }
                
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
            return{
                state:state,
                hrs:hrs%12,
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
    width: 200px;
    border: 3px solid #D22B2B;
    border-radius: 25px;
    padding: 20px;
    margin: 5.5px;
}
.item:hover{
    width: 200px;
    background-color: #D22B2B;
    border-radius: 25px;
    padding: 20px;
    color: #f3f3f3;
    margin: 5.5px;
}
</style>