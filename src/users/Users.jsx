import React from 'react';
import style from '../style.module.css'
import { Link } from 'react-router-dom';

const Users = ()=>{

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
        <h4 className="text-center">  کاربران</h4>
        <div className=' row my-2 mb-4 justify-content-between w-100 mx-0'>
            <div className=' form-group col-10 col-md-6  col-lg-4 '>
                <input type="text" className=' shadow  form-control' placeholder='جستجو' />
            </div>
            <div className=' col-2 text-start px-0'>
                <Link to="/User/AddUser">
                <button className=' btn btn-success'>
                    <i className="fa fa-plus text-light"></i>
                </button>
                </Link>
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
                        <Link to="/User/AddUser/userId">
                        <i className="fas fa-edit text-warning mx-2 pointer"></i>
                        </Link>
                        <i className="fas fa-trash text-danger mx-2 pointer"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )

}

export default Users;