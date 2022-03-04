import React from "react";
import Slider from "react-slick";
import './css/slider.css'

function Sliderr() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
        <img
            style={{ height: "380px" }}
            src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-nam-dep_113857194.jpg"
            className="w-100 rounded"
          />
         
        </div>
        <div>
          <img
            style={{ height: "380px" }}
            src="https://cdn.denimandcloth.com.au/content/uploads/2014/11/24131625/mens.banner.sale_.jpg"
            className="w-100 rounded"
          />
        </div>
        <div>
          <img
            style={{ height: "380px" }}
            src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-giam-gia_113856960.jpg"
            className="w-100 rounded"
          />
        </div>
        <div>
          <img
            style={{ height: "380px" }}
            src="https://cdn.shopify.com/s/files/1/0066/2916/3081/files/LEATHER-BANNER_2048x2048_71a2e297-9ca1-441c-a83c-a24f42d89549_2048x2048.jpg?v=1597576359"
            className="w-100 rounded"
          />
        </div>
        <div>
          <img
            style={{ height: "380px" }}
            src="//theme.hstatic.net/200000182297/1000658038/14/ms_banner_img1.jpg?v=1798"
            className="w-100 rounded"
          />
        </div>
        <div>
        <img
            style={{ height: "380px" }}
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-fashion-sale-banner-template-design-cc34c2027d0bb5ccc2ff90231abaa242_screen.jpg?ts=1613395464"
            className="w-100 rounded"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Sliderr;
