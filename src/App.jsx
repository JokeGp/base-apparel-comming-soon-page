import React, { useState } from 'react';
import baseApparel from './images/logo.svg';
import heroMobile from './images/hero-mobile.jpg';
import heroDesktop from './images/hero-desktop.jpg';
import errorImage from './images/icon-error.svg';
import arrow from './images/icon-arrow.svg';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const isEmail = (input) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(input);
  };

  const validate = (e) => {
    e.preventDefault();
    setIsError(!isEmail(email));
  };

  return (
    <>
      <main>
        <section className="navBar">
          <img src={baseApparel} alt="Icon-base-apparel" className='logo'/>
        </section>
        <section className='coverFoto'>
          <img src={heroDesktop} alt="woman-picture" className='heroDesktop' />
          <img src={heroMobile} alt="woman-picture" className='heroMobile'/>
        </section>
        <section className="info">
          <h1 className='title1'>We're</h1>
          <h1 className='title2'>coming soon</h1>
          <p className='content'>
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
        </section>

        <form onSubmit={validate}>
          <section className='form'>
            <input 
              type="email" 
              name='email' 
              id='email' 
              placeholder='Email Address' 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value.trim())}
            />
            <label htmlFor="email" style={{ display: isError ? 'block' : 'none' }}>
              <img src={isError ? errorImage : undefined} alt="" />
            </label>
            <button type='submit'>
              <img src={arrow} alt="" />
            </button>
          </section>
          <p className="error" style={{ display: isError ? 'block' : 'none' }}>
            Please provide a Valid Email...
          </p>
        </form>
      </main>
    </>
  );
}

export default App;
