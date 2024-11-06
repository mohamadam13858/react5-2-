import React from "react";
import Swal from "sweetalert2";


const WithAlert2 = (props)=>{

    const Confirm = (message) => {
        return Swal.fire({
            title: "حذف رکورد !",
            text: message,
            icon: "warning",
            buttons: ["خیر", "بله"],
            dangerMode: true,
        })
    }
    const Alert = (message, icon) => {
        return Swal.fire(message, {
            icon: icon,
            buttons: "متوجه شدم",
        });
    }

    return(
        <>
        
        {props.children(Confirm , Alert)}
        </>
    )


}
export default WithAlert2;