import React,{useState,useEffect} from "react";
import sliderData from "../../Data/sliderData";
import Slider from "react-slick";


function ImgSlider(){
    const [index, setIndex] = useState(0);
    const delay = 4000;

  useEffect(()=>{
      setTimeout(() =>setIndex((prevIndex) =>prevIndex === sliderData.length - 1 ? 0 : prevIndex +1),delay)
      return () => {};
  },[index])

    
    return(
        
        <div className="slideshow-container">

            <div className="mySlides fade">
                    <img src={sliderData[index].img} style ={{animationName:'fade'}} alt="slideImg" />
            </div>
    </div>


    )
}

export default ImgSlider;