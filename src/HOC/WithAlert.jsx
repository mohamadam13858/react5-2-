import React, { useState } from 'react';
import Swal from 'sweetalert2'
const WithAlert = (MainComponent) => {
    const NewComponent = (props) => {
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
        return (
            <MainComponent {...props} Confirm={Confirm} Alert={Alert} />
        )
    }
    return NewComponent
}
export default WithAlert





