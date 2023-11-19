import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { useRef } from "react";

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex)
  const responsive = {
    0: { items: 1 },
    720: { items: 2.5 },
    1024: { items: 4.5 },
    1320: { items: 5.5 },

  };

  const carousel = useRef(null)

  const slidePrev = ()=> {
    setActiveIndex(activeIndex-1);
    carousel.current.slideTo(activeIndex-1);
  }
  const slideNext = ()=> {
    setActiveIndex(activeIndex+1);
    carousel.current.slideTo(activeIndex+1);
  }

  const syncActiveIndex = (event) => {
    const {item} = event;
    setActiveIndex(item);
    console.log(activeIndex)
  }
  
  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative px-3 lg:px-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          ref={(el) => (carousel.current = el)}
        />

        {/* next button */}
        {activeIndex !== items.length-4 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "-1rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
        
       {/* prev button */}
       {activeIndex !== 0 && <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
