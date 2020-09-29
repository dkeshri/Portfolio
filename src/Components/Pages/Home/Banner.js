import React from 'react'
import { Button } from '../../Button'
import '../../../assets/css/Pages/Home/Banner.css'
import SocialMediaIcons from '../../SocialMediaIcons'
function Banner() {
    return (
        <div className="banner-container">
            <div class="content">
                <h1>Hi,</h1>
                <h1>I'm Deepak<span>keshri</span> !</h1>
                <span>Software Developer</span>
                <div className="banner-content-socialMedia">
                    <SocialMediaIcons />
                </div>
            </div>
            <div class="image-container">
                <div className="image"></div>
            </div>
        </div>
    )
}

export default Banner