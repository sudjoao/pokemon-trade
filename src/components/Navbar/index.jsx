import React from 'react';
import './styles.css';
import {ReactComponent as Pokeball} from '../../assets/pokeball.svg';
import { Link } from 'react-router-dom';
export default function NavBar(){
    return(
        <nav className='navbar'>
            <Link to='/' className='logo'>
                <Pokeball/>
                <p className='nav-title'>PokéTrade</p>
            </Link>
            <div className='links'>
                <Link to='/trade' className='link'>Área de Troca</Link>
                <Link to='/history' className='link'>Histórico</Link>
            </div>
        </nav>
    )
}