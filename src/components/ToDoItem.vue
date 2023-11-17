<template>
    <div>
        <input :id="id" type="checkbox" :checked="IsDone"/>
        <label :for="id">{{ label }}</label>
    </div>
</template>
<script>
    import uniqueId from "lodash.uniqueid"
    export default{
        methods: {
            BookSelection: function(){}
        },
        props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean}
        },
        data(){
            return{
            IsDone: this.done,
            id: uniqueId("todo-")
            }
        }
    }

</script>