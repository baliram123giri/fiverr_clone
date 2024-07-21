import React from 'react'
import About from './Component/About/About';
import Banner from './Component/Banner/Banner';
import Business from './Component/Business/Business';
import Fiverr from './Component/Fiverr/Fiverr';
import Freelance from './Component/Freelance/Freelance';
import Gaides from './Component/Guides/Gaides';
import Market from './Component/Market/Market';
import Services from './Component/Services/Services';
import Video from './Component/Video/Video';
const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Freelance />
            <Video />
            <Business />
            <About />
            <Market />
            <Gaides />
            <Fiverr />
        </div>
    )
}

export default Home