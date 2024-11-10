import React from 'react';
import style from '../style.module.css'
import Parent from './Parent';
import useTitle from '../hooks/useTitle';

const Gallery = ()=>{
    useTitle("گالری ها")

    return (
        <Parent/>
    )

}

export default Gallery;