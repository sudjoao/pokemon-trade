
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import StyledButton from '../../components/StyledButton';

import './styles.css';
export default function HomePage(){
    const navigate = useNavigate();
    return(
        <div className="home-container">
            <NavBar/>
            <section className='home-content'>
                <img className='main-image' src="https://switch-brasil.com/wp-content/uploads/2021/01/Pokemon-25-Scrn13012021-1.png"/>
                <p>Bem vindo ao PokéTrade, aqui você pode simular troca de pokémons entre 2 jogadores e saber se a mesma é justa ou não</p>
                <StyledButton label="Vamos lá" onClick={()=>{navigate('/trade')}}/>
            </section>
        </div>
        
    )
}