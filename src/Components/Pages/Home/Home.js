import { pink } from '@material-ui/core/colors'
import { CallReceived, CallToAction } from '@material-ui/icons'
import React from 'react'
import '../../../assets/css/Pages/Home/home.css';
import Banner from '../Home/Banner'
import Skills from '../Home/Skill'
import Footer from '../../../Components/Footer'
const style = {

}
function Home() {
    return (
        <div>
            <Banner />
            <Skills/>
        </div>

    )
}

export default Home
