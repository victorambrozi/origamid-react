import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <nav>
                <div className='container-header'>
                    <img src='' alt='Logo'/>

                    <nav>
                        <ul className='nav'>
                            <li key='home'>Home</li>
                            <li key='sobre'>Sobre</li>
                            <li key='contato'>Contato</li>
                            <li key='login'>Login</li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>
    )
}
