import React from 'react';
import '../assets/css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of services</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
      </div>
      <section className='social-media'>
        <div>dkeshridev@gmail.com</div>
        <div>Copyright © Deepak Keshri 2020.</div>
        <div className='social-icons'>
          <Link
            className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i className='fa fa-facebook-f' />
          </Link>
          <a
            className='social-icon-link instagram'
            href='https://www.instagram.com/deepakkeshri0613/'
            target='_blank'
            aria-label='Instagram'
          >
            <i className='fa fa-instagram' />
          </a>
          <a
            className='social-icon-link youtube'
            href='https://github.com/dkeshri'
            target='_blank'
            aria-label='GitHub'
          >
            <i className='fa fa-github-square' />
          </a>
          <a
            className='social-icon-link twitter'
            href='https://twitter.com/DeepakK18204431'
            target='_blank'
            aria-label='Twitter'
          >
            <i className='fa fa-twitter' />
          </a>
          <a
            className='social-icon-link twitter'
            href='https://in.linkedin.com/in/dkeshri'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fa fa-linkedin' />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
