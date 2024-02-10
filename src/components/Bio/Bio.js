import React from 'react';
import moi from '../../assets/moi.png';
import './Bio.css';

function Bio() {
    return (
        <div className='bio'>
            <img className='moi' src= {moi}/>
            <h1 className='name'>Sirine Yakhou</h1>
        </div>
    )
}

export default Bio;