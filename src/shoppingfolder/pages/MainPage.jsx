import React, { useState } from 'react' 
import Headers from '../components/Header'
import Banner from '../components/Banner';
import Banner2 from '../components/Banner2'
import Collections from '../components/Collections';
import Footer from '../components/Footer';
import WomanCollection from '../components/WomanCollection';
import { Gents, Ladies } from '../data';

const MainPage=()=>{
    //const [gentsFashion, setGentsFashion]=useState(Gents)
    //const [ladiesFashion, setLadiesFashion]=useState(Ladies)
    return(
        <div>
            <Headers/>
            <Banner/>
            <Banner2/>
            <Collections gentsFashion={Gents}/>
            <WomanCollection ladiesFashion={Ladies}/>
            <Footer/>
        </div>
    )
}
export default MainPage;