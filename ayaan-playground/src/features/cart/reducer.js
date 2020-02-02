import  React from 'react';
const cartReducder =(state=[],action) =>{
switch(action.type){
    case 'ADD':
        return [...state, action.payload]
    case 'REMOVE':
        const firstMatchIndex = state.indexOf(action.payload);
        return state.filter((item,index)=> index !== firstMatchIndex)
    default:
        return state;
    }
}

export default cartReducder;