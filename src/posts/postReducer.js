




export const init = {
    PostData: {
        userid: "",
        id: "",
        title: "",
        body: ""
    },
    users: []
}


export const reducer = (state, action) => {
    switch (action.type) {
        case "changeUser":
            return {...state , users: action.payload}
        case "isUpdate":
            return {...state , PostData: action.payload}
        case "setinputvalue":
            return {...state , PostData:{
                ...state.PostData , 
                [action.propName] : action.propValue
            }}


        default:
            return state
    }
}