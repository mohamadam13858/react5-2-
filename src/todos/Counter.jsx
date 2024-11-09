import React, { useReducer } from "react";

const init = 0


const reducer = (state, action) => {
if(action == "mohamad") return state + 1
if(action == "mohamadd") return state - 1
if(action == 'mohamaddd') return init
}


const Counter = () => {


    const [count, Dispatch] = useReducer(reducer, init)

    return (
        <div className=" text-center my-3">
            <h1 className=" text-center">{count}</h1>
            <button className=" btn btn-success" onClick={()=>Dispatch('mohamad')}>افزایش</button>
            <button className=" btn btn-danger"onClick={()=>Dispatch('mohamadd')}>کاهش</button>
            <button className=" btn btn-warning"onClick={()=>Dispatch('mohamaddd')}>ریست</button>
        </div>
    )

}

export default Counter;