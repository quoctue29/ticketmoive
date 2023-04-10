import React, { memo } from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import "./banner.css";
function Banner(props) {
  const { listBanner } = props;
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container className="Banner">
      <div className="bg-black">
        <Slider {...settings}>
          {listBanner.map((banner, i) => (
            <div key={i}>
              <div
                className="h-[700px] bg-bottom bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${banner.hinhAnh})` }}
              ></div>
            </div>
          ))}
          {/* <div className="hero-slide-item">
            <img src="../../../../banner/image/transformer-banner.jpg" alt />
            <div className="overlay" />
            <div className="hero-slide-item-content">
              <div className="item-content-wraper">
                <div className="item-content-title color-white top-down">
                  Black Panther
                </div>
                <div className="movie-infos top-down delay-2">
                  <div className="movie-info">
                    <i className="bx bxs-star" />
                    <span>9.5</span>
                  </div>
                  <div className="movie-info">
                    <i className="bx bxs-time" />
                    <span>120 mins</span>
                  </div>
                  <div className="movie-info">
                    <span>HD</span>
                  </div>
                  <div className="movie-info">
                    <span>16+</span>
                  </div>
                </div>
                <div className="item-content-description top-down delay-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  possimus eius. Deserunt non odit, cum vero reprehenderit
                  laudantium odio vitae autem quam, incidunt molestias ratione
                  mollitia accusantium, facere ab suscipit.
                </div>
                <div className="item-action top-down delay-6">
                  <a href="#" className="btn btn-hover">
                    <i className="bx bxs-right-arrow" />
                    <span>Watch now</span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </Container>
  );
}

export default memo(Banner);

export const Container = styled.div`
  &.Banner {
    .slick-prev {
      left: 10px;
      z-index: 1;
      width: initial;
      height: initial;
      &::before {
        font-size: 50px;
      }
    }
    .slick-next {
      right: 10px;
      width: initial;
      height: initial;
      &::before {
        font-size: 50px;
      }
    }
    .slick-dots {
      bottom: 10px;
      text-align: left;
      left: 10px;
      width: auto;
      button {
        &:before {
          color: white;
          font-size: 20px;
        }
      }
    }
    .slick-active {
      button {
        &:before {
          opacity: 1;
        }
      }
    }
  }
`;
