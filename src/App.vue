<template>
  <h1>Shuttle Booking</h1>
  
  <shuttle-item :time=1730 sorc="Ashoka" dst="Jahangirpuri"></shuttle-item>
  <shuttle-item :time=1030 sorc="Ashoka" dst="Jahangirpuri"></shuttle-item>
  <div class="book-button">
        <button class="button" @click="BookSelection">Book</button>
  </div>
</template>

<script>
import uniqueId from "lodash.uniqueid";
import ShuttleItem from "./components/ShuttleItem.vue"
export default {
  name: "app",
  components: {
    ShuttleItem
  },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId("todo-"), label: "Learn Vue", done: false },
        {
          id: uniqueId("todo-"),
          label: "Create a Vue project with the CLI",
          done: true,
        },
        { id: uniqueId("todo-"), label: "Have fun", done: true },
        { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.book-button{
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 5.5px;
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
