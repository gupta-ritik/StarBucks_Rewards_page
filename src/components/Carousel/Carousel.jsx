import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[85%] m-auto">
      <div className="mt-20 pt-15 pb-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className=" text-black rounded-xl border-4 border-indigo-500 shadow-lg cursor-pointer hover:translate-y-full">
              <img src={d.img} alt="" className="h-[300px] w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    img: `/images/1.jpg`,
  },
  {
    img: `/images/2.jpg`,
  },
  {
    img: `/images/3.jpg`,
  },
  {
    img: `/images/4.jpg`,
  },
  {
    img: `/images/5.jpg`,
  },
  {
    img: `/images/6.jpg`,
  },
  {
    img: `/images/7.jpg`,
  },
  {
    img: `/images/8.jpg`,
  },
  {
    img: `/images/9.jpg`,
  },
  {
    img: `/images/10.jpg`,
  },
  {
    img: `/images/11.jpg`,
  },
  {
    img: `/images/12.jpeg`,
  },
  {
    img: `/images/1.jpg`,
  },
  {
    img: `/images/2.jpg`,
  },
  {
    img: `/images/3.jpg`,
  },
  {
    img: `/images/4.jpg`,
  },
];

export default Carousel;
