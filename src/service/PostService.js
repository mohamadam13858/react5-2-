import { jpAxios } from "../jpAxios";
import Swal from "sweetalert2";


export const getPostService = () => {
    return jpAxios.get('/posts')
}



export const efect = (data, setData, Postid) => {
    jpAxios.get(`/Posts/${Postid}`,).then(res => {
        setData(res.data)

    });
}

export const setPostservice = async (data, Postid) => {
    const res = await jpAxios.post(`/posts`, data)
    if (res) {
        Swal.fire(`${res.data.title} با موفقیت ایجاد شد`, {
            icon: "success",
            buttons: "متوجه شدم",
        });
    }

console.log(res);

}


export const updatePostservice = async (data, Postid) => {

    const res = await jpAxios.put(`/posts/${Postid}`, data)
    if (res) {
        Swal.fire(`${res.data.title} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم",
        });
    }

console.log(res);



}
