import React from 'react';
import {useSelector} from 'react-redux';




const Comfeco = () => {

    const {displayName} = useSelector(state => state.auth)   

    return (
        <div>
            <h1>Hola {displayName}</h1>
        </div>
    )
}

export default Comfeco;
