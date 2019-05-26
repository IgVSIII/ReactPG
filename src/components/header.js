import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {

    return (
    <header>
        <div className="logon">
            <Link to="/"><small>Выйти</small></Link>
        </div>
    </header>        
    )
}

export default Header