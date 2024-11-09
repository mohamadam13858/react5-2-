import React, { useReducer } from "react";

const init = {
    value: 0,
    value1: 5
}


const reducer = (state, action) => {
    switch (action.type) {
        case "mohamad":
            return { ...state, value: state.value + action.val }
        case "mohamadd":
            return {...state , value: state.value - action.val}
        case "mohamad1":
            return {...state , value1:state.value1  + action.val }
        case "mohamadd1":
            return {...state , value1:state.value1  - action.val }
        case "mohamaddd":
            return init
        default:
            return state
    }
}


const Counter = () => {


    const [count, Dispatch] = useReducer(reducer, init)

    return (
        <div className=" text-center my-3">
            <h1 className=" text-center">{count.value}</h1>
            <h1 className=" text-center">{count.value1}</h1>
            <div className="text-center my-3">
                <button className=" btn btn-success" onClick={() => Dispatch({ type: 'mohamad' ,val: 1 })}>افزایش</button>
                <button className=" btn btn-danger" onClick={() => Dispatch({ type: 'mohamadd', val: 2 })}>کاهش</button>
            </div>


            <div className=" text-center my-3">
                <button className=" btn btn-success" onClick={() => Dispatch({ type: 'mohamad1' , val: 5 })}>افزایش1</button>
                <button className=" btn btn-danger" onClick={() => Dispatch({ type: 'mohamadd1' , val: 5})}>1کاهش</button>
            </div>
            <button className=" btn btn-warning" onClick={() => Dispatch({ type: 'mohamaddd' })}>ریست</button>
        </div>
    )

}

export default Counter;