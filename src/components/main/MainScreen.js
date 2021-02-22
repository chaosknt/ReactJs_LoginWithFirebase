import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

const MainScreen = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout() );
    }


    return (
        <div>
            <h1>Main Screen </h1>
            <hr />
            <button className="btn btn-primary" onClick={ handleLogout }>
                  Logout
              </button>

        </div>
    )
}

export default MainScreen
