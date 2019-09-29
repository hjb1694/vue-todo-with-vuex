<template>
    <form class="newForm">
        <div class="form-group">
            <input type="text" v-model="newTask" placeholder="Add New Item"/>
        </div>
        <button @click.prevent="addToDoItem">add</button>
    </form>
</template>

<script>
export default {
    name : 'form', 
    methods : {
        addToDoItem(){
            if(this.newTask.length > 2){
            this.$store.dispatch('addToDo');
            } else {
                alert('Please add a valid todo item');
            }
        }
    }, 
    computed : {
        newTask : {
            get(){
                return this.$store.getters.getNewTask;
            }, 
            set(newTask){
                this.$store.dispatch('updateNewTask', newTask)
            }
        }
    }
}
</script>

<style scoped>
    label{
        display:block;
        font-size:1.4rem;
    }
    input{
        display:block;
        width:100%;
        font-size:1.6rem;
        padding:.8rem 1rem;
        border:0;
        box-shadow:0 0 1rem rgba(0,0,0,.2);
        outline:none;
    }

    input::placeholder{
        color:#aaa;
    }

    .form-group{
        margin:1rem 0;
    }

    button{
        border:0;
        background:#fc3fb4;
        color:#fff;
        padding:.8rem 1rem;
        display:block;
        margin:auto;
        cursor:pointer;
        font-size:2rem;
        font-family:inherit;
        box-shadow:0 0 .5rem rgba(0,0,0,.25);
        transition:.3s transform;
    }

    button:hover{
        transform:translateY(-2px);
    }

    button:active{
        transform:translateY(-1px);
    }

    .newForm{
        border-bottom:1px solid #ccc;
        padding:1rem 0;
    }
</style>