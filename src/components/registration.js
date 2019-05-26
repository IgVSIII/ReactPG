import React from 'react';
import { authenticationUrl } from '../lib/';


const Registration = (props) => { 
    //const {state} = props;
    localStorage.setItem('photoCounter', 0);
    localStorage.setItem('token', '');

    const getTokken = (ev) => {
        ev.preventDefault();
        document.location.assign(authenticationUrl);
    }

    return (
    <section className="backImg">
        <main>
            <section className="allCenter">
                <section className="registration">                   
                    <a href="#" className="glo" onClick = { (ev)=> {getTokken(ev)}}>Авторизоваться</a>
                </section>
            </section>               
        </main>
    </section>
    )
}

export default Registration