import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export const store = new Vuex.Store({
    state : {
        todos : [], 
        newTask : ''
    }, 
    getters : {
        getTodos(state) {
            return state.todos;
        }, 
        getNewTask(state){
            return state.newTask;
        }
    }, 
    mutations : {
        addTodo(state){

            let newToDo = {
                id : Date.now(),
                task : state.newTask, 
                completed : false
            }

            state.todos.push(newToDo);

            state.newTask = '';
        }, 
        updateNewTask(state, payload){

            state.newTask = payload;

        }, 
        toggleCompletion(state, payload){
            let index = state.todos.findIndex(item => item.id == payload);

            state.todos[index].completed = !state.todos[index].completed
        }
    }, 
    actions : {
        addToDo({commit}){
            commit('addTodo');
        }, 
        updateNewTask({commit}, payload){
            commit('updateNewTask', payload);
        }, 
        toggleCompletion({commit}, payload){
            commit('toggleCompletion', payload);
        }
    }
});