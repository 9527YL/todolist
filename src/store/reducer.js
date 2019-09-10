const defaultState= {
    inputValue :"write Something",
    unDone : {
        checked:'',
        name:'unDone',
        display:'none',
        list:[

        ] 
    },
    Done : {
        checked:'true',
        name:'done',
        display: 'none',
        list:[
        ]
    }
   
}


export default (state = defaultState, action)=>{
    //console.log(action);
    // Reducer 中只能够接受state ， 不能改变state
    if(action.type === 'changInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        console.log(action.value)
        console.log(newState.inputValue)
        return newState;
    }
    if(action.type === 'addItem'){
        if(state.inputValue !== ''){
            let newState = JSON.parse(JSON.stringify(state))
            newState.unDone.list.push(newState.inputValue);
            newState.inputValue = '';
            if(newState.unDone.list.length !== 0){
                newState.unDone.display = 'block'
            }
            return newState;
        }
    }
    if(action.type === 'deleItem'){
        if(action.name === 'unDone'){
            let newState = JSON.parse(JSON.stringify(state))
            newState.unDone.list.splice(action.index,1);
            if(newState.unDone.list.length == 0){
                newState.unDone.display = 'none'
            }
            return newState;
        }
        let newState = JSON.parse(JSON.stringify(state))
        console.log(action);
        newState.Done.list.splice(action.index,1);
        if(newState.Done.list.length == 0){
            newState.Done.display = 'none'
        }
        return newState;
    }

    if(action.type === 'toUndone'){
        console.log(action)
        let newState = JSON.parse(JSON.stringify(state))
        newState.unDone.list.splice(action.index,1);
        newState.Done.list.push(action.ele)
        newState.Done.display = 'block'
        if(newState.unDone.list.length == 0){
            newState.unDone.display = 'none'
        }
        return newState;
    }
    if(action.type === 'toDone'){
        console.log(action)
        let newState = JSON.parse(JSON.stringify(state))
        newState.Done.list.splice(action.index,1);
        newState.unDone.list.push(action.ele)
        newState.unDone.display = 'block'
        if(newState.Done.list.length == 0){
            newState.Done.display = 'none'
        }
        return newState;
    }
    return state;
}