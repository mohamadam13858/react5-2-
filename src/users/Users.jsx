import React, { useState } from 'react';
import style from '../style.module.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useEffect } from 'react';
import { jpAxios } from '../jpAxios';
import WithAlert from '../HOC/WithAlert';
import { Confirm , Alert } from '../utils/Alert';

const Users = (props) => {
    const navigate = useNavigate()
    const params = useLocation()
    const [user, setUser] = useState([])
    const [mainUser, setMainUser] = useState([])
   // const { Confirm, Alert } = props


    useEffect(() => {
        jpAxios.get('/users').then(res => {
            setUser(res.data)
            setMainUser(res.data)

        }).catch(err => {


        })
    }, []);


    const handleSearch = (e) => {
        setUser(mainUser.filter(u => u.name.includes(e.target.value)))
        console.log(e.target.value);
    }


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


    const handleDelete = async (itemId) => {
        if (await Confirm(`شما رکورد ${itemId} حذف کردید`)) {

            jpAxios.delete(`/users/${itemId}`).then(res => {

                if (res.status == 200) {
                    const newUser = user.filter(u => u.id != itemId)
                    setUser(newUser)
                    Alert("حذف باموفقیت انجام شد", "success")
                } else {
                    Alert("عملیات با خطا مواجه شد", "error")
                }

            })

        } else {
            Alert("شما منصرف شدید", "info")
        }
    };


    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">  کاربران</h4>
            <div className=' row my-2 mb-4 justify-content-between w-100 mx-0'>
                <div className=' form-group col-10 col-md-6  col-lg-4 '>
                    <input type="text" className=' shadow  form-control' placeholder='جستجو' onChange={handleSearch} />
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
                                        onClick={() => navigate(`/User/AddUser/${u.id}`)} ></i>

                                    <i className="fas fa-trash text-danger mx-2 pointer" onClick={() => handleDelete(u.id)}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            )

                :

                (
                    <>
                        <h4 className=' text-center text-info'>لطفا صبر کنید</h4>
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </>
                )

            }
        </div>
    )

}

export default Users;