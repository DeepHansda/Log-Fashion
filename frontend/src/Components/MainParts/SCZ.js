import React from 'react';
import Slider from "react-slick";
import BigCard from "../SmallParts/BigCard"

function SCZ({item,onAdd}){
    const {categoryName,productList,slideList} = item;
    const settings = {
        swipeToSlide: true,
        button: true,
        className: "center",
        centerMode: true,
        responsive: [
          {
            breakpoint:2000,
            settings:{
              slidesToShow: 8,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
              centerPadding: "10px",

            }},
          
            {
              breakpoint:1440,
              settings:{
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true,
                centerPadding: "5px",

              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,               
                centerPadding: "50px",
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerPadding: "95px",

              },              
            },
            {
              breakpoint: 390,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "75px",

              }
            }
          ]

    }
    return(
      <>
      <div className="gap"></div>
        <div className="small-products-container">
        <h1 id="start-header">{categoryName}</h1>
        <Slider {...settings}>

        { slideList.map((item) =>{
            return (
                    <BigCard item={item} onAdd={onAdd} key={item._id}/>
            );
        })}

        </Slider>
    </div>
    </>
    )
}

export default SCZ;