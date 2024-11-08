import React, { useId, useState } from "react";
import style from "../style.module.css"
import { Navigate, useNavigate, useParams, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import { useEffect } from "react";
import { jpAxios } from "../jpAxios";
import { efect , setUserService , updateUserService } from "../service/UserService";




const AddPosts = () => {

    const { userId } = useParams()
    const navigates = useNavigate()
    const [data, setData] = useState({
       title: "",
        body: "",
    })


    const handleaddUser = (e) => {
        e.preventDefault()
        if (!userId) {
            setUserService(data);
        } else {
            updateUserService(data, userId);
        }
    }

    useEffect(() => {
        efect(data, setData , userId);
    }, [])

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className={`${userId ? "text-warning" : "text-primary"} text-center text-primary`}>
                {userId ? "ویرایش پست" : "افزودن پست"}
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleaddUser} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className="form-label">عنوان</label>
                        <input type="text" className="form-control" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">متن</label>
                        <input type="text" className="form-control body_form" value={data.body} onChange={(e) => setData({ ...data, body: e.target.value })} />
                    </div>
                    <div className="col-12 text-start">
                        <button type="button" className="btn btn-danger ms-2" onClick={() => {
                            navigates("/Posts")
                        }}>بازگشت</button>
                        <button type="submit" className={`${userId ? "btn-warning" : "btn-primary"} btn btn-primary text-light`} >
                            {userId ? "ویرایش " : "افزودن "}
                        </button>
                    </div>
                </form>
            </div>
            {/* <Outlet/> */}
        </div>
    )



}
export default AddPosts;