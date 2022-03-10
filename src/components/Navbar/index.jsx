import React from 'react';
import './styles.css';
import {ReactComponent as Pokeball} from '../../assets/pokeball.svg';
export default function NavBar(){
    return(
        <nav className='navbar'>
            <Pokeball/>
            <p className='nav-title'>PokéTrade</p>
        </nav>
    )
}