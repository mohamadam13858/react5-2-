import React from 'react';
import style from '../style.module.css'
import Swal from 'sweetalert2';

const Todos = ()=>{
    const handleDelete = (itemId) => {
        Swal.fire({
            title: "حذف رکورد",
            text: ` ایا از حذف رکورد ${itemId}اطمینان دارید `,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "حذف با موفقیت انجام شد",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">  مدیریت کار ها</h4>
            <div className=' row my-2 mb-4 justify-content-between w-100 mx-0'>
                <div className=' form-group col-10 col-md-6  col-lg-4 '>
                    <input type="text" className=' shadow  form-control' placeholder='جستجو' />
                </div>
                <div className=' col-2 text-start px-0'>
                    <button className=' btn btn-success'>
                        <i className="fa fa-plus text-light"></i>
                    </button>
                </div>
            </div>
            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>mohamad</td>
                        <td>mohamadhbi</td>
                        <td>mh711748@gmail.com</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-2 pointer"></i>
                            <i className="fas fa-trash text-danger mx-2 pointer"onClick={() => handleDelete(1)}></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Todos;