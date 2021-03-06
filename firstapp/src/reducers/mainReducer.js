const mainReducer = (state=[],action)=>{ 
    if(action.type === 'ADD_INPUT'){ 
        return state=[...state , action.value];
    } 
    if(action.type === 'REMOVE_INPUT'){ 
        return state.filter(el=>el.id!==action.id);
    } 
    else return state ; 
} 

export default mainReducer ;