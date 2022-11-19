import React from 'react'
import "./AstroService.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AstroSliderData } from './AstroSliderData';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",background: "black", borderRadius:"50%",padding:"3px"  }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius:"50%",padding:"3px" }}
        onClick={onClick}
      />
    );
  }
const AstroService = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div>
        <div className="container">
        <Slider {...settings}>
             {
               AstroSliderData.map((el)=>(
                <div className="slider_box">
                <div className="slider_img">
                 <img src={el.image} alt="" />
                </div>
                <div className="slider_heading">
                 <h2>{el.heading}</h2>
                </div>
                <div className="desc">
                 <p>{el.desc}</p>
                </div>

            </div>

               ))
             }
                       

                  
       
      </Slider>
           
        </div>
    </div>
  )
}

export default AstroService