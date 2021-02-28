import React, { useContext, useState } from 'react';
import { ServiceContext } from '../../context/ServiceContext';
import './Header.css'

export const Header = ()=>{
    const { search, handleInputChange, searchFunction} = useContext(ServiceContext)
    const [animate,setAnimate] = useState('');
    const searchFocus=()=>{
        document.getElementById('search').focus();
    }
    return(
        <div className="header-container">
            <p className="label">Usuario:</p>
            <div 
                className={`busqueda ${animate}`}
                onClick={searchFocus}
            >
                <div 
                    onClick={searchFunction}
                    className="image"
                ></div>
                <input 
                    onKeyUp={searchFunction}
                    id="search"
                    name='search'
                    type="text" 
                    className="input-control"
                    onFocus={()=>{return setAnimate('input-animate')}}
                    onBlur={()=>{
                        if(search !== ''){
                            return
                        }
                        return setAnimate('')
                    }}
                    onChange={handleInputChange}
                    value={search}
                />
            </div>
        </div>
    );
}