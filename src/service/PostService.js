import { jpAxios } from "../jpAxios";
import Swal from "sweetalert2";


export const getPostService = ()=>{
    return jpAxios.get('/posts')
}



export const efect = (data , setData , userId)=>{
    jpAxios.get(`/Posts/${userId}`,).then(res => {
        setData({
            title: res.data.title,
            body: res.data.body,
        })

    });
}
/*
export const setUserService = async (data) => {
    const res = await jpAxios.post(`/users`, data)
    if (res) {
        console.log(res);
        Swal.fire(`${res.data.name} با موفقیت ایجاد شد`, {
            icon: "success",
            buttons: "متوجه شدم",
        });
    }
}




export  const updateUserService = async (data , userId) => {
    const res = await jpAxios.put(`/users/${userId}`, data)
    if (res) {
        console.log(res);
        Swal.fire(`${res.data.name} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم",
        });
    }
}




export const efect = (data , setData , userId)=>{
    jpAxios.get(`/users/${userId}`,).then(res => {
        setData({
            name: res.data.name,
            username: res.data.username,
            email: res.data.email,
            address: {
                street: res.data.address.street,
                city: res.data.address.city,
                suite: res.data.address.suite,
                zipcode: res.data.address.zipcode
            }
        })

    });
}*/