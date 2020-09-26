import { pink } from '@material-ui/core/colors'
import { CallReceived, CallToAction } from '@material-ui/icons'
import React from 'react'
import '../../assets/css/Pages/Home/home.css';
const style = {

}
function Home() {
    return (
        <>
            <div className="home-container">
                <div className="my-info">
                    <h1 style={{ textDecoration: 'underline' }}>Welcome!</h1>
                    <span>I am a Software Developer</span>
                    <span>Dkeshri!</span>
                </div>

            </div>
            <div style={{ height: '100vh', background: 'white', color: 'black' }}>
                Home Pages
        </div>
        </>
    )
}

export default Home
