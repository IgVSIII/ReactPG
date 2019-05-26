import React from 'react';
import { Link} from 'react-router-dom';

const NotFound = () => {

    return (
    <header>
        <div className="logon">
            <Link to="/"><small>Назад</small></Link>
        </div>
        <h2>Страница не найдена</h2>
    </header>        
    )
}

export default NotFound