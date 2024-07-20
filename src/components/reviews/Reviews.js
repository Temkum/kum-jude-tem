import React from 'react';
import './reviews.css';
import IMG1 from '../../assets/img/u1.jpg';
import IMG2 from '../../assets/img/u2.jpg';
// import IMG3 from "../../assets/img/u3.jpg";
// import IMG4 from "../../assets/img/u4.jpg";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: IMG1,
    name: 'Gobi Dasu',
    company: 'Learning Dollars Talent',
    review: 'Did good work on linters, persisted through struggles.',
  },
  {
    avatar: IMG2,
    name: 'Matt Hanson',
    company: 'Adava',
    review: 'Did great work.',
  },
];

function Reviews() {
  return (
    <section id="reviews">
      <div className="reviews-container">
        <h6>What clients say</h6>
        <h2 className="reviews__title">Reviews</h2>
        <Swiper
          className="container reviews__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar, name, review, company }, index) => {
            return (
              <SwiperSlide className="review" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt="Author" />
                </div>
                <h5 className="client__name">{name}</h5>
                <h6
                  className="client__company"
                  style={{ textTransform: 'uppercase' }}
                >
                  {company}
                </h6>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
