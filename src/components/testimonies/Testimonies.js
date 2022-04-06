import React from "react";
import "./testimonies.css";
import IMG1 from "../../assets/img/u1.jpg";
import IMG2 from "../../assets/img/u2.jpg";
import IMG3 from "../../assets/img/u3.jpg";
import IMG4 from "../../assets/img/u4.jpg";

const data = [
  {
    avatar: IMG1,
    name: "Lisa Smith",
    review:
      "Compellingly pontificate bleeding-edge outsourcing without functionalized technologies. Conveniently disseminate process-centric partnerships via best-of-breed alignments. Professionally negotiate enterprise-wide scenarios and market-driven.",
  },
  {
    avatar: IMG2,
    name: "John Paul",
    review:
      "Authoritatively scale interdependent mindshare after extensive mindshare. Authoritatively transition corporate scenarios for resource-leveling information. Professionally foster cost effective portals vis-a-vis.",
  },
  {
    avatar: IMG3,
    name: "Eric James",
    review:
      "Authoritatively transition corporate scenarios for resource-leveling information. Professionally foster cost effective portals vis-a-vis.",
  },
];

const review = data.map(({ avatar, name, review }, index) => {
  return (
    <div className="testimonial" key={index}>
      <div className="client__avatar">
        <img src={avatar} alt="" />
      </div>
      <h5 className="client__name">{name}</h5>
      <small className="client_review">{review}</small>
    </div>
  );
});

function Testimonies() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">{review}</div>
      {/* <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </section>
  );
}

export default Testimonies;
