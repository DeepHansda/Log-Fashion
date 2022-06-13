import React from "react";
import Footer from '../MainParts/Footer';
import Slider from '../SmallParts/Slider';
import TypeWrite from '../SmallParts/TypeWrite';

function Main({client}){
    return (
        <React.Fragment>
        <Slider />
        <TypeWrite/>
        <Footer client = {client}/>
        </React.Fragment>
    )
}

export default Main;