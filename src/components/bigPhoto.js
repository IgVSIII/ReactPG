import React from 'react';
import { Link } from 'react-router-dom';


const BigPhoto = (props) => {
    const seacrhPhoto = props.match.params.number;
    console.log(seacrhPhoto);
    const {state} = props;
    let photo;

    for (var i = 0 ; i < state.length; i++) {
        if (state[i].id === seacrhPhoto ) {photo = state[i]}
    }


    if (photo === undefined) {
        return (
            <div>
            <section className="backSection">
                <Link to="/main">Назад</Link>
            </section>  
            <main>
                <section className="center"> 
                    <section className="bigImage">
                        <h2>Фото не найдено</h2>
                    </section>
                </section>
            </main>  
        </div>             
        );
    } else {

    
    return (
    <div>
        <section className="backSection">
            <Link to="/main">Назад</Link>
        </section>  
        <main>
            <section className="center"> 
                <section className="bigImage">
                    <aside>
                        Автор: <a href={photo.user.links.html} target="_blank" > {photo.user.name} </a>
                        <span></span>Дата публикации: <span> {photo.created_at} </span>
                    </aside>
                    <section>
                        <img src ={photo.urls.full}  width={document.documentElement.clientWidth}/> 
                    </section>
                </section>
            </section>
        </main>  
    </div>      
    );
    }
} 

export default BigPhoto