const redux=required("redux");


// Actions
const ADD_TODO="Add TODO";
const TOGGLE_TODO="Toggle TODO"

//ACTION CREATORS

const addToDo =(text)=>({text, type:ADD_TODO});
const toggleToDo=(index)=>({index,type:TOGGLE_TODO});

//Initial State
const initialState={
    todos:[],
}


//Reducers
//must return updated state.

function todoReducer(state=initialState,action){

    switch(action.type){
        case ADD_TODO:
                return {
                    ...state,
                    todos:[
                        ...state.todos,
                        {
                            text: action.text,
                            completed:false
                        }
                    ]
                }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: todos.map((todo,index)=>{
                        if(index == action.index){
                            todo.completed=!todo.completed;
                        }
                        return todo;
                })
            }
        default:
            return state;    
    }

}