import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <nav>
            <div className='topnav'>
                <h1>Start Bootstrap</h1>
                <i class="fa-solid fa-bars"></i>
                <ul>
                    <Link className='topnavmenu' to='/'><a href='!#'>Home</a></Link>
                    <Link className='topnavmenu' to='/about'><a href='!#'>About</a></Link>
                    <Link className='topnavmenu' to='/Contact'><a href='!#'>Contact</a></Link>
                    <Link className='topnavmenu' to='/Pricing'><a href='!#'>Pricing</a></Link>
                    <Link className='topnavmenu' to='/FAQ'><a href='!#'>FAQ</a></Link>
                    <Link className='topnavmenu' to='/about'><a href='!#'>Blog <i class="fa-solid fa-caret-down"></i></a></Link>
                    <Link className='topnavmenu' to='/about'><a href='!#'>Portfolio <i class="fa-solid fa-caret-down"></i></a></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Footer