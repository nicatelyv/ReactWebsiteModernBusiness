import React from 'react'
import './style.scss'

function HomeHeader() {
  return (
    <header>
        <div className='headertexts'>
            <h2>A Bootstrap 5 template for modern businesses</h2>
            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
            <div>
            <a href='!#'><button id='getstartedbutton'>Get Started</button></a>
            <a href='!#'><button id='learnmorebutton'>Learn More</button></a>
            </div>
        </div>
        <img alt='foto' src='https://dummyimage.com/600x400/343a40/6c757d'></img>
    </header>
  )
}

export default HomeHeader