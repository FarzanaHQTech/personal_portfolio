import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with FARZANA AKTER was an absolute pleasure. As a programmer, she demonstrated exceptional technical skills, solving complex challenges with ease. What stood out the most was their ability to communicate clearly and collaborate effectively throughout the project. Not only did she meets all the deadlines, but they also ensured that the final product exceeded our expectations.",
    },
    {
      img: profilePic2,
      review:
        "Working with FARZANA AKTER was an absolute pleasure. As a programmer, she demonstrated exceptional technical skills, solving complex challenges with ease. What stood out the most was their ability to communicate clearly and collaborate effectively throughout the project. Not only did she meets all the deadlines, but she also ensured that the final product exceeded our expectations.",
    },
    {
      img: profilePic3,
      review:
        "Working with FARZANA AKTER was an absolute pleasure. As a programmer, she demonstrated exceptional technical skills, solving complex challenges with ease. What stood out the most was their ability to communicate clearly and collaborate effectively throughout the project. Not only did she meets all the deadlines, but she also ensured that the final product exceeded our expectations.",
    },
    {
      img: profilePic4,
      review:
        "Working with FARZANA AKTER was an absolute pleasure. As a programmer, she demonstrated exceptional technical skills, solving complex challenges with ease. What stood out the most was their ability to communicate clearly and collaborate effectively throughout the project. Not only did she meets all the deadlines, but they also ensured that the final product exceeded our expectations.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt={`Client ${index}`} />
              <span style={{ color: darkMode ? "white" : "" }}>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
