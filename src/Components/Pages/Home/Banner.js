import React from 'react'
import { Button } from '../../Button'
import '../../../assets/css/Pages/Home/Banner.css'
function Banner() {
    return (
        <div className="banner-container">
            {/* <video src={require('../../../assets/videos/Banner.mp4')} autoPlay loop muted/> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'

                >
                    WATCH TRAILER <i className='fa fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Banner
