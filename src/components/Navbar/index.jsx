import React from 'react';
import './styles.css';
import {ReactComponent as Pokeball} from '../../assets/pokeball.svg';
export default function NavBar(){
    return(
        <nav className='navbar'>
            <div className='logo'>
                <Pokeball/>
                <p className='nav-title'>PokéTrade</p>
            </div>
            <div className='links'>
                <a href='' className='link'>Área de Troca</a>
                <a href='' className='link'>Histórico</a>
            </div>
        </nav>
    )
}