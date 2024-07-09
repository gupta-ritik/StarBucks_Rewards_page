import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="w-[85%] m-auto">
      <div className="mt-20 pt-10 pb-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className=" text-black rounded-xl border-4 border-indigo-500 shadow-lg">
              <img src={d.img} alt="" className="h-[225px] w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
  {
    img: `/students/12.jpeg`,
  },
];

export default Carousel;
