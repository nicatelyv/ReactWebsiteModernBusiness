import React from 'react'
import './style.scss'

function AboutOurTeam() {
  return (
    <section className='ourteam'>
      <h2>Our team</h2>
      <p>Dedicated to quality and your success</p>
      <div className='teamUsers'>
        <div>
          <img alt='foto' src='https://dummyimage.com/150x150/ced4da/6c757d'/>
          <h5>Ibbie Eckart</h5>
          <p>Founder & CEO</p>
        </div>
        <div>
          <img alt='foto' src='https://dummyimage.com/150x150/ced4da/6c757d'/>
          <h5>Arden Vasek</h5>
          <p>CFO</p>
        </div>
        <div>
          <img alt='foto' src='https://dummyimage.com/150x150/ced4da/6c757d'/>
          <h5>Toribio Nerthus</h5>
          <p>Operations Manager</p>
        </div>
        <div>
          <img alt='foto' src='https://dummyimage.com/150x150/ced4da/6c757d'/>
          <h5>Malvina Cilla</h5>
          <p>CTO</p>
        </div>
      </div>
    </section>
  )
}

export default AboutOurTeam