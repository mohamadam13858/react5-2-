import React from "react"
import Swal from "sweetalert2"


const WithAlert = (MainComponent) => {

    const newComponent = (props) => {


        const Confirm = (massage) => {
            return (
                Swal.fire({
                    title: "حذف رکورد",
                    text: massage,
                    icon: "warning",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "بله",
                    cancelButtonText: "خیر",
                    showLoaderOnConfirm: true,
                    closeOnConfirm: false
                    
                })
            )
        }


        const Alert = (massage, icon) => {
            return (
                Swal.fire(massage, {
                    icon : icon,
                    buttons: "متوجه شدم",
                })
            )
        }
        return (
            <MainComponent {...props} Confirm={Confirm} Alert={Alert}/>
        )
    }


return(newComponent)

}
export default WithAlert;





