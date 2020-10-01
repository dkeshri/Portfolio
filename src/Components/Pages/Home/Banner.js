import React from 'react'
import '../../../assets/css/Pages/Home/Banner.css'
import SocialMediaIcons from '../../SocialMediaIcons'
function Banner() {
    return (
        <div className="banner-container">
            <div class="content">
                <h1>Hi,</h1>
                <h1>I'm Deepak<span>keshri</span>!</h1>
                <span>Software Developer</span>
                <div className="banner-btn-container">
                    <div className="banner-content-socialMedia">
                        <SocialMediaIcons />
                    </div>
                    <div className="banner-btn">
                        <a className="download-cv-link" href="#">Download CV</a>
                    </div>
                </div>
            </div>
            <div class="image-container">
                <img src={require('../../../assets/img/dkeshri.png')} />
            </div>
        </div>
    )
}

export default Banner
