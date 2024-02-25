import React,{useEffect, useState} from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts(){
    const [showProducts, setShowProducts] = useState(0);
    return (
        <div>
            {showProducts && <Products />}
            <button onClick = {() => setShowProducts((show) => !show)}>Toggle</button>
        </div>
    );
}