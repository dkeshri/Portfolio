import { pink } from '@material-ui/core/colors'
import { CallReceived, CallToAction } from '@material-ui/icons'
import React from 'react'
import '../../../assets/css/Pages/Home/home.css';
import Banner from '../Home/Banner'
import Footer from '../../../Components/Footer'
const style = {

}
function Home() {
    return (
        <div>
            <Banner />
            <div className="test">
                <h1>Skill section </h1>
            </div>
            <Footer />
        </div>

    )
}

export default Home
