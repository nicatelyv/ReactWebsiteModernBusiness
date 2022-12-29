import React from 'react';
import './style.scss';

function FromOurBlog() {
  return (
    <section>
      <div className='container'>
        <h2>From our blog</h2>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</h3>
        <div className='cards'>
          <div>
            <img alt='foto' src='https://dummyimage.com/600x350/ced4da/6c757d'></img>
            <div className='card_body'>
              <div><p>News</p></div>
              <h3>Blog Post Title</h3>
              <p>Some quick example text to build on the card title and make up the bulk of the card`s content.</p>
            </div>
            <div className='carduser'>
              <img alt='foto' src='https://dummyimage.com/40x40/ced4da/6c757d'></img>
              <div>
                <h3>Kelly Rowan</h3>
                <p>March 12, 2022 · 6 min read</p>
              </div>
            </div>
          </div>

          <div>
            <img alt='foto' src='https://dummyimage.com/600x350/ced4da/6c757d'></img>
            <div className='card_body'>
              <div><p>Media</p></div>
              <h3>Another blog post title</h3>
              <p>This text is a bit longer to illustrate the adaptive height of each card.Some quick example text to build on the card title and make up the bulk of the card`s content.</p>
            </div>
            <div className='carduser'>
              <img alt='foto' src='https://dummyimage.com/40x40/ced4da/6c757d'></img>
              <div>
                <h3>Josiah Barclay</h3>
                <p>March 23, 2022 · 4 min read</p>
              </div>
            </div>
          </div>

          <div>
            <img alt='foto' src='https://dummyimage.com/600x350/ced4da/6c757d'></img>
            <div className='card_body'>
              <div><p>News</p></div>
              <h3>The last blog post title is a little bit longer than the others</h3>
              <p>Some more quick example text to build on the card title and make up the bulk of the card`s content.</p>
            </div>
            <div className='carduser'>
              <img alt='foto' src='https://dummyimage.com/40x40/ced4da/6c757d'></img>
              <div>
                <h3>Evelyn Martinez</h3>
                <p>April 2, 2022 · 10 min read</p>
              </div>
            </div>
          </div>
        </div>
        <div className='delivery'>
          <div>
          <div id='newproduct'>
            <h3>New products, delivered to you.</h3>
            <p>Sign up for our newsletter for the latest updates.</p>
          </div>
          <div id='input'>
            <div>
              <input placeholder='   Email address...'/>
              <a href='!#'><button>Sign up</button></a>
            </div>
            <p>We care about privacy, and will never share your data.</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FromOurBlog