import React from 'react';
import {  Link } from 'react-router-dom';
import { likePhotoLib, unlikePhotoLib } from '../lib';

const SmallPhoto = (props) => {
    const {photo, likePhoto, unlikePhoto} = props;
    //console.log(props);

    function switchLikePhoto(photo) {
        
        if (!photo.liked_by_user) {
            likePhotoLib(photo.id, localStorage.getItem('token'));
            likePhoto(photo.id);
        } else {
            unlikePhotoLib(photo.id, localStorage.getItem('token'));
            unlikePhoto(photo.id);
        }
    }

    return (
        <article className="smallPhoto">
            <section>
                <Link to={"/main/photo/" + photo.id}><img src ={photo.urls.small} width="300" /></Link>
            </section>
            <footer>
                <span><button className={!photo.liked_by_user ? "likeButton": "likeButton2"} onClick = {ev => {switchLikePhoto(photo)}}></button>{photo.likes}</span>
            </footer>
        </article>
        );   
}

export default SmallPhoto