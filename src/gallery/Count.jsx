import React, { memo } from "react";

const Count = (props) => {
    return(
        <div className='text-center mt-3'>
        <span>{props.title + " : " +props.count}</span>
    </div>
    )
}
export default memo(Count)