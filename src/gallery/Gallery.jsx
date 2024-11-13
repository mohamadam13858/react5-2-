import React, { useEffect, useState } from 'react';
import style from '../style.module.css'
import useTitle from '../hooks/useTitle';
import { getGalleryService } from '../service/galleryService';
import axios from 'axios';
import { jpAxios } from '../jpAxios';

const Gallery = () => {
    useTitle("گالری ها")

    const [albums, setAlbums] = useState([]);
    useEffect(() => {

        jpAxios.get(`/albums`).then(res => {
            setAlbums(res.data)
        })
    }, []);
    return (


        <div className=' container mt-5'>
            <h2 className=' mb-4 justify-content-center align-items-center d-flex'>البوم</h2>
            <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>آی دی کاربر</th>
                        <th>عنوان</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <tr key={album.id}>
                            <td>{album.id}</td>
                            <td className='text-primary'>{album.userId}</td>
                            <td style={{ cursor: "pointer" }} className=' title_albums'>{album.title}</td>
                            <td>
                                <i className="fas fa-edit text-warning mx-2 pointer"></i>

                                <i className="fas fa-trash text-danger mx-2 pointer"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )

}

export default Gallery;