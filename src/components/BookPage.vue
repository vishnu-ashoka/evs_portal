<template>
    <header style="padding: 8px;">
        <div style="max-width: 200px;"><img src="../assets/logo.png" style="width:100%"></div>
        <div align="center"><h1 style="font-family: monospace; color: #f3f3f3;">Ashoka Shuttle Booking</h1></div>
        <div style="width: 200px;"></div>
    </header>
    <p style="color: aliceblue;">
    <!-- Booked the (2 seats) for the (9:00 AM) shuttle on (2023-11-5) under {{ this.$route.query.eid }} -->
    Booked the (1 seats) for the (9:30 AM) shuttle on (2023-11-5) under {{ this.$route.query.eid }} <br> and registered interest for 1
    
    </p>
    <div class="back-button">
        <br><br><br>
        <button class="button" @click="Back">Home</button>
    </div>
</template>
<script>
export default {
    name: "book-page",
    components: {},
    methods:{
            Back: function(){
                    this.$router.push({
                    path:"/"
                })
            },
        }
}
</script>
<style>
.back-button{
    bottom: 0;
}
.button{
    bottom: 0;
}
</style>