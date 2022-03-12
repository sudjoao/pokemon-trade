import React from 'react';
import './styles.css';
import {ReactComponent as Pokeball} from '../../assets/pokeball.svg';
import { Link } from 'react-router-dom';
export default function NavBar(){
    return(
        <nav className='navbar'>
            <div className='logo'>
                <Pokeball/>
                <p className='nav-title'>PokéTrade</p>
            </div>
            <div className='links'>
                <Link to='/' className='link'>Área de Troca</Link>
                <Link to='/history' className='link'>Histórico</Link>
            </div>
        </nav>
    )
}