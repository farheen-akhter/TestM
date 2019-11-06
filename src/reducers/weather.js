
export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_WEATHER':
        let arr = [...state];
        arr.push(action.payload)
        return arr;
        default:
        return state;
    }
};