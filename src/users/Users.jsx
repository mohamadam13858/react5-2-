import React, { useState } from 'react';
import style from '../style.module.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useEffect } from 'react';

const Users = () => {
    const navigate = useNavigate()
    const params = useLocation()
    const [user, setUser] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUser(res.data)

        }).catch(err => {


        })
    }, []);


    /*const am = (id)=>{
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
    
    const ma = async (id)=>{
        const res = await am(id);
        console.log(res.data);
    
    
    
        console.log(id);
        
        
    }
    
    for( const mm of [1,2,3,4,5,6]){
        ma(mm)
    }
    */


    const handleDelete = (itemId) => {
        Swal.fire({
            title: "حذف رکورد",
            text: ` ایا از حذف رکورد ${itemId} اطمینان دارید  `,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`https://jsonplaceholder.typicode.com/users/${itemId}`).then(res => {

                    if (res.status == 200) {
                        const newUser = user.filter(u => u.id != itemId)
                        setUser(newUser)
                        Swal.fire({
                            title: "Deleted!",
                            text: "حذف با موفقیت انجام شد",
                            icon: "success"
                        });
                    } else {
                        Swal("عملیات با خطا مواجه شد", {
                            icon: "error",
                            button: "متوجه شدم"
                        })
                    }

                })

            }
        });
    }

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
            {user.length ? (
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
                        {user.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>
                                    <i className="fas fa-edit text-warning mx-2 pointer"
                                        onClick={() =>navigate(`/User/AddUser/${u.id}`)} ></i>

                                    <i className="fas fa-trash text-danger mx-2 pointer" onClick={() => handleDelete(u.id)}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            )

                :

                (
                    <h4 className=' text-center text-info'>لطفا صبر کنید</h4>

                )

            }
        </div>
    )

}

export default Users;