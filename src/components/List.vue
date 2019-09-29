<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <div :class="{complete : todo.completed}">{{todo.task}}</div>
            <input type="checkbox" @click="toggleCompletion(todo.id)"/>
        </li>
    </ul>
</template>

<script>
export default {
    computed : {
        todos(){
            return this.$store.getters.getTodos;
        }
    }, 
    methods : {
        toggleCompletion(id){
            this.$store.dispatch('toggleCompletion', id);
        }
    }
}
</script>

<style scoped>
    ul{
        list-style:none;
    }

    li{
        font-size:1.4rem;
        display:block;
        padding:1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    li:not(:last-child){
        border-bottom:1px solid #ccc;
    }

    .complete{
        text-decoration:line-through;
    }
</style>