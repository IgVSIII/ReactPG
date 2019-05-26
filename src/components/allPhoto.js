import React from 'react';
import { setAccessTokenUnplash, listPhoto } from '../lib/';
import SmallPhoto from './smallPhoto';


const AllPhoto = (props) => {
    

    const {state, loadPhoto, unlikePhoto, likePhoto} = props;
    const code = window.location.search.split('code=')[1];
    console.log(localStorage.getItem('token'))

   

    if (code && localStorage.getItem('token') === '' ) {
    
        setAccessTokenUnplash(code);               
                  
    }

    function getPhoto() {
        const array = listPhoto(2 + parseInt(localStorage.getItem('photoCounter')), 
        10 + parseInt(localStorage.getItem('photoCounter')), localStorage.getItem('token'));

        array.then(photos => loadPhoto(photos));

        localStorage.setItem('photoCounter', parseInt(localStorage.getItem('photoCounter'))+10);
    }

    if (state.length === 0) {
        setTimeout(getPhoto,1000);
    }



   const rowCol = Math.floor(state.length / 3);


    
                             
        return (
            <main>
                <section className="center"> 

                <section className="row">


                {state.map((photo, index) =>{
                    if (index < rowCol) {
                        return (
                            <SmallPhoto  photo = {photo} key={photo.id} likePhoto={likePhoto} unlikePhoto={unlikePhoto} />
                        ); 
                    }

                })}
                </section>

                <section className="row">


                {state.map((photo, index) =>{
                    if (rowCol <= index && index < 2*rowCol) {
                        return (
                            <SmallPhoto  photo = {photo} key={photo.id} likePhoto={likePhoto} unlikePhoto={unlikePhoto} />
                        ); 
                    }

                })}
                </section> 

                <section className="row">


                {state.map((photo, index) =>{
                    if (2*rowCol < index) {
                        return (
                            <SmallPhoto  photo = {photo} key={photo.id} likePhoto={likePhoto} unlikePhoto={unlikePhoto} />
                        ); 
                    }

                })}
                </section>               

                </section>
                
                
                <section className="newLoad">
                    <a href = "#" className="LoadButton" onClick={getPhoto}>Загрузить еще</a>
                </section>
                
            </main>
  
          
        )  
     
} 

export default AllPhoto;