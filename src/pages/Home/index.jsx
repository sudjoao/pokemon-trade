
import React from 'react';
import NavBar from '../../components/Navbar';
import './styles.css';
export default function HomePage(){

    return(
        <div className="home-container">
            <NavBar/>
            <section className='home-content'>
                <img className='main-image' src="https://switch-brasil.com/wp-content/uploads/2021/01/Pokemon-25-Scrn13012021-1.png"/>
                <p>Bem vindo ao PokéTrade, aqui você pode simular troca de pokémons entre 2 jogadores e saber se a mesma é justa ou não</p>
                <button>Vamos lá</button>
            </section>
        </div>
        
    )
}