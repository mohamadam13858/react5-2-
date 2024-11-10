import React, { memo } from "react";



const Title = (props)=>{


return(
    <h3 className=" text-center text-success mt-5">
        {props.title}

    </h3>
)


}
export default memo(Title)