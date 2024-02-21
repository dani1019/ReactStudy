import React from 'react';
import './App.css';

export default function Counter(){
    return (
        <div className='counter'>
            <span className='number'>0</span>
            <button className='button'>Add +</button>
            <Counter/>
        </div>  
    );
}