import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className="Header section_padding" id='home'>
      <div className="Header_content">
        <h1 className='gradient_text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasign. Not thoughts all exercise bessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. 
        </p>
        <div className="Header-content_input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="Header-content_people">
          <img src={people} alt='people' />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="Header_image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header