import React from 'react';
import style from '../style.module.css'
import Swal from 'sweetalert2';
import Counter from './Counter';

const Todos = ()=>{
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">  مدیریت کار ها</h4>

            <Counter/>
        </div>
    
    )

}

export default Todos;