import React from 'react'
import './Portfolio.css'
// --swiper for slider\
import { Swiper,SwiperSlide } from 'swiper/react'
// Portfolio image 
import HRM from '../../img/hrm.png'
import Ecomus from '../../img/ecomus.png'
import Travell from "../../img/travell-bootstrap.png"
import WpCommerce from "../../img/wp_ecommerce.png"
import Amazon from "../../img/amazon-project.png"
import Garments from "../../img/garments.png";
import MusicApp from '../../img/musicapp.png' 
import 'swiper/css';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode; 
  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading  */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider  */}
        <Swiper spaceBetween={30} slidesPerView={3}
        grabCursor={true} className='portfolio-slider'>
            <SwiperSlide>
                <a href="https://farzanatech.com/hrm/"><img src={HRM} style={{height:"215px"}} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://wp.farzanatech.com/"> <img style={{height:"215px"}}  src={WpCommerce} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://farzanahqtech.github.io/amazon-javascirpt/"> <img style={{height:"215px"}}  src={Amazon} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://farzanatech.com/garments/public/"> <img style={{height:"215px"}}  src={Garments} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://farzanatech.com/ecomus/"> <img style={{height:"215px"}} src={Ecomus} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://farzanatech.com/Project-Bootstrapt/"><img src={Travell} style={{height:"215px"}} alt="" /></a>
            </SwiperSlide>
           
           
        </Swiper>
    </div>
  )
}

export default Portfolio
