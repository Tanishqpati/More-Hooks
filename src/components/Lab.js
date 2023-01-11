import React, {useReducer}  from 'react'

const initialState = {
  state:true,
  list:[]
};
const reducer = (state, action)=>{
switch(action.type){
  case 'push' :
    return [...state, initialState.input]
}
}
// abc=(e)=>{
//   initialState.input= e.target.value
// }


function Lab() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (

    <div>
      <input type="text" value={initialState.input} onChange={()=>abc()}/>
      <button onClick={()=>{dispatch({type:'push'})}}>+</button>
      {initialState.list}
    </div>
  )
}

export default Lab