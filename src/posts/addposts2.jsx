import React, { useId, useReducer, useState } from "react";
import style from "../style.module.css"
import { Navigate, useNavigate, useParams, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";
import { useEffect } from "react";
import { jpAxios } from "../jpAxios";
import { setPostservice, efect, updatePostservice } from "../service/PostService";
import { init , reducer } from "./postReducer";



const AddPosts = () => {

    const { Postid } = useParams()
    const navigates = useNavigate()
    const [data , disptch] = useReducer(reducer , init)


    const handleaddUser = (e) => {
        e.preventDefault()
        if (!Postid) {
            setPostservice(data.PostData);
        } else {
            updatePostservice(data.PostData, Postid);
        }
    }
    const setinputvalue = (e , propName)=>{
     disptch({
        type:"setinputvalue",
        propName : propName,
        propValue: e.target.value
     })
    }
    /*
        useEffect(() => {
            efect(data, setData , Postid);
        }, [])*/
    useEffect(() => {
        jpAxios.get(`/users`).then(res => (
            disptch({
                type:"changeUser",
                payload:res.data
            })
        )).catch(err => (
            console.log(err)
        ))
        if (Postid) {
            jpAxios.get(`/Posts/${Postid}`).then(res => (
             disptch({
                type:"isUpdate",
                payload:res.data
             })
            ))
        }
    }, [])

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className={`${Postid ? "text-warning" : "text-primary"} text-center text-primary`}>
                {Postid ? "ویرایش پست" : "افزودن پست"}
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleaddUser} className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className="mb-3">
                        <label className=" form-label">کاربر</label>
                        <select className=" form-control" value={data.PostData.userId} onChange={(e) => setinputvalue(e , "userId")}>
                            <option value="">کاربر مورد نظر را انتخاب گنید</option>
                            {data.users.map(u => (
                                <option key={u.id} value={u.id}>{u.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className=" mb-3">
                        <label className=" form-label">ای دی کاربر</label>
                        <input type="text" value={data.PostData.userId} className="form-control" onChange={(e) => setinputvalue(e , "userId")} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">عنوان</label>
                        <input type="text" className="form-control" value={data.PostData.title} onChange={(e) => setinputvalue(e , "title")} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">متن اصلی</label>
                        <textarea rows={5} type='email' className=" form-control" value={data.PostData.body} onChange={(e) => setinputvalue(e , "body")}></textarea>
                    </div>
                    <div className="col-12 text-start">
                        <button type="button" className="btn btn-danger ms-2" onClick={() => {
                            navigates("/Posts")
                        }}>بازگشت</button>
                        <button type="submit" className={`${Postid ? "btn-warning" : "btn-primary"} btn btn-primary text-light`} >
                            {Postid ? "ویرایش " : "افزودن "}
                        </button>
                    </div>
                </form>
            </div>
            {/* <Outlet/> */}
        </div>
    )



}
export default AddPosts;