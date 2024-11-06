import React from "react";
import Swal from "sweetalert2";


 export const Confirm = (message) => {
    return Swal.fire({
        title: "حذف رکورد !",
        text: message,
        icon: "warning",
        buttons: ["خیر", "بله"],
        dangerMode: true,
    })
}
export  const Alert = (message, icon) => {
    return Swal.fire(message, {
        icon: icon,
        buttons: "متوجه شدم",
    });
}
