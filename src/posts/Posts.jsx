import React, { useEffect, useState } from 'react';
import style from '../style.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { getPostService } from '../service/PostService';




const Posts = () => {
    const [mnPost, setMnPost] = useState([])


    const [uId, setUId] = useState([])


    const [post, setPost] = useState([])


    const navigate = useNavigate()

    const handleSearch = ()=>{
        if(uId > 0) setPost(mnPost.filter(p=>p.userId == uId))
        else setPost(mnPost)
    }

    const handleDelete = (postid) => {

    }
    const getposts = async () => {
        const res = await getPostService();
        setPost(res.data)
        setMnPost(res.data)
    }
    

    useEffect(() => {
        getposts();
    }, []);


    useEffect(() => {

        handleSearch();

    }, [uId]);





    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">  مدیریت پست ها</h4>
            <div className=' row my-2 mb-4 justify-content-between w-100 mx-0'>
                <div className=' form-group col-10 col-md-6  col-lg-4 '>
                <input type="number" className="form-control shadow" placeholder="جستجو" value={uId} onChange={(e)=>setUId(e.target.value)}/>
                </div>
                <div className=' col-2 text-start px-0'>
                    <Link to="/Posts/AddPosts">
                        <button className=' btn btn-success'>
                            <i className="fa fa-plus text-light"></i>
                        </button>
                    </Link>
                </div>
            </div>
            {post.length ? (
                <table className="table bg-light shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>آی دی کاربر</th>
                            <th>عنوان</th>
                            <th>متن</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td className='text-primary' style={{cursor:"pointer"}} onClick={()=>setUId(u.userId)}>{u.userId}</td>
                                <td>{u.title}</td>
                                <td>{u.body}</td>
                                <td>
                                    <i className="fas fa-edit text-warning mx-2 pointer"
                                        onClick={() => navigate(`/Posts/AddUser/${u.id}`)} ></i>

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

export default Posts;